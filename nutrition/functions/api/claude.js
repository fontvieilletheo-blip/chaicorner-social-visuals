// Relais serveur vers l'API Claude pour le site Agni (Cloudflare Pages Functions).
// Variables à définir dans Cloudflare Pages > Settings > Environment variables :
//   ANTHROPIC_API_KEY (secret, obligatoire)  — clé de l'API Claude, jamais envoyée au navigateur
//   APP_CODE          (secret, conseillé)    — code d'accès que chaque testeur saisit dans Profil
//   CLAUDE_MODEL      (facultatif)           — modèle à utiliser, par défaut claude-sonnet-5-5
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

export async function onRequestGet({ env }) {
  return json({ ok: !!env.ANTHROPIC_API_KEY, needsCode: !!env.APP_CODE });
}

export async function onRequestPost({ request, env }) {
  if (!env.ANTHROPIC_API_KEY) return json({ error: "not_configured" }, 503);
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: "forbidden" }, 403);
  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }
  if (env.APP_CODE && body.code !== env.APP_CODE) return json({ error: "bad_code" }, 401);
  const prompt = String(body.prompt || "");
  if (!prompt || prompt.length > 20000) return json({ error: "bad_request" }, 400);
  const content = [];
  if (body.image && body.image.data) {
    if (!/^image\/(jpeg|png|webp|gif)$/.test(body.image.media_type || "") || body.image.data.length > 7_000_000) return json({ error: "bad_image" }, 400);
    content.push({ type: "image", source: { type: "base64", media_type: body.image.media_type, data: body.image.data } });
  }
  content.push({ type: "text", text: prompt });
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: env.CLAUDE_MODEL || "claude-sonnet-5-5", max_tokens: 2000, messages: [{ role: "user", content }] }),
  });
  if (r.status === 429 || r.status === 529) return json({ error: "rate_limited" }, 429);
  if (!r.ok) return json({ error: "upstream", status: r.status }, 502);
  const data = await r.json();
  const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  return json({ text });
}

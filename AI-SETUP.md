# Turning on real AI answers (optional)

The "Ask AI about Abdullah" widget works out of the box with zero setup — it answers
from a built-in local knowledge base (same content as the FAQ section). To upgrade it
to real, generated answers powered by Claude:

1. Deploy this site to Netlify (drag-and-drop or connect the GitHub repo). The
   `netlify.toml` and `netlify/functions/ask-ai.js` files are already wired up.
2. In the Netlify dashboard: **Site settings → Environment variables** → add
   `ANTHROPIC_API_KEY` with a key from https://console.anthropic.com.
3. Redeploy the site. The widget automatically detects the working backend and
   switches to live AI answers — no frontend changes needed.
4. If the function isn't deployed or the key isn't set, the widget silently falls
   back to the local knowledge base, so the site never breaks.

To keep answers accurate, edit the `SYSTEM_PROMPT` facts in
`netlify/functions/ask-ai.js` (and the matching `knowledgeBase` array in
`script.js`) whenever new projects or details are added to the site.

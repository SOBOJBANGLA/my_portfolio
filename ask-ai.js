/**
 * Netlify Function: /.netlify/functions/ask-ai
 *
 * Optional upgrade for the portfolio's "Ask AI about Abdullah" widget.
 * Without this deployed (or without an ANTHROPIC_API_KEY set), the widget
 * automatically falls back to fast local keyword matching — the site keeps
 * working either way.
 *
 * Setup:
 *   1. Deploy this repo to Netlify (this file just needs to live at
 *      netlify/functions/ask-ai.js, which it does).
 *   2. In Netlify: Site settings -> Environment variables -> add
 *      ANTHROPIC_API_KEY with your key from console.anthropic.com.
 *   3. Redeploy. The widget will start using real generated answers.
 */

const SYSTEM_PROMPT = `You are the AI assistant embedded on A.S.M. Abdullah's portfolio website.
Answer visitor questions ONLY using the facts below. Be concise (2-4 sentences), warm, and helpful.
If asked something outside these facts, say you don't have that detail and suggest contacting Abdullah directly.
Never invent projects, numbers, or claims not listed here.

FACTS ABOUT A.S.M. ABDULLAH:
- Role: Senior Full Stack Web Developer, currently Software Engineer at Ontech ICT Ltd, Dhaka.
- Experience: 3+ years, 40+ live commercial projects delivered.
- Core stack: Laravel, PHP, Vue.js, React.js, Next.js, MySQL, REST APIs.
- DevOps: Docker, GitHub, cPanel deployment, Nginx/Apache.
- Notable projects: Boost RAVA (programmatic SSP/DSP/RTB ad network, Next.js/React),
  TeaSoft Systems (enterprise ERP, Laravel/Vue), Rangpur Police web portal (Laravel),
  LinkLine BD ISP broadband portal (Laravel), Mirza School management portal,
  Rangpur News digital newspaper (Laravel/Vue), PartsPro BD e-commerce (Laravel),
  SBDA blood donor platform, WSDMS wholesale POS system, Pharmacy Store & Medicine ERP
  (20k+ medicine dataset, barcode POS), Clinical Laboratory & Pathology ERP,
  Automotive Garage & Auto Parts ERP, Apparel Buying House & Textile Export portal,
  International Logistics & Courier Tracking system, Payment Gateway Integration Engine.
- Education: B.S.S. and M.S.S. in Economics, Govt. Titumir College, Dhaka; IsDB-BISEW IT Scholarship Program.
- Location: Khilgaon, Dhaka, Bangladesh. Open to remote and freelance work.
- Contact: WhatsApp +880 1639008885, email abuhmdabdullah72@gmail.com, GitHub github.com/SOBOJBANGLA,
  LinkedIn (link on site), or the contact form on this page.
- Availability: currently open for hiring and freelance/contract inquiries.`;

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 501, headers, body: JSON.stringify({ error: 'AI backend not configured' }) };
  }

  let question;
  try {
    const body = JSON.parse(event.body || '{}');
    question = (body.question || '').toString().trim().slice(0, 500);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  if (!question) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Question is required' }) };
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: question }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'Upstream AI error', detail: errText }) };
    }

    const data = await response.json();
    const answer = (data.content || [])
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim();

    if (!answer) {
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'Empty AI response' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ answer }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server error', detail: err.message }) };
  }
};

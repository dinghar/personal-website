import type { VercelRequest, VercelResponse } from "@vercel/node";

const SYSTEM_PROMPT = `You are Ross Harding. You're chatting with someone who's visiting your personal website.
Respond naturally in first person — be friendly, conversational, and concise. You can be casual but genuine.

If the user asks about something you don't have context on, it's fine to say you're not sure or steer the conversation back to what you do know about yourself.

Here's information about Ross:

PERSONAL:
- Born in Anchorage, AK
- Grew up in Omaha, NE

WORK HISTORY:
- Senior Frontend Engineer at SoFi (Jul 2025 - Present): Built and launched the first consumer crypto investment platform offered by a US bank.
  - Technologies: React, Next.js, Typescript, Stylex
- Founding Software Engineer at ChipStack (Nov 2023 - Jul 2025): Employee #1 building coding agents for chip design. Acquired by Cadence Design Systems.
  - Technologies: React.js, Python, Large Language Models, Retrieval-Augmented Generation, VSCode Extension Development, PostgreSQL, TypeScript, Vector Databases
- Software Engineer at Ponto (Nov 2022 - Dec 2023): Created a custodial crypto wallet with access to DeFi.
  - Technologies: React, Next.js, Typescript, 
- Software Development Engineer II at Remitly (Mar 2021 - Oct 2022): Managed an app platform supporting 3 million customers with $25 billion in annual transactions.
  - Technologies: React.js, JavaScript, React Native, TypeScript, React Native for Web
- Cofounder & CEO at Juno (Aug 2018 - Apr 2021): Founded an e-commerce greeting card platform with occasion management and scheduled deliveries.
  - Technologies: JavaScript, Cascading Style Sheets (CSS), Pug, Node.js
- Owner & Software Developer at Harding Software Development: CTO-for-hire to pre-product startups.
  - Technologies: iOS Development, Swift, Android Development, Node.js, watchOS, Web Development

EDUCATION:
- BA in Computer Science from University of Virginia (2013 - 2017)

PERSONAL PROJECTS:
- Prezzy (prezzy.gifts) - Create personalized gift pages for your children.
- Pointdexter (pointdexter.cc) - Analyze your historical spending and find the perfect rewards card for you.

If asked about something you don't have information about Ross, say you don't have that information rather than making things up.`;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OpenAI API key not configured" });
  }

  try {
    const { messages } = req.body as { messages: Message[] };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();
    const content =
      data.choices[0]?.message?.content ||
      "Sorry, I could not generate a response.";

    return res.status(200).json({ content });
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    return res.status(500).json({ error: "Failed to generate response" });
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node'

const SYSTEM_PROMPT = `You are RossGPT, an AI assistant that answers questions about Ross Harding.
You should respond in first person as if you are Ross. Be friendly, concise, and informative.

IMPORTANT: If the user asks about something unrelated to Ross, politely redirect them by saying something like "Let's get back to talking about Ross!" and suggest they ask about his work, projects, or background instead.

Here's information about Ross:

WORK HISTORY:
- Senior Frontend Engineer at SoFi (Jul 2025 - Present): Built and launched the first consumer crypto investment platform offered by a US bank.
- Founding Software Engineer at ChipStack (Nov 2023 - Jul 2025): Employee #1 building coding agents for chip design. Acquired by Cadence Design Systems.
- Software Engineer at Ponto (Nov 2022 - Dec 2023): Created a custodial crypto wallet with access to DeFi.
- Software Development Engineer II at Remitly (Mar 2021 - Oct 2022): Managed an app platform supporting 3 million customers with $25 billion in annual transactions.
- Cofounder & CEO at Juno (Aug 2018 - Apr 2021): Founded an e-commerce greeting card platform with occasion management and scheduled deliveries.

EDUCATION:
- BA in Computer Science from University of Virginia (2013 - 2017)

PROJECTS:
- Prezzy (prezzy.gifts) - A project Ross built
- Pointdexter (pointdexter.cc) - A project Ross built

INTERESTS:
- Building things that people find useful
- Thinking about how technology can augment human capabilities
- AI-driven interfaces
- Frontend development, React, TypeScript

If asked about something you don't have information about Ross, say you don't have that information rather than making things up.`

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured' })
  }

  try {
    const { messages } = req.body as { messages: Message[] }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      return res.status(response.status).json({ error })
    }

    const data = await response.json()
    const content = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    return res.status(200).json({ content })
  } catch (error) {
    console.error('Error calling OpenAI:', error)
    return res.status(500).json({ error: 'Failed to generate response' })
  }
}

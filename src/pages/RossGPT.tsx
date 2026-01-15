import { useState, FormEvent } from 'react'
import { Layout } from '../components/Layout'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function RossGPT() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage: Message = { role: 'assistant', content: data.content }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setError('Failed to get response. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout title="RossGPT">
      <p>
        Ask me anything about Ross. This chat interface uses AI to answer questions
        about his background, interests, and work.
      </p>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.length === 0 && (
            <p style={{ color: '#666' }}>No messages yet. Ask a question to get started!</p>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message chat-message-${message.role}`}
            >
              <strong>{message.role === 'user' ? 'You' : 'RossGPT'}:</strong>{' '}
              {message.content}
            </div>
          ))}
          {isLoading && (
            <div className="chat-message chat-message-assistant">
              <em>Thinking...</em>
            </div>
          )}
          {error && (
            <div className="chat-message" style={{ color: '#c00' }}>
              {error}
            </div>
          )}
        </div>

        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about Ross..."
            disabled={isLoading}
          />
          <button type="submit" className="chat-submit" disabled={isLoading}>
            Send
          </button>
        </form>
      </div>
    </Layout>
  )
}

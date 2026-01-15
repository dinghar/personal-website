import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function Home() {
  return (
    <Layout title="Ross Harding">
      <p>
        Hi, I'm Ross. I'm a software engineer interested in building things that people find useful.
        I like thinking about how technology can augment human capabilities.
      </p>

      <h2>Pages</h2>
      <ul>
        <li>
          <Link to="/rossgpt">RossGPT</Link> - Ask questions about me
        </li>
        <li>
          <Link to="/links">Links</Link> - Things I like and things I've made
        </li>
        <li>
          <Link to="/resume">Resume</Link> - My work history
        </li>
      </ul>
    </Layout>
  )
}

import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function Home() {
  return (
    <Layout title="Welcome">
      <p>
        I'm Ross. I code.
      </p>

      <h2>Pages</h2>
      <ul>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/rossgpt">RossGPT</Link>
        </li>
        <li>
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </Layout>
  )
}

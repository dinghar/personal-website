import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function Home() {
  return (
    <Layout title="Welcome">
      <p>
        I'm Ross. I make stuff.
      </p>

      <h2>Pages</h2>
      <ul>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/links">Things I've Made</Link>
        </li>
        <li>
          <Link to="/writing">Writing</Link>
        </li>
      </ul>
    </Layout>
  )
}

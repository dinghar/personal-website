import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function Writing() {
  return (
    <Layout title="Writing">
      <ul>
        <li>
          <Link to="/writing/open-source-future">All New Software Will Be Open Source</Link>
          {' '}- February 2026
        </li>
        <li>
          <Link to="/writing/llm-incumbent-software">Will LLMs Lock In Incumbent Software?</Link>
          {' '}- April 2025
        </li>
        <li>
          <Link to="/writing/zero-to-one-engineering">Zero-to-One Engineering</Link>
          {' '}- December 2024
        </li>
        <li>
          <Link to="/writing/llm-api-proposal">LLM-Based API Proposal</Link>
          {' '}- June 2024
        </li>
      </ul>
    </Layout>
  )
}

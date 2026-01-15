import { Layout } from '../components/Layout'

export function Links() {
  return (
    <Layout title="Links">
      <h2>Things I like</h2>
      <ul>
        <li>
          <a href="https://stratechery.com" target="_blank" rel="noopener noreferrer">
            Stratechery
          </a>{' '}
          - Ben Thompson's analysis of tech strategy
        </li>
        <li>
          <a href="https://dinghar.com" target="_blank" rel="noopener noreferrer">
            dinghar.com
          </a>
        </li>
      </ul>

      <h2>Things I've made</h2>
      <ul>
        <li>
          <a href="https://prezzy.gifts" target="_blank" rel="noopener noreferrer">
            Prezzy
          </a>
        </li>
        <li>
          <a href="https://pointdexter.cc" target="_blank" rel="noopener noreferrer">
            pointdexter.cc
          </a>
        </li>
      </ul>
    </Layout>
  )
}

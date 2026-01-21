import { Layout } from '../../components/Layout'

export function LlmIncumbentSoftware() {
  return (
    <Layout title="Will LLMs Lock In Incumbent Software?">
      <p><em>April 17, 2025</em></p>

      <p>
        Could LLMs slow down the speed at which new software tools get adopted? In the world of
        software engineering, there's a constant stream of novel tools. There's always a new testing
        framework or React persistence library or what have you. Many software engineers seem
        predisposed to experimentation and like to test out new approaches and tools to find a better
        solution or just to see how they are to use. But if more of our software decisions are made
        by LLMs than humans, will we lose this? LLMs are less likely to suggest new approaches.
        They're also prone to knowledge cutoff, meaning they won't even be aware (except through
        external tool use) of the latest trends in the software world. Could this result in our
        tooling converging into a subset of what exists today? Why make a new frontend framework
        when LLMs are really good at React and you don't need to understand the nuances of React to use it.
      </p>

      <p>
        Has this happened before? Maybe this always happens when a new technology comes in as an
        abstraction layer above the current technology.
      </p>
    </Layout>
  )
}

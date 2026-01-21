import { Layout } from '../../components/Layout'

export function ZeroToOneEngineering() {
  return (
    <Layout title="Zero-to-One Engineering">
      <p><em>December 6, 2024</em></p>

      <p>
        In the scope of this document, <strong>zero-to-one engineering</strong> refers to engineering
        that is done in parallel with product discovery.
      </p>

      <p>
        Building zero-to-one tends to have entirely different requirements and considerations than
        building at scale. Building for scale in this early phase can be an enormous distraction.
        If zero-to-one engineering is done well, bottlenecks that occur later due to scale can be
        handled effectively.
      </p>

      <p>Below is a list of principles or frameworks that I've found helpful when building zero-to-one.</p>

      <ul>
        <li>
          <strong>You're building the wrong thing</strong>
          <br />
          Assume that what you're building isn't what the customer wants. Your job is to figure out
          why your product is wrong, and fix it.
        </li>
        <li>
          <strong>The feedback/iteration loop is key</strong>
          <br />
          Given the assumption that your product is wrong, the solution is a semi-random walk in
          the direction of their feedback. Practically, this means the build → deploy → feedback → build
          loop. Wherever possible, accelerate this loop.
        </li>
        <li>
          <strong>Build for small scale</strong>
          <br />
          Building for scale can be a distraction and it can unnecessarily slow the product building
          loop. Build small.
        </li>
        <li>
          <strong>Build for replacement</strong>
          <br />
          Assume that everything you build will need to be replaced. Clear interfaces and boundaries
          will save you future headaches.
        </li>
        <li>
          <strong>Impose constraints</strong>
          <br />
          Limit the project scope wherever possible. If you don't need to support an OS, browser,
          etc. then don't. If you can get away with one supported file type, do it.
        </li>
        <li>
          <strong>Buy don't build</strong>
          <br />
          Third-party software amortizes the cost over all of their customers. Don't spend a week
          building something you can pay $100/month for.
        </li>
      </ul>
    </Layout>
  )
}

import { Layout } from '../../components/Layout'

export function OpenSourceFuture() {
  return (
    <Layout title="All New Software Will Be Open Source">
      <p><em>February 1, 2026</em></p>

      <p>
        I'm fully convinced that in the future all new software will be open source. Given the current
        state of software engineering and what seems likely ahead, there are and will continue to be far
        more upsides than downsides. Let me explain.
      </p>

      <h2>Code as a moat</h2>

      <p>
        In the past, open sourcing your product generally made no sense given that the resources invested
        in creating the software was a significant moat. Building software took a lot of time and money,
        thus having your own code differentiated you from would-be competitors. This is no longer true.
        18 months ago I had an idea for a tool I wanted to create. Given the complexity of the task, I
        shelved it. Last week with Claude Code I built the entire product. I ran into usage limits a few
        times but would just have it pick up where it left off once limits reset. In a few sessions, I
        had a fully working tool. But I decided I wanted to take a different approach so I threw the
        whole thing away and started over. The new zero-cost nature of software means that any tool can
        be duplicated on a whim. Proprietary code is no longer a thing.
      </p>

      <h2>Community involvement</h2>

      <p>
        If your code is no longer private, then you can take advantage of the greatest feature of open
        source software: community involvement. People are free to submit bug fixes and features to your
        codebase, allowing you to offload some of the remaining human work involved in managing a
        product. But even this undersells this benefit. As agents (not just for coding) become
        ubiquitous, the number of community contributions will only rise. Say I'm a non-engineer who is
        using a product. I notice that there's a simple UI issue. I could tell my Clawdbot or other
        agent about the problem. In response it spins up a VM, pulls the repo for that project, tests a
        fix, and submits it. The pace of community contributions will only increase.
      </p>

      <h2>Security</h2>

      <p>
        This is where I'll do some extrapolation. These days open sourcing your software can lend
        credibility to your product's security as the community can now pick through the code and surface
        problems. In the future I believe this work will be done by agents, and it will be the only way
        to truly feel confident about the security of code due to the fact that agents will be producing
        far more code than humans can review. Code review has become the new software engineering
        bottleneck, so it feels only natural that this is the part that will be made public and open
        source to provide guarantees about code quality. If I'm generating massive amounts of code (all
        public) and I have a swarm of agents testing and analyzing my code (all public), then I can
        maintain both velocity and integrity, all with the public's trust.
      </p>

      <h2>In summary</h2>

      <p>
        Code is no longer a moat.<br />
        Your users will improve your product.<br />
        The future of building will be agents verifying agent-produced artifacts.
      </p>
    </Layout>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { RossGPT } from './pages/RossGPT'
import { Links } from './pages/Links'
import { Resume } from './pages/Resume'
import { Writing } from './pages/Writing'
import { LlmIncumbentSoftware } from './pages/writing/LlmIncumbentSoftware'
import { ZeroToOneEngineering } from './pages/writing/ZeroToOneEngineering'
import { LlmApiProposal } from './pages/writing/LlmApiProposal'
import { OpenSourceFuture } from './pages/writing/OpenSourceFuture'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rossgpt" element={<RossGPT />} />
        <Route path="/links" element={<Links />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/open-source-future" element={<OpenSourceFuture />} />
        <Route path="/writing/llm-incumbent-software" element={<LlmIncumbentSoftware />} />
        <Route path="/writing/zero-to-one-engineering" element={<ZeroToOneEngineering />} />
        <Route path="/writing/llm-api-proposal" element={<LlmApiProposal />} />
      </Routes>
    </BrowserRouter>
  )
}

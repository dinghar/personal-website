import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { RossGPT } from './pages/RossGPT'
import { Links } from './pages/Links'
import { Resume } from './pages/Resume'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rossgpt" element={<RossGPT />} />
        <Route path="/links" element={<Links />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

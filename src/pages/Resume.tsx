import Markdown from 'react-markdown'
import { Layout } from '../components/Layout'

const resumeContent = `
## Work History

### SoFi
**Senior Frontend Engineer** | Jul 2025 - Present

Built and launched the first consumer crypto investment platform offered by a US bank.

---

### ChipStack
**Founding Software Engineer** | Nov 2023 - Jul 2025

Employee #1 building coding agents for chip design. Acquired by Cadence Design Systems.

---

### Ponto
**Software Engineer** | Nov 2022 - Dec 2023

Created a custodial crypto wallet with access to DeFi.

---

### Remitly
**Software Development Engineer II** | Mar 2021 - Oct 2022

Managed an app platform supporting 3 million customers with $25 billion in annual transactions.

---

### Juno
**Cofounder & CEO** | Aug 2018 - Apr 2021

Founded an e-commerce greeting card platform with occasion management and scheduled deliveries.

---

## Education

### University of Virginia
**BA in Computer Science** | 2013 - 2017
`

export function Resume() {
  return (
    <Layout title="Resume">
      <Markdown>{resumeContent}</Markdown>
    </Layout>
  )
}

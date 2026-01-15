import { ReactNode } from 'react'
import { Header } from './Header'

interface LayoutProps {
  title: string
  githubUrl?: string
  children: ReactNode
}

export function Layout({ title, githubUrl, children }: LayoutProps) {
  return (
    <div className="container">
      <Header title={title} githubUrl={githubUrl} />
      <main>{children}</main>
    </div>
  )
}

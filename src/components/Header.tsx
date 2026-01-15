import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  title: string
  githubUrl?: string
}

export function Header({ title, githubUrl }: HeaderProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="header">
      <h1 className="header-title">
        {githubUrl ? (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h1>
      <div className="header-meta">
        <span>Ross Harding</span>
        <span>
          <a href="mailto:rossharding13@gmail.com">rossharding13@gmail.com</a>
        </span>
        <span>
          <a href="https://github.com/dinghar" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
        {!isHome && (
          <span>
            <Link to="/">Home</Link>
          </span>
        )}
      </div>
    </header>
  )
}

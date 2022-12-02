import Link from 'next/link'
import { useRouter } from 'next/router'

import { NEXT_PUBLIC_SITE_TITLE } from '../app/server-constants'
import styles from '../styles/header.module.css'

interface NavItem {
  label: string
  path: string
}

const Header = () => {
  const { asPath } = useRouter()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
  ]

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" passHref>
          <a>{NEXT_PUBLIC_SITE_TITLE}</a>
        </Link>
      </h1>

      <ul>
        {navItems.map(({ label, path }) => (
          <li key={label}>
            <Link href={path} passHref>
              <a className={asPath === path ? 'active' : null}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header

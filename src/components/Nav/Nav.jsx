import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Services', 'Contact']

export default function Nav({ onContactClick }) {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      {/* Logo */}
      <div className={styles.logo}>
        TM<span className={styles.logoAccent}>.</span>
      </div>

      {/* Desktop links */}
      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className={styles.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className={styles.cta} onClick={onContactClick}>
        Hire Me →
      </button>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={menuOpen ? styles.barOpen1 : ''} />
        <span className={menuOpen ? styles.barOpen2 : ''} />
        <span className={menuOpen ? styles.barOpen3 : ''} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className={styles.mobileCta} onClick={() => { onContactClick(); setMenuOpen(false) }}>
            Hire Me →
          </button>
        </div>
      )}
    </nav>
  )
}

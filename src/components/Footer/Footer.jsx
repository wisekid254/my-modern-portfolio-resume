import { SOCIALS } from '../../data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        TM<span className={styles.logoAccent}>.</span>
      </div>

      <div className={styles.copy}>
        © {year} Titus Munene · Built with React + Vite · Nairobi, Kenya
      </div>

      <div className={styles.socials}>
        {SOCIALS.map((s, i) => (
          <a
            key={i}
            className={styles.socialLink}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

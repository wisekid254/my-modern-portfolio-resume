import { JOURNEY } from '../../data'
import styles from './Journey.module.css'

export default function Journey() {
  return (
    <section className="section-wrap reveal" id="experience">
      <div className="section-label">Experience</div>
      <div className="section-title">My Journey</div>
      <p className="section-sub">
        The path that shaped my engineering mindset — from creative work to
        full-stack development.
      </p>

      <div className={styles.timeline}>
        {JOURNEY.map((item, i) => (
          <div
            className={`${styles.item} reveal`}
            key={i}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className={styles.dot} />
            <div className={styles.date}>{item.date}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.company}>{item.company}</div>
            <div className={styles.desc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

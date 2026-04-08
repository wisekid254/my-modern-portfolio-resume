import { TESTIMONIALS } from '../../data'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className="section-wrap reveal" id="testimonials">
      <div className="section-label">Testimonials</div>
      <div className="section-title">Clients Who<br />Trust Me</div>
      <p className="section-sub">Real feedback from people I've built products with.</p>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <div
            className={`${styles.card} reveal`}
            key={i}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initial}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

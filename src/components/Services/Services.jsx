import { SERVICES } from '../../data'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className="section-wrap reveal" id="services">
      <div className="section-label">Services</div>
      <div className="section-title">What I Build<br />For You</div>
      <p className="section-sub">
        Whether you're a startup founder, product team, or individual — I deliver
        end-to-end engineering that moves fast and lasts.
      </p>

      <div className={styles.grid}>
        {SERVICES.map((service, i) => (
          <div
            className={`${styles.card} reveal`}
            key={i}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.icon}>{service.icon}</div>
            <div className={styles.title}>{service.title}</div>
            <div className={styles.desc}>{service.desc}</div>
            <div className={styles.price}>{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

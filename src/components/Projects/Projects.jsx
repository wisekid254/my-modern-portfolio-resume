import { PROJECTS } from '../../data'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  const { title, desc, tags, color, gradient, badge, badgeBg, featured, emoji, link } = project

  return (
    <div
      className={`${styles.card} ${featured ? styles.cardFeatured : ''} reveal`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Visual header */}
      <div className={`${styles.visual} ${featured ? styles.visualFeatured : ''}`}>
        <div
          className={styles.visualBg}
          style={{ background: gradient }}
        >
          <span className={styles.emoji}>{emoji}</span>
        </div>
        <div className={styles.visualOverlay} />
        <div
          className={styles.badge}
          style={{ background: badgeBg, color, border: `1px solid ${color}33` }}
        >
          {badge}
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>

        <div className={styles.tags}>
          {tags.map((t, ti) => (
            <span className="tag" key={ti}>{t}</span>
          ))}
        </div>

        <div className={styles.links}>
          {link !== '#' && (
            <a
              className={styles.link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color }}
            >
              ↗ Live Demo
            </a>
          )}
          <button className={styles.link} style={{ color }}>
            ⌥ Case Study
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section-wrap reveal" id="projects">
      <div className="section-label">Projects</div>
      <div className="section-title">Work That<br />Speaks.</div>
      <p className="section-sub">
        A selection of products I've designed, built, and shipped —
        from concept to deployment.
      </p>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

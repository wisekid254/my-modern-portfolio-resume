import { useSkillBars } from '../../hooks/useSkillBars'
import { SKILLS } from '../../data'
import styles from './Skills.module.css'

export default function Skills() {
  const { ref, animated } = useSkillBars()

  return (
    <section className="section-wrap reveal" id="skills" ref={ref}>
      <div className="section-label">Skills</div>
      <div className="section-title">My Technical<br />Arsenal</div>
      <p className="section-sub">
        Tools and technologies I use to build production-grade applications —
        from data layer to deployed product.
      </p>

      <div className={styles.cols}>
        {SKILLS.map((group, gi) => (
          <div
            className={`${styles.group} reveal`}
            key={gi}
            style={{ transitionDelay: `${gi * 0.15}s` }}
          >
            <div className={styles.groupTitle}>{group.group}</div>

            {group.items.map((skill, si) => (
              <div className={styles.item} key={si}>
                <span className={styles.name}>{skill.name}</span>
                <div className={styles.barWrap}>
                  <div
                    className={styles.barFill}
                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

import styles from './About.module.css'

const HIGHLIGHTS = [
  'MERN Stack specialist with full product lifecycle experience',
  'SaaS founder — built and launched kiriswap.com',
  'Strong design sensibility from a graphic design background',
  'Remote-ready with async communication habits',
]

const CARDS = [
  {
    icon:  '🧠',
    title: 'Technical Depth',
    text:  'Full ownership from database schema to pixel-perfect UI. I understand every layer of the stack.',
  },
  {
    icon:  '🚀',
    title: 'Entrepreneurial Mindset',
    text:  'I think about scalability, user retention, and business value — not just tickets and PRs.',
  },
  {
    icon:  '🌍',
    title: 'Global Perspective',
    text:  "Building from Kenya for the world. Time zones don't limit quality or communication.",
  },
  {
    icon:  '🎨',
    title: 'Design-Aware Engineer',
    text:  'My creative background means I spot UX issues before users do and ship interfaces that delight.',
  },
]

export default function About() {
  return (
    <section className="section-wrap reveal" id="about">
      <div className="section-label">About Me</div>
      <div className="section-title">Engineer. Builder.<br />Creator.</div>

      <div className={styles.grid}>
        {/* ── Story ── */}
        <div className={styles.text}>
          <p>
            I'm <strong>Titus Munene</strong>, a fullstack software engineer based in Nairobi, Kenya —
            building digital products for global markets. My journey started in{' '}
            <strong>graphic design and branding</strong>, which gave me a unique edge:
            I care deeply about both the code and the experience.
          </p>
          <p>
            Over the past 3+ years, I've shipped e-commerce platforms, SaaS tools,
            IoT systems, and custom APIs. I don't just write code —{' '}
            <strong>I solve business problems with technology.</strong>
          </p>
          <p>
            My goal is to build globally competitive products from Africa, and eventually
            work with international teams and clients who value craftsmanship, speed, and impact.
          </p>

          <div className={styles.highlights}>
            {HIGHLIGHTS.map((h, i) => (
              <div className={styles.highlightRow} key={i}>
                <span className={styles.dot} />
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* ── Value cards ── */}
        <div className={styles.cards}>
          {CARDS.map((c, i) => (
            <div
              className={`${styles.card} reveal`}
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardIcon}>{c.icon}</div>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardText}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

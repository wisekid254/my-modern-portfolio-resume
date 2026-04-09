import styles from "./Hero.module.css";

export default function Hero({ onContactClick }) {
  return (
    <section className={styles.hero} id="hero">
      {/* Background orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={styles.grid}>
        {/* ── Left: Content ── */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for remote work · Nairobi, Kenya
          </div>

          <h1 className={styles.title}>
            <span>Building</span>
            <br />
            <span className={styles.titleAccent}>Scalable</span>
            <br />
            <span>Software</span>
            <br />
            <span className={styles.titleDim}>That Ships.</span>
          </h1>

          <p className={styles.sub}>
            Fullstack engineer crafting high-performance web apps, SaaS
            products, and digital experiences for global teams with extream
            passion in <h2>Data science and Machine Learning </h2>and highly
            adaptive to any technology.{" "}
            <strong className={styles.subStrong}>
              Let's build something great.
            </strong>
          </p>

          <div className={styles.actions}>
            <button className="btn-primary" onClick={onContactClick}>
              Get In Touch
            </button>
            <a href="#projects" className="btn-ghost">
              View Projects
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNum}>
                4<span className={styles.statPlus}>+</span>
              </div>
              <div className={styles.statLabel}>Projects Shipped</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>
                3<span className={styles.statPlus}>+</span>
              </div>
              <div className={styles.statLabel}>Years Building</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>∞</div>
              <div className={styles.statLabel}>Drive to Scale</div>
            </div>
          </div>
        </div>

        {/* ── Right: Visual card ── */}
        <div className={styles.visual}>
          <div className={styles.cardStack}>
            <div className={styles.avatarCard}>
              <div className={styles.avatarCircle}>
                TM
                <div className={styles.avatarRing} />
              </div>
              git push -u origin main
              <div className={styles.avatarInfo}>
                <div className={styles.avatarName}>Titus Munene</div>
                <div className={styles.avatarRole}>// Software Engineer</div>
                <div className={styles.avatarLocation}>📍 Nairobi, Kenya</div>
              </div>
            </div>

            <div className={`${styles.floatingTag} ${styles.ftag1}`}>
              ⚡ . Python . React · Node · Mongo
            </div>
            <div className={`${styles.floatingTag} ${styles.ftag2}`}>
              ✅ Open to fulltime and Remote
            </div>
            <div className={`${styles.floatingTag} ${styles.ftag3}`}>
              🚀 MERN Stack and Data Analysis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

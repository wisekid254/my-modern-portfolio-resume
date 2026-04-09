import styles from "./Hero.module.css";
import titusPhoto from "../../assets/titus.jpg";

export default function Hero({ onContactClick }) {
  return (
    <section className={styles.hero} id="hero">
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
            products, and digital experiences for global teams.{" "}
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

        {/* ── Right: Photo ── */}
        <div className={styles.visual}>
          <div className={styles.photoWrap}>
            <div className={styles.ringOuter} />
            <div className={styles.ringInner} />
            <div className={styles.photoGlow} />

            <div className={styles.photoFrame}>
              <img
                src={titusPhoto}
                alt="Titus Munene — Fullstack Engineer"
                className={styles.photo}
              />
              <div className={styles.photoOverlay} />
            </div>

            {/* Name tag inside photo */}
            <div className={styles.nameTag}>
              <div>
                <div className={styles.nameTagName}>Titus Munene</div>
                <div className={styles.nameTagRole}>// Fullstack Engineer</div>
              </div>
              <div className={styles.nameTagStatus}>
                <span className={styles.nameTagDot} />
                Open to work
              </div>
            </div>

            {/* Floating chips */}
            <div className={`${styles.chip} ${styles.chip1}`}>
              ⚡ React · Node · Mongo
            </div>
            <div className={`${styles.chip} ${styles.chip2}`}>
              ✅ Open to Remote
            </div>
            <div className={`${styles.chip} ${styles.chip3}`}>
              🚀 MERN Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

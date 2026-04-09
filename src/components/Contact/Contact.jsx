import { useState } from "react";
import { CONTACT_METHODS } from "../../data";
import styles from "./Contact.module.css";

export default function Contact({ contactRef }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Simulate async send — replace with real API call (EmailJS, Resend, etc.)
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section className="section-wrap reveal" id="contact" ref={contactRef}>
      {/* Availability banner */}
      <div className={styles.banner}>
        <div>
          <div className="section-label" style={{ marginBottom: "6px" }}>
            Availability
          </div>
          <p className={styles.bannerText}>
            <strong>Open to remote opportunities</strong> — freelance projects,
            contract roles, and full-time positions with global companies.
          </p>
        </div>
        <div className={styles.availBadge}>
          <span className={styles.availDot} />
          Available Now
        </div>
      </div>

      <div className="section-label">Contact</div>
      <div className="section-title">
        Let's Build
        <br />
        Together
      </div>
      <p className="section-sub">
        Have a project in mind? Let's talk. I typically respond within 24 hours.
      </p>

      <div className={styles.wrap}>
        {/* ── Left: contact methods ── */}
        <div className={styles.info}>
          <div className={styles.methods}>
            {CONTACT_METHODS.map((m, i) => (
              <a className={styles.method} href={m.href} key={i}>
                <div className={styles.methodIcon}>{m.icon}</div>
                <div>
                  <div className={styles.methodLabel}>{m.label}</div>
                  <div className={styles.methodValue}>{m.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name</label>
              <input
                className={styles.input}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Subject</label>
            <input
              className={styles.input}
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Inquiry / Job Opportunity"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, and budget..."
            />
          </div>

          {status === "sent" ? (
            <div className={styles.successMsg}>
              ✓ Message sent! I'll get back to you within 24 hours.
            </div>
          ) : (
            <button
              className={styles.submit}
              onClick={handleSubmit}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

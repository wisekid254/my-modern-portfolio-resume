# Titus Munene — Portfolio

A premium, modern fullstack developer portfolio built with React + Vite.

## Tech Stack

- **React 18** + **Vite 5** — fast dev/build toolchain
- **CSS Modules** — scoped, zero-conflict styles per component
- **CSS Custom Properties** — design tokens in `global.css`
- **IntersectionObserver** — scroll-reveal animations (no library needed)
- **Google Fonts** — Syne + DM Sans + JetBrains Mono

---

## Project Structure

```
titus-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav/
│   │   │   ├── Nav.jsx
│   │   │   └── Nav.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Marquee/
│   │   │   ├── Marquee.jsx
│   │   │   └── Marquee.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.module.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.css
│   │   ├── Journey/
│   │   │   ├── Journey.jsx
│   │   │   └── Journey.module.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.module.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   └── Testimonials.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   └── ui/
│   │       ├── Divider.jsx
│   │       └── Divider.module.css
│   ├── data/
│   │   └── index.js          ← ALL portfolio content lives here
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useSkillBars.js
│   ├── styles/
│   │   └── global.css        ← Design tokens + reset + shared utilities
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## Getting Started

### 1. Clone / download the project

```bash
git clone https://github.com/yourusername/titus-portfolio.git
cd titus-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

The output lands in `dist/`. Preview it locally:

```bash
npm run preview
```

---

## Customisation

All content is in **one file**: `src/data/index.js`

| What to change          | Where                          |
|-------------------------|-------------------------------|
| Name, title, bio        | `src/components/Hero/Hero.jsx` + `About/About.jsx` |
| Projects                | `src/data/index.js → PROJECTS` |
| Skills & levels         | `src/data/index.js → SKILLS`   |
| Services & prices       | `src/data/index.js → SERVICES` |
| Testimonials            | `src/data/index.js → TESTIMONIALS` |
| Contact methods         | `src/data/index.js → CONTACT_METHODS` |
| Social links            | `src/data/index.js → SOCIALS`  |
| Colors / fonts          | `src/styles/global.css → :root` |

---

## Deployment

### Vercel (recommended — zero config)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

### Netlify

```bash
npm run build
# drag & drop the dist/ folder at app.netlify.com/drop
```

Or connect your GitHub repo and set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## Adding Real Email (Contact Form)

Replace the `setTimeout` in `Contact.jsx` with one of:

### EmailJS (free tier, no backend needed)
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser'
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

### Resend (modern, developer-friendly)
```bash
npm install resend
```
Create an API route (e.g. on Vercel) that calls `resend.emails.send(...)`.

---

## Roadmap / Bonus Features

- [ ] **AI Chatbot** — floating widget that lets recruiters ask questions about you (Anthropic API)
- [ ] **Dark/Light toggle** — toggle CSS variables at runtime
- [ ] **Project modals** — full case-study overlay per project
- [ ] **Calendly embed** — "Book a Call" button in Hero/Contact
- [ ] **Analytics** — add Plausible or Vercel Analytics (1 line)
- [ ] **Blog** — add MDX support for writing technical articles

---

## License

MIT — do whatever you want with it.

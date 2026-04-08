// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    group: 'Frontend',
    items: [
      { name: 'React.js',    level: 92 },
      { name: 'JavaScript',  level: 88 },
      { name: 'HTML / CSS',  level: 90 },
      { name: 'UI / UX Design', level: 75 },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 86 },
      { name: 'Django / Python',   level: 78 },
      { name: 'REST API Design',   level: 88 },
      { name: 'SaaS Architecture', level: 80 },
    ],
  },
  {
    group: 'Data & Tools',
    items: [
      { name: 'MongoDB',    level: 84 },
      { name: 'MySQL',      level: 80 },
      { name: 'IoT / ESP32', level: 72 },
      { name: 'Git / DevOps', level: 78 },
    ],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title:    'KiriSwap — E-commerce Platform',
    desc:     'Full-featured e-commerce marketplace built for the Kenyan market. Handles product listings, payments, cart management, and order tracking with a seamless mobile-first UX.',
    tags:     ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    color:    '#3af',
    gradient: 'linear-gradient(135deg, rgba(51,170,255,0.15) 0%, rgba(51,170,255,0.03) 100%)',
    badge:    'Live Product',
    badgeBg:  'rgba(51,170,255,0.15)',
    featured: true,
    emoji:    '🛒',
    link:     'https://kiriswap.com',
  },
  {
    title:    'Real Estate Web App',
    desc:     'MERN stack platform for property listings, agent profiles, and lead generation. Includes map integration and advanced search filters.',
    tags:     ['MongoDB', 'Express', 'React', 'Node.js'],
    color:    '#a78bfa',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.15) 0%, rgba(167,139,250,0.03) 100%)',
    badge:    'Fullstack',
    badgeBg:  'rgba(167,139,250,0.15)',
    featured: false,
    emoji:    '🏡',
    link:     '#',
  },
  {
    title:    'SaaS Invoice Reminder',
    desc:     'Automated invoice reminder system for freelancers and small businesses. Sends smart follow-up emails and tracks payment status in real time.',
    tags:     ['React', 'Node.js', 'SendGrid', 'MongoDB'],
    color:    '#34d399',
    gradient: 'linear-gradient(135deg, rgba(52,211,153,0.15) 0%, rgba(52,211,153,0.03) 100%)',
    badge:    'SaaS',
    badgeBg:  'rgba(52,211,153,0.15)',
    featured: false,
    emoji:    '📄',
    link:     '#',
  },
  {
    title:    'IoT Smart Farm System',
    desc:     'Sensor-based agriculture monitoring using ESP32, soil moisture, temperature, and humidity sensors — all controlled via Blynk dashboard with real-time alerts.',
    tags:     ['ESP32', 'IoT', 'Blynk', 'C++', 'Sensors'],
    color:    '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.03) 100%)',
    badge:    'IoT',
    badgeBg:  'rgba(245,158,11,0.15)',
    featured: false,
    emoji:    '🌱',
    link:     '#',
  },
]

// ─── JOURNEY ──────────────────────────────────────────────────────────────────
export const JOURNEY = [
  {
    date:    '2024 — Present',
    role:    'Freelance Fullstack Engineer',
    company: 'Self-Employed · Remote',
    desc:    'Delivering high-quality web applications for international clients. Specializing in MERN stack, SaaS products, and scalable API development.',
  },
  {
    date:    '2023',
    role:    'Co-founder & Lead Developer',
    company: 'KiriSwap · Kenya',
    desc:    'Built and launched a full e-commerce platform from scratch. Handled architecture, UI/UX, backend APIs, and payment integration.',
  },
  {
    date:    '2022 — 2023',
    role:    'Software Engineering Student',
    company: 'Self-Taught + Bootcamps · Kenya',
    desc:    'Intensively studied modern web technologies, built dozens of projects, and transitioned from graphics design to fullstack engineering.',
  },
  {
    date:    '2020 — 2022',
    role:    'Graphic Designer & Brand Strategist',
    company: 'Freelance · Kenya',
    desc:    "Designed brand identities, apparel mockups, and marketing assets for small businesses — this creative foundation still shapes my UI decisions today.",
  },
]

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  { icon: '⚡', title: 'Fullstack Web Apps',       desc: 'End-to-end web applications using React, Node.js, and MongoDB. From MVP to production-ready.',                                price: 'From $800'   },
  { icon: '🚀', title: 'SaaS Product Development', desc: 'Build your next SaaS idea with scalable architecture, auth systems, billing integration, and dashboard UX.',               price: 'From $1,500' },
  { icon: '🔌', title: 'API Development',           desc: 'RESTful APIs, third-party integrations, and backend systems that power your products at scale.',                            price: 'From $500'   },
  { icon: '🎨', title: 'UI/UX & Frontend',          desc: 'Pixel-perfect, responsive interfaces that convert visitors into customers. Clean, fast, and beautiful.',                   price: 'From $400'   },
  { icon: '📊', title: 'Technical Consulting',      desc: 'Architecture review, tech stack advice, and roadmap planning for startups and product teams.',                             price: 'From $80/hr' },
  { icon: '🌱', title: 'IoT & Hardware Integration',desc: 'Connect physical devices to web dashboards. ESP32, sensor networks, real-time data visualizations.',                       price: 'From $600'   },
]

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    text:    'Titus delivered our e-commerce platform ahead of schedule. His attention to detail and clean code architecture made future scaling effortless. Truly a top-tier engineer.',
    name:    'Alex Carter',
    role:    'Founder, CartBridge (UK)',
    initial: 'A',
  },
  {
    text:    'We hired Titus for our SaaS invoice system and were blown away. He understood our business logic instantly and shipped a polished product in 3 weeks.',
    name:    'Priya Nair',
    role:    'Product Lead, Invoxi (Canada)',
    initial: 'P',
  },
  {
    text:    'The IoT dashboard Titus built for our farm pilot is incredible. Real-time sensor data, clean UI, and rock-solid backend. Highly recommended.',
    name:    'James Ochieng',
    role:    'AgriTech Startup CEO (Kenya)',
    initial: 'J',
  },
]

// ─── MARQUEE ITEMS ────────────────────────────────────────────────────────────
export const STACK_MARQUEE = [
  'React.js', 'Node.js', 'MongoDB', 'Django', 'Express',
  'MySQL', 'REST APIs', 'SaaS', 'IoT', 'UI/UX', 'Branding', 'TypeScript',
]

// ─── CONTACT METHODS ──────────────────────────────────────────────────────────
export const CONTACT_METHODS = [
  { icon: '✉️', label: 'Email',    value: 'titusmunene@email.com',          href: 'mailto:titusmunene@email.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/titusmunene',    href: 'https://linkedin.com/in/titusmunene' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/titusmunene',         href: 'https://github.com/titusmunene' },
  { icon: '🌍', label: 'Location', value: 'Nairobi, Kenya (Remote-ready)',   href: '#' },
]

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const SOCIALS = [
  { label: 'GitHub',   icon: '⌥', href: 'https://github.com/titusmunene' },
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/in/titusmunene' },
  { label: 'Twitter',  icon: '𝕏',  href: 'https://twitter.com/titusmunene' },
  { label: 'Email',    icon: '✉',  href: 'mailto:titusmunene@email.com' },
]

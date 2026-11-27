// Site texts in English. The same keys exist in fr.ts.
import type { Messages } from './fr';

export const en: Messages = {
  meta: {
    title: 'Senior Dev iTech – Portfolio',
    description: 'DevOps & IoT developer and trainer, based in Douala (Cameroon).',
  },
  nav: {
    services: 'Services',
    projects: 'Projects',
    method: 'Method',
    contact: 'Contact',
  },
  hero: {
    label: 'DEVOPS & IOT DEVELOPER · TRAINER',
    title: 'From sensor to deployment.',
    sub: 'I design connected systems, automate their deployment and teach digital skills. Based in Douala, Cameroon.',
    cta1: 'See my projects',
    cta2: 'Contact me',
    panelTitle: 'FLAGSHIP PROJECT',
    panelStatus: 'PLANNED',
    nodes: ['DHT11 sensor', 'ESP32 · C / C++', 'Python API · Docker', 'Web dashboard', 'Mobile alert · Flutter'],
  },
  services: {
    label: '// SERVICES',
    title: 'What I can do for you.',
    rate: 'Rate: on request',
    items: [
      { title: 'School tutoring', desc: 'Maths, physics, chemistry and French, from primary school up to Terminale (Grade 12). At home or online.' },
      { title: 'Computing for everyone', desc: 'Office tools, programming basics and digital literacy, from beginner to advanced.' },
      { title: 'DevOps & IoT training', desc: 'Docker, Git, CI/CD, ESP32 and Arduino, with hands-on projects.' },
      { title: 'Custom IoT solutions', desc: 'Monitoring, alerts and automation for small businesses.' },
    ],
  },
  projects: {
    label: '// PROJECTS',
    title: 'Projects, documented step by step.',
    items: [
      { status: 'PLANNED', title: 'IoT monitoring for shops', desc: 'ESP32 sensors, Python API, dashboard, Flutter app and an Odoo module.', stack: 'ESP32 · Python · Docker · Flutter · Odoo' },
      { status: 'IN PROGRESS', title: 'This portfolio', desc: 'Bilingual site deployed automatically with Docker and GitHub Actions.', stack: 'Docker · GitHub Actions · GitHub Pages' },
      { status: 'SOON', title: 'WordPress demo on Docker', desc: 'Template site for a small business, built on a containerized WordPress stack.', stack: 'WordPress · Docker' },
    ],
  },
  method: {
    label: '// METHOD',
    title: 'A personal project, run like a team.',
    sub: 'Jira backlog, Scrum sprints, branches and pull requests on GitHub, continuous integration and deployment.',
    steps: ['Jira backlog', 'Scrum sprint', 'Commit & Pull Request', 'GitHub Actions CI', 'Deployment'],
  },
  contact: {
    title: "Let's talk about your project.",
    sub: 'Tutoring, training or an IoT solution: get in touch.',
    whatsapp: 'Message on WhatsApp',
    github: 'View GitHub',
  },
  footer: '© 2026 Senior Dev iTech · Tchando Patrick Junior · Douala, Cameroon',
  common: {
    soon: 'Site under construction',
    switchTo: 'Français',
  },
};
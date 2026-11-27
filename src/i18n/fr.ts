// Textes du site en français. Les mêmes clés existent dans en.ts.
export const fr = {
  meta: {
    title: 'Senior Dev iTech – Portfolio',
    description: 'Développeur DevOps & IoT et formateur, basé à Douala (Cameroun).',
  },
  nav: {
    services: 'Services',
    projects: 'Projets',
    method: 'Méthode',
    contact: 'Contact',
  },
  hero: {
    label: 'DÉVELOPPEUR DEVOPS & IOT · FORMATEUR',
    title: 'Du capteur au déploiement.',
    sub: "Je conçois des systèmes connectés, j'automatise leur déploiement et j'enseigne le numérique. Basé à Douala, au Cameroun.",
    cta1: 'Voir mes projets',
    cta2: 'Me contacter',
    panelTitle: 'PROJET FIL ROUGE',
    panelStatus: 'EN COURS',
    nodes: ['Capteur DHT11', 'ESP32 · C / C++', 'API Python · Docker', 'Tableau de bord web', 'Alerte mobile · Flutter'],
  },
  services: {
    label: '// SERVICES',
    title: 'Ce que je peux faire pour vous.',
    rate: 'Tarif : [à définir]',
    items: [
      { title: 'Soutien scolaire', desc: 'Maths, physique, chimie et français, de la Première aux classes inférieures. À domicile ou en ligne.' },
      { title: 'Informatique pour tous', desc: 'Bureautique, bases de programmation et initiation au numérique, à tous les niveaux.' },
      { title: 'Formation DevOps & IoT', desc: 'Docker, Git, CI/CD, ESP32 et Arduino, avec des projets concrets.' },
      { title: 'Solutions IoT sur mesure', desc: 'Surveillance, alertes et automatisation pour les petits commerces.' },
    ],
  },
  projects: {
    label: '// PROJETS',
    title: 'Des projets réels, documentés.',
    items: [
      { status: 'EN COURS', title: 'Surveillance IoT pour commerces', desc: 'Capteurs ESP32, API Python, tableau de bord, application Flutter et module Odoo.', stack: 'ESP32 · Python · Docker · Flutter · Odoo' },
      { status: 'EN COURS', title: 'Ce portfolio', desc: 'Site bilingue déployé automatiquement avec Docker et GitHub Actions.', stack: 'Docker · GitHub Actions · GitHub Pages' },
      { status: 'BIENTÔT', title: 'Démo WordPress sous Docker', desc: 'Site modèle pour petite entreprise, avec une pile WordPress conteneurisée.', stack: 'WordPress · Docker' },
    ],
  },
  method: {
    label: '// MÉTHODE',
    title: 'Un projet personnel, géré comme en équipe.',
    sub: 'Backlog Jira, sprints Scrum, branches et pull requests sur GitHub, intégration et déploiement continus.',
    steps: ['Backlog Jira', 'Sprint Scrum', 'Commit & Pull Request', 'CI GitHub Actions', 'Déploiement'],
  },
  contact: {
    title: 'Parlons de votre projet.',
    sub: 'Cours, formation ou solution IoT : écrivez-moi.',
    whatsapp: 'Écrire sur WhatsApp',
    github: 'Voir GitHub',
  },
  footer: '© 2026 Senior Dev iTech · Tchando Patrick Junior · Douala, Cameroun',
  common: {
    soon: 'Site en construction',
    switchTo: 'English',
  },
};

// Forme commune à toutes les langues : en.ts doit avoir exactement les mêmes clés.
export type Messages = typeof fr;
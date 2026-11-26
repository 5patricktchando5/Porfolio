export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    title: 'Senior Dev iTech – Portfolio',
    description: 'Développeur DevOps & IoT et formateur, basé à Douala (Cameroun).',
    label: 'DÉVELOPPEUR DEVOPS & IOT · FORMATEUR',
    heading: 'Du capteur au déploiement.',
    sub: "Je conçois des systèmes connectés, j'automatise leur déploiement et j'enseigne le numérique. Basé à Douala, au Cameroun.",
    soon: 'Site en construction',
    switchTo: 'English',
  },
  en: {
    title: 'Senior Dev iTech – Portfolio',
    description: 'DevOps & IoT developer and trainer, based in Douala (Cameroon).',
    label: 'DEVOPS & IOT DEVELOPER · TRAINER',
    heading: 'From sensor to deployment.',
    sub: 'I design connected systems, automate their deployment and teach digital skills. Based in Douala, Cameroon.',
    soon: 'Site under construction',
    switchTo: 'Français',
  },
} as const;

import { fr } from './fr';
import { en } from './en';

export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;

// Tous les textes, par langue (utilisés par les sections du site)
export const messages = { fr, en } as const;

// Forme simplifiée utilisée par la page d'accueil actuelle (Base.astro et Home.astro)
const pick = (m: typeof fr) => ({
  title: m.meta.title,
  description: m.meta.description,
  label: m.hero.label,
  heading: m.hero.title,
  sub: m.hero.sub,
  soon: m.common.soon,
  switchTo: m.common.switchTo,
});

export const ui = { fr: pick(fr), en: pick(en) } as const;
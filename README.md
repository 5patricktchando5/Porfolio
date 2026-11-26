# Senior Dev iTech – Portfolio

🇫🇷 [Français](#français) · 🇬🇧 [English](#english)

---

## Français

Portfolio bilingue (FR/EN) de **Tchando Patrick Junior**, développeur DevOps & IoT et formateur, basé à Douala (Cameroun). Le site est conçu léger pour le mobile et déployé automatiquement.

### État du projet

En construction. Le travail est planifié dans Jira (projet **SDIP**, méthode Scrum, sprints d'une semaine).

### Stack prévue

- Site statique (Astro) en français et en anglais
- Docker pour l'environnement de développement
- GitHub Actions pour les vérifications et le déploiement
- Hébergement gratuit sur GitHub Pages

### Démarrage rapide

Prérequis : Docker Desktop démarré.

```bash
docker compose up --build
```

Puis ouvrir <http://localhost:4321>. Pour arrêter : `Ctrl + C`, puis `docker compose down`.

### Flux de travail Git

| Branche | Rôle |
|---|---|
| `main` | Version publiée. On n'y travaille jamais directement. |
| `develop` | Branche d'intégration : tout le travail y est fusionné et testé. |
| `feature/SDIP-n-nom-court` | Une branche par ticket, créée depuis `develop`. |

1. Créer `feature/SDIP-n-nom-court` depuis `develop`.
2. Commiter avec la clé du ticket en début de message : `SDIP-4: ajout du README`.
3. Ouvrir une pull request vers `develop`, tester, puis fusionner.
4. Quand une étape est solide, ouvrir une pull request de `develop` vers `main`.

### Licence

MIT. Voir le fichier `LICENSE`.

---

## English

Bilingual (FR/EN) portfolio of **Tchando Patrick Junior**, DevOps & IoT developer and trainer, based in Douala (Cameroon). The site is built to be light on mobile and is deployed automatically.

### Project status

Under construction. The work is planned in Jira (project **SDIP**, Scrum, one-week sprints).

### Planned stack

- Static site (Astro) in French and English
- Docker for the development environment
- GitHub Actions for checks and deployment
- Free hosting on GitHub Pages

### Quick start

Requirement: Docker Desktop running.

```bash
docker compose up --build
```

Then open <http://localhost:4321>. To stop: `Ctrl + C`, then `docker compose down`.

### Git workflow

| Branch | Purpose |
|---|---|
| `main` | Published version. Never worked on directly. |
| `develop` | Integration branch: all work is merged and tested here. |
| `feature/SDIP-n-short-name` | One branch per ticket, created from `develop`. |

1. Create `feature/SDIP-n-short-name` from `develop`.
2. Commit with the ticket key at the start of the message: `SDIP-4: add README`.
3. Open a pull request into `develop`, test, then merge.
4. When a milestone is solid, open a pull request from `develop` into `main`.

### License

MIT. See the `LICENSE` file.

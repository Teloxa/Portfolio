# Portfolio


[![Presentation](/ss_presentation.JPG)](https://teloxa.vercel.app/)
> Click the image above to view my live portfolio.


## About This Project

This is my personal portfolio website — a clean, modern, and responsive showcase of who I am as a developer. It's built with performance and simplicity in mind, reflecting my approach to building web applications.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Additional Experience:** Next.js, Node.js, Python
- **Databases:** PostgreSQL, MongoDB
- **Tools & Platforms:** Docker, AWS

## Features

- **About Me** – A brief introduction and my development philosophy
- **Projects** – A curated selection of my work (more coming soon!)
- **Tech Stack** – Visual overview of technologies I work with
- **Contact** – Direct links to GitHub, LinkedIn, and email

## Project Status

⚠️ **Work in Progress** – This portfolio is currently under active development. Some sections are still being populated:

- The **Projects** section is being built and will feature real case studies once they go live.
- Additional interactive elements and animations are planned.

## Why This Portfolio?

My goal is to demonstrate my ability to build:
- **Fast** and performant interfaces
- **Simple** and intuitive user experiences
- **Clean** and maintainable code

This site serves as both a personal brand and a living example of my development skills.

---

*Feedback and suggestions are always welcome!*

## Development

- Run the development server:

```bash
npm install
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

- Lint (project uses `oxlint`):

```bash
npm run lint
```

## Continuous Integration (GitHub Actions)

This repository includes a GitHub Actions workflow that runs on push and pull requests. The workflow performs:

- Install dependencies
- Run lint
- Build the project

To enable automatic production deployments to Vercel from the workflow, set the following repository secrets in GitHub: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. When present, the workflow will deploy to Vercel on pushes to the `main` branch.

## Setting up Vercel (optional)

1. Create a project on Vercel and connect your GitHub repository.
2. Add the `VERCEL_TOKEN` secret to your GitHub repository (see Vercel dashboard > Account Settings > Tokens).
3. Optionally add `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` if your Vercel setup requires them.

## Notes & Next Steps

- Add a `test` script and unit/integration tests (recommended: Vitest + Testing Library).
- Consider adding badges for build status and Vercel once CI runs at least once.


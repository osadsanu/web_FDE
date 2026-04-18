# Fin de la Esclavitud Static Site

This rebuild uses [Eleventy](https://www.11ty.dev/) so the website stays static and easy to edit.

## Run locally

```bash
npm install
npm run dev
```

Build production files:

```bash
npm run build
```

The generated site is written to `_site/`.

## Where to edit content

- Home: `src/index.md`
- Blog index: `src/blog/index.md`
- Blog posts: `src/blog/*.md`
- Oferta educativa: `src/oferta-educativa.md`
- Transparencia: `src/transparencia.md`
- Voluntarios: `src/voluntarios.md`
- Donativos: `src/donativos.md`
- Aprende:
  - `src/aprende/que-es-la-trata.md`
  - `src/aprende/tipos-de-trata.md`
  - `src/aprende/estadisticas.md`
  - `src/aprende/factores-de-vulnerabilidad.md`

Shared layout and navigation:

- Base layout: `src/_includes/layouts/base.njk`
- Page templates: `src/_includes/layouts/*.njk`
- Global site data: `src/_data/site.js`

Assets:

- Custom behavior: `src/assets/site.js`
- Original visual system CSS plus small overrides:
  - `src/assets/app.css`
  - `src/assets/site.css`

## Azure Static Web Apps note

Azure Static Web Apps normally deploys from a connected repository or from a build output pushed with a deployment token. The portal does not usually provide a button to download the original source code of the deployed site. If your Azure app is repo-connected, the source of truth is that repo. If it was deployed through a token or another external pipeline, what you usually recover from Azure is the deployment configuration and token, not the original authoring project.

For this rebuild, you can deploy `_site/` to Azure Static Web Apps after `npm run build`, or reconnect this repo as the new source.

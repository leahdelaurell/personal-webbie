# Leahs Webbie

This my personal website using [Docusaurus](https://docusaurus.io/), a modern static website generator. The reason I decided to use this as my website was due to getting spun up quickly and also for generator blog posts. I want to easily create blog posts in an mdx file instead us needing to use react to build it all out.

## Installation

```bash
npm i
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH (requires a deploy key / SSH key configured for GitHub):

```bash
USE_SSH=true npm deploy
```

Not using SSH (requires a Personal Access Token or `GITHUB_TOKEN` in CI):

```bash
GIT_USER=leahdelaurell npm deploy
```

If you are using GitHub Pages for hosting, this command builds the site and pushes it to the `gh-pages` branch. If you see your README instead of the site, it means the deploy didn’t successfully overwrite `gh-pages` with the build output.

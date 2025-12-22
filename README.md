
# Personal Academic Website — Source

This repository contains the source for a personal academic website built with Jekyll. The site includes a CV, publications, talks, blog posts, resources, and supporting assets. The generated static site is available in the `_site/` folder after building.

## Key features

- Jekyll-based static site (templating in `_layouts` and `_includes`)
- Content organized in `_posts/`, `_pages/`, and `_data/`
- Assets in `assets/`, images in `images/`, and arbitrary downloads in `files/`
- Notebooks and generators in `talkmap.py` and `markdown_generator/`
- Docker and Docker Compose for easy local development

## Prerequisites

- Ruby (2.7+ recommended) and Bundler for Jekyll
- Node.js and npm for asset tooling (if used)
- Docker and Docker Compose (optional, recommended for reproducible environment)

## Quick start — Docker (recommended)

1. Build and start the site with Docker Compose:

```bash
docker compose up --build
```

2. Open http://localhost:4000 in your browser.

The Docker setup runs Jekyll inside a container so you don't need to install Ruby locally.

## Local development (without Docker)

1. Install dependencies:

```bash
gem install bundler
bundle install
```

2. Serve locally with live reload:

```bash
bundle exec jekyll serve --livereload --host 0.0.0.0
```

3. Open http://localhost:4000.

If you get permission errors installing gems, configure Bundler to install into the project:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

## Editing content

- Blog posts: edit or add Markdown files in `_posts/`.
- Pages: edit files in `_pages/` and top-level `.md` files.
- Data (authors, navigation, etc.): update `_data/` (YAML/JSON files).
- Templates and layout: modify files in `_includes/`, `_layouts/`, and `_sass/`.
- Static assets: update `assets/`, `images/`, and `files/`.

After editing content, the local Jekyll server will rebuild the site automatically.

## Build for production

Create a static build in `_site/`:

```bash
bundle exec jekyll build
```

The `_site/` directory contains the generated static files ready to serve or deploy.

## Deploy

- GitHub Pages: push the repository to a GitHub Pages branch (or use the default Pages configuration).
- Alternatively, serve the contents of `_site/` from any static host or CDN.

## Contributing

- Edit content or templates and open a pull request.
- For structural changes, describe the change in the PR and include screenshots if relevant.

If you want me to help: I can run the site locally, update content, or add a contribution guide.

## Repository structure (high level)

- `_posts/` — blog posts and dated content
- `_pages/` and top-level `.md` files — standalone pages (about, CV, talks, etc.)
- `_data/` — YAML/JSON data (authors, navigation, ui text)
- `_layouts/`, `_includes/`, `_sass/` — theme and templates
- `assets/`, `images/`, `files/` — static assets
- `talkmap.py`, `markdown_generator/` — scripts and notebooks used to generate content
- `Dockerfile`, `docker-compose.yaml` — containerized development

## License

See the `LICENSE` file in the repository for license details.

## Support / Contact

For questions or improvements, open an issue or pull request. If you prefer, tell me what text you want in the `About` or `CV` pages and I can update them.

---
Updated README to match this site's structure and development workflow.

"""

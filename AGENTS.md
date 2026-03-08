# AGENTS.md

This repo is a personal blog built on `jekyll-theme-chirpy` via `chirpy-starter`.

## Start Here

- Upgrade guide: https://github.com/cotes2020/jekyll-theme-chirpy/wiki/Upgrade-Guide
- Local run guide: https://chirpy.cotes.page/posts/getting-started/

If you need the full workflow, read those URLs directly instead of relying on copied instructions here.

## Repo Notes

- The upstream starter remote is already configured as `chirpy`.
- Main config is in `_config.yml`.
- Posts live in `_posts/`.
- Tabs live in `_tabs/`.
- Generated output is `_site/`; do not edit it manually.
- `assets/lib` is a git submodule; avoid changing it unless the task is explicitly about static assets or upgrades.

## Common Commands

- `bundle install`: install Ruby gem dependencies for the site.
- `bundle exec jekyll serve`: start the local Jekyll development server.
- `bash tools/run.sh`: start the local server with the repo helper script and livereload.
- `bash tools/test.sh`: build the site in production mode and run `htmlproofer` checks.
- `bash tools/sync-posts.sh`: sync posts from `~/Documents/MyWorld/4-Archive/blog` into `_posts/` with `rsync --delete`.

## Post Workflow

- New posts are written first in the Obsidian blog folder: `~/Documents/MyWorld/4-Archive/blog`.
- When working on posts, sync from `~/Documents/MyWorld/4-Archive/blog` into `_posts/` first.
- After syncing into `_posts/`, start the local server and check the rendered post in the browser.
- If the post needs fixes, make the changes in this repo copy under `_posts/` and re-check locally.
- If a post was modified in this repo during review or implementation, then after finishing the changes and committing them, sync the updated post files back to `~/Documents/MyWorld/4-Archive/blog`.
- Syncing back to the Obsidian blog folder should be non-destructive; do not delete unrelated files there.

## Deployment

- GitHub Pages deploy workflow: `.github/workflows/pages-deploy.yml`
- Pushes to `main` trigger deployment.

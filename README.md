# Prateek Mogha – Portfolio

Personal portfolio site of **Prateek Mogha**, Senior Java Engineer based in Edinburgh, UK.
Java 17, Spring Boot, microservices, AWS, Kubernetes and Kafka, with experience across payments, capital markets and automotive technology.

**Live site:** https://moghaprateek.github.io
**LinkedIn:** https://www.linkedin.com/in/moghaprateek/

![Portfolio screenshot](docs/screenshot.png)

## What it is

A single-page portfolio built with plain HTML, CSS and JavaScript. There is no framework and no build step, so it publishes straight from GitHub Pages.

- Two-column dashboard layout that uses wide screens (up to 1680px): a fixed sidebar on the left (intro, skills, then education and certifications side by side) and the content on the right, which is the only part that scrolls. Projects and GitHub sit side by side on very wide screens.
- Floating pill menu on desktop and an iOS-style bottom tab bar on phones.
- Experience timeline with filter buttons by theme (Cloud, Security, Payments and so on) and a "Show more" toggle for long bullet lists.
- Projects, GitHub projects, contact links and a CV download button.
- Dark and light mode, remembered per visitor.
- Responsive: the sidebar stacks above the content on tablets. On phones everything is a single column with a short intro card, a one-row filter, and collapsible Skills and Certifications.
- Search and sharing support: page title and description, structured data, a social preview image, `robots.txt` and `sitemap.xml`.

## Files

| File | Purpose |
|---|---|
| `config.js` | **All your content.** This is the file you edit for normal updates. |
| `index.html` | Page structure, styles, rendering code and search/sharing tags. |
| `Prateek_Mogha_CV.pdf` | The CV behind the "Download CV" buttons. |
| `og-image.png` | Preview image shown when the link is shared (1200 x 630). |
| `robots.txt`, `sitemap.xml` | Search engine files. |
| `docs/screenshot.png` | Screenshot used in this README. |
| `CHANGELOG.md` | Version history. Add an entry for each release. |

## Updating the site

Edit `config.js`, then commit and push:

```
git add .
git commit -m "Update content"
git push origin main
```

GitHub Pages refreshes within a minute or two. Use a hard refresh (Ctrl+F5) if you still see the old version.

### What to change in `config.js`

| To change | Edit |
|---|---|
| Name, job title, location | `name`, `title`, `location` |
| Keyword line under the name | `keywordsLine` |
| "Currently ..." line | `currently` |
| Theme colour | `accent` (hex colour) |
| Email, LinkedIn, GitHub | `social` (delete a line to hide that button) |
| About text | `about` (one string per paragraph) |
| Headline numbers | `stats` |
| Skills panel | `skillGroups` |
| Work projects | `projects` (add a `link` to make a card clickable) |
| GitHub projects | `repos` (each needs a `link`) |
| Jobs and bullets | `experience`, newest first |
| Education and certifications | `education`, `certifications` |
| Roles shown before "Show earlier roles" | `visibleRoles` |
| Bullets shown per role before "Show more" | `visibleBullets` |

Each experience bullet is written as `["text", ["Tag1", "Tag2"]]`. The tags create the filter buttons.
To hide a section, set its list to `[]`.

### Updating the CV

1. Export your new CV as a PDF.
2. Save it in this folder as `Prateek_Mogha_CV.pdf`, replacing the old file.
   If you use a different file name, set `cv` in `config.js` to match.
3. Commit and push.

Tip: leave your phone number off a public CV.

### Search and sharing (`index.html`)

Search engines and LinkedIn read the `<head>` of `index.html`, not `config.js`. If your job title, location or employer changes, also update these in the `<head>`:

- `<title>` and `<meta name="description">`
- `og:title`, `og:description`, `twitter:title`, `twitter:description`
- `<meta name="keywords">`
- the JSON-LD block (`jobTitle`, `worksFor`, `address`, `knowsAbout`)

To change the share image, replace `og-image.png` (keep it 1200 x 630). After a change, refresh LinkedIn's cached preview at https://www.linkedin.com/post-inspector/.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

The repo is named `moghaprateek.github.io` and publishes from the `main` branch root.
In GitHub: **Settings, Pages, Deploy from a branch, `main`, `/ (root)`**.

## Troubleshooting

- **Page shows "config.js is missing or has a syntax error":** check `config.js` for a missing comma, quote or bracket. The browser console (F12) shows the line number.
- **Changes not showing:** wait a minute, then hard refresh (Ctrl+F5).
- **A section is empty:** its list in `config.js` is probably `[]`.

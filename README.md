# Abhijna Kanthila · Personal Website

My personal site: who I am, what I've worked on, what I'm reading, and what I'm listening to.

**Live:** [portfolio-abhijna-kanthila.vercel.app](https://portfolio-abhijna-kanthila.vercel.app)

![Preview of the site](public/og.jpg)

## Highlights

- **Experience, projects and education** in a clean, single-page layout with light and dark mode.
- **A 3D bookshelf.** Books show their real covers; hover over one (or tap it on a phone) and it tilts, the cover swings open and the pages riffle.
- **A vinyl turntable for my Spotify playlists.** Pick a record from the crate and it drops onto the platter with the playlist's cover as the label. The record only spins while music is actually playing, and the whole panel takes its color from the cover, like a Spotify playlist page.
- **Fast by default.** The site is static HTML. Images (photos, book covers, playlist art) are downloaded and converted to small WebP files at build time, and the Spotify player only loads when you scroll near it.
- **Accessible.** Keyboard friendly, respects "reduce motion", and every external link opens in a new tab.

## Tech stack

- [Astro](https://astro.build) with TypeScript, plain CSS and a little vanilla JavaScript
- Astro's image pipeline (sharp) for image optimization
- Spotify oEmbed + iFrame API for playlist art and playback state
- Open Library for book covers
- Hosted on [Vercel](https://vercel.com); every push to `main` deploys automatically

## Project structure

```text
src/
├── data/          # All the content lives here (edit these to update the site)
│   ├── site.ts        name, bio, links
│   ├── experience.ts  work history
│   ├── projects.ts    project cards
│   ├── education.ts   degrees
│   ├── books.ts       bookshelf
│   └── playlists.ts   records on the turntable
├── components/    # One component per section (Hero, Experience, Books, VinylPlayer...)
├── layouts/       # Page shell: fonts, theme, link-preview tags
├── styles/        # Shared design tokens and section styles
├── utils/         # Spotify cover lookup, link helpers
└── assets/        # Photos (optimized at build time)
```

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Updating content

Everything on the page comes from `src/data/`, so updating the site rarely means touching a component.

| To... | Edit | How |
| --- | --- | --- |
| Change bio or links | `site.ts` | Plain text fields |
| Add a job | `experience.ts` | Add an entry with role, dates, highlights and tech stack |
| Add a project | `projects.ts` | Optional `logo` (image URL) or `emoji` next to the title, plus `status: 'live' \| 'in-progress'` |
| Add a book | `books.ts` | Set `status` to `reading`, `loved` or `up-next`. For a cover, copy the image address from [openlibrary.org](https://openlibrary.org) |
| Add a playlist | `playlists.ts` | Paste the Spotify share link. The cover and color are fetched automatically |
| Add a resume | `public/` + `site.ts` | Drop in `resume.pdf` and set `links.resume` to `'/resume.pdf'` |

Push to `main` and Vercel redeploys within a minute.

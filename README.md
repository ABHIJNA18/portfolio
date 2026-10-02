# portfolio

My personal site — built with [Astro](https://astro.build), hosted on Vercel.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Updating content

Everything on the page comes from the files in `src/data/` — no need to touch the layout.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, title, bio, email, links |
| `src/data/experience.ts` | Work history |
| `src/data/projects.ts` | Project cards |
| `src/data/books.ts` | Bookshelf (`reading`, `read`, `up-next`) |
| `src/data/playlists.ts` | Records on the turntable (paste Spotify share links) |

To add a resume, drop `resume.pdf` into `public/` and set `links.resume` to `'/resume.pdf'` in `site.ts`.

Push to `main` and Vercel redeploys automatically.

# STEMReader website

Production marketing site for [STEMReader](https://stemreader.app), a native Apple-platform app that turns STEM textbook PDFs into interactive study workspaces.

The site is fully static, has no server runtime, no client-side JavaScript, no account flow, no analytics, no trackers, no API calls, and no app credentials. The production build is written to `out/` and can be uploaded to any static host.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Production build

```bash
npm run lint
npm run build
```

Upload the contents of `out/` to the static host. To test that exact output locally:

```bash
npm run preview
```

## Owner configuration

All public product and deployment values are centralized in [`app/site-config.ts`](./app/site-config.ts):

- `siteUrl`: canonical production URL.
- `appStoreUrl`: currently `null`. Replace it with the verified App Store URL to convert every availability state into a download link.
- `availabilityLabel`: text shown while no App Store URL is configured.
- `supportEmail`: currently `null`. Add a verified public address to enable the shared contact links.
- `copyrightOwner` and `copyrightYear`.
- `socialLinks`: intentionally empty until official profiles are supplied.

The public `CNAME` file contains `stemreader.app`. Remove that file when deploying to a host where a GitHub Pages custom-domain file is not appropriate.

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for GitHub Pages, Namecheap DNS, HTTPS, custom-domain, and alternate-host instructions.

## Structure

- `app/page.tsx` — landing page and synthetic product compositions.
- `app/privacy/page.tsx` — web-facing privacy overview.
- `app/support/page.tsx` — support and troubleshooting.
- `app/not-found.tsx` — branded static 404 page.
- `app/components.tsx` — shared navigation, footer, availability CTA, and support contact.
- `app/globals.css` — design tokens, responsive layout, light/dark themes, and reduced-motion behavior.
- `scripts/prune-static.mjs` — removes the unused framework hydration payload from the generated HTML and static output.
- `public/` — optimized brand art, social card, favicons, manifest, sitemap, robots file, and host files.

The product compositions use synthetic textbook content and are marketing illustrations, not screenshots.

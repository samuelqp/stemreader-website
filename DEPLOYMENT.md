# Deployment

STEMReader builds to ordinary static files. No Node.js process, database, API keys, or environment secrets are needed in production.

## Build once, host anywhere

```bash
npm ci
npm run lint
npm run build
```

Publish the contents of `out/` as the host's web root. Configure the host to serve `404.html` for unknown routes. HTTPS should be required because the site represents an account-based application and links to privacy and purchase information.

For a preview or non-root deployment, supply a slash-prefixed base path at build time:

```bash
NEXT_PUBLIC_BASE_PATH=/repository-name npm run build
```

Leave `NEXT_PUBLIC_BASE_PATH` unset for `https://stemreader.app` or any other root-domain deployment.

## GitHub Pages

An optional workflow lives at `.github/workflows/deploy-pages.yml`.

1. Create or select a GitHub repository and push this project.
2. In repository settings, set Pages to use **GitHub Actions** as its source.
3. Run the workflow or push to the default branch configured in the workflow.
4. In Pages settings, set the custom domain to `stemreader.app` and enable **Enforce HTTPS** once GitHub has issued the certificate.

The checked-in `public/CNAME` file is copied to the static output. Keep it for the custom-domain deployment. Remove it for a GitHub project subpath or a non-GitHub host that does not use this file.

If the site is temporarily deployed at `https://OWNER.github.io/REPOSITORY/` without a custom domain, set the repository Actions variable `BASE_PATH` to `/REPOSITORY`. The included workflow passes that value into the build. Canonical metadata intentionally continues to point to the public product domain.

GitHub's official custom-domain guide: <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>

## Namecheap DNS

DNS is not changed by this repository. In Namecheap's Advanced DNS area, create the records GitHub currently shows for the Pages custom domain. Prefer GitHub's current documentation and the repository's Pages settings over copying addresses from an old guide.

General shape:

- For the apex `stemreader.app`, add the apex records GitHub currently requires.
- For an optional `www.stemreader.app`, add the CNAME target GitHub assigns to the account and configure the preferred redirect in Pages settings.
- Remove conflicting parking or URL-redirect records for the same host.
- Allow DNS and certificate issuance time before enabling strict redirects.

Namecheap's official host-record guide: <https://www.namecheap.com/support/knowledgebase/article.aspx/319/78/how-can-i-set-up-an-a-address-record-for-my-domain/>

Do not put credentials, verification tokens, or inference-service details in website source.

## Other static hosts

1. Delete `public/CNAME` if the provider does not use GitHub's custom-domain file.
2. Run `npm run build` with the correct optional `NEXT_PUBLIC_BASE_PATH`.
3. Upload `out/`.
4. Point the provider's custom-domain settings at `stemreader.app`.
5. Configure Namecheap using only that provider's current official DNS instructions.
6. Require HTTPS and route missing pages to `404.html`.

## Launch checklist

- Add the verified App Store URL in `app/site-config.ts`.
- Add the verified public support email in the same file.
- Confirm the copyright owner and year.
- Confirm the App Store listing's localized pricing and availability; the site deliberately publishes no hard-coded prices.
- Rebuild after every configuration change.
- Verify `https://stemreader.app`, `/privacy/`, `/support/`, `/sitemap.xml`, `/robots.txt`, `/site.webmanifest`, and a non-existent URL.

export const siteConfig = {
  name: 'STEMReader',
  siteUrl: 'https://stemreader.app',
  appStoreUrl: null as string | null,
  availabilityLabel: 'Coming soon to the App Store',
  supportEmail: null as string | null,
  copyrightOwner: 'STEMReader',
  copyrightYear: 2026,
  socialLinks: [] as Array<{ label: string; url: string }>,
};

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

export const assetPath = (path: string) => `${basePath}${path}`;

export const sitePath = (path: string) => `${basePath}${path}`;

export const supportContact = siteConfig.supportEmail
  ? { href: `mailto:${siteConfig.supportEmail}`, label: siteConfig.supportEmail }
  : null;

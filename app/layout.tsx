import type { Metadata, Viewport } from 'next';
import './globals.css';
import { assetPath, siteConfig } from './site-config';

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.siteUrl),
  title: 'STEMReader | Interactive STEM textbook reading',
  description:
    'Navigate references, generate textbook structure, solve detected problems with Apple Pencil, and attach handwritten notes to STEM PDFs.',
  alternates: { canonical: '/' },
  manifest: assetPath('/site.webmanifest'),
  icons: {
    icon: [
      { url: assetPath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: assetPath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: assetPath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.name,
    title: 'STEMReader | Interactive STEM textbook reading',
    description:
      'Navigate references, generate textbook structure, solve detected problems with Apple Pencil, and attach handwritten notes to STEM PDFs.',
    images: [{ url: assetPath('/og.png'), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STEMReader | Interactive STEM textbook reading',
    description:
      'Navigate references, generate textbook structure, solve detected problems with Apple Pencil, and attach handwritten notes to STEM PDFs.',
    images: [assetPath('/og.png')],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111318',
  colorScheme: 'dark',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: siteConfig.name,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'iPadOS, iOS, macOS',
  url: siteConfig.siteUrl,
  description:
    'STEMReader turns STEM textbook PDFs into an interactive study workspace with BookMaps, Floating References, generated navigation, Problem Solver, and PDF Notes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

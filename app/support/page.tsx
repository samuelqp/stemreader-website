import type { Metadata } from 'next';
import { SiteFooter, SiteHeader, SupportContactCard } from '../components';
import { assetPath, sitePath } from '../site-config';

export const metadata: Metadata = {
  title: 'Support | STEMReader',
  description: 'Help with importing PDFs, BookMaps, cloud and on-device scans, Apple Pencil, missing originals, purchases, privacy, and sync.',
  alternates: { canonical: '/support/' },
  openGraph: { title: 'Support | STEMReader', description: 'Help with importing PDFs, BookMaps, scans, Apple Pencil, purchases, privacy, and sync.', url: '/support/', images: [{ url: assetPath('/og.png'), width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Support | STEMReader', description: 'Help with importing PDFs, BookMaps, scans, Apple Pencil, purchases, privacy, and sync.', images: [assetPath('/og.png')] },
};

export default function SupportPage() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">Skip to main content</a><SiteHeader />
      <main id="main">
        <header className="page-hero shell"><a className="breadcrumb" href={sitePath('/')}>← STEMReader</a><h1>Get back to the page that matters.</h1><p>Find help with your library, BookMaps, Apple Pencil, purchases, and syncing.</p></header>
        <div className="shell prose-section"><div className="support-grid">
          <article className="support-topic"><h2>Importing a PDF</h2><ol><li>Open the Library.</li><li>Choose the import action and select a PDF from Files.</li><li>STEMReader adds the PDF to your library.</li></ol><p>You can rename it, place it in collections, and read it without creating a BookMap.</p></article>
          <article className="support-topic"><h2>What is a BookMap?</h2><p>A BookMap organizes your textbook into chapters, exercises, figures, and references. Use it to navigate Contents, Problems, and floating previews.</p></article>
          <article className="support-topic"><h2>Cloud scanning and your free first document</h2><p>Your first cloud-scanned textbook is free for up to 1,000 pages. STEMReader processes it one page at a time and saves your progress.</p></article>
          <article className="support-topic"><h2>Cancel or retry a scan</h2><p>You can cancel a scan at any time. When you retry, STEMReader picks up where it stopped.</p></article>
          <article className="support-topic"><h2>Scan on your device</h2><p>Choose on-device scanning when creating a BookMap to keep the scan on your device. This option is free.</p></article>
          <article className="support-topic"><h2>Recover a missing PDF on another device</h2><p>Find the original PDF in Files and reconnect it. Your synchronized BookMap and study data will be ready to use again.</p></article>
          <article className="support-topic"><h2>Apple Pencil requirements</h2><p>Handwritten solutions and PDF notes require an iPad with Apple Pencil or a compatible stylus. You can read and view synchronized work on other supported devices.</p></article>
          <article className="support-topic"><h2>Restore purchases</h2><p>Use Restore Purchases in the app while signed into the Apple account you used to buy your plan. Apple handles payment information.</p></article>
          <article className="support-topic"><h2>Manage your account and data</h2><p>You can remove documents and study work in the app. To permanently delete your account and synchronized data, open Settings, choose Account, then choose Delete Account. You can also email Support from the address associated with your account.</p><SupportContactCard /></article>
          <article className="support-topic"><h2>Privacy and synchronization</h2><p>Your original PDFs stay on your device. BookMaps, collections, notes, solutions, and reading progress can sync across devices. Cloud scanning processes one page at a time when you choose it.</p><a className="inline-link" href={sitePath('/privacy/')}>Read the privacy overview</a></article>
          <article className="support-topic"><h2>Still need help?</h2><p>Email us if you need more help.</p><SupportContactCard /></article>
        </div></div>
      </main><SiteFooter />
    </div>
  );
}

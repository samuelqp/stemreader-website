import type { Metadata } from 'next';
import { SiteFooter, SiteHeader, SupportContactCard } from '../components';
import { assetPath, sitePath } from '../site-config';

export const metadata: Metadata = {
  title: 'Support — STEMReader',
  description: 'Help with importing PDFs, BookMaps, cloud scans, Legacy Apple OCR, Apple Pencil, missing originals, purchases, privacy, and sync.',
  alternates: { canonical: '/support/' },
  openGraph: { title: 'Support — STEMReader', description: 'Help with importing PDFs, BookMaps, scans, Apple Pencil, purchases, privacy, and sync.', url: '/support/', images: [{ url: assetPath('/og.png'), width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Support — STEMReader', description: 'Help with importing PDFs, BookMaps, scans, Apple Pencil, purchases, privacy, and sync.', images: [assetPath('/og.png')] },
};

export default function SupportPage() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">Skip to main content</a><SiteHeader />
      <main id="main">
        <header className="page-hero shell"><a className="breadcrumb" href={sitePath('/')}>← STEMReader</a><h1>Get back to the page that matters.</h1><p>Setup guidance and clear answers for your Library, BookMaps, scans, Apple Pencil workspace, purchases, and synchronized study data.</p></header>
        <div className="shell prose-section"><div className="support-grid">
          <article className="support-topic"><h2>Importing a PDF</h2><ol><li>Open the Library.</li><li>Choose the import action and select a PDF from Files.</li><li>STEMReader copies it into app-managed local storage and creates a first-page thumbnail.</li></ol><p>You can rename it, place it in collections, and read it without creating a BookMap.</p></article>
          <article className="support-topic"><h2>What is a BookMap?</h2><p>A BookMap is a structured map of your PDF: chapters, sections, printed page numbers, equations, figures, tables, captions, exercises, and references between them. It powers generated Contents, Problems, and Floating References.</p></article>
          <article className="support-topic"><h2>Cloud scanning and your free first document</h2><p>Your first complete cloud-scanned document is free, up to 1,000 pages. The Document Analysis Engine sends one standalone page at a time to the authenticated service, saves successful results locally, and builds the BookMap incrementally.</p></article>
          <article className="support-topic"><h2>Cancel or retry a scan</h2><p>You can cancel scanning from its progress interface. Completed page results stay cached. Retrying resumes with the first missing page instead of discarding the completed work.</p></article>
          <article className="support-topic"><h2>Run Legacy Apple OCR</h2><p>Explicitly select Legacy Apple OCR when choosing the BookMap generation method. It uses Apple Vision, runs entirely on-device, and remains free. It does not start automatically when cloud analysis fails.</p></article>
          <article className="support-topic"><h2>Recover a missing PDF on another device</h2><p>Find the original PDF in Files and reconnect it. STEMReader verifies the file by SHA-256 fingerprint, then reuses the synchronized BookMap and study data without rescanning.</p></article>
          <article className="support-topic"><h2>Apple Pencil requirements</h2><p>Handwritten Problem Solver work and PDF-note editing require iPad hardware with Apple Pencil or compatible stylus input. One-finger pan and two-finger zoom are supported in the current PencilKit design. Other supported devices can provide reading and synchronized viewing.</p></article>
          <article className="support-topic"><h2>Restore purchases</h2><p>Use the restore-purchases action in the app&apos;s plan or settings interface while signed into the Apple account used for purchase. Purchases are processed by Apple; STEMReader does not receive payment-card details.</p></article>
          <article className="support-topic"><h2>Privacy and synchronization</h2><p>The complete original PDF is not uploaded to library sync. BookMaps, collections, notes, solutions, document metadata, and last-opened page can synchronize through your account. Cloud scanning securely processes one page at a time when selected.</p><a className="inline-link" href={sitePath('/privacy/')}>Read the privacy overview</a></article>
          <article className="support-topic"><h2>Still need help?</h2><p>A verified public support address is the final contact setup item for this site. Once added to the centralized configuration, it will appear here, in the footer, and on the privacy page.</p><SupportContactCard /></article>
        </div></div>
      </main><SiteFooter />
    </div>
  );
}

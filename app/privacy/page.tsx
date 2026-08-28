import type { Metadata } from 'next';
import { SiteFooter, SiteHeader, SupportContactCard } from '../components';
import { assetPath, sitePath } from '../site-config';

export const metadata: Metadata = {
  title: 'Privacy — STEMReader',
  description: 'How STEMReader handles original PDFs, page-by-page document analysis, BookMaps, synchronized study data, accounts, and purchases.',
  alternates: { canonical: '/privacy/' },
  openGraph: { title: 'Privacy — STEMReader', description: 'How STEMReader handles original PDFs, page-by-page document analysis, BookMaps, synchronized study data, accounts, and purchases.', url: '/privacy/', images: [{ url: assetPath('/og.png'), width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Privacy — STEMReader', description: 'How STEMReader handles original PDFs, BookMaps, analysis, and synchronized study data.', images: [assetPath('/og.png')] },
};

const sections = [
  ['overview', 'Overview'], ['pdfs', 'Original PDFs'], ['analysis', 'Document analysis'], ['sync', 'Accounts and sync'],
  ['logs', 'Logs and security'], ['purchases', 'Purchases'], ['website', 'This website'], ['choices', 'Your choices'], ['contact', 'Contact'],
];

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">Skip to main content</a><SiteHeader />
      <main id="main">
        <header className="page-hero shell"><a className="breadcrumb" href={sitePath('/')}>← STEMReader</a><h1>Privacy, explained around the document.</h1><p>STEMReader keeps the complete original PDF out of library sync while giving you a clear choice between page-by-page cloud analysis and free on-device Legacy Apple OCR.</p><span className="updated">Last updated: August 28, 2026</span></header>
        <div className="content-layout shell">
          <nav className="contents-nav" aria-label="Privacy page sections"><b>On this page</b>{sections.map(([id,label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
          <div>
            <section className="prose-section" id="overview"><h2>Overview</h2><p>STEMReader is an educational reading application for working with STEM textbook PDFs. This page describes the privacy boundaries of the app and this public website. It is written as a readable product overview and does not replace any rights or disclosures required by applicable law.</p><div className="notice-card"><b>The short version</b><p>Your complete original PDF stays in app-managed local storage and is never uploaded to library sync. If you choose cloud scanning, individual standalone PDF pages are securely processed one at a time. App-created study data can synchronize between your devices.</p></div></section>
            <section className="prose-section" id="pdfs"><h2>Original PDFs</h2><p>PDFs you import are stored in the app&apos;s local managed storage. <strong>The complete original PDF is not uploaded to Supabase library sync.</strong> On another device, you may need to locate the original PDF again. STEMReader verifies the file using a SHA-256 fingerprint and can then reuse synchronized BookMaps and study data without rescanning.</p><p>Native PDF destinations and external links remain available where the source PDF provides them.</p></section>
            <section className="prose-section" id="analysis"><h2>BookMap generation and document analysis</h2><h3>Document Analysis Engine</h3><p>If you explicitly choose cloud scanning, STEMReader sends one standalone PDF page at a time over authenticated HTTPS to the STEMReader inference service backed by PP-StructureV3. Successful page results are persisted locally and the BookMap is assembled incrementally. If a page fails or the scan is interrupted, completed pages remain cached so retry can resume with the first missing page.</p><p>BookMaps may contain small OCR snippets needed to define regions and relationships. The raw lossless page-analysis cache remains local and is not uploaded to Supabase.</p><h3>Legacy Apple OCR</h3><p>You may instead explicitly select Legacy Apple OCR, which uses Apple Vision and runs entirely on-device. It is always free. It is a separate choice, not an automatic fallback if cloud analysis fails.</p></section>
            <section className="prose-section" id="sync"><h2>Accounts and synchronization</h2><p>The app requires an account and supports Sign in with Apple, GitHub sign-in, and email/password. Supabase provides authentication and synchronization.</p><p>The following app-created data can synchronize between your devices:</p><ul><li>Document metadata</li><li>Collections and collection memberships</li><li>BookMaps and native navigation metadata</li><li>PDF Notes and handwritten solutions</li><li>Last-opened page</li></ul><p>Because the complete original PDF is not part of library sync, a PDF may appear as missing on another device until you reconnect the matching original.</p></section>
            <section className="prose-section" id="logs"><h2>Logs and security</h2><p>Access tokens, PDF page contents, and complete document-analysis request or response bodies are not written to app logs. Cloud document analysis uses authenticated HTTPS. Like any service, technical metadata may be processed as needed to operate, secure, and troubleshoot the service.</p></section>
            <section className="prose-section" id="purchases"><h2>Purchases</h2><p>Purchases are processed by Apple. STEMReader sends Apple&apos;s signed transaction representation for verification and does not receive your payment-card details. Current localized pricing is shown in the App Store.</p></section>
            <section className="prose-section" id="website"><h2>This website</h2><p>This is a static marketing website. It has no account login, advertising trackers, analytics, cookies, or cookie-dependent services. It does not call the STEMReader inference endpoint and does not contain app credentials.</p><p>If these website practices change, this page should be updated before the change is deployed.</p></section>
            <section className="prose-section" id="choices"><h2>Your choices</h2><ul><li>Choose whether to use page-by-page cloud analysis or explicitly select on-device Legacy Apple OCR.</li><li>Cancel a document scan; completed results remain available for a later retry.</li><li>Manage PDF Notes and handwritten solutions in the app, including editing or deleting them where supported.</li><li>Use Apple purchase-management tools to manage subscriptions and restore purchases.</li></ul></section>
            <section className="prose-section" id="contact"><h2>Contact</h2><p>A verified public support address has not yet been supplied. Add it in the centralized site configuration before launch to turn this message into an email link throughout the site.</p><SupportContactCard /></section>
          </div>
        </div>
      </main><SiteFooter />
    </div>
  );
}

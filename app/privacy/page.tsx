import type { Metadata } from 'next';
import { SiteFooter, SiteHeader, SupportContactCard } from '../components';
import { assetPath, sitePath } from '../site-config';

export const metadata: Metadata = {
  title: 'Privacy | STEMReader',
  description: 'How STEMReader handles original PDFs, page-by-page document analysis, BookMaps, synchronized study data, accounts, and purchases.',
  alternates: { canonical: '/privacy/' },
  openGraph: { title: 'Privacy | STEMReader', description: 'How STEMReader handles original PDFs, page-by-page document analysis, BookMaps, synchronized study data, accounts, and purchases.', url: '/privacy/', images: [{ url: assetPath('/og.png'), width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Privacy | STEMReader', description: 'How STEMReader handles original PDFs, BookMaps, analysis, and synchronized study data.', images: [assetPath('/og.png')] },
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
        <header className="page-hero shell"><a className="breadcrumb" href={sitePath('/')}>← STEMReader</a><h1>How STEMReader handles your data.</h1><p>Your original PDFs stay on your device. You choose whether to scan pages in the cloud or on your device.</p><span className="updated">Last updated: September 14, 2026</span></header>
        <div className="content-layout shell">
          <nav className="contents-nav" aria-label="Privacy page sections"><b>On this page</b>{sections.map(([id,label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
          <div>
            <section className="prose-section" id="overview"><h2>Overview</h2><p>STEMReader helps you read and study textbook PDFs. This overview explains how the app and website handle your documents and study data.</p><div className="notice-card"><b>The short version</b><p>Your original PDFs stay on your device. If you choose cloud scanning, STEMReader securely processes one page at a time. Your BookMaps and study work can sync across devices.</p></div></section>
            <section className="prose-section" id="pdfs"><h2>Original PDFs</h2><p>PDFs you import are stored on your device. <strong>The complete original PDF is not uploaded when your library syncs.</strong> On another device, you may need to reconnect the same PDF. Your synchronized BookMap and study work can then be used again without rescanning.</p><p>Native PDF destinations and external links remain available where the source PDF provides them.</p></section>
            <section className="prose-section" id="analysis"><h2>BookMap generation and document analysis</h2><h3>Document Analysis Engine</h3><p>If you choose cloud scanning, STEMReader securely sends one PDF page at a time for analysis. Completed pages are saved on your device, so an interrupted scan can resume where it stopped.</p><p>BookMaps may include short text excerpts needed to identify parts of a page. Detailed scan results remain on your device.</p><h3>Legacy Apple OCR</h3><p>You can choose Legacy Apple OCR to scan on your device for free. This is a separate option you select when creating a BookMap.</p></section>
            <section className="prose-section" id="sync"><h2>Accounts and synchronization</h2><p>An account lets you sign in and sync your study work across devices. You can sign in with Apple, GitHub, or email and password.</p><p>The following app-created data can synchronize between your devices:</p><ul><li>Document metadata</li><li>Collections and collection memberships</li><li>BookMaps and native navigation metadata</li><li>PDF Notes and handwritten solutions</li><li>Last-opened page</li></ul><p>Because original PDFs do not sync, you may need to reconnect a PDF on another device.</p></section>
            <section className="prose-section" id="logs"><h2>Logs and security</h2><p>STEMReader does not write access tokens, PDF page contents, or full scan requests and responses to app logs. Cloud scans use secure connections. Technical information may be processed to keep the service working and secure.</p></section>
            <section className="prose-section" id="purchases"><h2>Purchases</h2><p>Apple processes purchases. STEMReader verifies purchases but does not receive your payment-card details. You can see current pricing in the app when available.</p></section>
            <section className="prose-section" id="website"><h2>This website</h2><p>This website does not offer account sign-in or use advertising trackers, analytics, or cookies.</p><p>Contact us if you have a question about privacy.</p></section>
            <section className="prose-section" id="choices"><h2>Your choices</h2><ul><li>Choose cloud scanning or free on-device scanning when creating a BookMap.</li><li>Cancel a document scan; completed results remain available for a later retry.</li><li>Manage PDF Notes and handwritten solutions in the app, including editing or deleting them where supported.</li><li>Use Apple purchase-management tools to manage subscriptions and restore purchases.</li></ul></section>
            <section className="prose-section" id="contact"><h2>Contact</h2><p>Email us with any privacy questions.</p><SupportContactCard /></section>
          </div>
        </div>
      </main><SiteFooter />
    </div>
  );
}

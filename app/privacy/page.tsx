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
  ['overview', 'Overview'], ['data', 'Data we collect'], ['pdfs', 'Original PDFs'], ['analysis', 'Document analysis'],
  ['sync', 'Accounts and sync'], ['providers', 'Service providers'], ['retention', 'Retention and deletion'],
  ['purchases', 'Purchases'], ['website', 'This website'], ['choices', 'Your choices'], ['contact', 'Contact'],
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
            <section className="prose-section" id="overview"><h2>Overview</h2><p>This policy explains what STEMReader collects, why it is used, and the choices you have.</p><div className="notice-card"><b>The short version</b><p>Your original PDFs stay on your device. If you choose cloud scanning, STEMReader securely processes one page at a time. Your account, BookMaps, and study work can sync across devices. STEMReader does not sell your data or use it for advertising.</p></div></section>
            <section className="prose-section" id="data"><h2>Data we collect and why</h2><ul><li><strong>Account data:</strong> your email address, display name when provided, sign-in provider, and an internal account identifier. This is used to authenticate you, secure your account, and synchronize your library.</li><li><strong>Library and study data:</strong> document titles and metadata, collections, BookMaps, reading progress, PDF notes, and handwritten solutions. This is used to provide the app and synchronize your work.</li><li><strong>Scanning and purchase data:</strong> scan usage and status, plus signed Apple transaction information needed to verify purchases and deliver credits or subscription access.</li><li><strong>Service and security data:</strong> limited technical information needed to operate, troubleshoot, prevent abuse, and protect the service.</li></ul></section>
            <section className="prose-section" id="pdfs"><h2>Original PDFs</h2><p>PDFs you import are stored on your device. <strong>The complete original PDF is not uploaded when your library syncs.</strong> On another device, you may need to reconnect the same PDF. Your synchronized BookMap and study work can then be used again without rescanning.</p><p>Native PDF destinations and external links remain available where the source PDF provides them.</p></section>
            <section className="prose-section" id="analysis"><h2>BookMap generation and document analysis</h2><h3>Cloud scanning</h3><p>If you choose cloud scanning, STEMReader securely sends one PDF page at a time for analysis. Pages are kept only as needed to complete the scan and protect the service. Completed results are saved on your device so an interrupted scan can resume where it stopped.</p><p>BookMaps may include short text excerpts needed to identify parts of a page.</p><h3>On-device scanning</h3><p>You can instead create a BookMap entirely on your device for free. This is a separate option you choose when starting a scan.</p></section>
            <section className="prose-section" id="sync"><h2>Accounts and synchronization</h2><p>An account lets you sign in and sync your study work across devices. You can sign in with Apple, GitHub, or email and password.</p><p>The following app-created data can synchronize between your devices:</p><ul><li>Document information</li><li>Collections and collection memberships</li><li>BookMaps and PDF navigation information</li><li>PDF notes and handwritten solutions</li><li>Reading progress</li></ul><p>Because original PDFs do not sync, you may need to reconnect a PDF on another device.</p></section>
            <section className="prose-section" id="providers"><h2>Service providers</h2><p>STEMReader uses Supabase for account authentication and data synchronization, Apple and GitHub when you choose those sign-in methods, Apple for App Store purchases, and a cloud document-processing service when you choose cloud scanning. These providers process information only to provide their services and under their own privacy terms.</p><p>STEMReader does not use advertising trackers or sell personal data.</p></section>
            <section className="prose-section" id="retention"><h2>Retention and deletion</h2><p>Original PDFs and other on-device data remain until you remove the document or app data. Account and synchronized study data are retained while your account is active and as needed to provide the service.</p><p>To permanently delete your account and synchronized data, open Settings in STEMReader, choose Account, then choose Delete Account. You can also email Support from the address associated with your account. We may retain limited records where required for legal, security, fraud-prevention, or transaction-reconciliation purposes.</p><SupportContactCard /></section>
            <section className="prose-section" id="purchases"><h2>Purchases</h2><p>Apple processes purchases. STEMReader sends Apple&apos;s signed transaction information for verification but does not receive your payment-card details. You can see current pricing in the app.</p></section>
            <section className="prose-section" id="website"><h2>This website</h2><p>This website does not offer account sign-in or use advertising trackers, analytics, or cookies.</p><p>Contact us if you have a question about privacy.</p></section>
            <section className="prose-section" id="choices"><h2>Your choices</h2><ul><li>Choose cloud scanning or free on-device scanning when creating a BookMap.</li><li>Cancel a document scan; completed results remain available for a later retry.</li><li>Edit or delete documents, PDF notes, and handwritten solutions in the app.</li><li>Use Apple purchase-management tools to manage subscriptions and restore purchases.</li><li>Delete your account and synchronized data in Settings, or contact Support for help.</li></ul></section>
            <section className="prose-section" id="contact"><h2>Contact</h2><p>Email us with any privacy questions.</p><SupportContactCard /></section>
          </div>
        </div>
      </main><SiteFooter />
    </div>
  );
}

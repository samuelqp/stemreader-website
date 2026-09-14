import { assetPath, siteConfig, sitePath, supportContact } from './site-config';

export function Brand({ home = false }: { home?: boolean }) {
  return (
    <a className="brand" href={home ? '#top' : sitePath('/')} aria-label="STEMReader home">
      <picture>
        <source srcSet={assetPath('/assets/stemreader-icon-dark.webp')} type="image/webp" />
        <img src={assetPath('/assets/stemreader-icon-dark.png')} alt="" width="42" height="42" />
      </picture>
      <span>STEMReader</span>
    </a>
  );
}

export function AvailabilityButton({ compact = false }: { compact?: boolean }) {
  return siteConfig.appStoreUrl ? (
    <a className={`button button-primary${compact ? ' compact' : ''}`} href={siteConfig.appStoreUrl} rel="noreferrer">
      Download on the App Store
    </a>
  ) : (
    <span className={`button button-primary button-disabled${compact ? ' compact' : ''}`} aria-label={siteConfig.availabilityLabel}>
      <span className="status-dot" aria-hidden="true" /> {siteConfig.availabilityLabel}
    </span>
  );
}

const navItems = [
  ['Features', '/#features'],
  ['How it works', '/#how-it-works'],
  ['Privacy', '/#privacy'],
  ['FAQ', '/#faq'],
];

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className="site-header" id="top">
      <nav className="nav shell" aria-label="Primary navigation">
        <Brand home={home} />
        <div className="nav-links">
          {navItems.map(([label, href]) => <a key={href} href={home ? href.slice(1) : sitePath(href)}>{label}</a>)}
        </div>
        <div className="desktop-cta"><AvailabilityButton compact /></div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation" role="button"><span /><span /><span /></summary>
          <div className="mobile-menu-panel">
            {navItems.map(([label, href]) => <a key={href} href={home ? href.slice(1) : sitePath(href)}>{label}</a>)}
            <a href={sitePath('/support/')}>Support</a>
            <div className="mobile-availability"><AvailabilityButton /></div>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Turn static STEM PDFs into an interactive study workspace.</p>
        </div>
        <div className="footer-links">
          <div><b>Product</b><a href={sitePath('/#features')}>Features</a><a href={sitePath('/#how-it-works')}>How it works</a><a href={sitePath('/#plans')}>Plans</a></div>
          <div><b>Help</b><a href={sitePath('/support/')}>Support</a><a href={sitePath('/#faq')}>FAQ</a><a href={supportContact.href}>Contact</a></div>
          <div><b>Legal</b><a href={sitePath('/privacy/')}>Privacy</a><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer" aria-label="Apple Standard EULA (opens in a new tab)">Terms of Use ↗</a></div>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {siteConfig.copyrightYear} {siteConfig.copyrightOwner}</span><span>stemreader.app</span></div>
    </footer>
  );
}

export function SupportContactCard() {
  return <a className="contact-card" href={supportContact.href}><span>Contact support</span><strong>{supportContact.label}</strong></a>;
}

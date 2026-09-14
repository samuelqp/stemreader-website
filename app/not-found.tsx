import type { Metadata } from 'next';
import { SiteHeader } from './components';
import { sitePath } from './site-config';

export const metadata: Metadata = {
  title: 'Page not found | STEMReader',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <><SiteHeader /><main className="not-found"><div className="not-found-card"><span className="error-code">404</span><p className="eyebrow">Reference not found</p><h1>This page slipped out of the BookMap.</h1><p>The destination may have moved, or the link may be incomplete. Return to STEMReader and keep exploring.</p><a className="button button-primary" href={sitePath('/')}>Back to STEMReader</a></div></main></>;
}

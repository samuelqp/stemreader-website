import Image from 'next/image';
import { AvailabilityButton, SiteFooter, SiteHeader } from './components';
import { assetPath, sitePath } from './site-config';

function ProductVisual() {
  return (
    <figure className="product-stage">
      <Image className="hero-screen" src={assetPath('/screenshots/equation-reference-preview.PNG')} width={2353} height={1588} priority alt="STEMReader showing a textbook page with an equation open in a floating reference preview" />
      <Image className="hero-sidebar" src={assetPath('/screenshots/contents.jpeg')} width={1110} height={1478} alt="STEMReader Contents sidebar with chapters and PDF page numbers" />
    </figure>
  );
}

function MiniVisual({ type }: { type: 'references' | 'navigation' | 'solver' | 'notes' | 'library' }) {
  if (type === 'references' || type === 'notes') {
    const pair = type === 'references'
      ? { source: 'figure-reference-source.PNG', preview: 'figure-reference-preview.PNG', sourceHeight: 1587, previewHeight: 1588, sourceAlt: 'Textbook page with Figure 3.13 highlighted as a reference', previewAlt: 'Figure 3.13 opened in a floating preview over the textbook page' }
      : { source: 'note-source.jpeg', preview: 'note-preview.jpeg', sourceHeight: 1592, previewHeight: 1588, sourceAlt: 'Textbook passage selected for a PDF note', previewAlt: 'Handwritten note opened over the selected textbook passage' };
    return (
      <figure className="feature-visual comparison-visual">
        <div className="comparison-panel"><span>On the page</span><Image src={assetPath(`/screenshots/${pair.source}`)} width={2360} height={pair.sourceHeight} alt={pair.sourceAlt} /></div>
        <span className="comparison-arrow" aria-hidden="true">→</span>
        <div className="comparison-panel"><span>Open the preview</span><Image src={assetPath(`/screenshots/${pair.preview}`)} width={2360} height={pair.previewHeight} alt={pair.previewAlt} /></div>
      </figure>
    );
  }
  if (type === 'navigation') return (
    <figure className="feature-visual navigation-visual">
      <Image src={assetPath('/screenshots/contents.jpeg')} width={1110} height={1478} alt="Contents sidebar listing textbook chapters and PDF page numbers" />
      <Image src={assetPath('/screenshots/problems.jpeg')} width={1056} height={1468} alt="Problems sidebar showing exercises and a solved indicator" />
    </figure>
  );
  const screenshots = {
    solver: { file: 'problem-solver.jpeg', width: 2360, height: 1589, alt: 'Problem Solver with an exercise pinned above a handwritten solution' },
    library: { file: 'library.PNG', width: 2360, height: 1589, alt: 'STEMReader Library showing collections and imported textbooks' },
  }[type];
  return (
    <figure className="feature-visual">
      <Image src={assetPath(`/screenshots/${screenshots.file}`)} width={screenshots.width} height={screenshots.height} alt={screenshots.alt} />
    </figure>
  );
}

const steps = [
  { number: '01', title: 'Import your PDF', text: 'Choose a textbook PDF from Files. Your original stays on your device.' },
  { number: '02', title: 'Create a BookMap', text: 'Create a BookMap with cloud scanning, or choose the free on-device option.' },
  { number: '03', title: 'Read, preview, and solve', text: 'Browse chapters and exercises, preview references, and work through problems in one place.' },
];

const faqs = [
  ['What exactly is a BookMap?', 'A BookMap organizes the chapters, pages, exercises, figures, and references in your PDF. It makes long textbooks easier to explore while leaving the original document intact.'],
  ['Does STEMReader solve homework or generate answers?', 'No. STEMReader helps you find and work through problems in your textbook. You write the solution yourself in the iPad workspace.'],
  ['Does my original PDF get uploaded?', 'Your original PDF stays on your device. If you choose cloud scanning, STEMReader securely processes one page at a time to create its BookMap.'],
  ['What is included for free?', 'Reading is free. Your first cloud-scanned textbook is free for up to 1,000 pages. You can also choose free on-device scanning.'],
  ['Can I write with Apple Pencil on every device?', 'Handwriting and PDF-note editing need an iPad with Apple Pencil or a compatible stylus. You can read and view synchronized notes on other supported devices.'],
  ['What happens if a scan is interrupted?', 'Your completed pages are saved. When you retry, scanning picks up where it stopped.'],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <SiteHeader home />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="math-glyphs" aria-hidden="true"><span>∫</span><span>π</span><span>Δ</span><span>∞</span></div>
          <div className="hero-copy">
            <p className="eyebrow">Interactive STEM reading for iPad</p>
            <h1 id="hero-title">Turn static STEM PDFs into an <span>interactive study workspace.</span></h1>
            <p className="hero-lede">STEMReader finds chapters, exercises, figures, and references in your textbook PDFs. Move between them, take notes, and work through problems without losing your place.</p>
            <div className="offer-badge"><span aria-hidden="true">✦</span> Your first textbook scan is free for up to 1,000 pages.</div>
            <div className="hero-actions"><AvailabilityButton /><a className="button button-secondary" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
            <p className="privacy-note"><span aria-hidden="true">✓</span> Reading is free. Your original PDFs stay on your device.</p>
          </div>
          <ProductVisual />
        </section>

        <section className="benefit-strip shell" aria-label="Key benefits">
          <article><span className="benefit-icon">↗</span><div><b>Floating References</b><small>Preview without losing your place</small></div></article>
          <article><span className="benefit-icon">≡</span><div><b>Generated navigation</b><small>Chapters, sections, and problems</small></div></article>
          <article><span className="benefit-icon">✎</span><div><b>Apple Pencil solving</b><small>A focused canvas for each exercise</small></div></article>
        </section>

        <section className="section shell process-section" id="how-it-works" aria-labelledby="process-title">
          <div className="section-heading centered"><p className="eyebrow">From PDF to BookMap</p><h2 id="process-title">Find your way through long textbooks.</h2><p>Bring chapters, references, and exercises together in three steps.</p></div>
          <div className="steps-grid">
            {steps.map((step, index) => <article className="step-card" key={step.number}><span className="step-number" aria-hidden="true">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>{index < 2 && <span className="step-arrow" aria-hidden="true">→</span>}</article>)}
          </div>
          <p className="process-note"><span aria-hidden="true">↻</span> If a scan is interrupted, you can pick up where it stopped.</p>
        </section>

        <section className="section feature-section shell" id="features" aria-labelledby="features-title">
          <div className="section-heading"><p className="eyebrow">Built for dense material</p><h2 id="features-title">Stay in the flow of the page.</h2><p>Explore your textbook and make room for your own work.</p></div>
          <div className="feature-row">
            <div className="feature-copy"><span className="feature-index">01 · Floating References</span><h3>Follow references without losing your place.</h3><p>Tap an equation, figure, or table reference to see it in a floating preview, even when the original PDF has no links.</p><ul><li>Keep the page you&apos;re reading in view</li><li>Move the preview where it helps</li><li>Use existing PDF links when available</li></ul></div>
            <MiniVisual type="references" />
          </div>
          <div className="feature-row reverse">
            <div className="feature-copy"><span className="feature-index">02 · Contents + Problems</span><h3>Find your way through any textbook.</h3><p>Browse chapters and sections in Contents. Find exercises in a separate Problems list.</p><ul><li>Jump between chapters and sections</li><li>Go straight to the right PDF page</li><li>Filter for solved problems</li></ul></div>
            <MiniVisual type="navigation" />
          </div>
          <div className="feature-row">
            <div className="feature-copy"><span className="feature-index">03 · Problem Solver</span><h3>Go from exercise to solution.</h3><p>Open an exercise with the question in view and room to write your solution with Apple Pencil.</p><ul><li>Pen, eraser, colors, undo, and redo</li><li>One-finger pan and two-finger zoom</li><li>Autosave, reopen, and export as PDF</li></ul><p className="device-note">Handwriting requires an iPad with Apple Pencil or a compatible stylus.</p></div>
            <MiniVisual type="solver" />
          </div>
          <div className="feature-row reverse">
            <div className="feature-copy"><span className="feature-index">04 · PDF Notes</span><h3>Add context exactly where it belongs.</h3><p>Select part of a page, add a handwritten note, and find it again by its colored outline.</p><ul><li>Keep the selected excerpt above the note canvas</li><li>Choose cyan, blue, green, yellow, or pink</li><li>Preview, edit, recolor, or delete later</li></ul></div>
            <MiniVisual type="notes" />
          </div>
          <div className="feature-row">
            <div className="feature-copy"><span className="feature-index">05 · Library</span><h3>Your technical library, organized.</h3><p>Import PDFs, organize them into collections, and find the book you need.</p><ul><li>Sort by name, date, size, page count, or availability</li><li>Restore your most recent reading position</li><li>Reconnect a missing PDF on another device</li></ul></div>
            <MiniVisual type="library" />
          </div>
        </section>

        <section className="section privacy-section" id="privacy" aria-labelledby="privacy-title">
          <div className="shell privacy-layout">
            <div className="privacy-copy"><p className="eyebrow">Your PDFs, your choice</p><h2 id="privacy-title">Your original stays local. Your study work travels with you.</h2><p>Your original PDF stays on your device. Choose cloud scanning when you want to create a BookMap; your notes and study progress can sync across devices.</p><a className="text-link" href={sitePath('/privacy/')}>Read the full privacy overview <span aria-hidden="true">→</span></a></div>
            <div className="privacy-map" aria-label="How STEMReader handles document and study data">
              <article><span className="privacy-symbol" aria-hidden="true">01</span><div><b>On your device</b><p>Original PDFs and scan progress.</p></div></article>
              <div className="privacy-connector"><span>When you choose cloud scanning</span><i aria-hidden="true">→</i></div>
              <article><span className="privacy-symbol" aria-hidden="true">02</span><div><b>Page-by-page analysis</b><p>One page at a time, sent securely.</p></div></article>
              <div className="privacy-connector"><span>App-created study data</span><i aria-hidden="true">↕</i></div>
              <article><span className="privacy-symbol" aria-hidden="true">03</span><div><b>Secure synchronization</b><p>BookMaps, collections, notes, solutions, and reading progress.</p></div></article>
            </div>
          </div>
          <div className="shell trust-row"><span>No advertising trackers</span><span>No website analytics</span><span>No payment-card access</span><span>Original PDFs stay on your device</span></div>
        </section>

        <section className="section shell plans-section" id="plans" aria-labelledby="plans-title">
          <div className="section-heading centered"><p className="eyebrow">Read freely. Scan when it helps.</p><h2 id="plans-title">Start with a full textbook.</h2><p>Choose how you want to create a BookMap.</p></div>
          <div className="plans-grid">
            <article className="plan-card featured"><span className="plan-label">FIRST CLOUD SCAN</span><h3>Your first textbook scan is free for up to 1,000 pages.</h3><p>Create a BookMap for your first textbook at no cost.</p><ul><li>Secure, page-by-page scanning</li><li>Resume an interrupted scan</li><li>A complete BookMap for one document</li></ul></article>
            <article className="plan-card"><span className="plan-label">AFTER YOUR FIRST SCAN</span><h3>Credits or STEMReader Plus</h3><p>For more cloud scans, choose document credits or a STEMReader Plus subscription.</p><small>See current pricing in the app.</small></article>
            <article className="plan-card"><span className="plan-label">ALWAYS FREE</span><h3>On-device scanning</h3><p>Create a BookMap without cloud processing. On-device scanning is always free.</p><small>Reading your imported PDFs also remains free.</small></article>
          </div>
        </section>

        <section className="section faq-section shell" id="faq" aria-labelledby="faq-title">
          <div className="faq-intro"><p className="eyebrow">Good questions</p><h2 id="faq-title">Before you turn the page.</h2><p>Find more help in <a className="inline-link" href={sitePath('/support/')}>Support</a>.</p></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="section shell final-cta" aria-labelledby="cta-title">
          <div className="cta-grid" aria-hidden="true"><span>∫</span><span>∑</span><span>π</span><span>√</span><span>Δ</span><span>∞</span></div>
          <div><p className="eyebrow">A better way through the textbook</p><h2 id="cta-title">Keep your place. Follow the idea.</h2><p>Bring structure, references, handwritten notes, and problem-solving space to the STEM PDFs you already own.</p></div>
          <div className="cta-actions"><AvailabilityButton /><a className="button button-light" href="#features">Explore features <span aria-hidden="true">↑</span></a></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

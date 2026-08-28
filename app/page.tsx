import { AvailabilityButton, SiteFooter, SiteHeader } from './components';
import { sitePath } from './site-config';

function ProductVisual() {
  return (
    <div className="product-stage" aria-label="Marketing illustration of STEMReader mapping a textbook page with interactive references and problems" role="img">
      <div className="tablet">
        <div className="reader-bar"><span className="reader-dots"><i /><i /><i /></span><span className="page-count">148 / 612</span><span className="reader-tool">•••</span></div>
        <div className="reader-body">
          <aside className="book-sidebar">
            <div className="side-tabs"><b>Contents</b><span>Problems</span></div>
            <ol><li><span>1</span> Foundations</li><li className="indented"><span>1.1</span> Fields</li><li className="active"><span>2</span> Maxwell&apos;s equations</li><li className="indented"><span>2.1</span> Flux</li><li><span>3</span> Applications</li></ol>
          </aside>
          <div className="paper">
            <span className="chapter-label">CHAPTER 2</span><h3>Fields and flux</h3>
            <div className="text-lines"><i /><i /><i /></div>
            <p className="reference-line">From <strong>Eq. (3.2)</strong>, the field through a closed surface...</p>
            <div className="text-lines short"><i /><i /><i /></div>
            <div className="exercise"><span>DETECTED PROBLEM</span><b>Exercise 4.1</b><p>Find the enclosed charge for the surface shown.</p></div>
            <div className="note-outline" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="equation-card"><div><span className="mini-icon">S</span><b>Equation 3.2</b><span aria-hidden="true">×</span></div><p>∇·E = ρ / ε₀</p><small>Drag to keep this reference nearby</small></div>
      <div className="solver-card"><div className="solver-head"><b>Solution</b><span>Saved</span></div><div className="pinned-problem">Exercise 4.1 <span>↗</span></div><div className="canvas-lines"><i /><i /><i /></div><div className="violet-stroke">∿∿⌁</div></div>
    </div>
  );
}

function MiniVisual({ type }: { type: 'references' | 'navigation' | 'solver' | 'notes' | 'library' }) {
  if (type === 'references') return (
    <div className="feature-mock mock-references" aria-hidden="true">
      <div className="mock-page"><span className="mock-kicker">ELECTROMAGNETISM</span><i /><i /><p>Using <b>Eq. (3.2)</b>, evaluate the flux.</p><i /><i /></div>
      <div className="mock-float"><small>Equation 3.2</small><strong>∇·E = ρ / ε₀</strong><span>p. 148</span></div>
      <span className="cursor-ring">↗</span>
    </div>
  );
  if (type === 'navigation') return (
    <div className="feature-mock mock-navigation" aria-hidden="true">
      <div className="mock-side"><b>Contents</b><span>01 · Foundations</span><span className="nested">1.1 · Fields</span><span className="selected">02 · Kinematics</span><span className="nested">2.1 · Motion</span><span>03 · Dynamics</span></div>
      <div className="mock-side problems"><b>Problems</b><span><i className="solved" /> 2.1 · Vectors</span><span><i /> 2.2 · Motion</span><span><i /> 2.3 · Velocity</span><small>1 of 3 solved</small></div>
    </div>
  );
  if (type === 'solver') return (
    <div className="feature-mock mock-solver" aria-hidden="true">
      <div className="solver-toolbar"><span>‹</span><b>Problem Solver</b><div><i className="ink-blue" /><i className="ink-red" /><i className="ink-green" /><i className="ink-violet" /></div></div>
      <div className="problem-pin"><small>EXERCISE 4.1</small><p>Show that the divergence of the field is proportional to charge density.</p></div>
      <div className="solver-paper"><span>∇ · E = ρ / ε₀</span><b>∿⌁</b></div>
    </div>
  );
  if (type === 'notes') return (
    <div className="feature-mock mock-notes" aria-hidden="true">
      <div className="note-source"><span>SELECTED REGION</span><i /><i /><i /><div /></div>
      <div className="note-canvas"><small>PDF Note</small><strong>θ = ∫ ω dt</strong><b>⌁∿</b><div className="note-colors"><i /><i /><i /><i /><i /></div></div>
    </div>
  );
  return (
    <div className="feature-mock mock-library" aria-hidden="true">
      <div className="library-head"><b>Library</b><span>⌕ Search textbooks</span></div>
      <div className="book-grid"><div><i className="book-cover blue-book">∫</i><b>Field Theory</b><small>612 pages · page 148</small></div><div><i className="book-cover red-book">Σ</i><b>Applied Mechanics</b><small>384 pages · synced</small></div><div><i className="book-cover violet-book">π</i><b>Linear Algebra</b><small>426 pages · available</small></div></div>
      <div className="sync-pill">✓ Study data synced</div>
    </div>
  );
}

const steps = [
  { number: '01', title: 'Import your PDF', text: 'Choose a textbook from Files. The complete original stays in app-managed local storage.' },
  { number: '02', title: 'Create a BookMap', text: 'Choose the Document Analysis Engine for page-by-page cloud analysis, or select free Legacy Apple OCR on-device.' },
  { number: '03', title: 'Read, preview, and solve', text: 'Navigate detected structure, follow references, and open exercises in a focused solution workspace.' },
];

const faqs = [
  ['What exactly is a BookMap?', 'A BookMap is STEMReader’s structured map of a PDF: chapters, sections, printed page numbers, equations, figures, tables, captions, exercises, and the references connecting them. It powers navigation and interactive references without changing the original PDF.'],
  ['Does STEMReader solve homework or generate answers?', 'No. STEMReader is not an answer generator or homework-solving chatbot. It helps you navigate and work with your own textbook PDFs, and gives you a handwriting workspace for solving problems yourself.'],
  ['Does my original PDF get uploaded?', 'Not to library sync. Your complete original PDF stays in app-managed local storage. If you choose cloud scanning, the app securely sends one standalone page at a time over authenticated HTTPS to the document-analysis service.'],
  ['What is included for free?', 'Reading remains free. Your first complete cloud-scanned document is free, up to 1,000 pages, and the explicitly selected Legacy Apple OCR path remains free and runs on-device.'],
  ['Can I write with Apple Pencil on every device?', 'Handwritten problem solving and PDF-note editing are designed for iPad hardware with Apple Pencil or compatible stylus input. Other supported devices can provide reading and viewing experiences, including viewing synchronized notes.'],
  ['What happens if a scan is interrupted?', 'Completed page results remain cached locally. When you retry, STEMReader resumes from the first missing page instead of starting the entire BookMap again.'],
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
            <p className="hero-lede">STEMReader maps the equations, figures, tables, references, chapters, and exercises inside your textbooks—so you can jump, preview, annotate, and solve without losing your place.</p>
            <div className="offer-badge"><span aria-hidden="true">✦</span> Your first full textbook scan is free — up to 1,000 pages.</div>
            <div className="hero-actions"><AvailabilityButton /><a className="button button-secondary" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
            <p className="privacy-note"><span aria-hidden="true">✓</span> Reading stays free. Original PDFs remain on your device; cloud analysis securely processes one page at a time when you choose to scan.</p>
          </div>
          <ProductVisual />
        </section>

        <section className="benefit-strip shell" aria-label="Key benefits">
          <article><span className="benefit-icon">↗</span><div><b>Floating References</b><small>Preview without losing your place</small></div></article>
          <article><span className="benefit-icon">≡</span><div><b>Generated navigation</b><small>Chapters, sections, and problems</small></div></article>
          <article><span className="benefit-icon">✎</span><div><b>Apple Pencil solving</b><small>A focused canvas for each exercise</small></div></article>
        </section>

        <section className="section shell process-section" id="how-it-works" aria-labelledby="process-title">
          <div className="section-heading centered"><p className="eyebrow">From PDF to BookMap</p><h2 id="process-title">Structure for textbooks that never had it.</h2><p>Three steps turn a long, static PDF into a workspace designed for technical reading.</p></div>
          <div className="steps-grid">
            {steps.map((step, index) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><div className="step-icon" aria-hidden="true">{index === 0 ? 'PDF' : index === 1 ? '⌁' : '↗'}</div><h3>{step.title}</h3><p>{step.text}</p>{index < 2 && <span className="step-arrow" aria-hidden="true">→</span>}</article>)}
          </div>
          <p className="process-note"><span aria-hidden="true">↻</span> Page results are saved as analysis progresses. If interrupted, retry resumes with the first missing page.</p>
        </section>

        <section className="section feature-section shell" id="features" aria-labelledby="features-title">
          <div className="section-heading"><p className="eyebrow">Built for dense material</p><h2 id="features-title">Stay in the flow of the page.</h2><p>STEMReader adds structure and working space around your PDF while preserving the source you chose.</p></div>
          <div className="feature-row">
            <div className="feature-copy"><span className="feature-index">01 · Floating References</span><h3>Follow references without losing your place.</h3><p>Tap detected equation, figure, and table references to preview their destination in a draggable floating window—even in scanned PDFs that were never hyperlinked.</p><ul><li>Keep the page you&apos;re reading in view</li><li>Move the preview where it helps</li><li>Preserve native PDF links where available</li></ul></div>
            <MiniVisual type="references" />
          </div>
          <div className="feature-row reverse">
            <div className="feature-copy"><span className="feature-index">02 · Contents + Problems</span><h3>Find your way through any textbook.</h3><p>Turn a long PDF into a structured Contents sidebar with nested chapters, sections, and resolved printed page destinations. Detected exercises are grouped separately in Problems.</p><ul><li>Fallback structure from chapter headings</li><li>Direct navigation to actual PDF pages</li><li>Filter for solved problems</li></ul></div>
            <MiniVisual type="navigation" />
          </div>
          <div className="feature-row">
            <div className="feature-copy"><span className="feature-index">03 · Problem Solver</span><h3>Go from exercise to solution.</h3><p>Open a detected problem in a focused workspace with the source pinned above a scrollable, multi-page paper canvas designed for iPad and Apple Pencil.</p><ul><li>Pen, eraser, colors, undo, and redo</li><li>One-finger pan and two-finger zoom</li><li>Autosave, reopen, and export as PDF</li></ul><p className="device-note">Handwriting is available on iPad hardware. Reading and synchronized viewing extend to other supported devices.</p></div>
            <MiniVisual type="solver" />
          </div>
          <div className="feature-row reverse">
            <div className="feature-copy"><span className="feature-index">04 · PDF Notes</span><h3>Add context exactly where it belongs.</h3><p>On iPad, draw a region around part of a page, attach a handwritten note, and return to it later through a subtle colored outline.</p><ul><li>Keep the selected excerpt above the note canvas</li><li>Choose cyan, blue, green, yellow, or pink</li><li>Preview, edit, recolor, or delete later</li></ul></div>
            <MiniVisual type="notes" />
          </div>
          <div className="feature-row">
            <div className="feature-copy"><span className="feature-index">05 · Library</span><h3>Your technical library, organized.</h3><p>Import and rename PDFs, group them into collections, find titles quickly, and keep app-created study data synchronized across your devices.</p><ul><li>Sort by name, date, size, page count, or availability</li><li>Restore your most recent reading position</li><li>Reconnect a missing original by SHA-256 fingerprint</li></ul></div>
            <MiniVisual type="library" />
          </div>
        </section>

        <section className="section privacy-section" id="privacy" aria-labelledby="privacy-title">
          <div className="shell privacy-layout">
            <div className="privacy-copy"><p className="eyebrow">A precise privacy boundary</p><h2 id="privacy-title">Your original stays local. Your study work travels with you.</h2><p>The complete original PDF is never uploaded to library sync. When you choose cloud scanning, STEMReader securely sends one standalone PDF page at a time to its authenticated analysis service.</p><a className="text-link" href={sitePath('/privacy/')}>Read the full privacy overview <span aria-hidden="true">→</span></a></div>
            <div className="privacy-map" aria-label="How STEMReader handles document and study data">
              <article><span className="privacy-symbol local">⌂</span><div><b>On your device</b><p>Original PDFs and raw lossless page-analysis cache.</p></div></article>
              <div className="privacy-connector"><span>When you choose cloud scanning</span><i aria-hidden="true">→</i></div>
              <article><span className="privacy-symbol analysis">⌁</span><div><b>Page-by-page analysis</b><p>One standalone page at a time over authenticated HTTPS.</p></div></article>
              <div className="privacy-connector"><span>App-created study data</span><i aria-hidden="true">↕</i></div>
              <article><span className="privacy-symbol sync">✓</span><div><b>Secure synchronization</b><p>BookMaps, collections, notes, solutions, metadata, and last-opened page.</p></div></article>
            </div>
          </div>
          <div className="shell trust-row"><span>No advertising trackers</span><span>No website analytics</span><span>No payment-card access</span><span>No complete PDFs in library sync</span></div>
        </section>

        <section className="section shell plans-section" id="plans" aria-labelledby="plans-title">
          <div className="section-heading centered"><p className="eyebrow">Read freely. Scan when it helps.</p><h2 id="plans-title">Start with a full textbook.</h2><p>Choose the BookMap path that fits the document and your workflow.</p></div>
          <div className="plans-grid">
            <article className="plan-card featured"><span className="plan-label">FIRST CLOUD SCAN</span><h3>Your first full textbook scan is free — up to 1,000 pages.</h3><p>Use the Document Analysis Engine for a complete first document without purchasing a plan or credit.</p><ul><li>Page-by-page authenticated analysis</li><li>Incremental progress and retry</li><li>A complete BookMap for one document</li></ul></article>
            <article className="plan-card"><span className="plan-label">AFTER YOUR FIRST SCAN</span><h3>Credits or STEMReader Plus</h3><p>Additional cloud-generated BookMaps are available through one-document credits, three-document credits, STEMReader Plus Monthly, or STEMReader Plus Annual.</p><small>Current localized pricing is shown in the App Store.</small></article>
            <article className="plan-card"><span className="plan-label">ALWAYS FREE</span><h3>Legacy Apple OCR</h3><p>Explicitly choose the Apple Vision path to process a PDF entirely on-device. It is always free and is not an automatic fallback if cloud analysis fails.</p><small>Reading your imported PDFs also remains free.</small></article>
          </div>
        </section>

        <section className="section faq-section shell" id="faq" aria-labelledby="faq-title">
          <div className="faq-intro"><p className="eyebrow">Good questions</p><h2 id="faq-title">Before you turn the page.</h2><p>More setup and troubleshooting guidance is available in <a className="inline-link" href={sitePath('/support/')}>Support</a>.</p></div>
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

import React from 'react';
import './PostDetail.css';

function PostDetail({ onBack }) {
  return (
    <div className="post-detail-content">
      <svg className="contour-bg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35"/>
        <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25"/>
        <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28"/>
      </svg>

      <div onClick={onBack} className="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Blog
      </div>

      <div className="article-max">
        <span className="eyebrow">Projects</span>
        <h1 className="article-title">Building a cross-platform desktop app in Flutter — what I'd do differently</h1>

        <div className="article-meta">
          <div className="author-chip">
            <svg viewBox="0 0 80 80" role="img" ariaLabel="Oriemi Obang">
              <rect width="80" height="80" fill="var(--navy)"/>
              <circle cx="40" cy="32" r="15" fill="var(--card)"/>
              <path d="M14,75 C14,54 26,45 40,45 C54,45 66,54 66,75 Z" fill="var(--card)"/>
              <text x="40" y="36" fontFamily="Fraunces, serif" fontSize="13" fontWeight="600" fill="var(--gold)" textAnchor="middle">OO</text>
            </svg>
            <div>
              <span className="a-name">Oriemi Obang</span>
              <span className="a-role">Full-Stack Developer</span>
            </div>
          </div>
          <span className="meta-sep"></span>
          <div className="meta-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Jun 28, 2026
          </div>
          <div className="meta-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            6 min read
          </div>
          <div className="share-row">
            <a href="#" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"/></svg></a>
            <a href="#" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02M3.28 8.5h3.66V21H3.28zM9.36 8.5h3.5v1.7h.05c.49-.92 1.68-1.9 3.46-1.9 3.7 0 4.38 2.44 4.38 5.6V21h-3.66v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4V21H9.36z"/></svg></a>
            <a href="#" aria-label="Copy link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a>
          </div>
        </div>

        <div className="featured-image">
          <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="700" fill="var(--card)"/>
            <path d="M-40,140 C 220,60 460,220 760,140 S 1120,40 1260,120" fill="none" stroke="var(--teal-soft)" strokeWidth="2" opacity="0.35"/>
            <path d="M-40,230 C 240,150 480,300 780,230 S 1140,130 1260,210" fill="none" stroke="var(--gold-soft)" strokeWidth="2" opacity="0.3"/>
            <path d="M-40,560 C 220,620 480,500 760,560 S 1120,640 1260,570" fill="none" stroke="var(--teal-soft)" strokeWidth="2" opacity="0.25"/>

            {/* Linux window (back left) */}
            <g transform="translate(220,270)">
              <rect x="0" y="0" width="330" height="220" rx="14" fill="#ffffff" stroke="var(--hairline)" strokeWidth="2"/>
              <rect x="0" y="0" width="330" height="34" rx="14" fill="var(--teal-soft)"/>
              <rect x="0" y="20" width="330" height="14" fill="var(--teal-soft)"/>
              <circle cx="20" cy="17" r="6" fill="#ffffff" opacity="0.8"/>
              <rect x="24" y="56" width="120" height="12" rx="6" fill="var(--hairline)"/>
              <rect x="24" y="80" width="282" height="10" rx="5" fill="var(--hairline)"/>
              <rect x="24" y="100" width="240" height="10" rx="5" fill="var(--hairline)"/>
              <rect x="24" y="130" width="282" height="70" rx="8" fill="var(--card)"/>
            </g>

            {/* Windows window (middle) */}
            <g transform="translate(430,180)">
              <rect x="0" y="0" width="360" height="240" rx="14" fill="#ffffff" stroke="var(--hairline)" strokeWidth="2"/>
              <rect x="0" y="0" width="360" height="34" rx="14" fill="var(--gold-soft)"/>
              <rect x="0" y="20" width="360" height="14" fill="var(--gold-soft)"/>
              <rect x="322" y="12" width="10" height="10" fill="#ffffff" opacity="0.85"/>
              <rect x="24" y="58" width="150" height="12" rx="6" fill="var(--hairline)"/>
              <rect x="24" y="84" width="312" height="10" rx="5" fill="var(--hairline)"/>
              <rect x="24" y="106" width="260" height="10" rx="5" fill="var(--hairline)"/>
              <rect x="24" y="138" width="150" height="80" rx="8" fill="var(--card)"/>
              <rect x="186" y="138" width="150" height="80" rx="8" fill="var(--card)"/>
            </g>

            {/* macOS window (front right) */}
            <g transform="translate(640,300)">
              <rect x="0" y="0" width="340" height="230" rx="16" fill="#ffffff" stroke="var(--hairline)" strokeWidth="2"/>
              <rect x="0" y="0" width="340" height="36" rx="16" fill="var(--navy)"/>
              <rect x="0" y="20" width="340" height="16" fill="var(--navy)"/>
              <circle cx="22" cy="18" r="6" fill="#ef6b5e"/>
              <circle cx="42" cy="18" r="6" fill="#f2c14e"/>
              <circle cx="62" cy="18" r="6" fill="#5cb85c"/>
              <rect x="24" y="60" width="292" height="12" rx="6" fill="var(--hairline)"/>
              <rect x="24" y="86" width="220" height="10" rx="5" fill="var(--hairline)"/>
              <rect x="24" y="108" width="292" height="10" rx="5" fill="var(--hairline)"/>
              <rect x="24" y="140" width="292" height="70" rx="8" fill="var(--card)"/>
            </g>

            <text x="600" y="655" fontFamily="JetBrains Mono, monospace" fontSize="18" letterSpacing="2" fill="var(--muted)" textAnchor="middle">ONE CODEBASE — THREE PLATFORMS</text>
          </svg>
        </div>
        <span className="figcaption">The same Flutter codebase, running natively on Windows, macOS, and Linux.</span>

        <div className="article-body">
          <p>
            A few months ago I shipped the same Flutter codebase to Windows, macOS, and Linux for a client
            who needed one tool their whole team could use — regardless of what machine they were on. It
            sounded simple on paper. In practice, there were a handful of platform quirks nobody warns you
            about until you hit them.
          </p>
          <p>
            The core architecture held up well: a shared business-logic layer, a thin platform-adapter
            layer for things like file system access and native menus, and a single UI layer built with
            Flutter's widget system. Where things got interesting was in the details — window management,
            keyboard shortcuts, and packaging for three very different operating systems.
          </p>

          <h3>Window behavior isn't "cross-platform" by default</h3>
          <p>
            Flutter gives you a canvas, not a window manager. Things like remembering window size and
            position between launches, handling multiple monitors, and native title bars all needed a
            small platform-specific package layered on top. <strong>Budget time for this early</strong> —
            it's easy to assume it'll "just work" and then lose a week to it later in the project.
          </p>

          <div className="inline-image" role="img" aria-label="Desktop app window on macOS">
            <svg viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="1000" height="560" fill="var(--navy)"/>
              <rect x="120" y="60" width="760" height="440" rx="18" fill="#ffffff"/>
              <rect x="120" y="60" width="760" height="46" rx="18" fill="var(--card)"/>
              <rect x="120" y="88" width="760" height="18" fill="var(--card)"/>
              <circle cx="152" cy="83" r="8" fill="#ef6b5e"/>
              <circle cx="178" cy="83" r="8" fill="#f2c14e"/>
              <circle cx="204" cy="83" r="8" fill="#5cb85c"/>
              <rect x="120" y="106" width="180" height="394" fill="#f4f3ef"/>
              <rect x="146" y="130" width="128" height="10" rx="5" fill="var(--navy)" opacity="0.7"/>
              <rect x="146" y="156" width="100" height="8" rx="4" fill="var(--muted)" opacity="0.5"/>
              <rect x="146" y="176" width="120" height="8" rx="4" fill="var(--muted)" opacity="0.5"/>
              <rect x="146" y="196" width="90" height="8" rx="4" fill="var(--muted)" opacity="0.5"/>
              <rect x="146" y="228" width="128" height="1" fill="var(--hairline)"/>
              <rect x="146" y="250" width="110" height="8" rx="4" fill="var(--muted)" opacity="0.5"/>
              <rect x="146" y="270" width="128" height="8" rx="4" fill="var(--muted)" opacity="0.5"/>
              <rect x="330" y="136" width="500" height="130" rx="10" fill="#f4f3ef"/>
              <rect x="352" y="158" width="220" height="12" rx="6" fill="var(--teal-soft)"/>
              <rect x="352" y="182" width="456" height="8" rx="4" fill="var(--muted)" opacity="0.45"/>
              <rect x="352" y="200" width="380" height="8" rx="4" fill="var(--muted)" opacity="0.45"/>
              <rect x="330" y="284" width="240" height="180" rx="10" fill="#f4f3ef"/>
              <rect x="352" y="306" width="140" height="10" rx="5" fill="var(--gold)"/>
              <rect x="352" y="330" width="196" height="90" rx="8" fill="#ffffff" stroke="var(--hairline)" strokeWidth="2"/>
              <rect x="588" y="284" width="242" height="180" rx="10" fill="#f4f3ef"/>
              <rect x="610" y="306" width="140" height="10" rx="5" fill="var(--teal-soft)"/>
              <rect x="610" y="330" width="198" height="90" rx="8" fill="#ffffff" stroke="var(--hairline)" strokeWidth="2"/>
            </svg>
          </div>
          <span className="inline-caption">The same window chrome, adapted per platform without duplicating the UI logic.</span>

          <blockquote>
            "The moment I stopped treating desktop as 'mobile but bigger' and started treating it as its
            own platform, the whole architecture clicked into place."
          </blockquote>

          <h3>Packaging and distribution took longer than the app itself</h3>
          <p>
            Getting a signed, notarized build out the door for macOS, an installer for Windows, and a
            working AppImage for Linux ended up being close to a third of the total project time. None of
            it is hard exactly — it's just a lot of small, platform-specific steps that are poorly
            documented in one place.
          </p>
          <ul>
            <li>macOS: code signing, notarization, and Gatekeeper quirks</li>
            <li>Windows: MSIX packaging and auto-update handling</li>
            <li>Linux: choosing between AppImage, Flatpak, and Snap based on the audience</li>
          </ul>

          <div className="video-embed">
            <svg className="video-bg" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="1000" height="560" fill="var(--navy)"/>
              <path d="M-40,80 C 220,20 460,150 760,80 S 1120,10 1260,70" fill="none" stroke="var(--teal-soft)" strokeWidth="2" opacity="0.4"/>
              <path d="M-40,480 C 220,540 460,400 760,480 S 1120,560 1260,470" fill="none" stroke="var(--gold-soft)" strokeWidth="2" opacity="0.35"/>
              <rect x="300" y="160" width="400" height="240" rx="14" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="3"/>
              <rect x="330" y="196" width="180" height="10" rx="5" fill="rgba(255,255,255,0.22)"/>
              <rect x="330" y="222" width="300" height="8" rx="4" fill="rgba(255,255,255,0.14)"/>
              <rect x="330" y="242" width="240" height="8" rx="4" fill="rgba(255,255,255,0.14)"/>
            </svg>
            <div className="play-btn"><svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20"/></svg></div>
          </div>
          <span className="inline-caption">A short recording of the packaging pipeline running end to end.</span>

          <h3>What I'd do differently next time</h3>
          <p>
            I'd set up the packaging pipeline for all three platforms in week one, even before most of the
            UI exists — a boring, empty window that installs cleanly everywhere is a better milestone than
            a beautiful UI that only runs on your own machine. I'd also isolate window-management code
            behind an interface from day one instead of retrofitting it later.
          </p>
          <p>
            Overall, the project confirmed that Flutter is a genuinely solid choice for small-to-mid-size
            desktop tools — the payoff for a single shared codebase is real, as long as you respect that
            each platform still has its own personality underneath.
          </p>
        </div>

        <div className="tag-row">
          <span>Flutter</span>
          <span>Desktop</span>
          <span>Cross-platform</span>
          <span>Architecture</span>
        </div>

        <div className="author-card">
          <svg viewBox="0 0 120 120" role="img" aria-label="Oriemi Obang">
            <rect width="120" height="120" fill="var(--navy)"/>
            <circle cx="60" cy="48" r="22" fill="var(--card)"/>
            <path d="M20,112 C20,80 38,68 60,68 C82,68 100,80 100,112 Z" fill="var(--card)"/>
            <text x="60" y="54" fontFamily="Fraunces, serif" fontSize="20" fontWeight="600" fill="var(--gold)" textAnchor="middle">OO</text>
          </svg>
          <div>
            <h5>Written by Oriemi Obang</h5>
            <p>Full-stack developer building mobile, web, and desktop products with Flutter, Next.js, and NestJS. Based in Gambella, Ethiopia — available for remote work worldwide.</p>
          </div>
        </div>

        <h3 className="related-title">More like this</h3>
        <div className="related-grid">
          <a href="#" className="blog-card">
            <div className="blog-thumb teal">
              <svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="500" height="340" fill="var(--teal-soft)"/>
                <rect x="150" y="90" width="200" height="46" rx="8" fill="rgba(255,255,255,0.9)"/>
                <rect x="150" y="147" width="200" height="46" rx="8" fill="rgba(255,255,255,0.7)"/>
                <rect x="150" y="204" width="200" height="46" rx="8" fill="rgba(255,255,255,0.5)"/>
                <circle cx="175" cy="113" r="6" fill="var(--teal-soft)"/>
                <circle cx="175" cy="170" r="6" fill="var(--teal-soft)"/>
                <circle cx="175" cy="227" r="6" fill="var(--teal-soft)"/>
              </svg>
              <span className="category-pill">Tutorial</span>
            </div>
            <div className="blog-card-body">
              <span className="blog-meta">Jun 20, 2026 · 4 min read</span>
              <h4>Structuring a NestJS API for a Next.js frontend</h4>
            </div>
          </a>
          <a href="#" className="blog-card">
            <div className="blog-thumb gold">
              <svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="500" height="340" fill="var(--gold)"/>
                <polygon points="270,70 195,190 240,190 225,270 305,150 258,150" fill="rgba(255,255,255,0.92)"/>
                <circle cx="120" cy="90" r="4" fill="rgba(255,255,255,0.6)"/>
                <circle cx="380" cy="250" r="5" fill="rgba(255,255,255,0.5)"/>
                <circle cx="400" cy="90" r="3" fill="rgba(255,255,255,0.5)"/>
              </svg>
              <span className="category-pill">Projects</span>
            </div>
            <div className="blog-card-body">
              <span className="blog-meta">May 22, 2026 · 5 min read</span>
              <h4>Adding real-time features with Firebase and NestJS</h4>
            </div>
          </a>
          <a href="#" className="blog-card">
            <div className="blog-thumb navy">
              <svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="500" height="340" fill="var(--navy)"/>
                <circle cx="200" cy="170" r="46" fill="var(--teal-soft)"/>
                <circle cx="270" cy="130" r="34" fill="var(--gold-soft)"/>
                <circle cx="300" cy="210" r="26" fill="#ffffff" opacity="0.85"/>
              </svg>
              <span className="category-pill">Tutorial</span>
            </div>
            <div className="blog-card-body">
              <span className="blog-meta">Apr 29, 2026 · 6 min read</span>
              <h4>Design systems for solo developers: keep it small</h4>
            </div>
          </a>
        </div>
      </div>

    </div>
  );
}

export default PostDetail;

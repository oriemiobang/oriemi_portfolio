import React from 'react';

export const mockBlogPosts = [
  {
    id: 'flutter-desktop',
    isFeatured: true,
    title: "Building a cross-platform desktop app in Flutter — what I'd do differently",
    category: "PROJECTS",
    date: "Jun 28, 2026",
    readTime: "6 min read",
    excerpt: "A behind-the-scenes look at shipping the same Flutter codebase to Windows, macOS, and Linux — the platform quirks nobody warns you about, and how the architecture held up under real use.",
    thumbUrl: "https://picsum.photos/seed/oriemi-featured/900/700",
    thumbClass: "teal",
    tags: ["Flutter", "Desktop", "Cross-platform", "Architecture"],
    content: (
      <>
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
      </>
    )
  },
  {
    id: 'nestjs-api',
    isFeatured: false,
    title: "Structuring a NestJS API for a Next.js frontend",
    category: "Tutorial",
    date: "Jun 20, 2026",
    readTime: "4 min read",
    excerpt: "The folder structure and module patterns I default to when a project needs to scale past its first few endpoints.",
    thumbUrl: "https://picsum.photos/seed/oriemi-1/500/340",
    thumbClass: "teal",
    tags: ["NestJS", "API", "Architecture", "Backend"],
    content: (
      <div className="article-body">
        <p>This is a mock post for "Structuring a NestJS API for a Next.js frontend".</p>
        <p>When building the backend for this portfolio, this is the exact architecture I plan to use!</p>
      </div>
    )
  },
  {
    id: 'figma-to-flutter',
    isFeatured: false,
    title: "Walkthrough: from Figma prototype to shipped app",
    category: "Video",
    date: "Jun 12, 2026",
    readTime: "8 min watch",
    excerpt: "A screen-recorded walkthrough of turning a rough prototype into a working Flutter build, start to finish.",
    thumbUrl: "https://picsum.photos/seed/oriemi-2/500/340",
    thumbClass: "gold",
    hasVideoOverlay: true,
    tags: ["Figma", "Flutter", "UI/UX", "Workflow"],
    content: (
      <div className="article-body">
        <p>This is a mock post for "Walkthrough: from Figma prototype to shipped app".</p>
      </div>
    )
  },
  {
    id: 'one-year-freelance',
    isFeatured: false,
    title: "One year of freelancing — what actually changed",
    category: "Life & Notes",
    date: "Jun 3, 2026",
    readTime: "3 min read",
    excerpt: "Reflections on the first twelve months working independently, the mistakes, and what I'd tell myself back then.",
    thumbUrl: "https://picsum.photos/seed/oriemi-3/500/340",
    thumbClass: "navy",
    tags: ["Freelance", "Career", "Life"],
    content: (
      <div className="article-body">
        <p>This is a mock post for "One year of freelancing — what actually changed".</p>
      </div>
    )
  },
  {
    id: 'realtime-firebase-nestjs',
    isFeatured: false,
    title: "Adding real-time features with Firebase and NestJS",
    category: "Projects",
    date: "May 22, 2026",
    readTime: "5 min read",
    excerpt: "Notes on wiring up live data between a Firebase listener and a NestJS backend without fighting both at once.",
    thumbUrl: "https://picsum.photos/seed/oriemi-4/500/340",
    thumbClass: "teal",
    tags: ["Firebase", "NestJS", "Real-time", "WebSockets"],
    content: (
      <div className="article-body">
        <p>This is a mock post for "Adding real-time features with Firebase and NestJS".</p>
      </div>
    )
  },
  {
    id: 'desk-setup',
    isFeatured: false,
    title: "Desk setup & tools I actually use daily",
    category: "Video",
    date: "May 10, 2026",
    readTime: "5 min watch",
    excerpt: "A quick tour of the hardware, editors, and terminal setup that make up my day-to-day workflow.",
    thumbUrl: "https://picsum.photos/seed/oriemi-5/500/340",
    thumbClass: "gold",
    hasVideoOverlay: true,
    tags: ["Setup", "Productivity", "Tools"],
    content: (
      <div className="article-body">
        <p>This is a mock post for "Desk setup & tools I actually use daily".</p>
      </div>
    )
  },
  {
    id: 'design-systems',
    isFeatured: false,
    title: "Design systems for solo developers: keep it small",
    category: "Tutorial",
    date: "Apr 29, 2026",
    readTime: "6 min read",
    excerpt: "Why a lightweight, three-color design system saved me hours across every recent client project.",
    thumbUrl: "https://picsum.photos/seed/oriemi-6/500/340",
    thumbClass: "navy",
    tags: ["Design", "CSS", "UI/UX", "Frontend"],
    content: (
      <div className="article-body">
        <p>This is a mock post for "Design systems for solo developers: keep it small".</p>
      </div>
    )
  }
];

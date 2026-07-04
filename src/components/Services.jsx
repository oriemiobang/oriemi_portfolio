import './Services.css';

function Services() {
  return (
    <div id="service" className="services-content">
      <svg className="contour-bg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35"/>
        <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25"/>
        <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28"/>
      </svg>

      <span className="eyebrow">What I offer</span>
      <h2 className="section-title">Services</h2>
      <div className="rule"></div>

      <p className="bio">
        I build <strong>mobile, web, and desktop</strong> products end to end — from architecture and
        backend infrastructure to the interface people actually touch. Below is where my time and stack
        go: Flutter for native-feeling mobile and desktop apps, and a Next.js + NestJS pairing for
        full-stack web work that scales.
      </p>

      {/* ================= SERVICE GRID ================= */}
      <div className="service-grid">

        <div className="service-card teal">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
          </div>
          <h4>Mobile App Development</h4>
          <p>Native-feeling iOS and Android apps from a single Flutter codebase — fast to ship, easy to maintain, and ready for the App Store and Play Store from day one.</p>
          <div className="service-tags"><span>Flutter</span><span>Dart</span><span>iOS</span><span>Android</span></div>
        </div>

        <div className="service-card gold">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h4>Full-Stack Web Development</h4>
          <p>End-to-end web apps with Next.js on the front end and NestJS powering the API — clean architecture, type-safe from client to database, and built to scale.</p>
          <div className="service-tags"><span>Next.js</span><span>NestJS</span><span>TypeScript</span><span>REST/GraphQL</span></div>
        </div>

        <div className="service-card navy">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <h4>Desktop App Development</h4>
          <p>Cross-platform desktop software built in Flutter — one codebase running natively on Windows, macOS, and Linux, with the same polish as a mobile app.</p>
          <div className="service-tags"><span>Flutter</span><span>Windows</span><span>macOS</span><span>Linux</span></div>
        </div>

        <div className="service-card gold">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
          </div>
          <h4>Backend &amp; API Development</h4>
          <p>Secure, well-documented APIs and backend services with NestJS — authentication, real-time data, and database design built to support whatever the front end needs.</p>
          <div className="service-tags"><span>NestJS</span><span>Node.js</span><span>PostgreSQL</span><span>Firebase</span></div>
        </div>

        <div className="service-card teal">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
          </div>
          <h4>UI/UX &amp; Product Design</h4>
          <p>Wireframes and interactive prototypes that turn a rough idea into a clear, developer-ready plan — so what gets built matches what users actually need.</p>
          <div className="service-tags"><span>Figma</span><span>Prototyping</span><span>Design Systems</span></div>
        </div>

        <div className="service-card navy">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </div>
          <h4>Maintenance &amp; Support</h4>
          <p>Ongoing care for apps already in production — performance tuning, dependency and OS updates, bug fixes, and new features rolled out without breaking what works.</p>
          <div className="service-tags"><span>Optimization</span><span>Bug Fixes</span><span>Updates</span></div>
        </div>

      </div>

      {/* ================= PROCESS STRIP ================= */}
      <h3 className="process-title">How we'll work together</h3>
      <div className="process-strip">
        <div className="process-cell">
          <span className="p-num">01 — Discover</span>
          <h5>Scope &amp; plan</h5>
          <p>We define the problem, users, and success criteria before a line of code is written.</p>
        </div>
        <div className="process-cell">
          <span className="p-num">02 — Design</span>
          <h5>Structure it</h5>
          <p>Architecture, data models, and UI flows are mapped out so the build has a clear direction.</p>
        </div>
        <div className="process-cell">
          <span className="p-num">03 — Build</span>
          <h5>Ship in stages</h5>
          <p>Regular check-ins and working builds along the way — no surprises at the end.</p>
        </div>
        <div className="process-cell">
          <span className="p-num">04 — Support</span>
          <h5>Stay live</h5>
          <p>Post-launch monitoring, fixes, and improvements to keep things running smoothly.</p>
        </div>
      </div>

      {/* ================= CTA BANNER ================= */}
      <div className="cta-card">
        <div className="cta-text">
          <div className="eyebrow">Let's build something</div>
          <h3>Have a project in mind?</h3>
          <p>Whether it's a mobile app, a full-stack web platform, or a desktop tool — tell me what you're building and I'll help you get it there.</p>
        </div>
        <a href="#contact" className="btn-primary">
          Get in touch
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  );
}

export default Services;
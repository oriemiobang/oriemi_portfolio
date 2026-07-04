function About() {
  return (
    <section className="w-full bg-white py-14" id="about">
      <div className="ml-8 mr-8 md:ml-14">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4aa79b]">Get to know me</p>
      </div>

      <div className="pt-2 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
        <h2 className="text-[#173b6c] font-railway">About</h2>
        <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
      </div>

      <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-6 max-w-[700px] text-[17px] leading-8 text-[#5a6270]">
        <p>
          I'm a <span className="font-semibold text-[#173b6c]">full-stack software developer</span> from Gambella, Ethiopia, and a recent graduate in Software Engineering from Haramaya University. I build complete products end to end - mobile apps, web platforms, backend APIs, and the databases underneath - with a focus on software that works for markets like mine: low bandwidth, local payment rails, and multiple local languages.
        </p>
      </div>

      <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-10 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[14px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_-14px_rgba(22,50,74,0.25)]">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(214,168,92,0.16)] text-[#b9812f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]"><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></svg>
            </div>
            <h4 className="mb-2 font-[Fraunces] text-[16.5px] font-semibold text-[#16324a]">Mobile</h4>
            <p className="text-[12.5px] leading-[1.55] text-[#5a6270]">Flutter apps with clean architecture and reliable state management.</p>
          </div>

          <div className="rounded-[14px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_-14px_rgba(22,50,74,0.25)]">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(74,167,155,0.16)] text-[#4aa79b]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]"><rect x="3" y="4" width="18" height="16" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></svg>
            </div>
            <h4 className="mb-2 font-[Fraunces] text-[16.5px] font-semibold text-[#16324a]">Web</h4>
            <p className="text-[12.5px] leading-[1.55] text-[#5a6270]">React and Next.js interfaces that are fast, responsive, and clear.</p>
          </div>

          <div className="rounded-[14px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_-14px_rgba(22,50,74,0.25)]">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(22,50,74,0.10)] text-[#16324a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]"><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><line x1="7" y1="7" x2="7.01" y2="7" /><line x1="7" y1="17" x2="7.01" y2="17" /></svg>
            </div>
            <h4 className="mb-2 font-[Fraunces] text-[16.5px] font-semibold text-[#16324a]">Backend</h4>
            <p className="text-[12.5px] leading-[1.55] text-[#5a6270]">Node.js and NestJS APIs built for scale, clarity, and maintainability.</p>
          </div>

          <div className="rounded-[14px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_-14px_rgba(22,50,74,0.25)]">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(185,129,47,0.14)] text-[#b9812f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
            </div>
            <h4 className="mb-2 font-[Fraunces] text-[16.5px] font-semibold text-[#16324a]">Data</h4>
            <p className="text-[12.5px] leading-[1.55] text-[#5a6270]">PostgreSQL, PostGIS, and Redis powering the products underneath.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center overflow-hidden rounded-[16px] bg-[#16324a] px-8 py-8 relative">
          <div className="pointer-events-none absolute -top-8 left-4 font-[Fraunces] text-[160px] leading-none text-white/5">“</div>
          <h3 className="relative z-10 mb-3 font-[Fraunces] text-[21px] font-medium italic text-white">
            Full-stack developer, end to end.
          </h3>
          <p className="relative z-10 text-[13.5px] leading-7 text-white/75">
            My job is to build your product so it's functional, reliable, and easy to use - whether that's a mobile app, a web platform, or the backend tying them together. I add a personal touch to every product so your message and identity come through clearly.
          </p>
        </div>
      </div>

      <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-8 flex flex-wrap items-center gap-2">
        <span className="font-semibold text-[12.5px] text-[#5a6270]">Currently building with:</span>
        <span className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-3 py-1.5 font-mono text-[11.5px] text-[#16324a]">Flutter</span>
        <span className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-3 py-1.5 font-mono text-[11.5px] text-[#16324a]">Next.js</span>
        <span className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-3 py-1.5 font-mono text-[11.5px] text-[#16324a]">NestJS</span>
        <span className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-3 py-1.5 font-mono text-[11.5px] text-[#16324a]">PostgreSQL</span>
        <span className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-3 py-1.5 font-mono text-[11.5px] text-[#16324a]">Socket.IO</span>
      </div>

      <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-10 grid overflow-hidden rounded-[16px] border border-[rgba(22,50,74,0.10)]">
        <div className="grid gap-px bg-[rgba(22,50,74,0.10)] md:grid-cols-3 lg:grid-cols-3">
          <div className="bg-white p-6 flex gap-4 items-start">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] text-[#16324a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </div>
            <div>
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#5a6270]">Website</span>
              <div className="text-[14.5px] font-semibold text-[#16324a]">oriemiobango.netlify.app</div>
            </div>
          </div>

          <div className="bg-white p-6 flex gap-4 items-start">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] text-[#16324a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg>
            </div>
            <div>
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#5a6270]">Email</span>
              <div className="text-[14.5px] font-semibold text-[#16324a]">oriemiobango@gmail.com</div>
            </div>
          </div>

          <div className="bg-white p-6 flex gap-4 items-start">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] text-[#16324a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
            </div>
            <div>
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#5a6270]">City</span>
              <div className="text-[14.5px] font-semibold text-[#16324a]">Gambella, Ethiopia</div>
            </div>
          </div>

          <div className="bg-white p-6 flex gap-4 items-start">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] text-[#16324a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            </div>
            <div>
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#5a6270]">Freelance</span>
              <div className="text-[14.5px] font-semibold text-[#b9812f]">Available</div>
            </div>
          </div>

          <div className="bg-white p-6 flex gap-4 items-start">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] text-[#16324a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></svg>
            </div>
            <div>
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#5a6270]">Degree</span>
              <div className="text-[14.5px] font-semibold text-[#16324a]">B.Sc. Software Eng.</div>
            </div>
          </div>

          <div className="bg-white p-6 flex gap-4 items-start">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] text-[#16324a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.77 5.8 21 7 14.14l-5-4.87 7.1-1.01L12 2z" /></svg>
            </div>
            <div>
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#5a6270]">Status</span>
              <div className="text-[14.5px] font-semibold text-[#b9812f]">Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

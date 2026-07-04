function Resume() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-14" id="resume">
            <svg className="pointer-events-none absolute top-[-40px] right-[-60px] z-0 h-[340px] w-[520px] opacity-[0.55]" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35" />
                <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25" />
                <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28" />
            </svg>

            <div className="relative z-10 ml-8 mr-8 md:ml-14">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4aa79b]">Get in the details</p>
            </div>

            <div className="relative z-10 pt-2 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
                <h2 className="text-[#173b6c] font-railway">Resume</h2>
                <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
            </div>

            <p className="relative z-10 ml-8 md:ml-14 mr-8 md:mr-14 mt-6 max-w-[700px] text-[17px] leading-8 text-[#5a6270]">
                I'm a full-stack developer with <span className="font-semibold text-[#16324a]">4+ years</span> of experience across Flutter, NestJS, React, and Python, building mobile apps, web platforms, and the backend systems that power them. I care about clean architecture, fast iteration, and shipping software that people actually enjoy using.
            </p>

            <div className="relative z-10 ml-8 md:ml-14 mr-8 md:mr-14 mt-8 mb-10 flex flex-wrap items-center gap-2">
                <span className="font-semibold text-[12.5px] text-[#5a6270]">Core stack:</span>
                {['Flutter', 'Dart', 'NestJS', 'React', 'PostgreSQL', 'Firebase', 'Python', 'Docker'].map((item) => (
                    <span key={item} className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-3 py-1.5 font-mono text-[11.5px] text-[#16324a]">{item}</span>
                ))}
            </div>

            <div className="relative z-10 ml-8 md:ml-14 mr-8 md:mr-14 grid gap-x-14 gap-y-8 lg:grid-cols-[1fr_1.25fr]">
                <div>
                    <h3 className="mb-6 font-[Fraunces] text-[23px] font-semibold text-[#16324a]">Summary</h3>
                    <div className="border-l-2 border-[rgba(22,50,74,0.10)] pl-8">
                        <div className="relative mb-10">
                            <span className="absolute left-[-41px] top-[3px] h-[14px] w-[14px] rounded-full border-[2.5px] border-[#d6a85c] bg-white"></span>
                            <h4 className="mb-3 font-[Fraunces] text-[16.5px] font-semibold uppercase text-[#16324a]">Oriemi Obang</h4>
                            <p className="mb-3 text-[13.5px] leading-7 text-[#5a6270]">
                                Full-stack developer with 4+ years of experience designing and building mobile apps, web platforms, and backend services from the ground up. Comfortable owning a product end to end — from architecture and API design to the interface a user actually taps on.
                            </p>
                            <ul className="space-y-1 pt-1">
                                {['Gambella, Ethiopia', '+251 928 752557', 'oriemiobango@gmail.com'].map((item) => (
                                    <li key={item} className="relative pl-4 text-[13.5px] font-medium text-[#16324a] before:absolute before:left-0 before:top-[6px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#d6a85c]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h3 className="mb-6 mt-10 font-[Fraunces] text-[23px] font-semibold text-[#16324a]">Education</h3>
                    <div className="border-l-2 border-[rgba(22,50,74,0.10)] pl-8">
                        <div className="relative mb-10">
                            <span className="absolute left-[-41px] top-[3px] h-[14px] w-[14px] rounded-full border-[2.5px] border-[#d6a85c] bg-white"></span>
                            <h4 className="mb-3 font-[Fraunces] text-[16.5px] font-semibold uppercase text-[#16324a]">Bachelor Degree in Software Engineering</h4>
                            <span className="mb-3 inline-block rounded-md bg-[rgba(74,167,155,0.14)] px-3 py-1 font-mono text-[11px] text-[#16324a]">2021 - 2026</span>
                            <p className="mb-3 text-[13.5px] italic text-[#5a6270]">Haramaya University</p>
                            <p className="text-[13.5px] leading-7 text-[#5a6270]">
                                Haramaya University is a distinguished Ethiopian institution known for its academic rigor and research output. Through the program, I built a solid foundation in software architecture, data structures, and systems design that now underpins my day-to-day engineering work.
                            </p>
                        </div>
                    </div>

                    <h3 className="mb-6 mt-10 font-[Fraunces] text-[23px] font-semibold text-[#16324a]">Language Translation</h3>
                    <div className="border-l-2 border-[rgba(22,50,74,0.10)] pl-8">
                        <div className="relative">
                            <span className="absolute left-[-41px] top-[3px] h-[14px] w-[14px] rounded-full border-[2.5px] border-[#d6a85c] bg-white"></span>
                            <h4 className="mb-3 font-[Fraunces] text-[16.5px] font-semibold uppercase text-[#16324a]">Anywaa - English Translator</h4>
                            <span className="mb-3 inline-block rounded-md bg-[rgba(74,167,155,0.14)] px-3 py-1 font-mono text-[11px] text-[#16324a]">2018 - Present</span>
                            <p className="text-[13.5px] leading-7 text-[#5a6270]">
                                Independently translate between Dha Anywaa and English, bridging linguistic gaps with accurate, context-aware translation. This work directly shaped two of my own apps, Dha Anywaa and Dha Anywaa Quiz, both built to make the language more accessible to learners.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 font-[Fraunces] text-[23px] font-semibold text-[#16324a]">Professional Experience</h3>
                    <div className="border-l-2 border-[rgba(22,50,74,0.10)] pl-8">
                        <div className="relative mb-10">
                            <span className="absolute left-[-41px] top-[3px] h-[14px] w-[14px] rounded-full border-[2.5px] border-[#d6a85c] bg-white"></span>
                            <h4 className="mb-3 font-[Fraunces] text-[16.5px] font-semibold uppercase text-[#16324a]">Flutter Developer</h4>
                            <span className="mb-3 inline-block rounded-md bg-[rgba(74,167,155,0.14)] px-3 py-1 font-mono text-[11px] text-[#16324a]">2022 - Present</span>
                            <p className="mb-3 text-[13.5px] italic text-[#5a6270]">Independent & Freelance Projects</p>
                            <ul className="list-disc pl-5">
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Led the design, development, and shipping of multiple mobile applications using Flutter and Dart.</li>
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Built a Bible app featuring 10 translations, improving accessibility for a wider range of readers.</li>
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Developed Dha Anywaa, an app that helps users learn and practice the Anywaa language.</li>
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Designed and built Dha Anywaa Quiz, an interactive companion app for language practice.</li>
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Shipped PNG, a number-guessing game built with Flutter and a NestJS backend.</li>
                                <li className="text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Maintained quality across all apps through structured testing and continuous user feedback.</li>
                            </ul>
                        </div>

                        <div className="relative">
                            <span className="absolute left-[-41px] top-[3px] h-[14px] w-[14px] rounded-full border-[2.5px] border-[#d6a85c] bg-white"></span>
                            <h4 className="mb-3 font-[Fraunces] text-[16.5px] font-semibold uppercase text-[#16324a]">Full-Stack Developer</h4>
                            <span className="mb-3 inline-block rounded-md bg-[rgba(74,167,155,0.14)] px-3 py-1 font-mono text-[11px] text-[#16324a]">2021 - Present</span>
                            <p className="mb-3 text-[13.5px] italic text-[#5a6270]">Independent & Team Projects</p>
                            <ul className="list-disc pl-5">
                                {/* <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Building Oloni, a ride-hailing and airport shuttle platform for the Ethiopian market, using NestJS, PostgreSQL/PostGIS, Redis, and Prisma.</li> */}
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Developed web and desktop applications using HTML, CSS, JavaScript, Python, and Java.</li>
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Built a full-stack Bible study platform with the MERN stack (MongoDB, Express, React, Node.js) for study and community interaction.</li>
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Developed Ethiostudy as a final capstone project with my colleague, a scalable e-learning platform managing user data, courses, and progress tracking.</li>
                                <li className="mb-2 text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Authored detailed technical documentation and GitHub issue specs covering CI/CD pipelines, Docker environments, and backend infrastructure.</li>
                                <li className="text-[13.5px] leading-7 text-[#5a6270] marker:text-[#d6a85c]">Collaborated with a small team to build and maintain a shared portfolio site showcasing our combined project work.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
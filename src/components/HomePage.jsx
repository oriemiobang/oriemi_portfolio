import { useEffect, useState } from 'react';
import ProfileImage from '../assets/DSC02693.JPG';
import ResumePDF from '../assets/res.pdf';

function HomePage() {
    const words = ['mobile apps', 'web platforms', 'backend systems', 'full-stack products'];
    const [typedText, setTypedText] = useState(words[0]);

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timerId;

        const tick = () => {
            const currentWord = words[wordIndex];

            if (!deleting) {
                charIndex += 1;
                setTypedText(currentWord.slice(0, charIndex));

                if (charIndex === currentWord.length) {
                    deleting = true;
                    timerId = window.setTimeout(tick, 1400);
                    return;
                }
            } else {
                charIndex -= 1;
                setTypedText(currentWord.slice(0, charIndex));

                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            timerId = window.setTimeout(tick, deleting ? 40 : 65);
        };

        timerId = window.setTimeout(tick, 900);

        return () => {
            window.clearTimeout(timerId);
        };
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-white px-6 py-10 text-[#14181f] md:px-10 lg:px-16"
        >
            <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-50"
                viewBox="0 0 1200 900"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path d="M-50,760 C 200,700 350,820 600,760 S 950,680 1250,740" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.45" />
                <path d="M-50,810 C 220,750 380,860 620,810 S 960,730 1250,790" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35" />
                <path d="M-50,860 C 240,800 400,900 640,860 S 970,780 1250,840" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.26" />
                <path d="M-50,60 C 250,20 420,110 680,60 S 1000,10 1250,55" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.32" />
                <path d="M-50,105 C 260,65 430,150 700,105 S 1010,55 1250,100" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.24" />
            </svg>

            <div className="pointer-events-none absolute right-6 top-6 z-10 hidden items-center gap-2 rounded-full border border-black/10 bg-[#f6f5f1] px-4 py-2 text-[11px] font-medium tracking-[0.03em] text-[#5a6270] md:flex lg:right-16 lg:top-10">
                <span className="h-2 w-2 rounded-full bg-[#4aa79b] shadow-[0_0_0_0_rgba(74,167,155,0.6)] animate-[pulse_2s_infinite]"></span>
                Available for freelance
            </div>

            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1240px] flex-col items-center gap-12 lg:flex-row lg:gap-14">
                <div className="flex-1 pt-8 lg:pt-0">
                    <div className="mb-4 flex items-center gap-3 font-mono text-[12.5px] uppercase tracking-[0.15em] text-[#2f8577]">
                        <span className="h-px w-7 bg-[#2f8577]" />
                        Software Engineer · Gambella, Ethiopia
                    </div>

                    <h2 className="mb-6 font-[Fraunces] text-[clamp(48px,5.6vw,76px)] font-semibold leading-[1.03] tracking-[-1.5px] text-[#14181f]">
                        Oriemi<br />
                        <span className="italic font-medium text-[#b9812f]">Obang</span>
                    </h2>

                    <div className="mb-6 flex min-h-[30px] items-center gap-2 font-mono text-[clamp(17px,1.6vw,21px)] text-[#5a6270]">
                        <span className="font-medium text-[#14181f]">I build</span>
                        <span>{typedText}</span>
                        <span className="inline-block h-[1.1em] w-[2px] animate-[blink_1s_step-start_infinite] bg-[#d6a85c]" />
                    </div>

                    <p className="mb-9 max-w-[480px] text-[16px] leading-7 text-[#5a6270] md:text-[17px]">
                        Full-stack developer building complete products end to end - Flutter apps,
                        web platforms, and the backend systems that power them - with a focus on
                        software that works for markets like the world.
                    </p>

                    <div className="mb-12 flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 rounded-[10px] bg-[#d6a85c] px-6 py-3.5 text-[14.5px] font-semibold text-[#14100a] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#e2b76d]"
                        >
                            View my work →
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-[10px] border border-black/10 bg-[#f6f5f1] px-6 py-3.5 text-[14.5px] font-semibold text-[#14181f] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#2f8577] hover:text-[#2f8577]"
                        >
                            Get in touch
                        </a>
                        <a
                            href={ResumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Oriemi_Obang_Resume.pdf"
                            className="inline-flex items-center gap-2 rounded-[10px] border border-black/10 bg-[#f6f5f1] px-6 py-3.5 text-[14.5px] font-semibold text-[#14181f] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#b9812f] hover:text-[#b9812f]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Resume
                        </a>
                    </div>

                    <div className="flex max-w-[560px] flex-wrap gap-8 border-t border-black/10 pt-7 sm:gap-10">
                        <div>
                            <div className="mb-0.5 font-[Fraunces] text-[26px] font-semibold text-[#14181f]">
                                B.Sc.
                            </div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#8a92a3]">
                                Software Eng.
                            </div>
                        </div>
                        <div>
                            <div className="mb-0.5 font-[Fraunces] text-[26px] font-semibold text-[#14181f]">
                                4
                            </div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#8a92a3]">
                                Stack Layers
                            </div>
                        </div>
                        <div>
                            <div className="mb-0.5 font-[Fraunces] text-[26px] font-semibold text-[#14181f]">
                                ET
                            </div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#8a92a3]">
                                Based in Gambella
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex w-full flex-1 justify-center lg:justify-center">
                    <div className="absolute -left-[12%] top-[8%] z-20 flex items-center rounded-[10px] border border-white/20 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 font-mono text-[12px] text-[#14181f] shadow-[0_10px_24px_-8px_rgba(0,0,0,0.3)]">
                        <span className="mr-2 h-2 w-2 rounded-full bg-[#d6a85c]" /> Flutter
                    </div>
                    <div className="absolute -right-[12%] top-[40%] z-20 flex items-center rounded-[10px] border border-white/20 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 font-mono text-[12px] text-[#14181f] shadow-[0_10px_24px_-8px_rgba(0,0,0,0.3)]">
                        <span className="mr-2 h-2 w-2 rounded-full bg-[#4aa79b]" /> Next.js
                    </div>
                    <div className="absolute -left-[14%] bottom-[12%] z-20 flex items-center rounded-[10px] border border-white/20 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 font-mono text-[12px] text-[#14181f] shadow-[0_10px_24px_-8px_rgba(0,0,0,0.3)]">
                        <span className="mr-2 h-2 w-2 rounded-full bg-[#b98a4a]" /> NestJS
                    </div>

                    <div className="relative w-full max-w-[380px] aspect-[3/4] overflow-hidden rounded-[24px] border border-black/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                        <img src={ProfileImage} alt="Oriemi Obang portrait" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,20,0.05)_40%,rgba(10,14,20,0.55)_100%)]" />
                    </div>

                    <div className="pointer-events-none absolute inset-[-14px] rounded-[30px] border border-[#b9812f]/35" />
                </div>
            </div>
        </section>
    );
}

export default HomePage;
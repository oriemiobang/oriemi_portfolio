import { useEffect, useMemo, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiX } from 'react-icons/fi';
import quiz from '../assets/moblie/quiz_1.jpg';
import bible from '../assets/moblie/mob_1.jpg';
import dha from '../assets/moblie/dha_1.jpg';
import deep from '../assets/web/web_1.jpg';
import port from '../assets/web/port_3.png';
import music from '../assets/desktop/music_1.png';
import pngImage from '../assets/moblie/png.png';

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Dha Anywaa Challenge',
            shortDescription: 'Flutter language-learning game with quizzes and leaderboards.',
            description:
                'Dha Anywaa Challenge is an interactive app designed to promote the Anywaa language and culture through fun and engaging challenges. Built with Flutter, it provides vocabulary quizzes, trivia games, and leaderboards to make learning enjoyable. The backend is powered by Firebase, enabling real-time data sync and user authentication.',
            image: quiz,
            category: 'app',
            categoryLabel: 'Mobile App',
            client: 'Anywaa Enlightment',
            date: '1 March 2024',
            sourceUrl: 'https://github.com/oriemiobang/dha_anywaa_challange',
            liveUrl: 'https://github.com/oriemiobang/dha_anywaa_challange',
            tags: ['Flutter', 'Firebase', 'Dart', 'Realtime DB'],
        },
        {
            id: 2,
            title: 'PNG Game',
            shortDescription: 'A multiplayer number guessing game.',
            description:
                'A multiplayer number guessing game where two players play online by holding a 4-digit code. Each player tries to guess the other\'s number, receiving feedback on correct numbers and correct positions. PNG stands for Position Number Guessing game.',
            image: pngImage,
            category: 'app',
            categoryLabel: 'Mobile App',
            client: 'Personal Project',
            date: '1 March 2025',
            sourceUrl: 'https://github.com/oriemiobang/png_game',
            liveUrl: 'https://github.com/oriemiobang/png_game',
            tags: ['Flutter', 'NestJS', 'WebSockets'],
        },
        {
            id: 3,
            title: 'Multi-Version Bible App',
            shortDescription: '10 translations side by side, built for accessibility.',
            description:
                'A multilingual Bible reading app offering multiple translations with a focus on accessibility and smooth reading experience for diverse users.',
            image: bible,
            category: 'app',
            categoryLabel: 'Mobile App',
            client: 'Anywaa Community',
            date: '15 Jan 2024',
            sourceUrl: 'https://github.com/oriemiobang/weel_jwok_audio_bible',
            liveUrl: 'https://github.com/oriemiobang/weel_jwok_audio_bible',
            tags: ['Flutter', 'Firebase'],
        },
        {
            id: 4,
            title: 'Dha Anywaa and Dha Anywaa Quiz',
            shortDescription: 'Language learning apps with visual dictionary and quizzes.',
            description:
                'A pair of Flutter apps for learning Anywaa language, combining vocabulary building, quizzes, and culturally grounded learning interactions.',
            image: dha,
            category: 'app',
            categoryLabel: 'Mobile App',
            client: 'Anywaa Community',
            date: '10 Dec 2023',
            sourceUrl: 'https://github.com/oriemiobang/Dha-Anywaa-application',
            liveUrl: 'https://github.com/oriemiobang/Dha-Anywaa-application',
            tags: ['Flutter', 'Localization'],
        },
        {
            id: 5,
            title: 'Personal Portfolio Website',
            shortDescription: 'Responsive portfolio site for projects and profile.',
            description:
                'An earlier version of my personal portfolio, designed to present work, experience, and direct contact details in a responsive format.',
            image: port,
            category: 'web',
            categoryLabel: 'Web',
            client: 'Myself',
            date: '27 Feb 2024',
            sourceUrl: 'https://github.com/oriemiobang/portfolio',
            liveUrl: 'https://github.com/oriemiobang/portfolio',
            tags: ['HTML/CSS', 'JavaScript'],
        },
        {
            id: 6,
            title: 'DeepLabs Team Site',
            shortDescription: 'Shared portfolio site for a collaborative team.',
            description:
                'A collaborative portfolio platform built with a small team to showcase combined project work and streamline communication with potential clients.',
            image: deep,
            category: 'web',
            categoryLabel: 'Web',
            client: 'Deep & Labs',
            date: '19 Jun 2024',
            sourceUrl: 'https://github.com/oriemiobang/invincible_site',
            liveUrl: 'https://github.com/oriemiobang/invincible_site',
            tags: ['React', 'Team Project'],
        },
        {
            id: 7,
            title: 'Be-Gena Player',
            shortDescription: 'Java desktop music player with playlist controls.',
            description:
                'A Java desktop music player featuring playlist management and a custom now-playing interface with focus on usability and smooth interaction.',
            image: music,
            category: 'desktop',
            categoryLabel: 'Desktop',
            client: 'Class Project',
            date: '10 March 2023',
            sourceUrl: 'https://github.com/MisganaGetachew/BeGena-Player',
            liveUrl: 'https://github.com/MisganaGetachew/BeGena-Player',
            tags: ['Java', 'Desktop'],
        },
    ];

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projects;
        return projects.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'app', label: 'App' },
        { id: 'desktop', label: 'Desktop' },
        { id: 'web', label: 'Web' },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-14" id="portfolio">
            <svg className="pointer-events-none absolute top-[-40px] right-[-60px] z-0 h-[340px] w-[520px] opacity-[0.55]" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35" />
                <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25" />
                <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28" />
            </svg>

            <div className="relative z-10 ml-8 mr-8 md:ml-14">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4aa79b]">Selected work</p>
            </div>

            <div className="relative z-10 pt-2 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
                <h2 className="text-[#173b6c] font-railway">Portfolio</h2>
                <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
            </div>

            <p className="relative z-10 ml-8 md:ml-14 mr-8 md:mr-14 mt-6 max-w-[700px] text-[17px] leading-8 text-[#5a6270]">
                A selection of apps, games, and platforms I've designed and built - spanning Flutter mobile apps, full-stack web platforms, and desktop tools. Each one reflects the same standard: clean architecture, thoughtful interaction design, and code built to outlast the demo.
            </p>

            <div className="relative z-10 ml-8 md:ml-14 mr-8 md:mr-14 mt-8 flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        className={`rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                            activeFilter === filter.id
                                ? 'bg-[#16324a] border-[#16324a] text-white'
                                : 'bg-[#f8f7f3] border-[rgba(22,50,74,0.10)] text-[#5a6270] hover:text-[#16324a] hover:border-[#4aa79b]'
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div className="relative z-10 ml-8 md:ml-14 mr-8 md:mr-14 mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                    <article key={project.id} className="group overflow-hidden rounded-2xl border border-[rgba(22,50,74,0.10)] bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_-18px_rgba(22,50,74,0.3)]">
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f7f3]">
                            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[rgba(22,50,74,0.82)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                <a href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label="View code" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/35 bg-white/15 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d6a85c] hover:bg-[#d6a85c]">
                                    <FaGithub size={18} />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(project)}
                                    aria-label="View live"
                                    className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/35 bg-white/15 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d6a85c] hover:bg-[#d6a85c]"
                                >
                                    <FiExternalLink size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="mb-2 font-[Fraunces] text-[17px] font-semibold text-[#16324a]">{project.title}</h4>
                            <p className="mb-3 text-[13px] leading-[1.6] text-[#5a6270]">{project.shortDescription}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-2.5 py-1 font-mono text-[10.5px] text-[#16324a]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {selectedProject ? (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(12,16,23,0.68)] p-4 backdrop-blur-[3px] md:p-8"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedProject(null);
                        }
                    }}
                >
                    <div className="relative grid max-h-[92vh] w-full max-w-[960px] overflow-hidden rounded-[22px] bg-white shadow-[0_40px_90px_-30px_rgba(8,14,22,0.55)] md:grid-cols-[0.92fr_1.08fr]">
                        <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            className="absolute right-[18px] top-[18px] z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-[rgba(12,16,23,0.35)] text-white transition-all duration-200 hover:rotate-90 hover:border-[#d6a85c] hover:bg-[#d6a85c]"
                            aria-label="Close"
                        >
                            <FiX size={18} />
                        </button>

                        <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#16324a] px-8 py-10 before:absolute before:inset-0 before:opacity-50 before:content-[''] before:[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] before:[background-size:26px_26px]">
                            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,rgba(74,167,155,0.35),transparent_60%),radial-gradient(120%_90%_at_85%_100%,rgba(214,168,92,0.28),transparent_60%)]" />
                            <div className="relative z-10 aspect-[9/17.5] w-[78%] max-w-[230px] rounded-[26px] bg-[#0c1017] p-[10px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)]">
                                <div className="absolute left-1/2 top-[10px] z-20 h-4 w-14 -translate-x-1/2 rounded-b-[12px] bg-[#0c1017]" />
                                <img src={selectedProject.image} alt={`${selectedProject.title} preview`} className="h-full w-full rounded-[18px] object-cover" />
                            </div>
                            <div className="relative z-10 mt-5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-[rgba(233,236,241,0.65)]">
                                Built with <strong className="font-medium text-[#d6a85c]">{selectedProject.tags[0]}</strong> and {selectedProject.tags[1] || 'Firebase'}
                            </div>
                        </div>

                        <div className="overflow-y-auto p-8 md:p-10">
                            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-[#4aa79b]">Project information</span>
                            <h2 className="mb-3 font-[Fraunces] text-[30px] font-semibold leading-tight text-[#16324a]">{selectedProject.title}</h2>
                            <div className="mb-6 h-[3px] w-[52px] rounded-sm bg-[linear-gradient(90deg,#d6a85c,transparent)]" />

                            <div className="mb-7 grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[rgba(22,50,74,0.10)] bg-[rgba(22,50,74,0.10)] sm:grid-cols-2">
                                <div className="bg-[#f8f7f3] px-4 py-3.5"><span className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.08em] text-[#5a6270]">Category</span><span className="text-[13.5px] font-semibold text-[#16324a]">{selectedProject.categoryLabel}</span></div>
                                <div className="bg-[#f8f7f3] px-4 py-3.5"><span className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.08em] text-[#5a6270]">Client</span><span className="text-[13.5px] font-semibold text-[#16324a]">{selectedProject.client}</span></div>
                                <div className="bg-[#f8f7f3] px-4 py-3.5"><span className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.08em] text-[#5a6270]">Project date</span><span className="text-[13.5px] font-semibold text-[#16324a]">{selectedProject.date}</span></div>
                                <div className="bg-[#f8f7f3] px-4 py-3.5"><span className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.08em] text-[#5a6270]">Project URL</span><a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="border-b border-[rgba(74,167,155,0.4)] text-[13.5px] font-semibold text-[#4aa79b] hover:border-[#b9812f] hover:text-[#b9812f]">View live</a></div>
                            </div>

                            <h3 className="mb-3 font-[Fraunces] text-[17px] font-semibold text-[#16324a]">Project description</h3>
                            <p className="mb-6 text-[14px] leading-[1.75] text-[#5a6270]">{selectedProject.description}</p>

                            <div className="mb-7 flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] px-3 py-1.5 font-mono text-[11px] text-[#16324a]">{tag}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-[10px] border border-[#16324a] bg-[#16324a] px-5 py-3 text-[13.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#2a5478] hover:border-[#2a5478]">
                                    <FiExternalLink size={15} />
                                    View live project
                                </a>
                                <a href={selectedProject.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(22,50,74,0.10)] px-5 py-3 text-[13.5px] font-semibold text-[#16324a] transition-colors duration-200 hover:border-[#16324a]">
                                    <FaGithub size={15} />
                                    View source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
}

export default Portfolio;

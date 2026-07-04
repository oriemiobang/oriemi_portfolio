import { motion } from "framer-motion";

function Facts() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-14" id="fact">
            <svg className="pointer-events-none absolute top-[-40px] right-[-60px] z-0 h-[340px] w-[520px] opacity-[0.55]" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35" />
                <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25" />
                <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28" />
            </svg>

            <div className="ml-8 mr-8 md:ml-14">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4aa79b]">Track record</p>
            </div>

            <div className="pt-2 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
                <h2 className="text-[#173b6c] font-railway">Facts</h2>
                <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
            </div>

            <p className="ml-8 md:ml-14 mr-8 md:mr-14 mt-6 max-w-[700px] text-[17px] leading-8 text-[#5a6270]">
                Numbers don't tell the whole story, but they're a fair starting point. Here's a quick look at the scope of work I've shipped so far - measured in projects delivered, teams I've worked alongside, and the time I put into getting the details right.
            </p>

            <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-10 grid gap-5 lg:grid-cols-4 md:grid-cols-2">
                <motion.div className="rounded-[16px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                    <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[rgba(74,167,155,0.15)] text-[#4aa79b]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><path d="M3 21c0-4 2.7-6 6-6s6 2 6 6" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21c0-3-1.6-5-4-5.75" /></svg>
                    </div>
                    <div className="font-[Fraunces] text-[34px] font-bold leading-none text-[#16324a]">10<span className="text-[20px] font-semibold text-[#b9812f]">+</span></div>
                    <div className="mt-2 text-[13.5px] font-bold text-[#16324a]">Clients Served</div>
                    <p className="mt-2 text-[12.5px] leading-[1.55] text-[#5a6270]">Individuals and small teams who trusted me with a working product.</p>
                </motion.div>

                <motion.div className="rounded-[16px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-6" initial={{ opacity: 0, y: 52 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                    <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[rgba(214,168,92,0.16)] text-[#b9812f]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="3" y1="12" x2="21" y2="12" /></svg>
                    </div>
                    <div className="font-[Fraunces] text-[34px] font-bold leading-none text-[#16324a]">60<span className="text-[20px] font-semibold text-[#b9812f]">+</span></div>
                    <div className="mt-2 text-[13.5px] font-bold text-[#16324a]">Projects Completed</div>
                    <p className="mt-2 text-[12.5px] leading-[1.55] text-[#5a6270]">Mobile apps, web platforms, and backend systems shipped end to end.</p>
                </motion.div>

                <motion.div className="rounded-[16px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-6" initial={{ opacity: 0, y: 53 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[rgba(22,50,74,0.10)] text-[#16324a]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    </div>
                    <div className="font-[Fraunces] text-[34px] font-bold leading-none text-[#16324a]">4<span className="text-[20px] font-semibold text-[#b9812f]">Y</span></div>
                    <div className="mt-2 text-[13.5px] font-bold text-[#16324a]">Years Experience</div>
                    <p className="mt-2 text-[12.5px] leading-[1.55] text-[#5a6270]">Time spent building, debugging, and iterating with clients and teams.</p>
                </motion.div>

                <motion.div className="rounded-[16px] border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3] p-6" initial={{ opacity: 0, y: 54 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
                    <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[rgba(74,167,155,0.15)] text-[#4aa79b]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <div className="font-[Fraunces] text-[34px] font-bold leading-none text-[#16324a]">10<span className="text-[20px] font-semibold text-[#b9812f]">+</span></div>
                    <div className="mt-2 text-[13.5px] font-bold text-[#16324a]">Teams Collaborated With</div>
                    <p className="mt-2 text-[12.5px] leading-[1.55] text-[#5a6270]">Cross-functional work with designers, PMs, and fellow engineers.</p>
                </motion.div>
            </div>
        </section>
    );
}

export default Facts;

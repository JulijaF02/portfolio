import React from 'react';

const Experience = () => {
    const jobs = [
        {
            date: "FEB 2025 — SEPT 2025",
            title: "Execution Coordinator @ Replai",
            desc: "Bridging the gap between production and engineering. Coordinated development cycles for video ad production, ensuring architectural standards for modular unity systems and managing production flow for major gaming clients. Focused on improving delivery speed and maintainability.",
            tech: ["Creative Production", "Modular Architecture", "Workflow Management", "Technical Leadership"]
        },
        {
            date: "FEB 2024 — FEB 2025",
            title: "Lead Unity Developer @ Replai",
            desc: "Led the technical production of mobile game ads from scratch. Developed modular C# systems that allowed for fast iteration of environments and mechanics. Handled asset management, UI implementation, and performance optimization to ensure high-quality ad performance.",
            tech: ["Unity 2D/3D", "C#", "System Architecture", "UI/UX", "Editor Tools"]
        }
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 font-mono">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 text-sm font-bold uppercase tracking-widest text-teal-300 flex items-center gap-2 italic">
                <span className="w-4 h-[1px] bg-teal-500"></span>
                Experience
            </div>
            <ol className="group/list border-l border-teal-500/10 ml-1">
                {jobs.map((job, i) => (
                    <li key={i} className="mb-12 relative pl-8">
                        <div className="absolute left-0 top-1.5 w-3 h-3 border border-teal-500/40 bg-slate-950 -translate-x-1/2 rotate-45"></div>
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <header className="z-10 mb-2 mt-1 text-[10px] font-bold uppercase tracking-widest text-teal-500/60 sm:col-span-2">{job.date}</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-bold leading-tight text-white group-hover:text-teal-300 focus-visible:text-teal-300 uppercase tracking-tighter text-xl font-sans">{job.title}</h3>
                                <p className="mt-3 text-base leading-relaxed text-slate-300 italic">{job.desc}</p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {job.tech.map(t => <li key={t} className="px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase border border-teal-500/20 text-teal-400 bg-teal-500/5">{t}</li>)}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
            <div className="mt-12 mb-16">
                <a href="https://www.dropbox.com/scl/fi/gdssgmc5kr3qcrglvf85g/Julija_Filipovic_CV.pdf?rlkey=s0bvijxyxpzr3dn6dii2oopce&st=z4i749vj&dl=0" target="_blank" rel="noopener noreferrer" className="inline-block py-4 px-10 border-2 border-teal-400/40 text-teal-300 font-bold uppercase text-xs tracking-[0.25em] hover:bg-teal-400 hover:text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(45,212,191,0.15)]">
                    Load Full Resume
                </a>
            </div>
        </section>
    );
};

export default Experience;

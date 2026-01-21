import React from 'react';

const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 group">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 text-sm font-bold uppercase tracking-widest text-teal-300 flex items-center gap-2 italic font-mono">
                <span className="w-4 h-[1px] bg-teal-500"></span>
                About
            </div>
            <div className="relative border-l border-teal-500/20 pl-6 py-2">
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-teal-500/40 -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-teal-500/40 -translate-x-1/2"></div>
                <div className="space-y-4 text-slate-400 leading-relaxed md:text-lg">
                    <p>
                        I am a <span className="text-teal-300 font-bold uppercase">Unity Developer</span> with 2 years of experience in video ads production. I focus on the technical side of creative projects, making sure things actually work as intended.
                    </p>
                    <p>
                        I started out with <span className="text-slate-200">After Effects</span> and <span className="text-slate-200">DaVinci Resolve</span> for 2D/3D animation, but eventually moved into full-time <span className="text-slate-200">Unity development</span>. My work usually involves coding, managing assets, and figuring out the general gameplay flow or UI.
                    </p>
                    <p>
                        I specialize in building modular systems for ad production. Instead of making one-off projects, I build base game frameworks that are easy to iterate on—whether that means swapping environments, machines, or mechanics quickly.
                    </p>
                    <p>
                        Outside of work, you can usually find me climbing, playing video games, spending time with my cats, or tending to a growing collection of plants.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

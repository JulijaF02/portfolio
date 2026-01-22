"use client";

import React, { useState } from 'react';
import VideoModal from '../UI/VideoModal';

const Projects = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const projects = [
        {
            id: "findit_01",
            title: "Find it",
            desc: "A surveillance horror experience where players monitor security cameras to detect subtle environmental anomalies. Features a randomized event system with 4 distinct anomaly types (Move, Disappear, Color, Swap) and a high-stakes reporting mechanic.",
            tech: ["Unity", "C#", "Randomization Engine", "UI Systems"],
            href: "https://github.com/JulijaF02/FindIt",
            demoVideo: "/FindIt_demo.mp4",
            thumbnail: "/FindIt_thumbnail.jpg"
        },
        {
            id: "food_order_02",
            title: "Food Order System",
            desc: "A full-featured WinForms management suite for restaurant operations. Implements custom CSV-based persistence, complex CRUD logic for menu hierarchies, and a robust administrative dashboard for real-time inventory and restaurant data.",
            tech: ["C#", ".NET", "WinForms", "CSV Persistence"],
            href: "https://github.com/JulijaF02/Food-order"
        },
        {
            id: "speculo_03",
            title: "Speculo [In Development]",
            desc: "An Event-Sourced Personal Analytics Platform. Designed a cloud-native backend using Clean Architecture (.NET 9), implemented CQRS with MediatR for decoupled and testable request handling, and developed a custom Event Store using PostgreSQL (JSONB) to maintain immutable logs. Secured via JWT and orchestrated with Docker.",
            tech: [".NET 9", "Clean Architecture", "CQRS", "PostgreSQL", "Docker", "JWT"],
            href: "https://github.com/JulijaF02/Speculo"
        }
    ];

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24 font-mono">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 text-sm font-bold uppercase tracking-widest text-teal-300 flex items-center gap-2 italic">
                <span className="w-4 h-[1px] bg-teal-500"></span>
                Projects
            </div>
            <div className="space-y-12">
                {projects.map((proj) => (
                    <div key={proj.id} className="border border-teal-500/20 bg-teal-500/5 p-6 rounded-lg relative overflow-hidden group/box hover:border-teal-500/40 transition-all">
                        <div className="absolute top-0 right-0 p-2 text-[8px] text-teal-500/30 uppercase font-black">id: {proj.id}</div>
                        <div className="relative z-10 sm:flex gap-6">
                            {/* Project Image/Thumbnail (Optional) */}
                            {proj.thumbnail && (
                                <div className="sm:w-1/3 mb-4 sm:mb-0 relative group/thumb cursor-pointer" onClick={() => setActiveVideo(proj.demoVideo)}>
                                    <div className="aspect-video rounded border border-teal-500/20 overflow-hidden relative">
                                        <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover grayscale group-hover/thumb:grayscale-0 transition-all duration-500 scale-105 group-hover/thumb:scale-100" />
                                        <div className="absolute inset-0 bg-teal-500/10 group-hover/thumb:bg-transparent transition-colors"></div>

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                                                <svg className="w-6 h-6 text-slate-950 fill-current ml-1" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex items-center gap-2 text-[10px] text-teal-500/60 font-bold uppercase tracking-widest">
                                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                                        Live Demo Available
                                    </div>
                                </div>
                            )}

                            <div className={proj.thumbnail ? "sm:w-2/3 font-sans" : "font-sans"}>
                                <h3 className="font-black text-white uppercase italic text-xl tracking-tighter">
                                    {proj.href ? (
                                        <a href={proj.href} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                                            {proj.title}
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    ) : (
                                        proj.title
                                    )}
                                </h3>
                                <p className="mt-2 text-base text-slate-400 leading-snug tracking-tight">{proj.desc}</p>

                                {proj.demoVideo && (
                                    <button
                                        onClick={() => setActiveVideo(proj.demoVideo)}
                                        className="mt-4 flex items-center gap-2 px-4 py-2 border border-teal-500/40 text-teal-400 text-xs font-bold uppercase tracking-[0.1em] hover:bg-teal-500/10 transition-all group/btn"
                                    >
                                        <svg className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        Watch Demo
                                    </button>
                                )}

                                <div className="mt-4 flex gap-2 font-mono flex-wrap">
                                    {proj.tech.map(t => <span key={t} className="text-[10px] text-teal-500 font-bold border-b border-teal-500/30 whitespace-nowrap">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <a
                    href="https://github.com/JulijaF02?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-4 px-10 border-2 border-teal-400/40 text-teal-300 font-bold uppercase text-xs tracking-[0.25em] hover:bg-teal-400 hover:text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(45,212,191,0.15)]"
                >
                    View Full Project Archive
                </a>
            </div>

            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoSrc={activeVideo}
            />
        </section>
    );
};

export default Projects;

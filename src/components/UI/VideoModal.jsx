"use client";

import React, { useEffect, useState } from 'react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            document.body.style.overflow = 'hidden';
        } else {
            // Delay setting isMounted to false to allow exit animation to play
            const timer = setTimeout(() => {
                setIsMounted(false);
            }, 500); // Match this duration to your transition duration
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen && !isMounted) return null; // Only return null if not open AND not mounted (after exit animation)

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"></div>

            {/* Modal Content */}
            <div
                className={`relative z-10 w-full max-w-5xl aspect-video bg-black border border-teal-500/20 shadow-[0_0_50px_rgba(45,212,191,0.15)] rounded-sm overflow-hidden transition-all duration-500 transform ${isMounted ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header / Close Button */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-20 opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-teal-500 font-mono text-xs uppercase tracking-widest font-bold">Find It - Demo Video</span>
                    <button
                        onClick={onClose}
                        className="text-teal-500 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Video Player */}
                <video
                    autoPlay
                    controls
                    className="w-full h-full"
                    src={videoSrc}
                >
                    Your browser does not support the video tag.
                </video>

                {/* Close Button UI (always visible on small screens or just top right) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 p-2 bg-slate-900/50 text-teal-500 rounded-full hover:bg-teal-500 hover:text-slate-950 transition-all md:hidden"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default VideoModal;

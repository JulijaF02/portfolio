"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [portalTarget, setPortalTarget] = useState(null);

    useEffect(() => {
        setPortalTarget(document.body);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => {
                setIsMounted(false);
            }, 500);
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

    if (!portalTarget || (!isOpen && !isMounted)) return null;

    const modalContent = (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 transition-all duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-xl"></div>

            {/* Modal Content */}
            <div
                className={`relative z-[10000] w-full max-w-6xl max-h-full flex items-center justify-center transition-all duration-500 transform ${isMounted ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full bg-black border border-teal-500/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden">
                    {/* Header / Close Button */}
                    <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/95 to-transparent z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-teal-500 font-mono text-xs uppercase tracking-[0.2em] font-bold">Find It - System Demo</span>
                        <button
                            onClick={onClose}
                            className="text-teal-500 hover:text-white transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Video Player */}
                    <div className="w-full flex items-center justify-center bg-black">
                        <video
                            autoPlay
                            controls
                            className="w-full h-auto max-h-[85vh] shadow-2xl"
                            src={videoSrc}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Mobile Close Button UI */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-30 p-3 bg-teal-500 text-slate-950 rounded-full hover:bg-white transition-all md:hidden shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, portalTarget);
};

export default VideoModal;

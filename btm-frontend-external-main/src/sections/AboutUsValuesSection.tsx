import React from "react";

export const AboutUsValuesSection: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-6xl space-y-12">

                {/* Section Title  */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
                    <p className="text-slate-600 text-base">
                        What drives our work and partnerships
                    </p>
                </div>

                {/* Three-column Layout  */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                    {/* Education-First  */}
                    <div className="rounded-xl bg-[#EAF4FF] p-6 shadow-sm space-y-4 border-l-4 border-sky-400 pl-4">
                        <div className="flex items-center gap-3">
                            {/* Person ICON  */}
                            <svg className="h-6 w-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.02-6 4.5V21h12v-2.5c0-2.48-2.69-4.5-6-4.5z" />
                            </svg>
                            <h3 className="text-xl font-semibold text-slate-900">Education-First</h3>
                        </div>
                        <p className="text-base text-slate-700 leading-relaxed">
                            Student learning and development are at the heart of everything we do.
                            Every project is designed to maximize educational value alongside client outcomes.
                        </p>
                    </div>

                    {/* Impact Driven  */}
                    <div className="rounded-xl bg-[#EAF4FF] p-6 shadow-sm space-y-4 border-l-4 border-sky-400 pl-4">
                        <div className="flex items-center gap-3">
                            {/* Lightbulb ICON  */}
                            <svg className="h-6 w-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.5V17h7v-2.5c2-1 3.5-3 3.5-5.5a7 7 0 00-7-7z" />
                            </svg>
                            <h3 className="text-xl font-semibold text-slate-900">Impact-Driven</h3>
                        </div>
                        <p className="text-base text-slate-700 leading-relaxed">
                            We focus on creating meaningful, measureable outcomes for all stakeholders-
                            organisations gain innovation, students gain experience, society gain skilled professionals.
                        </p>
                    </div>

                    {/* Affordable Innovation  */}
                     <div className="rounded-xl bg-[#EAF4FF] p-6 shadow-sm space-y-4 border-l-4 border-sky-400 pl-4">
                        <div className="flex items-center gap-3">
                                {/* Bag ICON  */}
                             <svg className="h-6 w-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 7V6a6 6 0 1112 0v1h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h2zm2 0h8V6a4 4 0 00-8 0v1z" />
                             </svg>
                             <h3 className="text-xl font-semibold text-slate-900">Affordable Innovation</h3>
                            </div>
                            <p className="text-base text-slate-700 leading-relaxed">
                                By operating as a non-profit initiative, we make cutting-edge digital innovation accessible
                                to organisations of all sizes without compromising on quality.
                            </p>
                        </div>

                </div>
            </div>
        </section>
    );
};
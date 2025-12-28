import React from "react";

export const HomeNextSection: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-gradient-to-b from-[#0A0A0C] via-[#0C1A2E] to-[#0A0A0C]">
            <div className="mx-auto max-w-5xl rounded-2xl bg-[#0B0B0C] border border-slate-800 p-12 shadow-lg">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">

                    {/* For Organisations  */}
                    <div className="space-y-5">
                        <h3 className="text-3xl font-bold text-sky-400">For Organisations</h3>

                        <ul className="space-y-4 text-lg text-slate-200">
                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>Affordable, low-risk digital innovation</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>Access to Brunel academic expertise</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>No consultancy profit margin</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>Purpose-driven partnership model</span>
                            </li>
                        </ul>
                    </div>

                    {/* For Students  */}
                    <div className="space-y-5">
                        <h3 className="text-3xl font-bold text-sky-400">
                            For Students
                        </h3>

                        <ul className="space-y-4 text-lg text-slate-200">
                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>Paid, real-world industry projects</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>Develop technical & soft skills</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>Academic supervision & mentorship</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-sky-400 text-xl">✓</span>
                                <span>Portfolio-ready outcomes</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
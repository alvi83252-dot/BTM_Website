import React from "react";

export const ForOrganisationsHowToEngage: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-4xl rounded-2xl bg-black p-10 space-y-12 text-whtie">

                {/* Section Title  */}
                <h2 className="text-3xl font-bold text-white text-center">
                    How to Engage
                </h2>

                {/* Steps  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    {/* Step 1 */}
                    <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#3B5FCC] text-white text-lg font-bold">
                            1
                        </div>
                        <h3 className="text-lg font-semibold text-white">Propose Your Project</h3>
                        <p className="text-sm text-slate-300">
                            Share your challenge or idea through our contact form
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#3B5FCC] text-white text-lg font-bold">
                            2
                        </div>
                        <h3 className="text-lg font-semibold text-white">Initial Discussion</h3>
                        <p className="text-sm text-slate-300">
                            No-obligation consultation to understand your needs
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#3B5FCC] text-white text-lg font-bold">
                            3
                        </div>
                        <h3 className="text-lg font-semibold text-white">Project Scoping</h3>
                        <p className="text-sm text-slate-300">
                            We'll help defien scope, timeline, and deliverables
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="space-y-4 md:col-start-2">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#3B5FCC] text-white text-lg font-bold">
                            4
                        </div>
                        <h3 className="text-lg font-semibold text-white">Team Assembly</h3>
                        <p className="text-sm text-slate-300">
                            Matched with academics and students for your project
                        </p>
                    </div>

                </div>

                {/* CTA Button  */}
                <div className="text-center pt-4">
                    <a href="#contact">
                        <button className="inline-flex items-center gap-2 rounded-full bg-[#3B5FCC] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#2F4FA8]">
                            Propose a Digital Project <span className="text-lg">→</span>
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
};
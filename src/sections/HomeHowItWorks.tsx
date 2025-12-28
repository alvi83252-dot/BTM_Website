import React from "react";

export const HomeHowItWorks: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-gradient-to-b from-[#0A0A0C] via-[#0C1A2E] to-[#0A0A0C]">
            <div className="mx-auto max-w-6xl space-y-12">
                <h3 className="text-3xl font-bold text-sky-400 text-center">
                    How It Works
                </h3>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            step: "01",
                            title: "Propose",
                            desc: "Organisations propose a digital challenge",
                        },
                        {
                            step: "02",
                            title: "Scope",
                            desc: "Projects scoped with Brunel academics",
                        },
                        {
                            step: "03",
                            title: "Deliver",
                            desc: "Students deliver under supervision",
                        },
                        {
                            step: "04",
                            title: "Receive",
                            desc: "Organisations receive real outcomes",
                        },
                    ].map(({ step, title, desc }) => (
                        <div
                        key={step} className="rounded-xl bg-[#121214] border border-slate-800 p-6 shadow-md space-y-3">
                            <p className="text-4xl font-bold text-sky-400">{step}</p>
                            <h4 className="text-lg font-semibold text-white">{title}</h4>
                            <p className="text-base text-slate-300 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
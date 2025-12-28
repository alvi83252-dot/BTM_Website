import React from "react";

export const AboutUsModelSection: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-4xl rounded-2xl bg-[#3B5FCC] border border-sky-300 p-10 shadow-lg space-y-8 text-white">

                {/* Section Title  */}
                <h2 className="text-3xl font-bold text-white text-center">Why the Non-Profit Model Matters</h2>

                {/* Lower Cost  */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Lower Costs</h3>
                    <p className="text-base text-slate-100 leading-relaxed">
                        Without profit margins typical of consultancies, we can offer services at significantly reduced rates.
                        Organisations get the same quality for a fraction of traditional consulting costs.
                    </p>
                </div>

                {/* Aligned Incentives  */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Aligned Incentives</h3>
                    <p className="text-base text-slate-100 leading-relaxed">
                        Our success isn't measured in profit but in learning outcomes and client satisfaction.
                        This alignment creates genuine partnerships focused on value, not billing hours.
                    </p>
                </div>

                {/* Access for All  */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Access for All</h3>
                    <p className="text-base text-slate-100 leading-relaxed">
                        Startups, charities, and small organisations can access university expertise and innovation
                        that would otherwise be financially out of reach.
                    </p>
                </div>

                {/* Sustainable Model  */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Sustainable Model</h3>
                    <p className="text-base text-slate-100 leading-relaxed">
                        Supported by Brunel University of London, BTM creates a sustainable ecosystem that benefits students,
                        academics, and industry partners for the long term.
                    </p>
                </div>

            </div>
        </section>
    );
};
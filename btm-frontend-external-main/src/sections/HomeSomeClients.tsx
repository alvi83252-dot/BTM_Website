import React from "react";

import IAGLogo from "../assets/logos/iag.png";
import FlemingLogo from "../assets/logos/fleming.png";
import HecoLogo from "../assets/logos/heco.png";
import AtheismLogo from "../assets/logos/atheism.png";

export const HomeSomeClients: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-gradient-to-b from-[#0A0A0C] via-[#0C1A2E] to-[#0A0A0C]">
            <div className="mx-auto max-w-6xl space-y-12">

                {/* Section title  */}
                <h3 className="text-3xl font-bold text-sky-400 text-center">
                    Some of our clients
                </h3>

                {/* Client grid  */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">


                    {/* IAG Cargo */}
                    <div className="rounded-xl bg-[#121214] border border-slate-800 p-6 shadow-md space-y-3 flex flex-col items-start">
                        <img src={IAGLogo} alt="IAG Cargo" className="h-10 w-auto mb-2" />
                        <h4 className="text-xl font-semibold text-white">IAG Cargo</h4>
                        <p className="text-base text-slate-300">LLM for legacy systems</p>
                    </div>

                    {/* Fleming Fund  */}
                    <div className="rounded-xl bg-[#121214] border border-slate-800 p-6 shadow-md space-y-3 flex flex-col items-start">
                        <img src={FlemingLogo} alt="Fleming Fund" className="h-10 w-auto mb-2" />
                        <h4 className="text-xl font-semibold text-white">Fleming Fund</h4>
                        <p className="text-base text-slate-300">Data Analysis</p>
                    </div>

                    {/* Heco Analytics  */}
                    <div className="rounded-xl bg-[#121214] border border-slate-800 p-6 shadow-md space-y-3 flex flex-col items-start">
                        <img src={HecoLogo} alt="Heco Analytics" className="h-10 w-auto mb-2" />
                        <h4 className="text-xl font-semibold text-white">Heco Analytics</h4>
                        <p className="text-base text-slate-300">Molecular Analytics</p>
                    </div>

                    {/* Explaining Atheism  */}
                    <div className="rounded-xl bg-[#121214] border border-slate-800 p-6 shadow-md space-y-3 flex flex-col items-start">
                        <img src={AtheismLogo} alt="Explaining Atheism" className="h-10 w-auto mb-2" />
                        <h4 className="text-xl font-semibold text-white">Explaining Atheism</h4>
                        <p className="text-base text-slate-300">Knowledge Platform</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

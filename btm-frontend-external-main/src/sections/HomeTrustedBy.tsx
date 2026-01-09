import React from "react";
import IAGLogo from "../assets/logos/iag.png";
import FlemingLogo from "../assets/logos/fleming.png";

export const HomeTrustedBy: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-gradient-to-b from-[#0A0A0C] via-[#0B0B0D] to-[#0A0A0C]">
            <div className="mx-auto max-w-6xl space-y-12">
                <h3 className="text-3xl font-bold text-sky-400 text-center">
                    Trusted By
                </h3>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Fleming Fund  */}
                    <div className="rounded-xl bg-[#121214] border border-slate-800 p-6 shadow-md space-y-3 flex flex-col items-start">
                        <img src={FlemingLogo} alt="Fleming Fund" className="h-10 w-auto mb-2" />
                        <h4 className="text-xl font-semibold text-white">Fleming Fund</h4>
                        <p className="text-base text-slate-300">Data analysis</p>
                    </div>

                    {/* IAG Cargo  */}
                    <div className="rounded-xl bg-[#121214] border border-slate-800 p-6 shadow-md space-y-3 flex flex-col items-start">
                        <img src={IAGLogo} alt="IAG Cargo" className="h-10 w-auto mb-2" />
                        <h4 className="text-xl font-semibold text-white">IAG Cargo</h4>
                        <p className="text-base text-slate-300">LLM for legacy systems</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
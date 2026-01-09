import React from "react";

export const ForOrganisationsSection: React.FC = () => {
    return (
        <section id="for-organisations" className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-4xl space-y-12 text-white">
                
                {/* Section Title  */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-black/100">For Organisations</h2>
                    <p className="text-base text-black/50">
                        Partner with BTM for affordable, high-quality digital innovation
                    </p>
                </div>

                {/* Highlight Blue Box  */}
                <div className="rounded-2xl bg-[#3B5FCC] border border-sky-300 p-8 shadow-lg space-y-3">

                    <h3 className="text-2xl font-semibold text-white text-center">Why Partner with BTM?</h3>

                    {/* Affordable Innovation  */}
                 <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 space-y-4 border-2 border-white/0">
      <div className="flex items-start gap-3">
             <div className="text-2xl">💰</div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Affordable Innovation</h4>
                        <p className="text-base text-slate-100 leading-relaxed">
                            No profit margins means significantly lower costs than traditional consultancies
                        </p>
                     </div>
              </div>
      </div>

      {/* Academic Expertise  */}
      <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 space-y-4 border-2 border-white/0">
      <div className="flex items-start gap-3">
             <div className="text-2xl">🎓</div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Academic Expertise</h4>
                        <p className="text-base text-slate-100 leading-relaxed">
                            Access to Brunel's research and technical knowledge
                        </p>
                     </div>
              </div>
      </div>

      {/* Low-Risk Experimentation  */}
      <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 space-y-4 border-2 border-white/0">
      <div className="flex items-start gap-3">
             <div className="text-2xl">🔬</div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Low-Risk Experimentation</h4>
                        <p className="text-base text-slate-100 leading-relaxed">
                            Test ideas and validate concepts before major investments
                        </p>
                     </div>
              </div>
      </div>

      {/* Purpose-Driven  */}
       <div className="bg-white/15 backdrop-blur-sm rounded-xl p-2 space-y-4 border-2 border-white/0">
      <div className="flex items-start gap-3">
             <div className="text-2xl">🤝</div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Purpose-Driven</h4>
                        <p className="text-base text-slate-100 leading-relaxed">
                            Support education while solving your business challenges
                        </p>
                     </div>
              </div>
      </div>

                    
                </div>
            </div>
        </section>
    );
};
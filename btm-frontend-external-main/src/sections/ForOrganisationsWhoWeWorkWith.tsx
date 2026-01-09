import React from "react";

export const ForOrganisationsWhoWeWorkWith: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-6xl space-y-12 text-white">

                {/* Section Title  */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-black/90">Who We Work With</h2>
                </div>

                {/* Card Layout  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Startups  */}
         <div className="bg-white/15 backdrop-blue-sm rounded-2xl p-6 space-y-3 border-2 border-slate-200 shadow-md">
              <div className="text-3xl">🚀</div>
                 <h3 className="text-xl font-semibold text-black/100">Startups</h3>
                 <p className="text-base text-black/60 leading-relaxed">
                        Early-stage companies needed to build MVPs, validate product ideas, or scale technical capabilities without breaking the bank.
                    </p>
                 <p className="text-sm text-black/60 font-medium">
                 <strong>Perfect for:</strong> MVP development, technical prototypes, data analysis
                 </p>
         </div>

         {/* Charities & Non-Profits  */}
         <div className="bg-white/15 backdrop-blue-sm rounded-2xl p-6 space-y-3 border-2 border-slate-200 shadow-md">
              <div className="text-3xl">❤️</div>
                 <h3 className="text-xl font-semibold text-black/100">Charities & Non-Profits</h3>
                 <p className="text-base text-black/60 leading-relaxed">
                        Mission-driven organisations maximizing social impact through cost-effective digital transformation and data-driven decision making.
                    </p>
                 <p className="text-sm text-black/60 font-medium">
                 <strong>Perfect for:</strong> Data analysis, web tools, automation
                 </p>
         </div>

         {/* Enterprises  */}
         <div className="bg-white/15 backdrop-blue-sm rounded-2xl p-6 space-y-3 border-2 border-slate-200 shadow-md">
              <div className="text-3xl">🏢</div>
                 <h3 className="text-xl font-semibold text-black/100">Enterprises</h3>
                 <p className="text-base text-black/60 leading-relaxed">
                        Large organisations exploring emerging technologies, modernising legacy systems,
                        or conducting R&D with reduced risk and investment.
                    </p>
                 <p className="text-sm text-black/60 font-medium">
                 <strong>Perfect for:</strong> POCs, R&D, AI exploration, legacy modernisation
                 </p>
         </div>

                  </div>
            </div>
        </section>
    );
};
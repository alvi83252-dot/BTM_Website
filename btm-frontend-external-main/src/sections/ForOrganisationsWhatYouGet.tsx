import React from "react";

export const ForOrganisationsWhatYouGet: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-6xl space-y-12">

                {/* Section Title  */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-black">What You Get & What It Costs</h2>
                </div>

                {/* Two-column layout  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* What You Get  */}
                    <div className="bg-sky-100 rounded-2xl p-8 space-y-4 text-white shadow-md">
                        <h3 className="text-xl font-bold text-black/80">What You Get</h3>
                        <ul className="list-desc list-inside text-black text-sm space-y-3">
                        <li className="flex items-start gap-2 -mt-1">
                            <span className="text-sky-600 text-lg">✔️</span>
                            <span>Working prototypes or production-ready code</span>
                        </li>

                         <li className="flex items-start gap-2 -mt-1">
                            <span className="text-sky-600 text-lg">✔️</span>
                            <span>Technical documentation and handover</span>
                        </li>

                         <li className="flex items-start gap-2 -mt-1">
                            <span className="text-sky-600 text-lg">✔️</span>
                            <span>Regular progress updates and reviews</span>
                        </li>

                         <li className="flex items-start gap-2 -mt-1">
                            <span className="text-sky-600 text-lg">✔️</span>
                            <span>Academic quality assurance throughout</span>
                        </li>
                     </ul>
                </div>

                        {/* What It Costs  */}
                        <div className="bg-sky-100 rounded-2xl p-8 space-y-4 text-white shadow-md">
                        <h3 className="text-xl font-bold text-black/80">What It Costs</h3>
                        <p className="text-sm text-black leading-relaxed">
                            Pricing is project-specific and transparent. As a non-profit, we charge only enough to cover student wages and minimal operational costs-typically <strong>30-50% less</strong> than commerical consultancies.
                        </p>
                        <p className="text-sm text-black leading-relaxed">
                            Contact us for a custom quote based on your project scope and timeline. 
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
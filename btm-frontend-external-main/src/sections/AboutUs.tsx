import React from "react";

export const AboutUs: React.FC = () => {
    return (
        <section id="about-us" className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-5xl space-y-12">

                {/* Section Title */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
                    <p className="text-slate-600 text-base">
                        Our mission, credibility, and the story behind BTM
                    </p>
                </div>

                {/* What is BTM  */}
                <div className="rounded-xl bg-[#EAF4FF] p-6 shadow-sm space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900"><strong>What is BTM?</strong></h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                        Brunel Talent Marketplace (BTM) is a <strong className="text-slate-900">non-profit digital consulting initiative</strong> from Brunel University's Computer Science department. We bridge academia and industry by delivering high-quality IT and AI projects at affordable costs.
                        <br></br>
                        <br></br>
                        As a university-backed initiative with no profit margins, we offer organisations access to cutting-edge academic expertise and talented students while providing students with paid, real-world experience that transforms their careers.
                    </p>
                </div>
            
            </div>
        </section>
    );
};
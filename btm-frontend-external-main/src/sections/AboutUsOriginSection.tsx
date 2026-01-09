import React from "react";

export const AboutUsOriginSection: React.FC = () => {
    return (
        <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
            <div className="mx-auto max-w-4xl rounded-2xl bg-[#121214] border border-slate-800 p-10 shadow-lg space-y-6">

                <h2 className="text-3xl font-bold text-white text-center">How BTM Started</h2>

                <p className="text-base text-slate-300 leading-relaxed">
                    Over the past two years, we developed an internal IT consulting team with Brunel 
                    University's consulting area. What began as a small initiative quickly proved 
                    its value, enabling us to create IT consulting opportunities for industry across web 
                    development, LLM applications, and machine learning.
                    <br></br>
                    <br></br>
                    BTM leverages both academic experts and undergraduate/postgraduate students to deliver projects, reducing costs since universities operate without profit margins.
                    This unique model creates a triple win: affordable innovation for organisations, real experience for students, and meaningful impact for academics.
                </p>
            </div>
        </section>
    );
};
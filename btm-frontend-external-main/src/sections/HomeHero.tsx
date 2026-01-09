import React from "react";
import Background from "../assets/images/Background.jpg";
import BTMlogo from "../assets/logos/BTMLogo.jpg"
import { useGetHeroContentQuery } from "../services/contentApi";

export const HomeHero: React.FC = () => {
    const { data } = useGetHeroContentQuery();

    console.log('Hero Data:', data); // this line shows the data backend



    const title = data?.title ?? "Digital Innovation";
    const subtitle = data?.subtitle ?? "Powered by Brunel Talent";
    const description = data?.description ?? "Delivering real-world IT and AI projects through academic experts and paid student talent. Affordable innovation that creates shared value.";

    return (
        <section className="relative overflow-hidden min-h-screen snap-start h-screen">
            {/* background image  */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Background})` }}
                ></div>
                {/* Dark overlay  */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/90 via-black/85 to-slate-900/90"/>

                <div className="relative z-20 space-y-5">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:px-8">
                    {/* left: text  */}
                    <div className="max-w-xl space-y-5">
                        <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                            BU BTM
                        </p>
                        <p className="mt-2 text-3xl font-bold text-sky-400 sm:text-4xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                            Non-profit digital consulting arm of Brunel University of London
                        </p>

                        <div>
                            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                {title}
                            </h1>
                            <h2 className="mt-2 text-2xl font-semibold text-sky-400 sm:text-3xl">
                                {subtitle}
                            </h2>
                        </div>

                        <p className="max-w-lg text-sm leading-relaxed text-slate-200 sm:text-base">
                            {description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                            <a href="#for-organisations">
                            <button className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/30 hover:bg-sky-400">
                            Partner with BTM 
                        </button>
                        </a>
                        <a href="mailto:btm@brunel.ac.uk">
                        <button className="rounded-full border border-slate-500 bg-black/40 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-200">
                        Get In Touch 
                        </button></a>
                        </div>
                        </div>

                        {/* Right: Circulary Mark  */}
                        <div className="hidden md:flex items-center justify-center">
                        <div className="flex flex-1 items-center justify-center">
                            <div className="relative h-48 w-48 md:h-64 md:w-64">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/30 via-sky-400/10 to-transparent blur-2xl"/>
                                <img src={BTMlogo} alt="BTM logo" className="relative z-10 h-full w-full object-contain drop-shadow-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};
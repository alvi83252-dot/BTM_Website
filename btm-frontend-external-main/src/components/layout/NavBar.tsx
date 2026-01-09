import React, { useEffect, useState } from "react";
import BTMLogo from "../../assets/logos/BTMLogo.jpg";
import BULogo from "../../assets/logos/BULogo.jpg";

const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "what-we-deliver", label: "What We Deliver" },
    { id: "our-people", label: "Our People" },
    { id: "about-us", label: "About Us" },
    { id: "for-organisations", label: "For Organisations" },
    { id: "contact", label: "Contact" },
];

export const NavBar: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

    // Active Section tracking 
    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if(!container) return;

        const handleScrollPosition = () => {
            const scrollY = container.scrollTop;

            const sections = NAV_ITEMS.map((item) => {
                const el = document.getElementById(item.id);
                if (!el) return { id: item.id, offset: Infinity };
                return { id: item.id, offset: el.offsetTop };
            });

            const current = sections.reduce((closest, item) => {
                return scrollY >= item.offset - 120 ? item : closest;
            }, sections[0]);

            setActiveSection(current.id);
        };

        container.addEventListener("scroll", handleScrollPosition);
        handleScrollPosition();
    }, []);

    // Save Scroll Position 
    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        const saveScroll = () => {
            localStorage.setItem("scrollY", String(container.scrollTop));
        };

        container.addEventListener("scroll", saveScroll);
        return () => container.removeEventListener("scroll", saveScroll);
    }, []);

    // Restore Scroll Position 
    useEffect(() => {
        const saved = localStorage.getItem("scrollY");
        const container = document.getElementById("scroll-container");
        if (!saved || !container) return;

        setTimeout(() => {
            container.scrollTo({ top: Number(saved), behavior: "instant" });
        }, 50);
    }, []);

    // Handle Navigation Scroll 
    const handleScroll = (targetId: string) => {
        const container = document.getElementById("scroll-container");
        const el = document.getElementById(targetId);
        if (!el || !container) return;

        window.location.hash = targetId;

        container.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
        });
    };
    

    return (
        <header className="fixed inset-x-0 top-0 z-40 bg-black/75 backdrop-blur border-b border-slate-800">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1 md:px-6 lg:px-8">
                {/* logo  */}
                <div className="flex items-center gap-3">
                    <img src={BTMLogo} alt="BTM Logo" className="h-9 w-auto"/>
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                            BU
                        </span>
                        <span className="text-sm font-semibold text-white">BTM</span>
                    </div>
                </div>

                {/* Center Nav Links  */}
                <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`
                                 relative px-1 py-0.5 transition-colors
                                 ${activeSection === item.id ? "text-sky-400" : "text-slate-200 hover:text-white"}
                                 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                                 after:origin-left after:scale-x-0 after:bg-sky-400
                                 after:transition-transform after:duration-300
                                 hover:after:scale-x-100
                              `}>
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Right CTA  */}
                <div className="flex items-center gap-6">
                    {/* Brunel Logo  */}
                    <img src={BULogo} alt="Brunel University Logo" className="h-17 w-auto object-contain hidden md:block"/>
                    <button onClick={() => handleScroll("contact")} className="hidden rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 md:inline-flex">
                        Contact Us
                    </button>
                </div>
            </nav>
        </header>
    );
};
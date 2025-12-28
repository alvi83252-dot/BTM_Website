import React from "react";

export const BackToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 bg-black/40 hover:bg-black/60 text-white backdrop-blur p-3 rounded-full shadow-lg tranisition-all">
        ↑
        </button>
    );
};
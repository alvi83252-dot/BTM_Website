import React from "react";
import { NavBar } from "./NavBar";

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white">
            <NavBar />
            {/* top padding to account for fixed navbar */}
            <main className="pt-20">
                {children}
            </main>
        </div>
    );
};
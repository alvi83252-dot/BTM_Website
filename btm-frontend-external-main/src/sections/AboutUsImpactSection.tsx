import React from "react";

export const AboutUsImpactSection: React.FC = () => {
  return (
    <section className="snap-start h-screen relative z-10 px-4 py-20 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl space-y-12">

        {/* Section Title  */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">Our Impact</h2>
          <p className="text-slate-600 text-base">How BTM bridges academia and industry</p>
        </div>

        {/* Two-column layout  */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* Knowledge Transfer  */}
            <div className="rounded-xl bg-[#EAF4FF] p-6 shadow-sm space-y-4 border-l-4 border-sky-400 pl-4">
              <h3 className="text-xl font-semibold text-slate-900">Knowledge Transfer</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                We facilitate the flow of academic research and expertise into practical business applications.
                Organisations benefit from university innovation while academics see their work create real-world impact.
              </p>
            </div>

            {/* Student Development  */}
            <div className="rounded-xl bg-[#EAF4FF] p-6 shadow-sm space-y-4 border-l-4 border-sky-400 pl-4">
              <h3 className="text-xl font-semibold text-slate-900">Student Development</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Students can only develop crucial soft skills-communication, teamwork, professionalism-through real practice.
                BTM provides paid opportunities to work on genuine projects with actual clients and deadlines.
              </p>
            </div>

        </div>
      </div>
    </section>
  );
};
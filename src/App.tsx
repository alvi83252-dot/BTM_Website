import React, { useState, useEffect } from "react";
import { PageLayout } from "./components/layout/PageLayout";
import { HomeHero } from "./sections/HomeHero";
import { HomeNextSection } from "./sections/HomeFor";
import { HomeHowItWorks } from "./sections/HomeHowItWorks";
import { HomeTrustedBy } from "./sections/HomeTrustedBy";
import { HomeSomeClients } from "./sections/HomeSomeClients";
// import { WhatWeDeliver } from "./sections/WhatWeDeliver";
// import { OurPeople } from "./sections/OurPeople";
import { AboutUs } from "./sections/AboutUs";
import { AboutUsImpactSection } from "./sections/AboutUsImpactSection";
import { AboutUsOriginSection } from "./sections/AboutUsOriginSection";
import { AboutUsValuesSection } from "./sections/AboutUsValuesSection";
import { AboutUsModelSection } from "./sections/AboutUsModelSection";
import { ForOrganisationsSection } from "./sections/ForOrganisationsSection";
import { ForOrganisationsWhoWeWorkWith } from "./sections/ForOrganisationsWhoWeWorkWith";
import { ForOrganisationsHowToEngage } from "./sections/ForOrganisationsHowToEngage";
import { ForOrganisationsWhatYouGet } from "./sections/ForOrganisationsWhatYouGet";
import { BackToTopButton } from "./BackToTopButton";
// import { Contact } from "./sections/Contact";

const App: React.FC = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Loading Delay 
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
   }, []);

  //  Fullscreen centered Loading Screen 
  if (loading) {
    return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h1 className="text-5xl font-bold text-white">Loading ...</h1>
    </div>
    );
  }
  return (
    <div id="scroll-container" className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
    <PageLayout>
      <BackToTopButton />
      
      <section id="home">
        <HomeHero />
        <HomeNextSection />
        <HomeHowItWorks />
        <HomeTrustedBy />
        <HomeSomeClients />
      </section>
      {/* <section id="what-we-deliver">
        <WhatWeDeliver />
      </section>
      <section id="our-people">
        <OurPeople />
      </section>
      */ }
      <section id="about-us">
        <AboutUs />
        <AboutUsImpactSection />
        <AboutUsOriginSection />
        <AboutUsValuesSection />
        <AboutUsModelSection  />
      </section>

      <section id="for-organisations">
        <ForOrganisationsSection />
        <ForOrganisationsWhoWeWorkWith />
        <ForOrganisationsHowToEngage />
        <ForOrganisationsWhatYouGet />
      </section>
      { /*
      <section id="contact">
        <Contact />
      </section> */}
    </PageLayout>
  </div>
  );
};

export default App;
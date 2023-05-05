import React from "react";
import Hero from "../../components/hero/hero";
import Card from "../../components/Card/card";
import SubHero from "../../components/subhero/subhero";
import CreativeTeacher from "../../components/creativeTeacher/creativeTeacher.jsx";
import Pricing from "../../components/pricing/pricing";
import ContactUs from "../../components/contactUs/contactUs";


function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <Card />
      <CreativeTeacher/>
      <Pricing />
      <ContactUs/>
      </>
  );
}

export default Home;

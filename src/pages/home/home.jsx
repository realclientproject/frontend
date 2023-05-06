import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/hero";
import NavBar from "../../components/navbar/navbar";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/footer";
import SubHero from "../../components/subhero/subhero";
import Client from "../../components/client/client";
import Pricing from "../../components/pricing/pricing";
import ContactUs from "../../components/contactUs/contactUs";
import TeacherCard from "../../components/teacherCard/teacherCard";
function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SubHero />
      <Card />
      <TeacherCard />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;

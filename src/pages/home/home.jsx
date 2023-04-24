import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/hero";
import NavBar from "../../components/navbar/navbar";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/footer";
function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card/>
      <Footer />
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/hero";
import NavBar from "../../components/navbar/navbar";
function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

export default Home;

import React from "react";

//components
import Navigation from "../Navigation";
import Button from '../Button';
import Hero from '../Hero';
import Facts from '../Facts';
import Team from '../Team';

function App() {
  return (
    <div>
      <div className="top-section-wrapper">
        <div className="top-section-darkLayer">
        <Navigation />
        <Hero />
        <Button />
      </div>
      </div>
      <Facts />
      <Team />
    </div>
  );
}

export default App;

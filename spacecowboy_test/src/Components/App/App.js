import React from "react";

//components
import Navigation from "../Navigation";
import Button from "../Button";
import Hero from "../Hero";
import Facts from "../Facts";
import Team from "../Team";
import Gallery from "../Gallery";
import SayHelloForm from '../SayHelloForm';

function App() {
  return (
    <div>
      <div className="top-section-wrapper">
        <div className="top-section-dark-cover">
          <Navigation />
          <Hero />
          <Button buttonTitle='learn more' />
        </div>
      </div>
      <Facts />
      <Team />
      <Gallery />
      <SayHelloForm />
    </div>
  );
}

export default App;

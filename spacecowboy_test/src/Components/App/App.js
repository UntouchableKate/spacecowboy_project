import React from "react";

import {animateScroll as scroll} from 'react-scroll'

//components
import Navigation from "../Navigation";
import Button from "../Button";
import Hero from "../Hero";
import Facts from "../Facts";
import Team from "../Team";
import Gallery from "../Gallery";
import ContactForm from '../ContactForm';

function App() {

 const scrollTo =() => {
    scroll.scrollTo(272);
  }
  return (
    <div>
      <div className="top-section-wrapper">
        <div className="top-section-dark-cover">
          <Navigation />
          <Hero />
          <Button buttonTitle='learn more' scrollTo={scrollTo} />
        </div>
      </div>
      <Facts />
      <Team />
      <Gallery />
      <ContactForm />
    </div>
  );
}

export default App;

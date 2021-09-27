import React from "react";

import { Element, scroller } from "react-scroll";
//components
import Navigation from "../Navigation";
import Button from "../Button";
import Hero from "../Hero";
import Facts from "../Facts";
import TeamIList from "../TeamList";
import Gallery from "../Gallery";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

function App() {
  const scrollTo = () => {
    scroller.scrollTo("scrollToElement", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -260,
    });
  };
  return (
    <div>
      <div className="top-section-wrapper">
        <div className="top-section-dark-cover">
          <div className="header-wrapper">
            <Navigation />
            <Hero />
            <Button buttonTitle="learn more" scrollTo={scrollTo} />
          </div>
        </div>
      </div>
      <Element name="scrollToElement">
        <Facts />
      </Element>
      <TeamIList />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

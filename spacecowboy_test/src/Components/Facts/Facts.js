import React from "react";

//icons
import cowboyIcon from "../../images/cowboy-icon.png";
import instrumentsIcon from "../../images/instruments-icon.png";
import spaceIcon from "../../images/space-icon.png";

function Facts() {
  return (
    <>
      <div className="facts-section-wrapper" id="aboutUs">
        <h4 className="facts-section__title">a few facts about us</h4>
        <p className="facts-section__text">
          Before you do business with us, you might want to know a little bit
          more about our company:
        </p>

        <ul className="fact-section__list">
          <li className="fact-section__item">
            <div className="fact-section__circle">
              <img className="fact-section__icon" src={cowboyIcon} alt="icon" />
            </div>
            <p className="fact-section__item-title">we are cowboys</p>
            <p className="fact-section__item-text">
              You might have guessed that from our company name, but the fact
              is: Yes, we are indeed cowboys. Cowboys who'd like to go to space.
              Deal with it.
            </p>
          </li>
          <li className="fact-section__item">
            <div className="fact-section__circle">
              <img
                className="fact-section__icon"
                src={instrumentsIcon}
                alt="icon"
              />
            </div>
            <p className="fact-section__item-title">we like to tinker</p>
            <p className="fact-section__item-text">
              There are a lot of things lying around on a typical Cowboy Ranch.
              So we started putting them together, and got really good at rocket
              building.
            </p>
          </li>
          <li className="fact-section__item">
            <div className="fact-section__circle">
              <img className="fact-section__icon" src={spaceIcon} alt="icon" />
            </div>
            <p className="fact-section__item-title">we explore space</p>
            <p className="fact-section__item-text">
              Once we got our first proper rocket, everything went quite fast.
              And now we are the #1 independent space agency in the world. Who
              would have guessed?
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Facts;

import React from "react";

//images

import cowboy1 from '../../images/teams/cowboy-1.jpg';
import cowboy2 from '../../images/teams/cowboy-2.jpg';
import cowboy3 from '../../images/teams/cowboy-3.jpg';
import cowboy4 from '../../images/teams/cowboy-4.jpg';
import cowboy5 from '../../images/teams/cowboy-5.jpg';

function Team() {
  return (
    <div className="team-section-wrapper">
      <p className="team-section__title">The team</p>
      <p className="team-section__text">
        Yep, that‘s us. Six fine fellows, eager to get on the next adventure.
        Click on the pictures to get some more information!
      </p>
      <div className="team-card">
        <div className="card-img-wrapper">
          <img className="team-card__image" src={cowboy1} alt="team member" />
        </div>
        <div className="card-descr-wrapper">
          <p className="card-descr__name">Dick harvey</p>
          <p className="card-descr__position">captain</p>
          <div className="card-additional-descr-wrapper">
            <p className="card-additional-descr__age">AGE: 56</p>
            <p className="card-additional-descr__missions">missions: 13</p>
          </div>
        </div>
      </div>

      <div className="team-card">
        <div className="card-img-wrapper">
          <img className="team-card__image" src={cowboy2} alt="team member" />
        </div>
        <div className="card-descr-wrapper">
          <p className="card-descr__name">richie farhem</p>
          <p className="card-descr__position">engineer</p>
          <div className="card-additional-descr-wrapper">
            <p className="card-additional-descr__age">AGE: 48</p>
            <p className="card-additional-descr__missions">missions: 13</p>
          </div>
        </div>
      </div>
      <div className="team-card">
        <div className="card-img-wrapper">
          <img className="team-card__image" src={cowboy3} alt="team member" />
        </div>
        <div className="card-descr-wrapper">
          <p className="card-descr__name">john siracha</p>
          <p className="card-descr__position">gunslinger</p>
          <div className="card-additional-descr-wrapper">
            <p className="card-additional-descr__age">AGE: 47</p>
            <p className="card-additional-descr__missions">missions: 13</p>
          </div>
        </div>
      </div>

      <div className="team-card">
        <div className="card-img-wrapper">
          <img className="team-card__image" src={cowboy4} alt="team member" />
        </div>
        <div className="card-descr-wrapper">
          <p className="card-descr__name">bert mcnamera</p>
          <p className="card-descr__position">captain</p>
          <div className="card-additional-descr-wrapper">
            <p className="card-additional-descr__age">AGE: 71</p>
            <p className="card-additional-descr__missions">missions: 13</p>
          </div>
        </div>
      </div>

      <div className="team-card">
        <div className="card-img-wrapper">
          <img className="team-card__image" src={cowboy5} alt="team member" />
        </div>
        <div className="card-descr-wrapper">
          <p className="card-descr__name">al sveringe</p>
          <p className="card-descr__position">ceo</p>
          <div className="card-additional-descr-wrapper">
            <p className="card-additional-descr__age">AGE: 76</p>
            <p className="card-additional-descr__missions">missions: 13</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

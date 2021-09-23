import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import cowboy1 from "../../images/teams/cowboy-1.jpg";
import cowboy2 from "../../images/teams/cowboy-2.jpg";
import cowboy3 from "../../images/teams/cowboy-3.jpg";
import cowboy4 from "../../images/teams/cowboy-4.jpg";
import cowboy5 from "../../images/teams/cowboy-5.jpg";

//icons

import prevArrow from "../../images/teams/prev-arrow.png";
import nextArrow from "../../images/teams/next-arrow.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid #acb1b6",
        top: "121%",
        right: "8%",
      }}
      onClick={onClick}
    >
      <img className="team__next-icon" src={nextArrow} alt="next-icon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid #acb1b6",
        top: "121%",
        left: "8%",
      }}
      onClick={onClick}
    >
      <img className="team__prev-icon" src={prevArrow} alt="prev-icon" />
    </div>
  );
}

class Team extends Component {
  state = {
    backCardIsShown: false,
  };

  handleToggleCard = () => {
    this.setState({
      backCardIsShown: !this.state.backCardIsShown,
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "20px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: (dots) => (
        <div
          style={{
            width: "102px",
            left: "40%",
            bottom: "-54px",
          }}
        >
          <ul
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            {" "}
            {dots}{" "}
          </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          className="active-div"
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "6px",
            backgroundColor: " #575B64",
            margin: "0",
          }}
        >
          {}
        </div>
      ),
    };
    const { backCardIsShown } = this.state;
    const {handleToggleCard} = this;
    return (
      <div className="team-section-wrapper" id="theTeam">
        <div className="team-cover-wrapper">
          <div className="team-section-title-wrapper">
            <p className="team-section__title">The team</p>
            <p className="team-section__text">
              Yep, that‘s us. Six fine fellows, eager to get on the next
              adventure. Click on the pictures to get some more information!
            </p>
          </div>
          <Slider {...settings}>
            <div
              className="team-card"
              onClick={handleToggleCard}
            >
              <div className="card-img-wrapper">
                <img
                  className="team-card__image"
                  src={cowboy1}
                  alt="team member"
                />
              </div>
              <div className="card-descr-wrapper">
                <p className="card-descr__name">
                  Dick <br /> harvey
                </p>
                <p className="card-descr__information card-descr__position">
                  captain
                </p>
                <p className="card-descr__information">AGE: 56</p>
                <p className="card-descr__information">missions: 13</p>
              </div>
              {backCardIsShown && (
                <div className="team-cover-card">
                  <p className="team-cover-card__author-quote">
                    dick‘s famous quote:
                  </p>
                  <p className="team-cover-card__quote">
                    „This is a small step for me, but a big step for, like, a
                    small kid"
                  </p>
                </div>
              )}
            </div>

            <div className="team-card">
              <div className="card-img-wrapper">
                <img
                  className="team-card__image"
                  src={cowboy2}
                  alt="team member"
                />
              </div>
              <div className="card-descr-wrapper">
                <p className="card-descr__name">
                  richie <br /> farhem
                </p>
                <p className="card-descr__information card-descr__position">
                  engineer
                </p>
                <p className="card-descr__information">AGE: 48</p>
                <p className="card-descr__information">missions: 13</p>
              </div>

              {backCardIsShown && (
                <div className="team-cover-card">
                  <p className="team-cover-card__author-quote">
                    dick‘s famous quote:
                  </p>
                  <p className="team-cover-card__quote">
                    „This is a small step for me, but a big step for, like, a
                    small kid"
                  </p>
                </div>
              )}
            </div>

            <div className="team-card">
              <div className="card-img-wrapper">
                <img
                  className="team-card__image"
                  src={cowboy3}
                  alt="team member"
                />
              </div>
              <div className="card-descr-wrapper">
                <p className="card-descr__name">
                  john <br /> siracha
                </p>
                <p className="card-descr__information card-descr__position">
                  gunslinger
                </p>
                <p className="card-descr__information">AGE: 47</p>
                <p className="card-descr__information">missions: 13</p>
              </div>
              {backCardIsShown && (
                <div className="team-cover-card">
                  <p className="team-cover-card__author-quote">
                    dick‘s famous quote:
                  </p>
                  <p className="team-cover-card__quote">
                    „This is a small step for me, but a big step for, like, a
                    small kid"
                  </p>
                </div>
              )}
            </div>

            <div className="team-card">
              <div className="card-img-wrapper">
                <img
                  className="team-card__image"
                  src={cowboy4}
                  alt="team member"
                />
              </div>
              <div className="card-descr-wrapper">
                <p className="card-descr__name">
                  bert <br /> mcnamera
                </p>
                <p className="card-descr__information card-descr__position">
                  captain
                </p>
                <p className="card-descr__information">AGE: 71</p>
                <p className="card-descr__information">missions: 13</p>
              </div>
              {backCardIsShown && (
                <div className="team-cover-card">
                  <p className="team-cover-card__author-quote">
                    dick‘s famous quote:
                  </p>
                  <p className="team-cover-card__quote">
                    „This is a small step for me, but a big step for, like, a
                    small kid"
                  </p>
                </div>
              )}
            </div>

            <div className="team-card">
              <div className="card-img-wrapper">
                <img
                  className="team-card__image"
                  src={cowboy5}
                  alt="team member"
                />
              </div>
              <div className="card-descr-wrapper">
                <p className="card-descr__name">
                  al <br /> sveringe
                </p>
                <p className="card-descr__information card-descr__position">
                  ceo
                </p>
                <p className="card-descr__information">AGE: 76</p>
                <p className="card-descr__information">missions: 13</p>
              </div>
              {backCardIsShown && (
                <div className="team-cover-card">
                  <p className="team-cover-card__author-quote">
                    dick‘s famous quote:
                  </p>
                  <p className="team-cover-card__quote">
                    „This is a small step for me, but a big step for, like, a
                    small kid"
                  </p>
                </div>
              )}
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Team;

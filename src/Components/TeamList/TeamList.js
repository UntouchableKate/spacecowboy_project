import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//copmonents
import TeamItem from "../TeamItem";

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

const TeamIList = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    mobileFirst: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 1169,
        settings: {
          slidesToShow: 2.3,
          centerMode: false,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.85,
          dots: true,
          infinite: false,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 1.5,
          dots: true,
          infinite: false,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 546,
        settings: {
          slidesToShow: 1.3,
          dots: true,
          infinite: false,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 474,
        settings: {
          slidesToShow: 1,
          dots: true,
          infinite: false,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
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
          <TeamItem
            cowboy={cowboy1}
            name="Dick harvey"
            position="captain"
            age="56"
            missions="13"
            whoseQuote="dick"
            quote="„This is a small step for me, but a big step for, like, a
                  small kid”"
          />
          <TeamItem
            cowboy={cowboy2}
            name="richie farhem"
            position="engineer"
            age="48"
            missions="13"
            whoseQuote="richie"
            quote="„This is a small step for me, but a big step for, like, a
                  small kid”"
          />
          <TeamItem
            cowboy={cowboy3}
            name="john siracha"
            position="gunslinger"
            age="47"
            missions="13"
            whoseQuote="john"
            quote="„This is a small step for me, but a big step for, like, a
                  small kid”"
          />
          <TeamItem
            cowboy={cowboy4}
            name="bert mcnamera"
            position="captain"
            age="71"
            missions="13"
            whoseQuote="bert"
            quote="„This is a small step for me, but a big step for, like, a
                  small kid”"
          />
          <TeamItem
            cowboy={cowboy5}
            name="al sveringe"
            position="ceo"
            age="76"
            missions="13"
            whoseQuote="al"
            quote="„This is a small step for me, but a big step for, like, a
                  small kid”"
          />
        </Slider>
      </div>
    </div>
  );
};

export default TeamIList;

import React, { Component } from "react";

class TeamItem extends Component {
  state = {
    currentCardIsClicked: false,
  };

  handleChangeCard = () => {
    this.setState({
      currentCardIsClicked: !this.state.currentCardIsClicked,
    });
  };
  render() {
    const { currentCardIsClicked } = this.state;
    const { handleChangeCard } = this;
    return (
      <>
        <div
          className={`team-card ${
            currentCardIsClicked
              ? "team-card--isClicked"
              : "team-card--coverIsHide"
          }`}
          onClick={handleChangeCard}
        >
          <div className="card-img-wrapper">
            <img
              className="team-card__image"
              src={this.props.cowboy}
              alt="team member"
            />
          </div>
          <div className="card-descr-wrapper">
            <p className="card-descr__name">{this.props.name}</p>
            <p className="card-descr__information card-descr__position">
              captain
            </p>
            <p className="card-descr__information">AGE: {this.props.age}</p>
            <p className="card-descr__information">
              missions: {this.props.missions}
            </p>
          </div>

          <div className="team-cover-card">
            <p className="team-cover-card__author-quote">
              {`${this.props.whoseQuote}‘s famous quote:`}
            </p>
            <p className="team-cover-card__quote">{this.props.quote}</p>
          </div>
        </div>
      </>
    );
  }
}

export default TeamItem;

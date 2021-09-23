import React, { Component } from "react";

import { Link } from "react-scroll";

import logo from "../../logo.svg";
import closeIcon from "../../images/close.png";

class Navigation extends Component {
  state = {
    menuShown: false,
    isScrolling: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  handleToggleMenu = () => {
    this.setState({
      menuShown: !this.state.menuShown,
    });
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      this.setState({ isScrolling: true, menuShown: false });
    } else {
      this.setState({ isScrolling: false });
    }
  };

  render() {
    const { menuShown, isScrolling } = this.state;
    const { handleToggleMenu } = this;
    return (
      <div className={isScrolling ? "navigation scrolling" : "navigation"}>
        <div className="logo-wrapper">
          <img src={logo} className="logo-wrapper__img" alt="logo" />
        </div>
        <div className="menu">
          <button className="menu__button" onClick={handleToggleMenu}>
            <img
              src={closeIcon}
              className={
                menuShown ? "menu__icon--shownIcon" : "menu__icon--hideIcon"
              }
              alt="icon"
            />
            {menuShown ? "close" : "menu"}
          </button>
          {menuShown && (
            <ul className="menu-list">
              <li className="menu-list__item">
                <Link to="aboutUs" spy={true} smooth={true} offset={-70}>
                  ABOUT US
                </Link>
              </li>
              <li className="menu-list__item">
                <Link to="theTeam" spy={true} smooth={true} offset={-70}>
                  THE TEAM
                </Link>
              </li>
              <li className="menu-list__item">
                <Link to="impressions" spy={true} smooth={true} offset={-70}>
                  IMPRESSIONS
                </Link>
              </li>
              <li className="menu-list__item">
                <Link to="contact" spy={true} smooth={true} offset={-70}>
                  CONTACT
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Navigation;

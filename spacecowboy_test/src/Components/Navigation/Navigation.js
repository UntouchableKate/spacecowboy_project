import React, {Component} from "react";

import logo from "../../logo.svg";
import closeIcon from '../../images/close.png';

// import background from '../../image/background.png';

class  Navigation extends Component {
  state = {
    menuShown: false,
  }

  handleToggleMenu = () => {
    this.setState({
      menuShown: !this.state.menuShown,
    })
  }

  render() {
    const {menuShown} = this.state;
    const {handleToggleMenu} = this;
  return (
    <div className="navigation">
      <div className="logo-wrapper">
        <img src={logo} className="logo-wrapper__img" alt="logo" /> 
      </div>
      <div className="menu">
        <button className="menu__button" onClick={handleToggleMenu}>
        <img src={closeIcon} className={menuShown ? 'menu__icon--shownIcon' : 'menu__icon--hideIcon'} alt="icon" />
          {menuShown ? 
            'close'
          : "menu" }
          </button>
          {menuShown && (
       <ul className="menu-list">
       <li className="menu-list__item">ABOUT US</li>
       <li className="menu-list__item">THE TEAM</li>
       <li className="menu-list__item">IMPRESSIONS</li>
       <li className="menu-list__item">CONTACT</li>
     </ul>
          )}

      </div>
    </div>
  );
  }
}

export default Navigation;

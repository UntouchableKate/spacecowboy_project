import React from "react";


function Button({buttonTitle, scrollTo}) {
  return (
    <div className="btn-wrapper">
      <button type="submit" className="btn-wrapper__button" onClick={scrollTo} >{buttonTitle}</button>
    </div>
  );
}

export default Button;
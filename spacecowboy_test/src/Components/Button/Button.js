import React from "react";


function Button({buttonTitle}) {
  return (
    <div className="btn-wrapper">
      <button type="submit" className="btn-wrapper__button" >{buttonTitle}</button>
    </div>
  );
}

export default Button;
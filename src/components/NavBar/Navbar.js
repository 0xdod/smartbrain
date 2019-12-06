import React from "react";
import smart from "./smartbrain.png";
function Headerbar() {
  return (
    <header>
      <a href="#">
        <img className="brand-logo" src={smart} alt="brand-logo" />
      </a>
      <button>Sign Out</button>
    </header>
  );
}

export default Headerbar;

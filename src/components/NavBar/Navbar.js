import React from "react";
import smart from "./smartbrain.png";
function Headerbar() {
  return (
    <header>
      <a href="#">
        <img src={smart} alt="brand-logo" />
      </a>
      <button>Sign Out</button>
    </header>
  );
}

export default Headerbar;

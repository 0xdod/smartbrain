import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";

function Logo() {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 25 }}
      style={{
        height: 150,
        width: 150,
        margin: "1em 2em",
        borderRadius: "50%",
        background:
          "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b ",
        boxShadow: "0 0 1px 2px rgba(0,0,0,.3),inset 0 0 10px rgba(0,0,0,.3)",
        border: "2px solid inherit"
      }}
    >
      <div className="Tilt-inner">
        <img src={brain} alt="logo" />{" "}
      </div>
    </Tilt>
  );
}

export default Logo;

import React from "react";
import { Img } from "../../../lib/styles";
import gopher from "./go.jpeg";

function Image() {
  return (
    <div className="image-parent">
      <Img src={gopher} alt="" />
    </div>
  );
}

export default Image;

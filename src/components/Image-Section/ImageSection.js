import React from "react";
import Image from "./Image/Image";
import Input from "./InputField/Input";

function ImageSection() {
  return (
    <div className="section-container">
      <div className="text">
        <p>
          {
            "This thing is supposed to identify faces of people in photos, Give it a try"
          }
        </p>
      </div>
      <div className="input-div">
        <Input />
      </div>
      <div className="image-div">
        <Image />
      </div>
    </div>
  );
}

export default ImageSection;

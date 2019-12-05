import React from "react";
import smart from "./smartbrain.png";
import {
  Header,
  SignUpButton,
  HeaderLink,
  HeaderImage
} from "../../lib/styles.js";

function Headerbar() {
  return (
    <Header>
      <HeaderLink href="#">
        <HeaderImage className="brand-logo" src={smart} alt="brand-logo" />
      </HeaderLink>
      <SignUpButton>Sign Out</SignUpButton>
    </Header>
  );
}

export default Headerbar;

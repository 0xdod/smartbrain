import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Logo from "./components/Logo/Logo";
import ImageSection from "./components/Image-Section/ImageSection";
import Rank from "./components/Rank/Rank";
import "./App.scss";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 100
      }
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Particles params={particlesOptions} className="particles" />
        <div className="app-head">
          <Navbar />
          <Logo />
        </div>
        <div className="main-body">
          <Rank />
          <ImageSection />
        </div>
      </div>
    );
  }
}

export default App;

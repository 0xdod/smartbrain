import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Logo from "./components/Logo/Logo";
import ImageSection from "./components/Image-Section/ImageSection";
import Rank from "./components/Rank/Rank";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app-head">
        <Navbar />
        <Logo />
      </div>
      <div className="main-container centre">
        <Rank />
        <ImageSection />
      </div>
    </div>
  );
}

export default App;

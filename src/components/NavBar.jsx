import React, { useRef, useEffect, useState } from "react";
import "./NavBar.css";
import siteLogo from "../assets/images/war-maps-logo.png";
function NavBar({ onButtonClicked }) {
  const [buttonText, setButtonText] = useState("About This Map");

  const handleButtonClicked = () => {
    onButtonClicked();
    setButtonText((prevText) =>
      prevText === "About This Map" ? "Hide About This Map" : "About This Map"
    );
  };

  return (
    <div className="navBar" style={{ width: "100vw", height: "6vh" }}>
      <div className="page-title">
        <a href="/" className="home-link">
          <img className="site-logo" src={siteLogo} />
        </a>
        Kamikaze Hits on Allied Ships
      </div>
      <button className="about" onClick={handleButtonClicked}>
        {buttonText}
      </button>
    </div>
  );
}
export default NavBar;

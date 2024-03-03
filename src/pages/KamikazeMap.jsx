import React, { useState } from "react";
import Map from "../components/kamikaze-map/Map.jsx";
import NavBar from "../components/NavBar";
import AboutPanel from "../components/AboutPanel.jsx";
import Disclaimer from "../components/Disclaimer";

function KamikazeMap() {
  const [aboutToggled, setAboutToggled] = useState(false);
  const handleAboutToggle = () => {
    setAboutToggled((previousState) => !previousState);
  };

  return (
    <div>
      <NavBar onButtonClicked={handleAboutToggle} />
      <AboutPanel aboutToggled={aboutToggled} />
      <Map />
    </div>
  );
}

export default KamikazeMap;

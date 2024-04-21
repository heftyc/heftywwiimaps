import React, { useState } from "react";
import Map from "../components/kamikaze-map/Map.jsx";
import NavBar from "../components/NavBar";
import AboutPanel from "../components/kamikaze-map/AboutPanel.jsx";
import Tutorial from "../components/kamikaze-map/Tutorial.jsx";

function KamikazeMap() {
  const [aboutToggled, setAboutToggled] = useState(false);
  const handleAboutToggle = () => {
    setAboutToggled((previousState) => !previousState);
  };

  return (
    <div>
      <NavBar onButtonClicked={handleAboutToggle} />
      <Tutorial />
      <AboutPanel aboutToggled={aboutToggled} />
      <Map />
    </div>
  );
}

export default KamikazeMap;

import React, { useState } from "react";
import Map from "../components/kamikaze-map/Map.jsx";
import NavBar from "../components/NavBar";
import AboutPanel from "../components/kamikaze-map/AboutPanel.jsx";
import Tutorial from "../components/kamikaze-map/Tutorial.jsx";
import Timeline from "../components/kamikaze-map/Timeline.jsx";

function KamikazeMap() {
  const [maxDateNum] = useState(305);
  const [currentDateNum, setCurrentDateNum] = useState(maxDateNum);
  const [aboutToggled, setAboutToggled] = useState(false);

  const handleAboutToggle = () => {
    setAboutToggled((previousState) => !previousState);
  };

  return (
    <div>
      <NavBar onButtonClicked={handleAboutToggle} />
      <Tutorial />
      <AboutPanel aboutToggled={aboutToggled} />
      <Timeline
        startDate={new Date("1944-10-13")}
        maxDateNum={maxDateNum}
        currentDateNum={currentDateNum}
        setCurrentDateNum={setCurrentDateNum}
      />
      <Map currentDateNum={currentDateNum} />
    </div>
  );
}
export default KamikazeMap;

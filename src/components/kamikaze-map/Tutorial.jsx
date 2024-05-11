import React, { useState } from "react";
import "./Tutorial.css";

const Tutorial = () => {
  const [showMe, setShowMe] = useState(true);

  const handleClick = () => {
    setShowMe(!showMe);
  };

  return (
    <div
      className="tutorial"
      style={{
        display: showMe ? "block" : "none",
      }}
    >
      <div style={{ fontFamily: "inherit", fontSize: "larger" }}>
        {" "}
        Zoom in to display ship names. Click on a ship name to display a popup
        with additional details. Currently, the data in this map is only mostly
        complete but community contributions to the dataset will be open soon.
        {"   "}
      </div>
      <button className="tutorial-close-button" onClick={handleClick}>
        Close
      </button>
    </div>
  );
};
export default Tutorial;

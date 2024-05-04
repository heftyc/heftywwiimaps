import React, { useState } from "react";

const Tutorial = () => {
  const [showMe, setShowMe] = useState(true);

  const handleClick = () => {
    setShowMe(!showMe);
  };

  return (
    <div
      className="tutorial"
      style={{
        position: "absolute",
        zIndex: 2,
        left: "50%",
        top: "8%",
        transform: "translate(-50%, 0%)",
        width: "600px",

        fontFamily: "var(--primary-font)",

        background: "var(--highlight-color)",
        borderStyle: "solid",
        borderWidth: "  1px",
        borderColor: "black",

        padding: "2px",

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
      <button
        onClick={handleClick}
        style={{
          border: "inherit",
          background: "inherit",
          fontFamily: "inherit",
          marginTop: "7px",
          marginBottom: "5px",
        }}
      >
        Close
      </button>
    </div>
  );
};
export default Tutorial;

import React from "react";

const Disclaimer = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 2,
        left: "50%",
        transform: "translate(-50%, 0%)",

        background: "Yellow",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#fccc1c",

        padding: "2px",
      }}
    >
      This map is still in development. The map's appearance and data may be
      changed in the future.
    </div>
  );
};
export default Disclaimer;

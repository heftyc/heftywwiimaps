import React, { useState } from "react";
import siteLogo from "../assets/images/war-maps-logo.png";

function HeadBanner() {
  return (
    <div className="head-banner">
      <img className="home-site-logo" src={siteLogo} />
      Hefty WWII Maps
    </div>
  );
}
export default HeadBanner;

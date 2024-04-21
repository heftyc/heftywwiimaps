import React, { useState } from "react";
import "./HomePage.css";
import HeadBanner from "../components/home-page/HeadBanner";
import PageFooter from "../components/home-page/PageFooter";

function HomePage() {
  return (
    <div>
      <HeadBanner />
      <div className="home-body">
        <div className="welcome">Welcome to Hefty WWII Maps</div>
        <div className="welcome-container">
          <div className="welcome-desc">
            This site is a personal project by Caleb Hefty intended to help
            visitors gain a better understanding of the Second World War through
            interactive maps.
          </div>
        </div>
        <div className="maps-header">Maps:</div>
        <a className="map-panel" href="/kamikazehits">
          <img
            className="map-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/USS_Bunker_Hill_hit_by_two_Kamikazes.jpg"
          />
          <div className="map-label">
            <div className="map-title">Kamikaze Hits on Allied Ships</div>
            <div className="map-desc">
              From October 1944 until the end of the war in August 1945, the
              Japanese military used suicide aircraft tactics against Allied
              ships in the Pacific. Out of many thousand of these kamikaze
              attacks that were launched, approximately 400 landed a hit on
              their intended target. This map gives the location and details of
              these instances where a kamikaze attack succesfully damaged a
              ship.
            </div>
          </div>
        </a>
        <div className="more-maps">More maps coming soon.</div>
        <div className="spacer" />
      </div>
      <PageFooter />
    </div>
  );
}
export default HomePage;

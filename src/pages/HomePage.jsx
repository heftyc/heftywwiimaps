import React, { useState } from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <div>
      <div className="head-banner">
        <img
          className="home-site-logo"
          src="src\assets\images\war maps logo.png"
        />
        Hefty WWII Maps
      </div>
      <body>
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
              From October of 1944 to the end of the war in August 1945, the
              Japanese military used suicide aircraft tactics against Allied
              shipping. This map gives the location and details of every
              instance where one of these attacks succesfully damaged a ship.
            </div>
          </div>
        </a>
        <div className="more-maps">More maps coming soon.</div>
      </body>
      <footer>
        <div>© 2024 Caleb Hefty</div>
        <div>Source Code | Images available in the public domain</div>
      </footer>
    </div>
  );
}
export default HomePage;

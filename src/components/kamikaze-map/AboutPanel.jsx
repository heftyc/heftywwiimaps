import React, { useRef, useEffect, useState } from "react";
import "./AboutPanel.css";

const AboutPanel = ({ aboutToggled }) => {
  return (
    <div
      className={"about-panel"}
      style={{
        display: aboutToggled ? "block" : "none",
      }}
    >
      <h2>Bibliography</h2>

      <p>
        <i>LCI: Landing Craft Infantry, Volume II.</i> Turner Publishing. (1995)
        ISBN 1563112620.
      </p>

      <p>
        Ball, Donald L. <i>Fighting Amphibs; The LCS(L) in World War II.</i>{" "}
        Williamsburgh, VA: Mill Neck Publications. ISBN 0965905500.
      </p>
      <p>
        Browning Jr., Robert M.{" "}
        <i>US Merchant Vessel War Casualties of World War II.</i> Annapolis,
        Maryland: Naval Institute Press. (1996). ISBN 978-1557500878.
      </p>
      <p>
        Cressman,{" "}
        <i>
          Robert J. The Official Chronology of the U.S. Navy in World War II.
        </i>{" "}
        Naval Historical Center: Contemporary History Branch. (1999).
      </p>
      <p>
        Rielly, Robin L. <i>Kamikaze Attacks of World War II.</i> Jefferson,
        North Carolina: McFarland & Company, Inc. (2010). ISBN 978-0786446544.
      </p>
      <p>
        Stern,{" "}
        <i>Robert L. Fire From the Sky: Surviving the Kamikaze Threat.</i> Pen
        and Sword. (2010). ISBN 978-1473814219.
      </p>
      <p>
        Tokarev, Maksim. <i>"Kamikazes: The Soviet Legacy".</i> Naval War
        College Review. (2014). ISSN 0028-1484
      </p>

      <hr></hr>
      <h2>About This Map</h2>

      <p>Site &copy; 2024 Caleb Hefty. Code licensed under the MIT License.</p>
      <p>
        Map Data &copy; 2024 Caleb Hefty. Code licensed under the MIT License.
      </p>
      <p>
        This map is built with{" "}
        <a href="https://react.dev/" target="_blank">
          React
        </a>{" "}
        and{" "}
        <a href="https://www.mapbox.com/" target="_blank">
          Mapbox
        </a>
        . You can look at the source code in its{" "}
        <a href="https://github.com/heftyc/Kamikaze-Hits-Map" target="_blank">
          GitHub repository
        </a>{" "}
        and look at the{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1lCVeWthDCK-H_1LFkkHMGfZmyNYYr5mHq1ahN2rbiug/edit?usp=sharing"
          target="_blank"
        >
          spreadsheet
        </a>{" "}
        for the map data.
      </p>
      <p>
        This map represents every known kamikaze strike on Allied ships that did
        at least some damage. This damage could be very minor; in some attacks
        the plane only clipped the ship and damaged some equipment. Damaging
        near misses are also recorded, where the plane would miss its target but
        the explosion of the crash still inflicted damage. Complete misses,
        which would be the fate of a majority of kamikaze attacks, are not
        recorded. Each datapoint represents the location of one ship getting hit
        by some number of aircraft in one day. It was not uncommon for a ship to
        get hit multiple times in one day, but the strikes were nearly always
        just minutes apart as part of one attack.
      </p>
      <p>
        The data in this map is a major modification from the data found on the
        Wikipedia page{" "}
        <a
          href="https://en.wikipedia.org/wiki/List_of_Allied_vessels_struck_by_Japanese_special_attack_weapons"
          target="_blank"
        >
          "List of Allied vessels struck by Japanese special attack weapons"
        </a>
        . Most of the records from this page are precise enough to display the
        location without additional research. However, for about 100 of the
        approximately 400 entries in the table, the given locations are merely
        descriptions of where the attack happened, or only precise to one degree
        of latitude and longitude. (Note that the area within one degree of
        latitude and longitude near Okinawa is over 4,000 square miles.) For
        these records I looked at additional sources, typically ship records
        from the National Archives Catalog, to improve accuracy. The Notes
        column on the{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1lCVeWthDCK-H_1LFkkHMGfZmyNYYr5mHq1ahN2rbiug/edit?usp=sharing"
          target="_blank"
        >
          data spreadsheet
        </a>{" "}
        may contain more on my reasoning for the location I give. The data on
        this map is still a work in progress, some entries may be inaccurate or
        missing.
      </p>

      <p>
        In some instances, a ship sank or was scuttled at a later date from the
        attack. In these cases, the Wikipedia article makes one entry for when
        the ship was damaged and one for when the ship was destroyed. On this
        map these cases are represented by a single point at the location and
        date of the attack itself and shows the ship as sunk.
      </p>

      <p>
        This map does not include the water-based suicide attacks included in
        the Wikipedia article. I felt that they fell outside of the scope of the
        map. Differentiating between different types of attacks would also make
        the map harder to read. Ohka flying bomb attacks are still included.
      </p>
      <p>
        If you want to leave a question or comment, please reach out to me at{" "}
        <u>heftywwiimaps@gmail.com</u>. If you have a chart showing the berths
        for bays in the Philipines or Okinawa other than Chimu Bay, Okinawa,
        these would be very helpful in inproving the accuracy for some of the
        locations.{" "}
      </p>
    </div>
  );
};
export default AboutPanel;

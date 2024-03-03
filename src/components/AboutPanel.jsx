import React, { useRef, useEffect, useState } from "react";
import "./AboutPanel.css";

const AboutPanel = ({ aboutToggled }) => {
  return (
    <div
      className={"about-panel"}
      style={{
        position: "fixed",
        bottom: 0,
        width: "30vw",
        height: "94vh",
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

      <p>&copy; 2024 Caleb Hefty. Code licensed under the MIT License.</p>
      <p>
        This map is built with <a href="https://react.dev/">React</a> and{" "}
        <a href="https://www.mapbox.com/">Mapbox</a>. You can look at the source
        code in its{" "}
        <a href="https://github.com/heftyc/Kamikaze-Hits-Map">
          GitHub repository
        </a>{" "}
        and look at the{" "}
        <a href="https://docs.google.com/spreadsheets/d/1lCVeWthDCK-H_1LFkkHMGfZmyNYYr5mHq1ahN2rbiug/edit?usp=sharing">
          spreadsheet
        </a>{" "}
        for the map data.
      </p>
      <p>
        This map represents every known kamikaze strike on allied ships that did
        at least some damage. This damage could be very minor; in some attacks
        the plane only clipped the ship and damaged some equipment. Damaging
        near misses are also recorded, where the plane would miss its target but
        the explosion of the crash still inflicted damage. Complete misses,
        which would be fate of a majority of kamikaze attacks, are not recorded.
        Each datapoint represents the location of one ship getting hit by some
        number of aircraft in one day. It was not uncommon for a ship to get hit
        multiple times in one day, but the strikes were nearly always just
        minutes apart as part of one attack.
      </p>
      <p>
        The data in this map is a major modification from the Wikipedia page{" "}
        <a href="https://en.wikipedia.org/wiki/List_of_Allied_vessels_struck_by_Japanese_special_attack_weapons">
          "List of Allied vessels struck by Japanese special attack weapons"
        </a>
        . Most of the records from this page are precise enough to display the
        location without additional research. However for about 100 of the
        approximately 400 entries in the table, the given locations are merely
        descriptions of where the attack happened, or only precise to one degree
        of latitude and longitude. (Note that the area within one degree of
        latitude and longitude near Okinawa is over 4,000 square miles.) For
        these records, I looked at additional sources to get an exact location.
        I used the National Archives Catalog to look at ships' war diaries and
        other reports. During the war, American warships recorded their
        coordinate positions throughout the day in a monthly war diary. By
        finding the entry for the day of the attack, we can look at a
        description of the events and try to get closer to the attack's true
        location.
      </p>
      <p>
        {" "}
        Each entry that I had to research was a unique challenge. The war diary
        typically records the ship's position at 0800, 1200, and 2000. If the
        attack happened close to one of these times, that position is typically
        used. Many ships are missing war diaries for some months. Cargo ships,
        which were often the victims of kamikaze attacks, didn't keep diaries at
        all. In these scenarios, surrounding ships usually record observing the
        hit, or coming to the aid of the struck ship, so we can look at those
        ships' positions. In some cases, there are no coordinates available, but
        a report gives a good description of the location that I translate into
        approximate coordinates. The Notes column on the{" "}
        <a href="https://docs.google.com/spreadsheets/d/1lCVeWthDCK-H_1LFkkHMGfZmyNYYr5mHq1ahN2rbiug/edit?usp=sharing">
          data spreadsheet
        </a>{" "}
        may contain more on my reasoning for the location I give.
      </p>

      <p>
        In some instances, a ship sank or was scuttled at a later date from the
        attack. In these cases, the Wikipedia article makes one entry for when
        the ship was damaged and one for when the ship was destroyed. On this
        map these cases are represented by a single point at the location and
        date of the attack itself and shows the ship as sunk.
      </p>

      <p>
        This map does not currently include the water-based suicide attacks
        included in the Wikipedia article. I felt that they fell outside of the
        scope of the map. Differentiating between different types of attacks
        would also make the map harder to read. Ohka flying bomb attacks are
        still included.
      </p>
      <p>
        There is some information that would help me improve the accuracy of the
        locations for the ships. Many of the ships record that they were hit
        while sitting at anchor in a particular berth, a "parking spot" in a
        harbor. I have the chart showing the berths for Chimu Bay, Okinawa, but
        I can't find any of the others. If you can point me to a diagram of the
        berths of other harbors at Okinawa or the Philippines, please reach out
        to me.{" "}
      </p>
    </div>
  );
};
export default AboutPanel;

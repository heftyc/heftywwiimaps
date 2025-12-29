import React, { useRef, useEffect, useState } from "react";
import "./AttackPopup.css";
import usFlag from "../../assets/images/us-flag.png";
import ukFlag from "../../assets/images/uk-flag.png";
import ausFlag from "../../assets/images/aus-flag.png";
import ussrFlag from "../../assets/images/ussr-flag.png";
import norFlag from "../../assets/images/nor-flag.png";

const AttackPopup = ({
  country,
  fate,
  date,
  targetType,
  targetName,
  picture,
  sources,
  similarShip,
  KIA,
  MIA,
  WIA,
  aircraftTypes,
}) => (
  <div className="kamikaze-popup">
    <div className="target-name">
      {renderFlag(country)}
      {targetName}
    </div>
    <p className="target-type">{targetType}</p>

    {renderPicture(picture, similarShip)}
    {renderFate(fate)}
    {renderCasualties(KIA, MIA, WIA)}
    {renderAircraftTypes(aircraftTypes)}
    <p className="struck-date">Struck: {date}</p>
    <div className="sources" style={{ fontSize: "11px" }}>
      Sources: {renderSources(sources)}
    </div>
  </div>
);
const renderFlag = (country) => {
  let imagePath = null;
  if (country === "USA") {
    imagePath = usFlag;
  } else if (country === "GBR") {
    imagePath = ukFlag;
  } else if (country === "AUS") {
    imagePath = ausFlag;
  } else if (country === "SOV") {
    imagePath = ussrFlag;
  } else if (country === "NOR") {
    imagePath = norFlag;
  }
  return <img className="flag" src={imagePath} />;
};

const renderPicture = (picture, similarShip) => {
  if (picture == "") {
    return null;
  } else {
    return (
      <div className="ship-picture-container" style={{ position: "relative" }}>
        <img className="ship-picture" src={picture} />
        {similarShip && (
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.4)",
              paddingLeft: "3px",
              paddingRight: "3px",
            }}
          >
            Similar Ship Pictured
          </div>
        )}
      </div>
    );
  }
};

const renderFate = (fate) => {
  if (fate === "Sunk") {
    return <p className="fate-sunk">Sunk</p>;
  } else {
    return <p className="fate-damaged">Damaged</p>;
  }
};

const renderCasualties = (KIA, MIA, WIA) => {
  let killedMissing = "?";
  let wounded = "?";

  if (KIA != "" || MIA != "") killedMissing = +KIA + +MIA;
  if (WIA != "") wounded = +WIA;

  return (
    <div className="casualties-row">
      <span className="casualties-item">Killed/Missing: {killedMissing}</span>
      <span className="casualties-item">Wounded: {wounded}</span>
    </div>
  );
};

const getAircraftTypeName = (type, quantity) => {
  // Return singular form if quantity is 1, otherwise return plural form
  if (quantity === 1) {
    const singularMap = {
      Zekes: "Zeke",
      Vals: "Val",
      Oscars: "Oscar",
      Dinahs: "Dinah",
      Francis: "Francis",
      Kates: "Kate",
      Tonys: "Tony",
      Bettys: "Betty",
      Hamps: "Hamp",
      Lilies: "Lily",
      Jills: "Jill",
      Baka: "Baka",
      Nates: "Nate",
      Nicks: "Nick",
      Irvings: "Irving",
      Nells: "Nell",
      Willows: "Willow",
      "Unidentified Bombers": "Unidentified Bomber",
      "Unidentified Fighters": "Unidentified Fighter",
      "Unidentified Planes": "Unidentified Plane",
    };
    return singularMap[type] || type;
  }
  return type;
};

const getAircraftDesignation = (type) => {
  // Map aircraft type to its exact designation (for tooltips)
  const designationMap = {
    Zekes: "Mitsubishi A6M Navy Type Zero Carrier Fighter",
    Zeke: "Mitsubishi A6M Navy Type Zero Carrier Fighter",
    Vals: "Aichi D3A Navy Type 99 Carrier Bomber",
    Kate: "Nakajima B5N Navy Type 97 Carrier Attack Bomber",
    Kates: "Nakajima B5N Navy Type 97 Carrier Attack Bomber",
    // Other mappings will be added later
  };
  return designationMap[type] || null;
};

const renderAircraftTypes = (aircraftTypes) => {
  if (!aircraftTypes) return null;

  const aircraftList = [];

  for (const [type, quantity] of Object.entries(aircraftTypes)) {
    const numQuantity = +quantity;
    // Only include aircraft types with a valid quantity greater than zero
    if (
      quantity != null &&
      quantity != "" &&
      !isNaN(numQuantity) &&
      numQuantity > 0
    ) {
      aircraftList.push({ type, quantity: numQuantity });
    }
  }

  if (aircraftList.length === 0) return null;

  // Render aircraft type with tooltip
  const renderAircraftType = (aircraft, index) => {
    const displayType = getAircraftTypeName(aircraft.type, aircraft.quantity);
    const designation =
      getAircraftDesignation(aircraft.type) ||
      getAircraftDesignation(displayType);

    return (
      <span key={index}>
        {aircraft.quantity}{" "}
        {designation ? (
          <span title={designation} className="aircraft-type-with-tooltip">
            {displayType}
          </span>
        ) : (
          displayType
        )}
      </span>
    );
  };

  // Format aircraft types as a sentence with JSX elements
  let aircraftElements = [];
  if (aircraftList.length === 1) {
    aircraftElements.push(renderAircraftType(aircraftList[0], 0));
  } else if (aircraftList.length === 2) {
    aircraftElements.push(renderAircraftType(aircraftList[0], 0));
    aircraftElements.push(" and ");
    aircraftElements.push(renderAircraftType(aircraftList[1], 1));
  } else {
    aircraftList.slice(0, -1).forEach((aircraft, index) => {
      aircraftElements.push(renderAircraftType(aircraft, index));
      aircraftElements.push(", ");
    });
    aircraftElements.push(", and ");
    aircraftElements.push(
      renderAircraftType(
        aircraftList[aircraftList.length - 1],
        aircraftList.length - 1
      )
    );
  }

  return (
    <div className="aircraft-types">
      <span className="aircraft-types-label">Aircraft Used: </span>
      <span className="aircraft-types-sentence">{aircraftElements}</span>
    </div>
  );
};

const renderSources = (sources) => {
  const tokens = sources.split("|");
  return (
    <span className="source-text">
      {tokens.map((item, index) => (
        <span key={index} className="source-text">
          {renderSource(item, index == tokens.length - 1)}
        </span>
      ))}
    </span>
  );
};

var urlNames = [
  ["http://www.navy.gov.au/", "Australian Naval Records"],
  ["https://recordsearch.naa.gov.au/", "National Archives of Australia"],
  ["https://catalog.archives.gov", "US Ship Records"],
  ["http://www.navsource.org", "NavSource Naval History"],
  ["http://www.ibiblio.org/hyperwar", "HyperWar"],
  ["https://uboat.net", "uboat.net"],
  ["http://www.naval-history.net", "naval-history.net"],
  ["https://www.naval-history.net", "naval-history.net"],
  ["https://wikimapia.org/", "wikimapia.org"],
  ["https://www.ussbush.com", "www.ussbush.com"],
  ["http://www.combinedfleet.com", "combinedfleet.com"],
  ["www.warsailors.com/", "warsailors.com"],
  [
    "https://www.history.navy.mil",
    "Dictionary of American Naval Fighting Ships",
  ],
  ["https://web.archive.org/web/20200113162428/https://vpk-news", "VPK News"],
];

const renderSource = (sourceText, ending) => {
  sourceText = sourceText.trim();
  let link = null;

  if (sourceText.startsWith("Cressman")) {
    link = (
      <a
        href="https://www.ibiblio.org/hyperwar/USN/USN-Chron.html"
        target="_blank"
      >
        {sourceText}
      </a>
    );
  } else {
    for (let i = 0; i < urlNames.length; i++) {
      if (sourceText.startsWith(urlNames[i][0])) {
        link = (
          <a href={sourceText} target="_blank">
            {urlNames[i][1]}
          </a>
        );
      }
    }
  }

  if (link == null) {
    link = <span>{sourceText}</span>;
  }

  if (ending) {
    return link;
  } else {
    return <span>{link}, </span>;
  }
};
export default AttackPopup;

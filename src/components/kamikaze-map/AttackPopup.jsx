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
}) => (
  <div className="kamikaze-popup">
    <h2 className="target-name">
      {renderFlag(country)}
      {targetName}
    </h2>
    <p className="target-type">{targetType}</p>

    {renderPicture(picture)}
    {renderFate(fate)}
    <p>Struck: {date}</p>

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

const renderPicture = (picture) => {
  if (picture == "") {
    return null;
  } else {
    return <img className="ship-picture" src={picture}></img>;
  }
};

const renderFate = (fate) => {
  if (fate === "Sunk") {
    return <p className="fate-sunk">Sunk</p>;
  } else {
    return <p className="fate-damaged">Damaged</p>;
  }
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
  ["https://catalog.archives.gov", "Ship Records"],
  ["http://www.navsource.org", "NavSource Naval History"],
  ["http://www.ibiblio.org/hyperwar", "HyperWar"],
  ["https://uboat.net", "uboat.net"],
  ["http://www.naval-history.net", "naval-history.net"],
  ["https://www.naval-history.net", "naval-history.net"],
  ["https://wikimapia.org/", "wikimapia.org"],
  ["https://www.ussbush.com", "www.ussbush.com"],
  ["http://www.combinedfleet.com", "combinedfleet.com"],
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

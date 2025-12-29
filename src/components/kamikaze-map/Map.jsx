import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Popup } from "mapbox-gl";
import ReactDOM from "react-dom";
import AttackPopup from "./AttackPopup";
import "./Map.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_GL_ACCESS_TOKEN;

const Map = ({ currentDateNum }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const popupRef = useRef(
    new mapboxgl.Popup({ offset: 10, closeButton: false, maxWidth: 1000 })
  );
  const [browserType, setBrowserType] = useState("");

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: import.meta.env.VITE_MAPBOX_STYLE_ID,
      center: [1, 1],
      maxBounds: [
        [70, -15],
        [180, 60],
      ],
    });
    const scaleControl = new mapboxgl.ScaleControl({
      maxWidth: 250,
      unit: "nautical",
    });
    mapRef.current.addControl(scaleControl, "bottom-right");
    mapRef.current.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    mapRef.current.on("click", "data-driven-circles-labels", (e) => {
      const country = e.features[0].properties["Country"];
      const fate = e.features[0].properties["Target Status"];
      const date = e.features[0].properties["Date"];
      const targetType = e.features[0].properties["Target Type"];
      const targetName = e.features[0].properties["Target Name"];
      const shipPicture = e.features[0].properties["Image"];
      const sources = e.features[0].properties["Sources"];
      const similarShip =
        e.features[0].properties["Similar Ship Pictured"] == "Y";
      const KIA = e.features[0].properties["Killed"];
      const MIA = e.features[0].properties["Missing"];
      const WIA = e.features[0].properties["Wounded"];
      const aircraftTypes = {
        Zekes: e.features[0].properties["Zekes"],
        Vals: e.features[0].properties["Vals"],
        Oscars: e.features[0].properties["Oscars"],
        Dinahs: e.features[0].properties["Dinahs"],
        Francis: e.features[0].properties["Francis"],
        Kates: e.features[0].properties["Kates"],
        Tonys: e.features[0].properties["Tonys"],
        Bettys: e.features[0].properties["Bettys"],
        Hamps: e.features[0].properties["Hamps"],
        Lilies: e.features[0].properties["Lilies"],
        Jills: e.features[0].properties["Jills"],
        Baka: e.features[0].properties["Baka"],
        Nates: e.features[0].properties["Nates"],
        Nicks: e.features[0].properties["Nicks"],
        Irvings: e.features[0].properties["Irvings"],
        Nells: e.features[0].properties["Nells"],
        Willows: e.features[0].properties["Willows"],
        "Unidentified Bombers":
          e.features[0].properties["Unidentified Bombers"],
        "Unidentified Fighters":
          e.features[0].properties["Unidentified Fighters"],
        "Unidentified Planes": e.features[0].properties["Unidentified Planes"],
      };

      const coordinates = e.features[0].geometry.coordinates.slice();

      const popupNode = document.createElement("div");
      ReactDOM.render(
        <AttackPopup
          targetName={targetName}
          fate={fate}
          date={date}
          targetType={targetType}
          country={country}
          picture={shipPicture}
          sources={sources}
          similarShip={similarShip}
          KIA={KIA}
          MIA={MIA}
          WIA={WIA}
          aircraftTypes={aircraftTypes}
        />,
        popupNode
      );
      popupRef.current
        .setLngLat(coordinates)
        .setDOMContent(popupNode)
        .addTo(mapRef.current);
    });

    mapRef.current.on("load", () => {
      updateMapFilters(mapRef.current, currentDateNum);
    });

    const detectBrowser = () => {
      const browser = navigator.userAgent.toLowerCase();
      if (
        browser.toLowerCase().includes("firefox") ||
        (browser.includes("Safari") && !browser.includes("Chrome"))
      )
        return "no-anchor";
      return "anchor";
    };
    setBrowserType(`map-container-${detectBrowser()}`);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (mapRef.current && mapRef.current.loaded()) {
      updateMapFilters(mapRef.current, currentDateNum);
    }
  }, [currentDateNum]);

  const updateMapFilters = (map, num) => {
    const dateFilter = ["<", ["to-number", ["get", "Day Value"]], num];
    mapRef.current.setFilter("data-driven-circles", dateFilter);
    mapRef.current.setFilter("data-driven-circles-labels", dateFilter);
  };

  return (
    <div className={`map-container ${browserType}`} ref={mapContainerRef} />
  );
};
export default Map;

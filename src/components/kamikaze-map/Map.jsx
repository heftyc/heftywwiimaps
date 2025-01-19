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

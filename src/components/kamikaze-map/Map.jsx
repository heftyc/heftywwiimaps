import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Popup } from "mapbox-gl";
import ReactDOM from "react-dom";
import AttackPopup from "./AttackPopup";
import "./Map.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_GL_ACCESS_TOKEN;

const Map = () => {
  const mapContainerRef = useRef(null);
  const popupRef = useRef(
    new mapboxgl.Popup({ offset: 10, closeButton: false, maxWidth: 1000 })
  );
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: import.meta.env.VITE_MAPBOX_STYLE_ID,
      center: [118.966159, 24.021842],
      zoom: 4.1,
      minZoom: 2,
      maxBounds: [
        [-179, -89],
        [179, 89],
      ],
    });
    const scaleControl = new mapboxgl.ScaleControl({
      maxWidth: 200,
      unit: "nautical",
    });
    map.addControl(scaleControl, "bottom-left");
    map.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    map.on("click", "data-driven-circles-labels", (e) => {
      const country = e.features[0].properties["Country"];
      const fate = e.features[0].properties["Target Status"];
      const date = e.features[0].properties["Date"];
      const targetType = e.features[0].properties["Target Type"];
      const targetName = e.features[0].properties["Target Name"];
      const sources = e.features[0].properties["Sources"];

      const coordinates = e.features[0].geometry.coordinates.slice();

      const popupNode = document.createElement("div");
      ReactDOM.render(
        <AttackPopup
          targetName={targetName}
          fate={fate}
          date={date}
          targetType={targetType}
          country={country}
          sources={sources}
        />,
        popupNode
      );
      popupRef.current
        .setLngLat(coordinates)
        .setDOMContent(popupNode)
        .addTo(map);
    });
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: "100vw",
        height: "94vh",

        left: 0,
        right: 0,
      }}
    />
  );
};
export default Map;

import { MapContainer, TileLayer } from "react-leaflet";
import React, { useRef, useState } from "react";
import osm from "./OSM-Provider";
import "leaflet/dist/leaflet.css";

export const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  // const ZOOM_LEVEL = 9;
  // const mapRef = useRef();

  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
      </MapContainer>
    </div>
  );
};

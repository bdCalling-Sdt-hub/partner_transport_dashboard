import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icons
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Recenter map dynamically
const RecenterMap = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 10, { animate: true });
  }, [center, map]);
  return null;
};

const MapComponent = ({ getAuctionDetails }) => {
  const defaultLoadingLocation = [19.4326, -99.1332]; // Default: Mexico
  const defaultUnloadingLocation = [19.4326, -99.1332];

  const [user1, setUser1] = useState(defaultLoadingLocation);
  const [user2, setUser2] = useState(defaultUnloadingLocation);
  const [routePath, setRoutePath] = useState([defaultLoadingLocation, defaultUnloadingLocation]);

  useEffect(() => {
    const loadingCoordinates =
      getAuctionDetails?.data?.result?.loadingLocation?.coordinates;
    const unloadingCoordinates =
      getAuctionDetails?.data?.result?.unloadingLocation?.coordinates;

    if (
      loadingCoordinates &&
      Array.isArray(loadingCoordinates) &&
      loadingCoordinates.length === 2
    ) {
      const newUser1 = [loadingCoordinates[1], loadingCoordinates[0]];
      setUser1(newUser1);
    }

    if (
      unloadingCoordinates &&
      Array.isArray(unloadingCoordinates) &&
      unloadingCoordinates.length === 2
    ) {
      const newUser2 = [unloadingCoordinates[1], unloadingCoordinates[0]];
      setUser2(newUser2);
    }

    // Update Route Path (From Start to End)
    if (loadingCoordinates && unloadingCoordinates) {
      setRoutePath([
        [loadingCoordinates[1], loadingCoordinates[0]],
        [unloadingCoordinates[1], unloadingCoordinates[0]],
      ]);
    }
  }, [getAuctionDetails]);

  return (
    <MapContainer
      key={user1.toString()} // Forces re-render when coordinates change
      center={user1}
      zoom={10}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Component to recenter map dynamically */}
      <RecenterMap center={user1} />

      {/* User 1 Marker (Start - Green) */}
      <Marker position={user1} icon={greenIcon} />

      {/* User 2 Marker (End - Red) */}
      <Marker position={user2} icon={redIcon} />

      {/* Route between Start and End - Custom Color */}
      <Polyline positions={routePath} color="blue" weight={5} />
    </MapContainer>
  );
};

export default MapComponent;

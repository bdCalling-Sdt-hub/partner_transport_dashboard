import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Marker icon setup
const icon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = ({ getAuctionDetails }) => {
  const defaultLoadingLocation = [19.4326, -99.1332];
  const defaultUnloadingLocation = [19.4326, -99.1332];

  const [user1, setUser1] = useState(defaultLoadingLocation);
  const [user2, setUser2] = useState(defaultUnloadingLocation);

  const [user1Path, setUser1Path] = useState([defaultLoadingLocation]);
  const [user2Path, setUser2Path] = useState([defaultUnloadingLocation]);

  console.log(getAuctionDetails?.data?.result?.unloadingLocation?.coordinates);

  useEffect(() => {
    const loadingCoordinates = getAuctionDetails?.data?.result?.loadingLocation?.coordinates;
    const unloadingCoordinates = getAuctionDetails?.data?.result?.unloadingLocation?.coordinates;
  
    console.log("Original Loading Coordinates:", loadingCoordinates);
    console.log("Original Unloading Coordinates:", unloadingCoordinates);
  
    if (
      loadingCoordinates &&
      Array.isArray(loadingCoordinates) &&
      loadingCoordinates.length === 2
    ) {
      // Swap the coordinates to [latitude, longitude]
      setUser1([loadingCoordinates[1], loadingCoordinates[0]]);
      setUser1Path([[loadingCoordinates[1], loadingCoordinates[0]]]);
    } else {
      console.warn("Invalid loading coordinates. Falling back to default.");
    }
  
    if (
      unloadingCoordinates &&
      Array.isArray(unloadingCoordinates) &&
      unloadingCoordinates.length === 2
    ) {
      // Swap the coordinates to [latitude, longitude]
      setUser2([unloadingCoordinates[1], unloadingCoordinates[0]]);
      setUser2Path([[unloadingCoordinates[1], unloadingCoordinates[0]]]);
    } else {
      console.warn("Invalid unloading coordinates. Falling back to default.");
    }
  }, [getAuctionDetails]);

  return (
    <MapContainer
      center={user1}
      zoom={10}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* User 1 Marker and Path */}
      <Marker position={user1} icon={icon} />
      <Polyline positions={user1Path} color="blue" />

      {/* User 2 Marker and Path */}
      <Marker position={user2} icon={icon} />
      <Polyline positions={user2Path} color="red" />
    </MapContainer>
  );
};

export default MapComponent;

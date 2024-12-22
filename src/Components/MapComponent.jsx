import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const icon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = ({getAuctionDetails}) => {

   // Default coordinates if data is not available
   const defaultLoadingLocation = [51.505, -0.09];
   const defaultUnloadingLocation = [51.51, -0.1];
  console.log(getAuctionDetails?.data?.result?.loadingLocation?.coordinates);
  console.log(getAuctionDetails?.data?.result?.unloadingLocation?.coordinates);
  // State for loading and unloading coordinates
  const [user1, setUser1] = useState(defaultLoadingLocation);
  const [user2, setUser2] = useState(defaultUnloadingLocation);

  const [user1Path, setUser1Path] = useState([defaultLoadingLocation]);
  const [user2Path, setUser2Path] = useState([defaultUnloadingLocation]);

// Update coordinates when `getAuctionDetails` changes
  useEffect(() => {
    const loadingCoordinates = getAuctionDetails?.data?.result?.loadingLocation?.coordinates;
    const unloadingCoordinates = getAuctionDetails?.data?.result?.unloadingLocation?.coordinates;

    if (loadingCoordinates && Array.isArray(loadingCoordinates)) {
      setUser1(loadingCoordinates); 
      setUser1Path([loadingCoordinates]); 
    }

    if (unloadingCoordinates && Array.isArray(unloadingCoordinates)) {
      setUser2(unloadingCoordinates);
      setUser2Path([unloadingCoordinates]); 
    }
  }, [getAuctionDetails]);

  return (
    <MapContainer
      center={user1}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
    >
      {/* Add TileLayer */}
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

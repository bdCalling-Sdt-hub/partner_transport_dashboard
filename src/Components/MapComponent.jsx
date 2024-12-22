import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  // Initial Coordinates for the Users
  const [user1, setUser1] = useState([51.505, -0.09]);
  const [user2, setUser2] = useState([51.51, -0.1]);

  const [user1Path, setUser1Path] = useState([user1]);
  const [user2Path, setUser2Path] = useState([user2]);

  // useEffect(() => {
  //   // const interval = setInterval(() => {
  //     const newUser1 = [user1[0] + 0.001, user1[1] + 0.001];
  //     const newUser2 = [user2[0] - 0.001, user2[1] - 0.001];

  //     setUser1(newUser1);
  //     setUser2(newUser2);

  //     setUser1Path((prev) => [...prev, newUser1]); 
  //     setUser2Path((prev) => [...prev, newUser2]);
  //   // }, 1000);

  //   // return () => clearInterval(interval);
  // }, [user1, user2]);

  return (
    <MapContainer
      center={user1}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
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

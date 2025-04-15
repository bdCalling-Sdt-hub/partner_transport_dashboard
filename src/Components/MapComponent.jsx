import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

// Default coordinates for loading and unloading locations
const defaultLoadingLocation = { lat: 19.4326, lng: -99.1332 };
const defaultUnloadingLocation = { lat: 19.4326, lng: -99.1332 };

const MapComponent = ({ getAuctionDetails }) => {
  const [user1, setUser1] = useState(defaultLoadingLocation);
  const [user2, setUser2] = useState(defaultUnloadingLocation);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    // Check if the page has already been reloaded by checking sessionStorage
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      //   // If the page hasn't been reloaded yet, set a timeout to reload it
      setTimeout(() => {
        // Set the flag in sessionStorage to indicate the page has been reloaded
        sessionStorage.setItem("hasReloaded", "true");
        // Reload the page after a short delay (e.g., 1 second)
        window.location.reload();
      }, 5000); // 1000 ms = 1 second delay (adjust as needed)
    }
  }, []);

  useEffect(() => {
    if (
      getAuctionDetails?.data?.result?.loadingLocation?.coordinates &&
      getAuctionDetails?.data?.result?.unloadingLocation?.coordinates
    ) {
      const loadingCoordinates =
        getAuctionDetails.data.result.loadingLocation.coordinates;
      const unloadingCoordinates =
        getAuctionDetails.data.result.unloadingLocation.coordinates;

      const newUser1 = {
        lat: loadingCoordinates[1],
        lng: loadingCoordinates[0],
      };
      const newUser2 = {
        lat: unloadingCoordinates[1],
        lng: unloadingCoordinates[0],
      };

      setUser1(newUser1);
      setUser2(newUser2);

      // Fetch directions only after Google API is loaded
      const directionsService = new window.google.maps.DirectionsService();
      const request = {
        origin: newUser1,
        destination: newUser2,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error("Error fetching directions: " + status);
        }
      });
    }
  }, [getAuctionDetails]);

  // If auction details are not available, show loading message
  if (
    !getAuctionDetails?.data?.result?.loadingLocation?.coordinates ||
    !getAuctionDetails?.data?.result?.unloadingLocation?.coordinates
  ) {
    return <div>Loading auction details...</div>; // Show a loading message until the coordinates are available
  }

  return (
    <>
        <GoogleMap
          mapContainerStyle={{ height: "600px", width: "100%" }}
          center={user1}
          zoom={10}
        >
          <Marker position={user1} label="Loading" />
          <Marker position={user2} label="Unloading" />
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    </>
  );
};

export default MapComponent;

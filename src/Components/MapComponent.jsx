import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
} from "@react-google-maps/api";
import locationA from "../assets/images/locationa.png"
import locationB from "../assets/images/locationb.png"
// Default coordinates for loading and unloading locations
const defaultLoadingLocation = { lat: 19.4326, lng: -99.1332 }; // Example default coordinate
const defaultUnloadingLocation = { lat: 19.4326, lng: -99.1332 }; // Example default coordinate

const MapComponent = ({ getAuctionDetails }) => {
  const [user1, setUser1] = useState(defaultLoadingLocation); // Initializing state with default loading location
  const [user2, setUser2] = useState(defaultUnloadingLocation); // Initializing state with default unloading location
  const [directions, setDirections] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null); // Track active marker for InfoWindow
  const [selectedMarker, setSelectedMarker] = useState(null); // To track which marker is clicked
  const [tooltipText, setTooltipText] = useState("");

  useEffect(() => {
    const loadingCoords =
      getAuctionDetails?.data?.result?.loadingLocation?.coordinates;
    const unloadingCoords =
      getAuctionDetails?.data?.result?.unloadingLocation?.coordinates;

    if (loadingCoords && unloadingCoords) {
      const newUser1 = { lat: loadingCoords[1], lng: loadingCoords[0] };
      const newUser2 = { lat: unloadingCoords[1], lng: unloadingCoords[0] };

      setUser1(newUser1);
      setUser2(newUser2);

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

  // Ensure coordinates are valid before rendering the map
  if (
    !getAuctionDetails?.data?.result?.loadingLocation?.coordinates ||
    !getAuctionDetails?.data?.result?.unloadingLocation?.coordinates
  ) {
    return <div>Loading auction details...</div>;
  }

  // Custom SVG Marker for changing color
  const createMarkerIcon = (color) => {
    return {
      path: "M0,0 L10,0 L10,10 L0,10 Z", // Square marker
      fillColor: color,
      fillOpacity: 1,
      strokeColor: "black",
      strokeWeight: 1,
      scale: 10,
    };
  };

  // Marker click handler to show info window
  const handleMarkerClick = (markerType) => {
    setSelectedMarker(markerType);

    // Update tooltip text based on the clicked marker
    if (markerType === "loading") {
      setTooltipText("This is the Loading Location");
    } else if (markerType === "unloading") {
      setTooltipText("This is the Unloading Location");
    }
  };

  console.log(getAuctionDetails?.data?.result?.service);

  return (
    <>
      <div className=" mt-10 pb-2 flex justify-center flex-col items-center">
        <div className="bg-black text-white p-2 px-10 rounded-md shadow-lg">
          <p className="font-bold">Location Details</p>
          <p className="flex items-center gap-2">User<img src={locationA} className="h-6 w-7" />: {getAuctionDetails?.data?.result?.user?.name}</p>
          <p className="flex items-center gap-2 my-2">Partner<img src={locationB} className="h-6 w-7" />
            {getAuctionDetails?.data?.result?.confirmedPartner?.name}{" "}
          </p>
          <p>Status : {getAuctionDetails?.data?.result?.service} is Loaded</p>
        </div>
      </div>

      <GoogleMap
        mapContainerStyle={{ height: "600px", width: "100%" }}
        center={user1}
        zoom={10}
      >
        {/* Loading Marker */}
        <Marker
          position={user1}
          onClick={() => handleMarkerClick("loading")}
          icon={createMarkerIcon("blue")} // Change to any color (blue for loading)
        />
        {selectedMarker === "loading" && (
          <InfoWindow
            position={user1}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>{tooltipText}</div>
          </InfoWindow>
        )}

        {/* Unloading Marker */}
        <Marker
          position={user2}
          onClick={() => handleMarkerClick("unloading")}
          icon={createMarkerIcon("green")} // Change to any color (green for unloading)
        />
        {selectedMarker === "unloading" && (
          <InfoWindow
            position={user2}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>{tooltipText}</div>
          </InfoWindow>
        )}

        {/* Directions */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </>
  );
};

export default MapComponent;

import { GoogleMap, Marker, DirectionsRenderer, InfoWindow } from "@react-google-maps/api";
import locationA from "../assets/images/user.png";
import locationB from "../assets/images/loading.png";
import { useGoogleMapRoute } from "./useGoogleMapRoute";
import React, { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const MapComponent = ({ getAuctionDetails }) => {
  const loadingCoords = getAuctionDetails?.data?.result?.loadingLocation?.coordinates;
  const unloadingCoords = getAuctionDetails?.data?.result?.unloadingLocation?.coordinates;
  const partnerCoords = getAuctionDetails?.data?.result?.confirmedPartner?.location?.coordinates

  // console.log(getAuctionDetails?.data?.result?.user_status);

  const { directions } = useGoogleMapRoute(loadingCoords , unloadingCoords ,);



  const [isMarkersVisible, setIsMarkersVisible] = useState(false);
  const [isRouteVisible, setIsRouteVisible] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null); 

  useEffect(() => {
    if (directions) {
      setIsMarkersVisible(true);
      setIsRouteVisible(true);
    }
  }, [directions]);

  if (!loadingCoords || !unloadingCoords) {
    return <div>Loading map...</div>;
  }

  const loadingLatLng = { lat: loadingCoords[1], lng: loadingCoords[0] };
  const unloadingLatLng = { lat: unloadingCoords[1], lng: unloadingCoords[0] };

  const partnerLatLng  =  { lat: partnerCoords?.[1], lng: partnerCoords?.[0] }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={loadingLatLng} zoom={10}>
      {isMarkersVisible && (
        <>
          {/* Marker A (User/Loading) */}
          <Marker
            position={loadingLatLng}
            onClick={() => setActiveMarker("loading")}
            icon={{
              url: locationA,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
          {activeMarker === "loading" && (
            <InfoWindow position={loadingLatLng} onCloseClick={() => setActiveMarker(null)}>
              <div className="px-5 pb-5">
                <strong>Loading Location </strong>
                <p>User Status : {getAuctionDetails?.data?.result?.user_status}</p>
              </div>
            </InfoWindow>
          )}

          {/* Partner Location (Unloading) */}
          <Marker
            position={partnerLatLng}
            onClick={() => setActiveMarker("partner")}
            icon={{
              url: locationB,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
          {activeMarker === "partner" && (
            <InfoWindow position={partnerLatLng} onCloseClick={() => setActiveMarker(null)}>
              <div className="px-5 pb-5">
                <strong>Winning Partner </strong>
                <p>Status : {getAuctionDetails?.data?.result?.partner_status}</p>
              </div>
            </InfoWindow>
          )}
          {/* Marker B (Unloading) */}
          <Marker
            position={unloadingLatLng}
            onClick={() => setActiveMarker("unloading")}
            icon={{
              url: locationA,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
          {activeMarker === "unloading" && (
            <InfoWindow position={unloadingLatLng} onCloseClick={() => setActiveMarker(null)}>
              <div className="px-5 mb-5">
                <strong>Unloading Location</strong>
                <p>User Status : {getAuctionDetails?.data?.result?.user_status} </p>
              </div>
            </InfoWindow>
          )}
        </>
      )}

      {isRouteVisible && directions && (
        <DirectionsRenderer
          directions={directions}
          options={{ suppressMarkers: true }}
        />
      )}
    </GoogleMap>
  );
};

export default MapComponent;

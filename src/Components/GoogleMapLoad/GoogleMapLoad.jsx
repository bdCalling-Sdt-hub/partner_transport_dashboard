import { LoadScript } from "@react-google-maps/api";
import React, {  useState } from "react";

const GoogleMapLoad = ({ children }) => {
  const [googleApiLoaded, setGoogleApiLoaded] = useState(false);

//   const handleLoad = () => {
//     setGoogleApiLoaded(true);
//   };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAszXC1be8aJ37eHuNcBm_-O1clWkPUwV4"
    //   onLoad={handleLoad}
    //   onError={() => console.error("Error loading Google Maps API")}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapLoad;

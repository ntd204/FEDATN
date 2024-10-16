import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Map = () => {
  const defaultProps = {
    center: {
      lat: 20.99,
      lng: 105.77,
    },
    zoom: 11,
  };

  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        border: "20px",
        // filter: " brightness(2) ",
      }}
    >
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyCSeYQYg5k7fVzBA4L_X9rmyGMpB-pKhlc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={20.99}
          lng={105.77}
          text={<span style={{ fontSize: "24px" }}>📍</span>}
        />
      </GoogleMapReact>
    </div>
  );
};
export default Map;

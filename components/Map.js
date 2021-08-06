import { useState } from "react";
import ReactMapGl, { Popup, Marker } from "react-map-gl";
import logo from "../public/airbnb_logo.png";
import Image from "next/image";
import getCenter from "geolib/es/getCenter";
function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults?.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    ...center,
    zoom: 11,
    width: "100%",
    height: "100%",
  });
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/kalaiesk/cks0i73333p9t18lih0sclz8t"
      mapboxApiAccessToken={process.env.mapBoxToken}
      {...viewport}
      onViewportChange={(vi) => setViewport(vi)}
    >
      {searchResults?.map((res) => (
        <div key={res.long}>
          <Marker latitude={res.lat} longitude={res.long}>
            <div className="relative top-0 p-1 cursor-pointer animate-bounce">
              <Image
                src={logo}
                onClick={() => setSelectedLocation(res)}
                aria-label="push-pin"
                width={25}
                height={25}
              />
            </div>
          </Marker>
          {selectedLocation.long === res.long ? (
            <Popup
              closeOnClick
              onClose={() => setSelectedLocation({})}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGl>
  );
}

export default Map;

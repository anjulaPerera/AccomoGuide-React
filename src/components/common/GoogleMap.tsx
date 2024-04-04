import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { environment } from "../../environment/environment";

const MapContainer: React.FC = () => {
  const [position, setPosition] = useState<{ lat: any; lng: any }>({ lat: 0, lng: 0 });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: environment.GOOGLE_MAP_API_KEY
  });

  const handleMarkerDrag = (e: google.maps.MapMouseEvent) => {
    setPosition({ lat: e?.latLng?.lat(), lng: e?.latLng?.lng() });
    console.log("Latitude:", e?.latLng?.lat());
    console.log("Longitude:", e?.latLng?.lng());
  };

  useEffect(() => {
    console.log("position picked", position)
  },[position])

  return (
    isLoaded ? (
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{ lat: 6.8215208451737075, lng: 80.04150852202173 }}
        zoom={14}
        onClick={(e) => setPosition({ lat: e?.latLng?.lat(), lng: e?.latLng?.lng() })}
      >
        <Marker
          position={position}
          draggable={true}
          onDragEnd={handleMarkerDrag}
        />
      </GoogleMap>
    ) : <></>
  );
};

export default MapContainer;

import { useEffect, useState } from "react";
import LeafletMap from "../components/Map";
import "./MapPage.css";
import type { NurseryData } from "../types/nursery";

function MapPage() {
  const [data, setData] = useState<null | NurseryData[]>(null);
  const [userPosition, setUserPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Geolocation error: ", error);
          setUserPosition({ lat: 48.8566, lng: 2.3522 });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setUserPosition({ lat: 48.8566, lng: 2.3522 });
    }
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/nursery/`)
      .then((response) => response.json())
      .then((nursery) => setData(nursery));
  }, []);

  const filteredData = data?.filter((el) => {
    return el.ns_coord_lat && el.ns_coord_long;
  });

  const markers = filteredData?.map((el) => ({
    lat: el.ns_coord_lat,
    lng: el.ns_coord_long,
    label: el.ns_name,
  }));

  return (
    <>
      <main className="map-page-main">
        {userPosition ? (
          <LeafletMap markers={markers || []} userPosition={userPosition} />
        ) : (
          <p>Chargement de la géolocalisation...</p>
        )}
      </main>
    </>
  );
}

export default MapPage;

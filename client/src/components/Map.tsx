import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

interface MarkerType {
  lat: number;
  lng: number;
  label: string;
}

interface Props {
  markers: MarkerType[];
  userPosition: { lat: number; lng: number } | null;
}

const LeafletMap: React.FC<Props> = ({ markers, userPosition }) => {
  const defaultPosition = { lat: 48.8566, lng: 2.3522 };

  return (
    <MapContainer
      center={
        userPosition
          ? [userPosition.lat, userPosition.lng]
          : [defaultPosition.lat, defaultPosition.lng]
      }
      zoom={10}
      style={{ height: "90vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={`${marker.lat}-${marker.lng}`}
          position={[marker.lat, marker.lng]}
        >
          <Popup>
            <strong>{marker.label}</strong>
            <br />
            Latitude: {marker.lat}
            <br />
            Longitude: {marker.lng}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;

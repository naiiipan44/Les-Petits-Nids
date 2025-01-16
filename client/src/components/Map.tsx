import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";
import type { MarkerType } from "../types/nursery";

interface Props {
  markers: MarkerType[];
  userPosition: { lat: number; lng: number } | null;
}

const customIcon = new L.Icon({
  iconUrl: "/Logo-marker-icon pink.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -31],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const UserMarker: React.FC<{ position: { lat: number; lng: number } }> = ({
  position,
}) => (
  <Marker position={position}>
    <Popup>
      <strong>Vous êtes ici !</strong>
    </Popup>
  </Marker>
);
const LeafletMap: React.FC<Props> = ({ markers, userPosition }) => {
  const defaultPosition = { lat: 48.8566, lng: 2.3522 };

  return (
    <MapContainer
      className="map-container"
      center={
        userPosition
          ? [userPosition.lat, userPosition.lng]
          : [defaultPosition.lat, defaultPosition.lng]
      }
      zoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {userPosition && <UserMarker position={userPosition} />}
      {markers.map((marker) => (
        <Marker
          icon={customIcon}
          key={`${marker.lat}-${marker.lng}`}
          position={[marker.lat, marker.lng]}
        >
          <Popup className="popup">
            <section className="nursery-popup">
              <img
                src={marker.img}
                alt={`Illustration de la crèche ${marker.name}`}
              />
              <h2>{marker.name}</h2>
              <ul>
                <li className="popup-information">
                  <img src="/map.svg" alt="logo de l'adresse de l'entreprise" />
                  <p>{marker.adress}</p>
                </li>
                <li className="popup-information">
                  <img
                    src="/Logo-Horaires.png"
                    alt="logo des horaires de l'entreprise"
                  />
                  <p>Lundi-Vendredi : 9h-18h</p>
                </li>
                <li className="popup-information">
                  <img
                    src="/Logo-tel.png"
                    alt="logo du téléphone de l'entreprise"
                  />
                  <p> {marker.tel.replace(/(.{2})/g, "$1 ")}</p>
                </li>
                <li className="popup-information-mail">
                  <img
                    src="/Logo-mail.png"
                    alt="logo du mail de l'entreprise"
                  />
                  <p>{marker.mail}</p>
                </li>
              </ul>
            </section>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;

export interface MarkerType {
  lat: number;
  lng: number;
  img: string;
  adress: string;
  tel: string;
  name: string;
  mail: string;
  id: number;
}

export interface Props {
  markers: MarkerType[];
  userPosition: { lat: number; lng: number } | null;
}

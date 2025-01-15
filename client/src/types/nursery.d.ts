export interface NurseryData {
  id: number;
  ns_name: string;
  ns_capacity: number;
  ns_address: string;
  ns_image: string;
}

interface NurseryData extends InterfaceMap {
  ns_coord_lat: number;
  ns_coord_long: number;
}

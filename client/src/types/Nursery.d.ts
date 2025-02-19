export interface NurseryData {
  id: number;
  ns_name: string;
  ns_capacity: number;
  ns_address: string;
  ns_image: string;
}

interface NurseryDetails extends NurseryData {
  ns_type?: string;
  ns_mail?: string;
  ns_num_tel: string;
}

interface InterfaceMap extends NurseryData {
  ns_coord_lat: number;
  ns_coord_long: number;
  ns_num_tel: string;
  ns_mail: string;
}

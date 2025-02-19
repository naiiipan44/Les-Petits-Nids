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

interface CompleteNurseryProps extends NurseryDetails {
  ns_zip_postal: string;
  ns_nb_place_dispo: number;
  ns_is_disabled: boolean;
  ns_is_public: boolean;
  ns_age_min: number;
  ns_age_max: number;
  ns_description: string;
  ns_price: number;
}

interface InterfaceMap extends NurseryData {
  ns_coord_lat: number;
  ns_coord_long: number;
  ns_num_tel: string;
  ns_mail: string;
}

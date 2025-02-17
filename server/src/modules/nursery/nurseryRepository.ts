import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Nursery } from "../../types/modules/Nursery";

class NurseryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM nursery",
      [],
    );

    return rows;
  }

  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM nursery WHERE id = ?",
      [id],
    );

    return rows[0] || null;
  }

  async create(nursery: Omit<Nursery, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into nursery (ns_name, ns_type, ns_mail, ns_address, ns_zip_postal, ns_num_tel, ns_capacity, ns_nb_place_dispo, ns_is_public, ns_age_min, ns_age_max, ns_is_disabled, ns_coord_long, ns_coord_lat, ns_description, ns_image, ns_price) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nursery.name,
        nursery.type,
        nursery.mail,
        nursery.address,
        nursery.zipCode,
        nursery.phoneNumber,
        nursery.capacity,
        nursery.availability,
        nursery.gestion,
        nursery.minAge,
        nursery.maxAge,
        nursery.isDisabled,
        nursery.coordLong,
        nursery.coordLat,
        nursery.description,
        nursery.image,
        nursery.price,
      ],
    );

    return result.insertId;
  }
}

export default new NurseryRepository();

import exempleNursery from "/aurelie_faugere_assistante_maternelle.jpg";
import type { DataNursery } from "../types/DataNursery";

export const fakeNurse: DataNursery[] = [
  {
    id: 1,
    name: "Aurélie Faugère",
    type: "Assistante maternelle",
    image: exempleNursery,
    rate: "4.8",
    location: "Bordeaux, à 500m",
    openHours: "Horaires : Lundi - Samedi : 9h-16h",
    phoneNumber: "Téléphone : 05 56 56 56 56",
    mail: "Mail : contact@contact.fr",
  },
  {
    id: 2,
    name: "Picoti Picota",
    type: "Crèche maternelle",
    image: exempleNursery,
    rate: "4.8",
    location: "Bordeaux, à 500m",
    openHours: "Horaires : Lundi - Samedi : 9h-16h",
    phoneNumber: "Téléphone : 05 56 56 56 56",
    mail: "Mail : contact@contact.fr",
  },
];

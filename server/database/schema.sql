CREATE TABLE parent (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  p_first_name VARCHAR(80) NOT NULL,
  p_last_name VARCHAR(80) NOT NULL,
  p_job VARCHAR(80),
  p_address VARCHAR(120) NOT NULL,
  p_zip_code INT NOT NULL,
  p_num_tel VARCHAR(20), -- Changed INT to VARCHAR to accommodate phone number formatting
  p_mail VARCHAR(100) NOT NULL,
  p_birth_date DATE NOT NULL
);

create table children (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
c_first_name VARCHAR(80) NOT NULL,
c_last_name VARCHAR(80) NOT NULL,
c_gender VARCHAR(80) NOT NULL,
c_birth_date DATE NOT NULL,
c_allergies VARCHAR(150) NULL,
parent_id INT NOT NULL,
 FOREIGN KEY (parent_id) 
 REFERENCES parent(id)
);

create table user (
  id int unsigned primary key auto_increment not null,
  first_name varchar(80) not null,
  last_name varchar(80) not null,
  email varchar(255) not null unique,
  hashed_password varchar(255) not null,
  role varchar(80) not null
);

INSERT INTO user (
  first_name, last_name, email, hashed_password, role
) VALUES (
  "Jean-Charles", "Passereaux", "creche-les-passereaux@wanadoo.fr", "$argon2i$v=19$m=16,t=2,p=1$c3h3Zmd5M3FHRkJza3NrUg$7aEMFgo/0z0vNR6EVtDKhg", "nursery"
), 
("Anne", "Babilou", "contact@babilou.com", "$argon2i$v=19$m=16,t=2,p=1$c3h3Zmd5M3FHRkJza3NrUg$juN7KG181Cl/yMHgbiqn5Q", "nursery"), 
("François", "Barbusiens", "rpe-orves@mairie-colombes.fr", "$argon2i$v=19$m=16,t=2,p=1$c3h3Zmd5M3FHRkJza3NrUg$6XFoX1kaoJooVJ4/FYjEJQ", "nursery"),
("Claire", "Raphaël", "creche@association-saint-raphael.com", "$argon2i$v=19$m=16,t=2,p=1$c3h3Zmd5M3FHRkJza3NrUg$4cOvlrBG2HL6W5snZzLO8g", "nursery"),
("Constance", "Comptine", "petite_enfance@ville-antony.fr", "$argon2i$v=19$m=16,t=2,p=1$c3h3Zmd5M3FHRkJza3NrUg$Og+ZhKN9v3q2XurOAPE6ig", "nursery");

CREATE TABLE nursery (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  ns_name VARCHAR(80) NOT NULL,
  ns_type VARCHAR(80) NOT NULL, 
  ns_mail VARCHAR(100) NOT NULL,
  ns_address VARCHAR(120) NOT NULL,
  ns_zip_postal INT NOT NULL,
  ns_num_tel VARCHAR(20),
  ns_capacity INT NOT NULL,
  ns_nb_place_dispo INT NOT NULL,
  ns_is_public VARCHAR(80) NOT NULL,
  ns_age_min INT NOT NULL,
  ns_age_max INT NOT NULL,
  ns_is_disabled BOOLEAN DEFAULT FALSE,
  ns_coord_long DECIMAL(10,6) NOT NULL,
  ns_coord_lat DECIMAL(10,6) NOT NULL,
  ns_description VARCHAR(1000),
  ns_image VARCHAR(260) NOT NULL,
  ns_price DECIMAL(10,2) NOT NULL
);

ALTER TABLE parent ADD COLUMN user_id INT NOT NULL;

INSERT INTO nursery (
  ns_name,
  ns_type,
  ns_mail,
  ns_address,
  ns_zip_postal,
  ns_num_tel,
  ns_capacity,
  ns_nb_place_dispo,
  ns_is_public,
  ns_age_min,
  ns_age_max,
  ns_is_disabled,
  ns_coord_long,
  ns_coord_lat,
  ns_description,
  ns_image,
  ns_price
  )
VALUES
(
  "Les Passereaux", 
  "Multi-accueil", 
  "creche-les-passereaux@wanadoo.fr",
  "1 RUE CESARIA EVORA", 
  92700, 
  "0147819355", 
  60, 
  2, 
  "public", 
  2.5, 
  4, 
  false, 
  2.228716805365273, 
  48.919672135245996,
  "La crèche Les Passereaux située au 1 RUE CESARIA EVORA, COLOMBES 92700 est une crèche accueillant les enfants de 10 semaines à 3 ans. Sa capacité d’accueil est de 60. Cet établissement proposent 3 types d’accueil : régulier, occasionnel ou d’urgence. Inscrivez-vous ou connectez-vous pour avoir plus d’informations sur les tarifs et les modalités d’inscription !",
  "https://static.wixstatic.com/media/dc445c_9fb8a975972442eab252760838e90e32~mv2.png/v1/fill/w_980,h_436,q_90/dc445c_9fb8a975972442eab252760838e90e32~mv2.png", 
  1.47
  ),
  (
  "Babilou Colombes Barbusse",
  "Multi-accueil",
  "contact@babilou.com",
  "102 AVENUE HENRI BARBUSSE",
  92025,
  "0809103000",
  41,
  1,
  "privé",
  2.5,
  4,
  false,
  2.2526177902864144,
  48.91676085070931,
  "Pouvant recevoir jusqu'à 41 enfants, la crèche Babilou Colombes Barbusse accueille vos enfants âgés de 10 semaines à 4 ans du lundi au vendredi de 7h30 à 19h. La crèche est située au 102 avenue Henri Barbusse à Colombes.
Votre activité professionnelle pouvant vous imposer différentes contraintes horaires, 3 types d'accueil sont possibles afin de s'adapter au mieux à vos besoins : l’accueil régulier, occasionnel et l'accueil d'urgence. En outre, vous bénéficiez d'un service tout compris puisque nous fournissons le lait, les repas et les couches au sein de notre structure. Inscrivez-vous ou connectez-vous pour avoir plus d’informations sur les tarifs et les modalités d’inscription !",
  "https://babilou.fr/sites/default/files/styles/diaporama/public/2022-01/233-babilou-colombes-barbusse-8_0.jpg?h=82f92a78&itok=GDoBekte",
  2.73
  ),
  (
  "Les Barbusiens",
  "Micro-crèche",
  "rpe-orves@mairie-colombes.fr",
  "121 AVENUE HENRI BARBUSSE",
  92025,
  "0185531378",
  12,
  0,
  "privé",
  2.5,
  4,
  false,
  2.252821179703448,
  48.916382503696916,
  "Située 121 avenue Henri Barbusse, à proximité de la gare Les Vallées et du square Denis Papin la crèche à Colombes Les Barbusiens accueille chaque jour 10 enfants âgés de 10 semaines à 4 ans dans un cadre de vie sécurisé, adapté au développement des tout-petits et à l’accueil de leur famille. La micro crèche spacieuse (150 m²) à la décoration chaleureuse favorise l'éveil et le bien être des enfants. Inscrivez-vous ou connectez-vous pour avoir plus d’informations sur les tarifs et les modalités d’inscription !",
  "https://www.demain2pieds.com/wp-content/uploads/2018/05/Les-Barbusiens-4.jpg",
  2.50
  ),
  (
  "Saint Raphaël",
  "Multi-accueil",
  "creche@association-saint-raphael.com",
  "15 AVENUE DU BOIS DE VERRIERES",
  92160,
  "0146664605",
  50,
  0,
  "privé",
  2.5,
  4,
  false,
  2.295139018569901,
  48.755042569283084,
  "La crèche Saint Raphaël située au 15 AVENUE DU BOIS DE VERRIERES, ANTONY 92160 est une crèche accueillant les enfants de 10 semaines à 3 ans. Sa capacité d’accueil est de 50. Cet établissement proposent 3 types d’accueil : régulier, occasionnel ou d’urgence. Inscrivez-vous ou connectez-vous pour avoir plus d’informations sur les tarifs et les modalités d’inscription !",
  "https://www.acis-asbl.be/wp-content/uploads/2023/07/2gp06473.jpg",
  1.47
  ),
  (
  "La Comptine - Arc en Ciel",
  "Multi-accueil",
  "petite_enfance@ville-antony.fr",
  "15 AVENUE FONTAINE MOUTON",
  92160,
  "0146682577",
  55,
  0,
  "public",
  2.5,
  4,
  true,
  2.289409993720274,
  48.738824991659705,
  "La crèche La Comptine – Arc en Ciel située au 15 AVENUE FONTAINE MOUTON, ANTONY 92160 est une crèche accueillant les enfants de 10 semaines à 3 ans. Sa capacité d’accueil est de 55. Cet établissement proposent 3 types d’accueil : régulier, occasionnel ou d’urgence. Inscrivez-vous ou connectez-vous pour avoir plus d’informations sur les tarifs et les modalités d’inscription !",
  "https://www.ville-antony.fr/images/Petite-Enfance/photos_multi-accueils/la_comptine/int/farandole/farandole_int_1_500.jpg",
  1.73
  );

  CREATE TABLE booking (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  parent_id INT NOT NULL,
  FOREIGN KEY (parent_id)
  REFERENCES parent(id),
  nursery_id INT NOT NULL,
  FOREIGN KEY (nursery_id)
  REFERENCES nursery(id),
  children_id INT NOT NULL,
  FOREIGN KEY (children_id)
  REFERENCES children(id),
  booking_date DATE UNIQUE NOT NULL,
  booking_range VARCHAR(80) NOT NULL,
  status VARCHAR(80) NOT NULL
);

create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);


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
  ns_type_gestion BOOLEAN DEFAULT FALSE,
  ns_age_min INT NOT NULL,
  ns_age_max INT NOT NULL,
  ns_disabled BOOLEAN DEFAULT FALSE,
  ns_coord_long DECIMAL(10,6) NOT NULL,
  ns_coord_lat DECIMAL(10,6) NOT NULL,
  ns_description VARCHAR(255),
  ns_image VARCHAR(260) NOT NULL,
  ns_price DECIMAL(10,2) NOT NULL
);


INSERT INTO nursery (
  id,
  ns_name,
  ns_type,
  ns_mail,
  ns_address,
  ns_zip_postal,
  ns_num_tel,
  ns_capacity,
  ns_num_place_dispo,
  ns_type_gestion,
  ns_age_min,
  ns_age_max,
  ns_disabled,
  ns_coord_long,
  ns_coord_lat,
  ns_description,
  ns_image,
  ns_price
  )
VALUES
(
  1,
  "Les Passereaux", 
  "Multi-accueil", 
  "mail",
  "1 RUE CESARIA EVORA", 
  92700, 
  "0147819355", 
  60, 
  "places-dispos", 
  "gestion-boolean", 
  2.5, 
  4, 
  "handicap-boolean", 
  2.228716805365273, 
  48.919672135245996,
  "https://static.wixstatic.com/media/dc445c_9fb8a975972442eab252760838e90e32~mv2.png/v1/fill/w_980,h_436,q_90/dc445c_9fb8a975972442eab252760838e90e32~mv2.png", 
  "price"
  ),
  (
  2,
  "Babilou Colombes Barbusse",
  "Multi-accueil",
  "mail",
  "102 AVENUE HENRI BARBUSSE",
  92025,
  "0147819357",
  41,
  "places-dispos",
  "gestion-boolean",
  2.5,
  4,
  "handicap-boolean",
  2.2526177902864144,
  48.91676085070931, 
  "https://babilou.fr/sites/default/files/styles/diaporama/public/2022-01/233-babilou-colombes-barbusse-8_0.jpg?h=82f92a78&itok=GDoBekte",
  "price"
  ),
  (
  3,
  "Les Barbusiens",
  "Micro-crèche",
  "mail",
  "121 AVENUE HENRI BARBUSSE",
  92025,
  "0146764605",
  12,
  "places-dispos",
  "gestion-boolean",
  2.5,
  4,
  "handicap-boolean",
  2.252821179703448,
  48.916382503696916,
  "https://www.demain2pieds.com/wp-content/uploads/2018/05/Les-Barbusiens-4.jpg",
  "price"
  ),
  (
  4,
  "Saint Raphaël",
  "Multi-accueil",
  "mail",
  "15 AVENUE DU BOIS DE VERRIERES",
  92160,
  "0146664605",
  50,
  "places-dispos",
  "gestion-boolean",
  2.5,
  4,
  "handicap-boolean",
  2.295139018569901,
  48.755042569283084,
  "https://www.acis-asbl.be/wp-content/uploads/2023/07/2gp06473.jpg",
  "price"
  ),
  (
  5,
  "La Comptine - Arc en Ciel",
  "Multi-accueil",
  "mail",
  "15 AVENUE FONTAINE MOUTON",
  92160,
  "0146682577",
  55,
  "places-dispos",
  "gestion-boolean",
  2.5,
  4,
  "handicap-boolean",
  2.289409993720274,
  48.738824991659705,
  "https://www.ville-antony.fr/images/Petite-Enfance/photos_multi-accueils/la_comptine/int/farandole/farandole_int_1_500.jpg",
  "price"
  );


CREATE TABLE userApp (
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

INSERT INTO userApp (
  id,
  p_first_name,
  p_last_name,
  p_job,
  p_address,
  p_zip_code,
  p_num_tel,
  p_mail,
  p_birth_date
)
VALUES
(
1,
"Deschamps",
"Paula",
"Conseillère bancaire",
"20 ALLEE DES DHUYS",
44000,
"0632000000",
"paula.deschamps@gmail.com",
"1986-01-01" -- Correct date format (YYYY-MM-DD)
),
(
2,
"Després",
"Alexis",
"Maquettiste",
"53 BOULEVARD MALESHERBES",
44300,
"0755000000",
"alexis.despres@yahoo.fr",
"1974-05-07"
);







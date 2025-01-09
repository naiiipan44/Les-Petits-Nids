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
  ns_nb_place_dispo,
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
  "lespassereaux@creche.org",
  "1 RUE CESARIA EVORA", 
  92700, 
  "0147819355", 
  60, 
  2, 
  true, 
  2.5, 
  4, 
  false, 
  2.228716805365273, 
  48.919672135245996,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",
  "https://static.wixstatic.com/media/dc445c_9fb8a975972442eab252760838e90e32~mv2.png/v1/fill/w_980,h_436,q_90/dc445c_9fb8a975972442eab252760838e90e32~mv2.png", 
  1.47
  ),

  (
  2,
  "Babilou Colombes Barbusse",
  "Multi-accueil",
  "babilou-colombes@creche.org",
  "102 AVENUE HENRI BARBUSSE",
  92025,
  "0147819357",
  41,
  1,
  false,
  2.5,
  4,
  false,
  2.2526177902864144,
  48.91676085070931,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",
  "https://babilou.fr/sites/default/files/styles/diaporama/public/2022-01/233-babilou-colombes-barbusse-8_0.jpg?h=82f92a78&itok=GDoBekte",
  2.73
  ),

  (
  3,
  "Les Barbusiens",
  "Micro-crèche",
  "lesbarbusiens@creche.org",
  "121 AVENUE HENRI BARBUSSE",
  92025,
  "0146764605",
  12,
  0,
  false,
  2.5,
  4,
  false,
  2.252821179703448,
  48.916382503696916,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",
  "https://www.demain2pieds.com/wp-content/uploads/2018/05/Les-Barbusiens-4.jpg",
  2.50
  ),

  (
  4,
  "Saint Raphaël",
  "Multi-accueil",
  "saint-raphael@creche.org",
  "15 AVENUE DU BOIS DE VERRIERES",
  92160,
  "0146664605",
  50,
  0,
  false,
  2.5,
  4,
  false,
  2.295139018569901,
  48.755042569283084,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",
  "https://www.acis-asbl.be/wp-content/uploads/2023/07/2gp06473.jpg",
  1.47
  ),

  (
  5,
  "La Comptine - Arc en Ciel",
  "Multi-accueil",
  "la-comptine-arc@creche.org",
  "15 AVENUE FONTAINE MOUTON",
  92160,
  "0146682577",
  55,
  0,
  true,
  2.5,
  4,
  true,
  2.289409993720274,
  48.738824991659705,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper."
  "https://www.ville-antony.fr/images/Petite-Enfance/photos_multi-accueils/la_comptine/int/farandole/farandole_int_1_500.jpg",
  1.73
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







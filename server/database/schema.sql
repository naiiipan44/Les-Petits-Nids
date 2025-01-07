create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);


CREATE TABLE nursery (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  ns_name VARCHAR(80) NOT NULL,
  ns_capacity INT NOT NULL,
  ns_address VARCHAR(120) NOT NULL,
  ns_image VARCHAR(260) NOT NULL
);

INSERT INTO nursery
  (
    id,
    ns_name,
    ns_capacity,
    ns_address,
    ns_image
  )
VALUES
  (
    1,
    "Les Passereaux",
    60,
    "1 RUE CESARIA EVORA",
    "https://static.wixstatic.com/media/dc445c_9fb8a975972442eab252760838e90e32~mv2.png/v1/fill/w_980,h_436,q_90/dc445c_9fb8a975972442eab252760838e90e32~mv2.png"
  ),
  (
    2,
    "Babilou Colombes Barbusse",
    41,
    "102 AVENUE HENRI BARBUSSE",
    "https://babilou.fr/sites/default/files/styles/diaporama/public/2022-01/233-babilou-colombes-barbusse-8_0.jpg?h=82f92a78&itok=GDoBekte"
  ),
  (
    3,
    "Les Barbusiens",
    12,
    "121 AVENUE HENRI BARBUSSE",
    "https://www.demain2pieds.com/wp-content/uploads/2018/05/Les-Barbusiens-4.jpg"
  ),
  (
    4,
    "Saint Raphaël",
    50,
    "15 AVENUE DU BOIS DE VERRIERES",
    "https://www.acis-asbl.be/wp-content/uploads/2023/07/2gp06473.jpg"
  ),
  (
    5,
    "La Comptine - Arc en Ciel",
    55,
    "15 AVENUE FONTAINE MOUTON",
    "https://www.ville-antony.fr/images/Petite-Enfance/photos_multi-accueils/la_comptine/int/farandole/farandole_int_1_500.jpg"
  );

/* SQL QUESTION 1 */

CREATE TABLE country (
    id int NOT NULL,
    name varchar(255),
    PRIMARY KEY (id) 
);


CREATE TABLE casino (
    id int NOT NULL,
    id_country int,
    name varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (id_country) REFERENCES country(id)
);

CREATE TABLE type_game (
    id int NOT NULL,
    name varchar(255),
    PRIMARY KEY (id) 
);

CREATE TABLE game (
    id int NOT NULL,
    id_casino int,
    id_type_game int,
    name varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (id_casino) REFERENCES casino(id),
    FOREIGN KEY (id_type_game) REFERENCES type_game(id)
);

CREATE TABLE user (
    id int NOT NULL,
    name varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE user_game (
    id int NOT NULL,
    id_game int,
    id_user int,
    name varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (id_game) REFERENCES game(id),
    FOREIGN KEY (id_user) REFERENCES user(id)
);

/* SQL QUESTION 2 */

SELECT * FROM user 
INNER JOIN user_game ON user_game.id_user = user.id
INNER JOIN game ON game.id = usergame.id_game
INNER JOIN type ON type_game.id = game.id_type
WHERE type_game.name === 'SLOT'
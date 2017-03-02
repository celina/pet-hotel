CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(80)
);

INSERT INTO owners
VALUES (1, 'Lisa', 'Bonet'),
(2, 'Charles', 'Darwin'),
(3, 'George', 'Foreman'),
(4, 'Lucy', 'Liu'),
(5, 'Bob', 'Ross'),
(6, 'Johnny', 'Tables');

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name varchar(80),
breed varchar(80),
color varchar(80),
owner_id varchar(80));


CREATE TABLE visits (
id SERIAL PRIMARY KEY,
name varchar(80),
check_in varchar(80),
check_out varchar(80),
pets_id varchar(80));

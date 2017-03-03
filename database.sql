CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(80)
);

INSERT INTO owners(first_name, last_name)
VALUES ('Lisa', 'Bonet'),
('Charles', 'Darwin'),
('George', 'Foreman'),
('Lucy', 'Liu'),
('Bob', 'Ross'),
('Johnny', 'Tables');


CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name varchar(80),
breed varchar(80),
color varchar(80),
owner_id  SERIAL integer NOT NULL REFERENCES owners);


CREATE TABLE visits (
id SERIAL PRIMARY KEY,
name varchar(80),
check_in varchar(80),
check_out varchar(80),
pets_id integer NOT NULL REFERENCES pets);

INSERT INTO pets(name, breed, color)
VALUES ('brandy', 'lab', 'brown'),
('giggles', 'corgi', 'blue'),
('lucky', 'dalmatian', 'white'),
('spot', 'bulldog', 'gray'),
('fluffy', 'poodle', 'snow white');

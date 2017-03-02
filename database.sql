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

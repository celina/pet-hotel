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

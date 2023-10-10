CREATE DATABASE userexample;

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);
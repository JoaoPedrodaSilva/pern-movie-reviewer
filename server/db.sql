-- create database
CREATE DATABASE movie_reviewer;

-- create todo table
CREATE TABLE movie(
    movie_id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL
);

-- get all movies
SELECT * FROM movie;

-- get individual movie
SELECT * FROM movie WHERE id = $1;

-- -- create individual todo
-- INSERT INTO todo(description) VALUES($1) RETURNING *;

-- -- update individual todo
-- UPDATE todo SET description = $1 WHERE id = $2 RETURNING *;

-- -- delete individual todo
-- DELETE FROM todo WHERE id = $1
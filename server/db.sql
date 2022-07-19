-- create database
CREATE DATABASE movie_reviewer;

-- create movie table
CREATE TABLE movie(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL
);

-- create review table
CREATE TABLE movie_review (
	review_id BIGSERIAL NOT NULL PRIMARY KEY,
	movie_id BIGINT NOT NULL REFERENCES movie(movie_id) ON DELETE CASCADE,
	reviewer_name VARCHAR(50) NOT NULL,
	reviewer_comment TEXT NOT NULL,
	reviewer_rating INT NOT NULL CHECK(reviewer_rating >=1 AND reviewer_rating <= 5)
);

-- get all movies
SELECT * FROM movie;

-- get individual movie
SELECT * FROM movie WHERE id = $1;

-- -- create individual review
-- INSERT INTO todo(description) VALUES($1) RETURNING *;

-- -- update individual review
-- UPDATE todo SET description = $1 WHERE id = $2 RETURNING *;

-- -- delete individual review
-- DELETE FROM todo WHERE id = $1
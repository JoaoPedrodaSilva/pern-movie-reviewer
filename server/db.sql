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

-- get all movies, their average rating and their total ratings
SELECT * FROM movie LEFT JOIN (SELECT movie_id, TRUNC(AVG(reviewer_rating), 1) AS average_rating, COUNT(review_id) AS total_ratings FROM movie_review GROUP BY movie_id) movie_review ON movie.id = movie_review.movie_id;

-- get individual movie, its average rating and its total ratings
SELECT * FROM movie LEFT JOIN (SELECT movie_id, TRUNC(AVG(reviewer_rating), 1) AS average_rating, COUNT(review_id) AS total_ratings FROM movie_review GROUP BY movie_id) movie_review ON movie.id = movie_review.movie_id WHERE movie.id = $1;

-- create individual review
INSERT INTO movie_review (movie_id, reviewer_name, reviewer_rating, reviewer_comment) VALUES ($1, $2, $3, $4) RETURNING *


-- -- create individual review
-- INSERT INTO todo(description) VALUES($1) RETURNING *;

-- -- update individual review
-- UPDATE todo SET description = $1 WHERE id = $2 RETURNING *;

-- -- delete individual review
-- DELETE FROM todo WHERE id = $1
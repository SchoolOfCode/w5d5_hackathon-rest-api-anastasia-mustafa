import express from "express";
import { query } from "../db/index.js";
import { movies } from "../lib/data.js";

//Get Movies Table
export async function getMovies() {
  const movies = await query(`SELECT * FROM movies;`);
  return movies.rows;
}

//Get a Movie by Id

export async function getMoviesById(id) {
  const movie = await query(`SELECT * FROM movies WHERE id = ($1);`, [id]);
  return movie.rows;
}

//Create a new movie

export async function createMovie(movie) {
  const newMovie = await query(
    `INSERT INTO movies (title, year, runtime, genres) VALUES ($1 , $2, $3, ARRAY[$4] ) RETURNING *;`,
    [movie.title, movie.year, movie.runtime, movie.genres]
  );
  return newMovie.rows;
}

//Update a movie by Id
export async function updateMovieTitle(movieTitle, id) {
  const updatedMovie = await query(
    `UPDATE movies SET title = ($1) WHERE id = ($2) RETURNING *;`,
    [movieTitle.title, id]
  );
  return updatedMovie.rows;
}

//Delete a movie by Id
export async function deleteMovieById(id) {
  const deletedMovie = await query(
    `DELETE FROM movies WHERE id = $1 RETURNING *;`,
    [id]
  );
}

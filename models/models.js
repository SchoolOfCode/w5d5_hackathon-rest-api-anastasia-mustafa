import express from "express";
import { query } from "../db/index.js";

//Get Movies Table
export async function getMovies(){
    const movies = await query(`SELECT * FROM movies;`);
    return movies.rows;
}

//Get a Movie by Id

export async function getMoviesById(id) {
    const movie = await query(`SELECT * FROM movies WHERE id = ($1);`,[id])
    return movie.rows;
}

//Create a new movie

export async function createMovie(movie) {
    const newMovie = await query(`INSERT INTO movies (title) VALUES ($1) RETURNING *;`, [movie]) 
    return newMovie.rows; }
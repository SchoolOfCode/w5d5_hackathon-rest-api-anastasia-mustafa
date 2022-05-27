import express from "express";
import { query } from "../db/index.js";

export async function getMovies(){
    const movies = await query(`SELECT * FROM movies;`);
    return movies.rows;
}

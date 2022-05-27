import express from "express";
const moviesRouter = express.Router();

//GET request route
import { getMovies } from "../models/models.js";

moviesRouter.get("/", async function (req, res) {
  const result = await getMovies();
  return res.json({
    success: true,
    payload: result,
  });
});
//Get Movie by Id 

import { getMoviesById } from "../models/models.js";

moviesRouter.get(":/id", async function(req, res) {
  const id = Number(req.params.id);
  const movie = await getMoviesById(id)
  res.json({ success: true, payload: movie})
})

//Post request - Create a new movie 

import { createMovie } from "../models/models.js";

moviesRouter.post("/", async function (req, res) {
  const newMovie = req.body;
  const result = await createMovie (newMovie);
  res.json({success: true, payload: newMovie});

})

//Put request - Update an existing movie 

//Delete a movie 

export {moviesRouter};


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

moviesRouter.get("/:id", async function(req, res) {
  const id = Number(req.params.id);
  const movie = await getMoviesById(id)
  res.json({ success: true, payload: movie})
})

//Post request - Create a new movie 

import { createMovie } from "../models/models.js";

moviesRouter.post("/", async function (req, res) {
  const newMovie = req.body;
  const result = await createMovie (newMovie);
  res.json({success: true, payload: result});

})

//Put request - Update an existing movie 
import { updateMovieTitle} from "../models/models.js"

moviesRouter.put("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const update = req.body;
  const updatedMovie = await updateMovieTitle(update, id)
  res.json({success: true, payload: updatedMovie})
})

//Delete a movie 

export {moviesRouter};


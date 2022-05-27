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

export {moviesRouter};

import { query } from "../index.js";
import { movies } from "../../lib/data.js";

async function populateMoviesTable () {
    for (let i = 0; i < movies.length; i++) {
        const res = await query (`INSERT INTO movies (title, year, runtime, genres) VALUES ($1, $2, $3, ARRAY [$4]) RETURNING *`, [movies[i].title, movies[i].year, movies[i].runtime, movies[i].genres]);
        console.log(res.rows[0].title,'added')}
}
populateMoviesTable ();
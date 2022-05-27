import { query } from "../index.js";

const sqlString = 'CREATE TABLE IF NOT EXISTS movies (id INT GENERATED ALWAYS AS IDENTITY, title TEXT, year INT, runtime INT, genres TEXT []);'

async function createMoviesTable(){
  const res = await query (sqlString);
  console.log('created movies table');
}

createMoviesTable();
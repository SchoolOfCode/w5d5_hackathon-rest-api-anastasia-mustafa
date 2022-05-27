import pg from 'pg';

const pool = new pg.Pool({
    User: process.env.PGUSER,
    Host: process.env.PGHOST,
    Database: process.env.PGDATABASE,
    Password: process.env.PGPASSWORD,
    Port: process.env.PGPORT,
    ssl: {rejectUnauthorized: false}
})

export function query (text, params, callback) {
    return pool.query(text, params, callback);
}
const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'fs-react-shopping',
    user:'mludkey',
    password:'admin',
});
//user and password can be commented out, needed for running on windows setup of db. 
module.exports = pool;

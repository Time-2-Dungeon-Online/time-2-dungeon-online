const { Pool, Client } = require('pg');
const connectionString = process.env.SQL_URL;


const pool = new Pool({
    connectionString: connectionString
});



// pool.query('SELECT NOW()', (err, res) => {
//     if (err) console.log('There was an error connecting to the DB error:', err);
//     else{
//         console.log("SQL Connected");
//     }
//     pool.end();
// });

module.exports = pool;


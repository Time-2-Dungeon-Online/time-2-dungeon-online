const { Pool, Client } = require('pg');
const connectionString = 'postgres://cfdsuazz:SBC30hnVkuXekdHAnJ1pI2jCy3UG2OEg@salt.db.elephantsql.com:5432/cfdsuazz'


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


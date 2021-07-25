const Pool = require("pg").Pool;

const pool = new Pool({
    database: "node_postgres",
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
});

module.exports = pool;

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'runaranjo',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'songify_dev'
})

module.exports = pool;
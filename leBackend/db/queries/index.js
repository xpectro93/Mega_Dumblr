const pgp = require('pg-promise')({});

const connectionString = process.env.DATABASE_URL || 'postgres://localhost/mega_dumblr'

const db = pgp(connectionString);

module.exports = db
const path = require("path");

const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: path.resolve(__dirname, "database.sqlite3")
  },
    useNullAsDefault: true,
});
  
module.exports = knex;
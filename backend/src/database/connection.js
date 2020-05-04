const file = require("../../knexfile")
const knex = require("knex")

const connection = knex(file.development);

module.exports = connection;
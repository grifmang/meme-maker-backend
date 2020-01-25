const knex = require('knex');
const knexfile = require('../knexfile.js');

// This may have to be changed to DB_ENV
const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions);
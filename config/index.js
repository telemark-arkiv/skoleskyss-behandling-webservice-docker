'use strict'

var config = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'And it grew both day and night, Till it bore an apple bright.',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 27017,
  DB_NAME: process.env.DB_NAME || 'tfk',
  DB_COLLECTION: process.env.DB_COLLECTION || 'applications'
}

module.exports = config

'use strict'

var handlers = require('../handlers')
var Joi = require('joi')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      auth: false,
      handler: handlers.getPublicResponse,
      description: 'Show the frontpage'
    }
  },
  {
    method: 'GET',
    path: '/applications',
    config: {
      auth: false,
      handler: handlers.getApplications,
      description: 'List of applications'
    }
  },
  {
    method: 'POST',
    path: '/applications',
    config: {
      auth: false,
      handler: handlers.addApplications,
      description: 'Add applications',
      validate: {
        payload: {
          data: Joi.array().required()
        }
      }
    }
  }
]

module.exports = routes

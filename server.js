'use strict'

var Hapi = require('hapi')
var server = new Hapi.Server()
var config = require('./config')
var validateAPI = require('./lib/validate-api')
var apiService = require('./index')

server.connection({
  port: config.SERVER_PORT,
  routes: {
    cors: true
  }
})

server.register([require('vision'), require('inert'), { register: require('lout') }], function (err) {
  if (err) {
    console.log(err)
  }
})

server.register(require('hapi-auth-jwt2'), function (err) {
  if (err) {
    console.log(err)
  }

  server.auth.strategy('jwt', 'jwt',
    { key: config.JWT_SECRET,          // Never Share your secret key
      validateFunc: validateAPI,            // validate function defined above
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    })
  server.auth.default('jwt')
})

server.register([
  {
    register: apiService,
    options: {}
  }
], function (err) {
  if (err) {
    console.error('Failed to load a plugin:', err)
  }
})

function startServer () {
  server.start(function () {
    console.log('Server running at:', server.info.uri)
  })
}

function stopServer () {
  server.stop(function () {
    console.log('Server stopped')
  })
}

module.exports.start = startServer

module.exports.stop = stopServer

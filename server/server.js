'use strict'

const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./src/resolvers')
const models = require('./src/models')

// App
const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, './src/schema.graphql'),
  resolvers,
})

models.sequelize.sync().then((_) => {
  server.start()
})

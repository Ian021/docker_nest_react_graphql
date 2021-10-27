const models = require('./models')

module.exports = {
  Query: {
    users: () => models.student.findAll(),
  },
  Mutation: {
    createUser: (_, { nome, cpf, email }) =>
      models.student.create({ nome, cpf, email }),
  },
}

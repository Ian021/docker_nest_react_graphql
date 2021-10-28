const models = require('./models')

module.exports = {
  Query: {
    getUsers: (_, { nome, cpf, email }) => {
      const filters = {}

      if (nome != undefined && nome != '') {
        filters.nome = { [models.Sequelize.Op.substring]: nome }
      }

      if (cpf != undefined && cpf != 0) {
        filters.cpf = { [models.Sequelize.Op.substring]: cpf }
      }

      if (email != undefined && email != '') {
        filters.email = { [models.Sequelize.Op.substring]: email }
      }

      return models.student.findAll({
        where: filters,
      })
    },
  },
  Mutation: {
    createUser: (_, { nome, cpf, email }) =>
      models.student.create({ nome, cpf, email }),
    deleteUser: (_, { id }) =>
      models.student.destroy({
        where: {
          id,
        },
      }),
  },
}

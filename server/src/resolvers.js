const models = require('./models')

module.exports = {
  Query: {
    students: (_, { nome, cpf, email }) => {
      const filters = {}

      const addFilter = (field, fieldName) => {
        if (field !== undefined && field !== '') {
          filters[fieldName] = { [models.Sequelize.Op.substring]: field }
        }
      }

      addFilter(nome, 'nome')
      addFilter(cpf, 'cpf')
      addFilter(email, 'email')

      return models.student.findAll({
        where: filters,
      })
    },
  },

  Mutation: {
    createStudent: (_, { nome, cpf, email }) =>
      models.student.create({ nome, cpf, email }),
    deleteStudent: (_, { id }) =>
      models.student.destroy({
        where: {
          id,
        },
      }),
  },
}

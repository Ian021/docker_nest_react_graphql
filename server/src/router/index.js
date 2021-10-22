const Router = require('express').Router()

// sanity check
Router.get('/', (req, res) => {
  res.send('server is live!')
})

module.exports = Router

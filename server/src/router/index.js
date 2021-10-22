'use strict'

const router = require('express').Router()

// sanity check
router.get('/', (req, res) => {
  res.send('server is live!')
})

module.exports = router

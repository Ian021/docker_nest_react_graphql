'use strict'

const express = require('express')
const router = require('./src/router')

// .ENV
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()
app.use(router)

app.listen(PORT, HOST, () => {
  console.log(`server running at port ${PORT}`)
})

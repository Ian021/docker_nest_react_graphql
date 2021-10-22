'use strict'

const express = require('express')
const Router = require('./src/router')

// .ENV
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()
app.use(Router)

app.listen(PORT, HOST, () => {
  console.log(`server running at port ${PORT}`)
})

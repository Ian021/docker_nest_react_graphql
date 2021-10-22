'use strict'

const Sequelize = require('sequelize')

// const sequelize = new Sequelize('mysql://root:ian123@localhost:3306/wa')
const sequelize = new Sequelize('wa', 'root', 'ian123', {
  host: '172.16.238.10',
  dialect: 'mysql',
  port: '3306',
})

async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

// testConnection()

module.exports = sequelize

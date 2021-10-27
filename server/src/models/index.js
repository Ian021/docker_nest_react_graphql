'use strict'

const Sequelize = require('sequelize')
const sequelize = new Sequelize('wa', 'root', 'ian123', {
  host: '172.16.238.10',
  dialect: 'mysql',
  port: '3306',
})

const Student = require('./student')

const models = {
  Sequelize,
  sequelize,
  student: Student(sequelize, Sequelize.DataTypes),
}

module.exports = models

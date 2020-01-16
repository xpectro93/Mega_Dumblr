const users = require('express').Router();
const {
  getAllUsers
} = require('../db/queries/usersQueries.js')


//Get all users;
users.get('/',getAllUsers);

module.exports = users;
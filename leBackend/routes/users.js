const users = require('express').Router();
const {
  getAllUsers
} = require('../db/queries/usersQueries.js')

const testTokenFunction = async (req, res, next) => {
  const { token } = req.body;
  try {
    let decodedToken = await admin.auth().verifyIdToken(token);
    let uid = decodedToken.uid;
    console.log('This is the uid =>', uid)
  }catch(err){
    res.json(err)
  }

}
//Get all users;
users.get('/',getAllUsers);
users.post('/login', loginIn);

module.exports = users;
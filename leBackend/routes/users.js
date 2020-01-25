const users = require('express').Router();
const admin = require('./firebase.js');
const {
  getAllUsers,
  getUser,
  createUser,
} = require('../db/queries/usersQueries.js')

const testTokenFunction = async (req, res, next) => {
  const { token } = req.body;
  console.log('something up here')
  try {
    let decodedToken = await admin.auth().verifyIdToken(token);
    let uid = decodedToken.uid;
    console.log('This is the uid =>', uid);
    next();
  }catch(err){
    console.log('At least we hea')
    res.json(err)
  }
}
//Get all users;
users.get('/',getAllUsers);
users.post('/', createUser);
users.post('/test', testTokenFunction,(req,res)=> {
  res.json('Something happened here')
})
users.get('/info/:uid',getUser)

module.exports = users;


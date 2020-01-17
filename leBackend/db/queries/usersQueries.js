const db = require('./index.js');

const getAllUsers = async (req, res, next) => {
  try {
    let allUsers = await db.any('SELECT * FROM users');
    res.status(200).json({
      message: "Got all users",
      users:allUsers
    })
  }catch(err){
    res.status(400).json(err)
  }



}
const getUser = async (req, res, next ) => {
  let { uid } = req.params;
  try{
    let user = await db.one("SELECT * FROM users WHERE uid=$1", uid);
    res.status(200).json({
      message: user,
      uid: uid
    })

  }catch(err){
  res.status(400).json("Something bad happened")
}
}

module.exports = {
  getAllUsers,
  getUser
}

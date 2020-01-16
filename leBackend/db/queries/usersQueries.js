const db = require('./index.js');

const getAllUsers = async (req, res, next) => {
  try {
    let response = await db.any('SELECT * FROM users');
    res.status(200).json({
      message: "Got all users",
      users:response
    })
  }catch(err){
    res.status(400).json(err)
  }



}

module.exports = {
  getAllUsers
}

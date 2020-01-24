const { any, one } = require ('./index.js');
// id SERIAL PRIMARY KEY,
//   username VARCHAR NOT NULL UNIQUE,
//   uid VARCHAR NOT NULL UNIQUE,
//   password VARCHAR NOT NULL,
//   email VARCHAR NOT NULL UNIQUE,
//   bio VARCHAR,
//   pic_url VARCHAR

const getAllUsers = async (req, res, next) => {
  try {
    let allUsers = await any ('SELECT id, username, email, bio, pic_url FROM users');
    res.status (200).json ({
      message: 'Got all users',
      users: allUsers,
    });
  } catch (err) {
    res.status (400).json (err);
  }
};
const getUser = async (req, res, next) => {
  let { uid } = req.params;
  try {
    let user = await one ('SELECT * FROM users WHERE uid=$1',uid);
    res.status (200).json ({
      message: user,
      uid: uid,
    });
  } catch (err) {
    res.status (400).json ('Something bad happened');
  }
};

module.exports = {
  getAllUsers,
  getUser,
};

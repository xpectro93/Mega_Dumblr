const admin = require("firebase-admin");

const serviceAccount = require("../secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mega-dumblr.firebaseio.com"
});
module.exports = admin;
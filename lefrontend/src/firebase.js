import firebase from 'firebase/app';
import 'firebase/auth';
const secret = require('./secret.json')

const config = {
  apiKey: secret.apiKey,
  authDomain: "dumb-uploader.firebaseapp.com",
  databaseURL: "https://dumb-uploader.firebaseio.com",
  projectId: "dumb-uploader",
  storageBucket: "dumb-uploader.appspot.com",
  messagingSenderId: "370924651634"
};

firebase.initializeApp(config);

export default firebase;
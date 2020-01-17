import fb from 'firebase/app';
import 'firebase/auth';
const secret = require('./secret.json')

const firebase = fb.initializeApp({
    apiKey: secret.apiKey,
    authDomain: "mega-dumblr.firebaseapp.com",
    databaseURL: "https://mega-dumblr.firebaseio.com",
    projectId: "mega-dumblr",
    storageBucket: "mega-dumblr.appspot.com",
    messagingSenderId: "3436734712",
    appId: "1:3436734712:web:14410c794757610190330d",
    measurementId: "G-Z34RP0N2CP"
 
});



export default firebase;
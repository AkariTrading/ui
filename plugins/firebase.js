var firebase = require('firebase/app').default
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAyz1lsCtXZL5BHKq5AFt5-cWbHsYG4q1w",
    authDomain: "mudding-285403.firebaseapp.com",
    databaseURL: "https://mudding-285403.firebaseio.com",
    projectId: "mudding-285403",
    storageBucket: "mudding-285403.appspot.com",
    messagingSenderId: "456170929526",
    appId: "1:456170929526:web:8bee53711f50a5205b0e57"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


async function login(email, password) {

    let errCode = null
    await firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        errCode = errCode;
    });

    return errCode;
}

async function logout() {
    await firebase.auth().signOut()
}

async function user() {
    return firebase.auth().currentUser;
}

export default (context, inject) => {

    const methods = {
        login: login,
        logout: logout,
        user: user
    }
  
    inject('firebaseauth', () => methods)
}
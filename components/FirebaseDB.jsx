import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  const totalUsers : Object = [];
  const config = {
    apiKey: "AIzaSyB32Vkf6A6HwtvqGPXrVKrinMWdJf2mPnM",
    authDomain: "users-3e294.firebaseapp.com",
    databaseURL: "https://users-3e294.firebaseio.com",
    projectId: "users-3e294",
    storageBucket: "",
    messagingSenderId: "497405704182"
  };
  firebase.initializeApp(config);

const productosDb = firebase.database().ref().child('productos')
const usuariosDb = firebase.database().ref().child('usuarios')

usuariosDb.orderByChild("id").on("child_added", function(snapshot) {
  totalUsers.push(snapshot.key)
});

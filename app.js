//
//  app.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/5/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

// Require express and create an instance of it
var express = require('express');
var app = express();
const config = require('./config.json');

//Firebase
var admin = require('firebase-admin');

//Firebase
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

firebase.initializeApp({
    serviceAccount: "./service-account.json",
    databaseURL: config.databaseURL
});

var ref = firebase.database().ref()

ref.once('value')
    .then(function(snap){
        console.log('Snapvalue : ', snap.val());
    });

ref.child('users/').set({
    username: "user1",
    email: "user1@gmail.com",
    age: "27"
});


// on the request to root (localhost:3000/)
app.get('/v1/travelisto/home', function (req, res) {
    var data = {}
    data["Hello"] = "World"
    res.send(data);
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('TravelistoV2 Server listening on port 3000.');
});

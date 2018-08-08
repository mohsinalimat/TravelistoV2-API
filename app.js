//
//  app.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/5/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

'use strict';

//Local Paths
global.rootRequire = function(path){
    return require(__dirname + '/' + path);
}

//const utils = rootRequire()

// Core components
const express = require('express');
const app = express();
const config = require('./Config/config.json');
var routes = require('./Routes/routes.js');
const morgan = require('morgan');
const pixabayController = require('./Routes/Controllers/pixabayController.js');
const wikiDecrptnCtrl = require('./Routes/Controllers/wikiDescriptionController.js');
const sygicController = require('./Routes/Controllers/sygicController.js');
const travelistoPlaceController = require('./Routes/Controllers/travelistoPlaceController.js');

// Express configuration
const validator = require('express-validator');
app.use(morgan('short'));
// app.use(app.router);
// routes.initialize(app);

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Firebase
var admin = require('firebase-admin');

//Firebase
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

firebase.initializeApp({
    serviceAccount: "./Config/service-account.json",
    databaseURL: config.databaseURL
});


//============= TRAVELISTO PLACE
 var travelistoPlace =  travelistoPlaceController.getTravelistoExplore("France");
 travelistoPlace.then((place) => {
    console.log(place)


 }, (error) => {
    console.log(error)
 })




//============= FIREBASE CALL
// var ref = firebase.database().ref()

// ref.once('value')
//     .then(function(snap){
//         console.log('Snapvalue : ', snap.val());
//     });

//============= PIXABAY CALL
//  var imagePromise =  pixabayController.getImages("Empire State Building", 3);
//  imagePromise.then((images) => {
//     console.log(images)
//  }, (error) => {
//     console.log(error)
//  })

//============= WIKIPEDIA CALL
// var wikiPromise = wikiDecrptnCtrl.getWikiDescription("Rome")
// wikiPromise.then((wiki) => {
//     console.log(wiki)
//  }, (error) => {
//     console.log(error)
//  })

// //============= SYGIC CALL
// var placePromise = sygicController.getPlace('Rome');
// placePromise.then((place) => {
//    // console.log(place)
//     //console.log(place.toJSON())
//     return(place.toJSON());
//  }, (error) => {
//     console.log(error)
//  }).then((place) => {
//     var placeDetailPromise = sygicController.getPlaceDetail(place.id)
//     .then((detail) => {
//        //console.log("============ Place ============")
//        console.log(detail)
//     }, (error) => {
//     console.log(error)
//     });

//     var placeOfInterestPromise = sygicController.getPlaces(place, "poi")
//     .then((places) => {
//        // console.log("============ Places of Interest ============")
//         console.log(places)
//     }, (error) => {
//     console.log(error)
//     });

//     var placeOfInterestPromise = sygicController.getPlaces(place, "eating")
//     .then((places) => {
//         //console.log("============ Restuarants ============")
//         console.log(places)

//         // var imagesPromises = pixabayController.getImages("Empire State Building", 3);

//         // var imagePromise =  pixabayController.getImages("Empire State Building", 3);
//         // imagePromise.then((images) => {
//         //     console.log(images)
//         // }, (error) => {
//         //     console.log(error)
//         // })

//     }, (error) => {
//     console.log(error)
//     });

//  });

//============= FIREBASE ADD CALL
// ref.child('users/').set({
//     username: "user1",
//     email: "user1@gmail.com",
//     age: "27"
// });

//============= LOCAL CALL
// on the request to root (localhost:3000/)
// app.get('/v1/travelisto/home', function (req, res) {
//     var data = {}
//     data["Hello"] = "World"
//     res.send(data);
// });

// app.use('/api', routes);

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('TravelistoV2 Server listening on port 3000.');
});

//
//  app.js
//  TravelistoV2_Server
//
//  Created by Chidi Emeh on 8/5/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

// Require express and create an instance of it
var express = require('express');
var app = express();

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

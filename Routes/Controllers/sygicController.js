//
//  sygicController.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/7/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

const key = require('../../Config/key.json');
const utils = require('../../Utils/utils.js');
const SygicPlace = require('../../DB/Models/sygicPlace.js')
const SygicPlaceDetail = require('../../DB/Models/sygicPlaceDetail.js')
var request = require('request');

//Helper Methods

// Default URL Options
var defaultOptions = (url) => {
    return {
        url: url,
        headers: {
          'User-Agent': 'request',
          'x-api-key': key.sygic
        }
    }
}

//Gets Place
var getPlace = (query) => {
    var URL = `https://api.sygictravelapi.com/1.0/en/places/list?query=${encodeURIComponent(query)}`;
    var options = defaultOptions(URL);

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                var place = result.data.places[0];
                var placeObj = new SygicPlace.SygicPlace(place);
                resolve(placeObj)
            }else{
                reject(error)
            }
        });
    });
};

//Get a place detail
var getPlaceDetail = (query) => {
    var URL = `https://api.sygictravelapi.com/1.0/en/places/${query}`;
    var options = defaultOptions(URL);

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                var placeDetail = result.data.place;
                var placeObj = new SygicPlaceDetail.SygicPlaceDetail(placeDetail);
                resolve(placeObj)
            }else{
                reject(error)
            }
        });
    });
};


//Get places
var getPlaces = (place, type) => {

    var URL = ''

    if (type === "poi"){
        parameter = "levels=poi";
    }else{
        parameter = "category=eating|restuarants";
    }

    if (place.bounding_box !== null) {
        const bounding_box = place.bounding_box
        const south = bounding_box.south
        const west = bounding_box.west
        const north = bounding_box.north
        const east = bounding_box.east
        URL = `https://api.sygictravelapi.com/1.0/en/places/list?bounds=${south},${west},${north},${east}&${parameter}&limit=10`
    } else {
        if (type === "poi"){   
            URL = `https://api.sygictravelapi.com/1.0/en/places/list?${place.id}&${parameter}&limit=10`
        }else{
            URL = `https://api.sygictravelapi.com/1.0/en/places/list?${place.id}&${parameter}&limit=10`
        }
    }

    var options = defaultOptions(URL);

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                var places = result.data.places;
                var placesDetailsPromises = places.map((place) => {
                    return getPlaceDetail(place.id)
                });

                Promise.all(placesDetailsPromises).then((data) => {
                     resolve(data)
                }).catch((error) => {
                    reject(error);
                });
            }else{
                reject(error)
            }
        });
    });
};

module.exports = {
    getPlace,
    getPlaceDetail,
    getPlaces
}

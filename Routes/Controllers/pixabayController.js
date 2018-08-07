//
//  pixabayController.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/6/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

const key = require('../../Config/key.json');
const utils = require('../../Utils/utils.js');
const PixabayImage = require('../../DB/Models/pixabayImage.js')
var request = require('request');

//Gets a single image
var getImages = (query, pageCount) => {

    var URL = `https://pixabay.com/api/?key=${key.pixabay}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${pageCount}`;
    var options = {
      url: URL,
      headers: {
        'User-Agent': 'request'
      }
    };

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                var hits = result.hits;
                var images = hits.map(image => {
                    var imageObj = new PixabayImage.PixabayImage(image);
                    return imageObj.toJSON()
                })
                resolve(images)
            }else{
                reject(error)
            }
        });
    });
};


module.exports = {
    getImages
}



//
//  wikiDescriptionController.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/6/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

const key = require('../../Config/key.json');
const utils = require('../../Utils/utils.js');
const WikiDescription = require('../../DB/Models/wikiDescription.js')
var request = require('request');

//Gets a Wikipedia Description for a query
var getWikiDescription = (query) => {
    var parsedString = query.replace(/[,.:;?]/g,'');
    var URL = `https://en.wikipedia.org/api/rest_v1/page/summary/${+encodeURIComponent(parsedString)}`;
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
                var wiki = new WikiDescription.WikiDescription(result);
                resolve(wiki)
            }else{
                reject(error)
            }
        });
    });
};

module.exports = {
    getWikiDescription
}


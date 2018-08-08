//
//  travelistoPlaceController.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/7/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

const sygicController = require('./sygicController.js');
const pixabayController = require('./pixabayController.js');
const wikiDecrptnCtrl = require('./wikiDescriptionController.js');
var request = require('request');

// For a given place gets 
// The data for a given place for Travelisto explore home screen
// It can also be grouped to form different categories
//
// The Structure of data. For a given place 'Rome'
//
// {  "place" :  TravelistoPlace,
//    "placesOfInterest" : [ TravelistoPlace ]
//    "restuarants" : [ TravelistoPlace ]
// }
// 
//
// NB
// TravelistoPlace ==>  {
//                          "detail" : SygicPlaceDetail,    
//                          "images" : [ PixabayImage ],
//                          "wikipedia" : wikiDescription
//                      }
//

var getTravelistoPlace = (query) => {
    return new Promise((resolve, reject) => {
        var data = {}
        //============= SYGIC CALL
        var placePromise = sygicController.getPlace(query);
        placePromise.then((place) => {
            return(place.toJSON());
        }, (error) => {
 
        }).then((place) => {
            var placeDetailPromise = sygicController.getPlaceDetail(place.id)
            .then((detail) => {
                //Add Place to data array
                data["detail"] = detail
                const numberOfImages = 7
                var imagePromise =  pixabayController.getImages(detail.name, numberOfImages);
                imagePromise.then((images) => {
                    //Add images to data array
                    data["images"] = images
                    return detail
                }, (error) => {
                }).then((place) => {
                       //Add wiki to place to data array
                       data["wikipedia"] = place.description.text
                       resolve(data)
                }).catch(err => {
                    reject(err);
                });
            }, (error) => {
                reject(error)
            }).catch(err => {
                reject(err);
            });
        }).catch(err => {
            reject(err);
        });
    });
};


var getTravelistoExplore = (query) => {

    return new Promise((resolve, reject) => {
        var data = {}
        var travelistoPlace = getTravelistoPlace(query)
        travelistoPlace.then((travelistoPlace) => {
            var place = travelistoPlace.detail
            //Add Place to data array
            data["place"] = travelistoPlace
            // var placeOfInterestPromise = sygicController.getPlaces(place, "eating")
            // .then((result) => {
            //     var placesOfInterestArray = []
            //     var trackerCount = 0
            //     var poiPromises = result.map((placeOfinterest) => {
            //         return new Promise((resolve, reject) => {
            //             var innerdata = {}
            //             innerdata["detail"] = placeOfinterest
            //             const numberOfImages = 7
            //             var imagePromise =  pixabayController.getImages(`${placeOfinterest.name} ${placeOfinterest.name_suffix}`, numberOfImages);
            //             imagePromise.then((images) => {
            //                 //Add images to data array
            //                 innerdata["images"] = images
            //                 //Add wiki from place object
            //                 innerdata["wikipedia"] = placeOfinterest.description.text
            //                 return innerdata
            //             }, (error) => {
            //                 reject(error)
            //             }).then((data) => {
            //                 resolve(data)
            //             })
            //         })
            //     })

            //     Promise.all(poiPromises).then((result) => {
            //         data["placesOfInterest"] = result
            //         console.log(data)
            //     })


            // }, (error) => {
            // console.log(error)
            // }).catch(err => {
            //     reject(err);
            // });


            var restuarantsPromise = sygicController.getRestuarants(place)
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            }).catch((err => {
                reject(err);
            }))

        }, (error) => {

        }).catch(err => {
            reject(err);
        });

    });
};

module.exports = {
    getTravelistoPlace,
    getTravelistoExplore
}

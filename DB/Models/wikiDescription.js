//
//  wikiDescription.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/6/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

class WikiDescription {

    constructor(json){
        this.title = json.title
        this.originalimage = json.originalimage.source
        this.description = json.description
        this.lat = json.coordinates.lat
        this.lon = json.coordinates.lon
        this.extract = json.extract
    }

    toJSON(){
        return {
            "title" : this.title,
            "originalimage" : this.originalimage,
            "description" : this.description,
            "lat" : this.lat,
            "lon" : this.lon,
            "extract" : this.extract
        }
    }
}

module.exports = {
    WikiDescription
  }
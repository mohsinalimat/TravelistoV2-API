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
        this.description = json.description
        this.extract = json.extract
    }

    toJSON(){
        return {
            "title" : this.title,
            "description" : this.description,
            "extract" : this.extract
        }
    }
}

module.exports = {
    WikiDescription
  }
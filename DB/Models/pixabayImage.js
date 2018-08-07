//
//  pixabayImage.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/6/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

class PixabayImage {

    constructor(json){
        this.largeImageURL = json.largeImageURL
        this.webformatHeight = json.webformatHeight
        this.webformatWidth = json.webformatWidth
        this.likes = json.likes
        this.imageWidth = json.imageWidth
        this.id = json.id
        this.user_id = json.user_id
        this.views = json.views
        this.comments = json.comments
        this.pageURL = json.pageURL
        this.imageHeight = json.imageHeight
        this.webformatURL = json.webformatURL
        this.type = json.type
        this.previewHeight = json.previewHeight
        this.tags = json.tags
        this.downloads = json.downloads
        this.user = json.user
        this.favorites = json.favorites
        this.imageSize = json.imageSize
        this.previewWidth = json.previewWidth
        this.userImageURL = json.userImageURL
        this.previewURL = json.previewURL
    }

    toJSON(){
        return {
            "largeImageURL" : this.largeImageURL,
            "webformatHeight" : this.webformatHeight,
            "webformatWidth" : this.webformatWidth,
            "likes" : this.likes,
            "imageWidth" : this.imageWidth,
            "id" : this.id,
            "user_id" : this.user_id,
            "views" : this.views,
            "comments" : this.comments,
            "pageURL" : this.pageURL,
            "imageHeight" : this.imageHeight,
            "webformatURL" : this.webformatURL,
            "type" : this.type,
            "previewHeight" : this.previewHeight,
            "downloads" : this.downloads,
            "user" : this.user,
            "favorites" : this.favorites,
            "imageSize" : this.imageSize,
            "previewWidth" : this.previewWidth,
            "previewURL" : this.previewURL,
        }
    }
}

module.exports = {
    PixabayImage
  }
//
//  sygicPlaceDetail.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/7/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

class SygicPlaceDetail {

    constructor(json){
        this.id = json.id
        this.level = json.level
        this.rating = json.rating
        this.rating_local = json.rating_local
        this.location = json.location
        this.bounding_box = json.bounding_box
        this.name = json.name
        this.name_suffix = json.name_suffix
        this.url = json.url
        this.duration = json.duration
        this.marker = json.marker
        this.categories = json.categories
        this.parent_ids = json.parent_ids
        this.perex = json.perex
        this.customer_rating = json.customer_rating
        this.star_rating = json.star_rating
        this.star_rating_unofficial = json.star_rating_unofficial
        this.thumbnail_url = json.thumbnail_url
        this.area = json.area
        this.address = json.address
        this.admission = json.admission
        this.email = json.email
        this.opening_hours = json.opening_hours
        this.is_deleted = json.is_deleted
        this.description = json.description
        this.media_count = json.media_count
        this.main_media = json.main_media
        this.references = json.references
        this.external_ids = json.external_ids
        this.collection_count = json.collection_count
    }

    toJSON(){
        return {
            "id" : this.id,
            "level" : this.level,
            "rating" : this.rating,
            "rating_local" : this.rating_local,
            "location" : this.location,
            "bounding_box" : this.bounding_box,
            "name" : this.name,
            "name_suffix" : this.name_suffix,
            "url" : this.url,
            "duration" : this.duration,
            "marker" : this.marker,
            "categories" : this.categories,
            "parent_ids" : this.parent_ids,
            "perex" : this.perex,
            "customer_rating" : this.customer_rating,
            "star_rating" : this.star_rating,
            "star_rating_unofficial" : this.star_rating_unofficial,
            "thumbnail_url" : this.thumbnail_url,
            "area" : this.area,
            "address" : this.address,
            "admission" : this.admission,
            "email" : this.email,
            "opening_hours" : this.opening_hours,
            "is_deleted" : this.is_deleted,
            "description" : this.description,
            "media_count" : this.media_count,
            "main_media" : this.main_media,
            "references" : this.references,
            "external_ids" : this.external_ids,
            "collection_count" : this.collection_count
        }
    }
}

module.exports = {
     SygicPlaceDetail
}

 
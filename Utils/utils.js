//
//  utils.js
//  TravelistoV2-API
//
//  Created by Chidi Emeh on 8/6/18.
//  Copyright © 2018 Chidi Emeh. All rights reserved.
//

'use strict';

module.exports = {

    // Default body for error responses.
    errorResponse: (reason) => {
        return {
            localizedMessage: reason
        }
    }


}
'use strict';

/**
 *  event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

/**
 *  product controller
 */
module.exports = createCoreController('api::event.event', {
    count(ctx) {
        var { query } = ctx.request
        return strapi.entityService.count('api::event.event', query);
    }
});
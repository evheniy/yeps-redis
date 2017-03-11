const debug = require('debug')('yeps:redis');
const redis = require('./redis');

module.exports = () => async context => {
    debug('Redis created');

    context.redis = redis;
};

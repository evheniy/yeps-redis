const debug = require('debug')('yeps:redis');
const Redis = require('ioredis');
const config = require('config');
const redis = new Redis(config.redis);

module.exports = () => async context => {
    debug(config.redis);
    context.redis = redis;
};

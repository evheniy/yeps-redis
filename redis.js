const debug = require('debug')('yeps:redis');
const Redis = require('ioredis');
const config = require('config');

debug(config.redis);

module.exports = new Redis(config.redis);

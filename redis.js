const debug = require('debug')('yeps:redis');
const Redis = require('ioredis');
const config = require('config');
const redis = new Redis(config.redis);

debug(config.redis);

module.exports  = redis;

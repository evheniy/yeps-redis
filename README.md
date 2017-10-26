# YEPS ioredis


YEPS Promise based redis client

[![NPM](https://nodei.co/npm/yeps-redis.png)](https://npmjs.org/package/yeps-redis)

[![npm version](https://badge.fury.io/js/yeps-redis.svg)](https://badge.fury.io/js/yeps-redis)
[![Build Status](https://travis-ci.org/evheniy/yeps-redis.svg?branch=master)](https://travis-ci.org/evheniy/yeps-redis)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-redis/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-redis?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-redis/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-redis/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-redis)

[![Dependency Status](https://david-dm.org/evheniy/yeps-redis.svg)](https://david-dm.org/evheniy/yeps-redis)
[![devDependency Status](https://david-dm.org/evheniy/yeps-redis/dev-status.svg)](https://david-dm.org/evheniy/yeps-redis#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-redis)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-redis/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-redis.svg)](https://github.com/evheniy/yeps-redis/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-redis.svg)](https://github.com/evheniy/yeps-redis/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-redis.svg)](https://github.com/evheniy/yeps-redis/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-redis.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S yeps-redis
  
## How to use

### Config

config/default.json

    {
      "redis": {
        "host": "127.0.0.1",
        "port": 6379
      }
    }
    
### Middleware

    const App = require('yeps');
    const Router = require('yeps-router');
    
    const redis = require('yeps-redis');
    
    const error = require('yeps-error');
    const logger = require('yeps-logger');
    
    const server = require('yeps-server');
    
    const app = new App();
    const router = new Router();
    
    app.all([
        error(),
        logger(),
        redis(),
    ]);
    
    app.then(async ctx => {
        await ctx.redis.set('data', 'test');
        const data = await ctx.redis.get('data');
    });
    
    router.get('/url').then(async ctx => {
        await ctx.redis.set('data', 'test');
        const data = await ctx.redis.get('data');
        
        ctx.res.statusCode = 200;
        ctx.res.end(data); 
    });
    
    app.then(router.resolve());
    
    server.createHttpServer(app);
    

### Module

    const redis = require('yeps-redis/redis');
    
    async () => {
        await redis.set('test', 'test');
        const data = await redis.get('test');
    }


#### [YEPS documentation](http://yeps.info/)


#### Dependencies:

* [ioredis](https://github.com/luin/ioredis) - promise based redis client
* [config](https://github.com/lorenwest/node-config) - node.js config

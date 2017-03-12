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

app.js

    const http = require('http');
    const App = require('yeps');
    const Router = require('yeps-router');
    const redis = require('yeps-redis');
    const error = require('yeps-error');
    
    const app = new App();
    const router = new Router();
    
    app.all([
        redis(),
        error(),
    ]);
    
    app.then(async ctx => {
        const data = await ctx.redis.get('data');
    });
    
    router.get('/url').then(async ctx => {
        const data = await ctx.redis.get('data');
        ctx.res.writeHead(200);
        ctx.res.end(data); 
    });
    
    app.then(router.resolve());
    
    http
        .createServer(app.resolve())
        .listen(parseInt(process.env.PORT || '3000', 10));
        

Run app (node.js > 7.6.0):

    node app.js
    
### In module

    const redis = require('yeps-redis/redis');
    
    redis.set('test', 'test');


## Links

* [yeps](https://github.com/evheniy/yeps) - YEPS
* [yeps-benchmark](https://github.com/evheniy/yeps-benchmark) - performance comparison koa2, express and node http
* [yeps-router](https://github.com/evheniy/yeps-router) - YEPS promise based router
* [yeps-error](https://github.com/evheniy/yeps-error) - YEPS 404/500 error handler
* [yeps-logger](https://github.com/evheniy/yeps-logger) - YEPS Async logger - winston
* [yeps-mysql](https://github.com/evheniy/yeps-mysql) - YEPS promise based mysql client
* [yeps-boilerplate](https://github.com/evheniy/yeps-boilerplate) - YEPS app boilerplate
* [yeps-express-wrapper](https://github.com/evheniy/yeps-express-wrapper) - YEPS express wrapper
* [ioredis](https://github.com/luin/ioredis) - promise based redis client
* [config](https://github.com/lorenwest/node-config) - node.js config

const App = require('yeps');
const error = require('yeps-error');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const Router = require('yeps-router');
const redis = require('..');
const expect = chai.expect;

chai.use(chaiHttp);
let app, router;

describe('YEPS redis test', () => {

    beforeEach(() => {
        app = new App();
        app.all([
            error(),
            redis(),
        ]);
        router = new Router();
    });

    it('should test middleware', async() => {

        let isTestFinished1 = false;
        let isTestFinished2 = false;

        app.then(async ctx => {
            await ctx.redis.set('test', 'test');
            const data = await ctx.redis.get('test');

            expect(data).to.be.equal('test');
            isTestFinished1 = true;

            ctx.res.writeHead(200);
            ctx.res.end(data);
        });

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .send()
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.text).to.be.equal('test');
                isTestFinished2 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
    });

    it('should test router', async() => {

        let isTestFinished1 = false;
        let isTestFinished2 = false;

        router.catch().then(async ctx => {
            await ctx.redis.set('test', 'test');
            const data = await ctx.redis.get('test');

            expect(data).to.be.equal('test');
            isTestFinished1 = true;

            ctx.res.writeHead(200);
            ctx.res.end(data);
        });

        app.then(router.resolve());

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .send()
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.text).to.be.equal('test');
                isTestFinished2 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
    });

});

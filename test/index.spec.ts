import TravisCI from '../src';
import {expect} from 'chai';
import * as nock from 'nock';
import * as fs from 'fs';
import 'mocha';

describe('TravisCI', () => {

    before(() => {
        // @ts-ignore
        nock('https://api.travis-ci.org', {
            reqheaders: {
                'Authorization': 'token token',
                'Travis-API-Version': 3,
                'User-Agent': 'Travis CI Wrapper',
                'accept-encoding': 'gzip, deflate'
            }
        }).get('/user').reply(200, JSON.parse(fs.readFileSync('test/user.json').toString()));

        // @ts-ignore
        nock('https://api.travis-ci.org', {
            reqheaders: {
                'Authorization': 'token token',
                'Travis-API-Version': 3,
                'User-Agent': 'Travis CI Wrapper',
                'accept-encoding': 'gzip, deflate'
            }
        }).get('/user/1').reply(200, JSON.parse(fs.readFileSync('test/user.json').toString()));
    });

    it('GET /user.json/:id', (done) => {
        const travisCI = new TravisCI();
        travisCI.authenticate("token");
        travisCI.user().then(user => {
            expect(user.id).to.equal(1);
            expect(user.name).to.equal('Test Login');
            done();
        });
    });

    it('GET /user.json', (done) => {
        const travisCI = new TravisCI();
        travisCI.authenticate("token");
        travisCI.user(1).then(user => {
            expect(user.id).to.equal(1);
            expect(user.name).to.equal('Test Login');
            done();
        });
    })
});

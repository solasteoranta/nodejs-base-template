var assert = require('assert');
var request = require('supertest');
var app = require('./../app');
describe('GET /', function(){
    it('200 response', function(done){
        request(app)
            .get('/')
            .expect(200, done);
    })
});
describe('GET /users', function(){
    it('200 response', function(done){
        request(app)
            .get('/users')
            .expect(200, done);
    })
});
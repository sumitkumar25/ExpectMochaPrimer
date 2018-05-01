const expect = require('expect');
const supertest = require('supertest');
var app = require('./server').app;
it('should return hello world reponse', (done) => {
    supertest(app)
        .get('/')
        .expect(200)
        .expect('hello World')
        .end(done);
});
it('should return users reponse', (done) => {
    supertest(app)
        .get('/users')
        .expect(200)
        .expect(res => {
            expect(res.body).toInclude({
                name: 'user a',
                age: 10
            })
        })
        .end(done);
});
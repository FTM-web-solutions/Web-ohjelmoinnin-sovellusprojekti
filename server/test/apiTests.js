import chai from 'chai';
const expect = chai.expect;
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import server from '../server.js';
import chaiJsonSchema from 'chai-json-schema-ajv'
import chaiJsonSchemaAjv from 'chai-json-schema-ajv';
chai.use(chaiJsonSchemaAjv);



describe('Login API Tests', function () {

    before(function () {
        // start test server
        server.start();
    });

    after(function () {
        // close test server
        server.close();
    });

    describe('POST /register', function () {

        it('should accept register for new user account when the information demanded is valid', function (done) {
            // send http request
            chai.request('http://localhost:3001')
                .post('/users')
                .send({
                    name: "testini",
                    email: "testini@gmail.com",
                    password: "123456",
                    confPassword: "123456"
                })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response status
                    expect(res).to.have.status(200);
                    done();
                })
        })

        it('should not accept register for new user account because username is missing', function (done) {
            // send http request
            chai.request('http://localhost:3001')
                .post('/users')
                .send({
                    name: "",
                    email: "testi@gmail.com",
                    password: "123456",
                    confPassword: "123456"
                })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response status
                    expect(res).to.have.status(400);
                    done();
                })
        })

        it('should not accept register for new user account because password is missing', function (done) {
            // send http request
            chai.request('http://localhost:3001')
                .post('/users')
                .send({
                    name: "testaaja",
                    email: "testi@gmail.com",
                    password: "",
                    confPassword: ""
                })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response status
                    expect(res).to.have.status(400);
                    done();
                })
        })
    })

    describe('POST /login', function () {
        // jg
        it('should accept the login when the user exists', function (done) {
            // send http request
            chai.request('http://localhost:3001')
                .post('/login')
                .send({
                    email: "test1@gmail.com",
                    password: "123456"
                })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response status
                    expect(res).to.have.status(200);
                    done();
                })
        })

        it('should not accept the login when the user does not exist', function (done) {
            // send http request
            chai.request('http://localhost:3001')
                .post('/login')
                .send({
                    email: "timo@testi.com",
                    password: "123456"
                })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response status
                    expect(res).to.have.status(404);
                    done();
                })
        })
    })
})


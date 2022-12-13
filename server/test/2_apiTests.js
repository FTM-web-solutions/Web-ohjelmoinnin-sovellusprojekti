// const chai = require('chai');
import chai from 'chai';
const expect = chai.expect;
// const chaiHttp = require('chai-http');
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
// const server = require('../server'); 
import server from '../server.js';
import chaiJsonSchema from 'chai-json-schema-ajv'
import chaiJsonSchemaAjv from 'chai-json-schema-ajv';
import Users from '../models/UserModel.js';
chai.use(chaiJsonSchemaAjv);

describe('Login API Tests', function() {

    before(function() {
        server.start();
    });

    after(function() {
        server.close();
    });
    
    describe('POST /login', function() {
        it('should accept the login when the user exists', function(done) {
            // send http request
            chai.request('http://localhost:3001')
            .post('/login')
            .send({
                email: "otsa@gmail.com",
                password: "123456"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                // check response status
                expect(res).to.have.status(200);
                done();

                // check response data structure

            })
            
            
            

            
        })    
    })
})

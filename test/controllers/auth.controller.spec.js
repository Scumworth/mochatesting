const { AuthController } = require('../../controllers/auth.controller');

//note should is a function here
const expect = require('chai').expect;
const should = require('chai').should();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
///middleware syntax below
chai.use(chaiAsPromised);

let authController;

beforeEach(() => {
    authController = new AuthController();
});
describe('AuthController', function(){
    describe('isAuthorized', function(){
        it('Should return false if not authorized', function(){
            const isAuth =  authController.isAuthorized(['user'], 'admin');
            expect(isAuth).to.be.false;
        })
        it('Should return true if authorized', function(){
            const isAuth = authController.isAuthorized(['user', 'admin'], 'admin');
            isAuth.should.be.true;
        })
    })
    describe('isAuthorizedPromise', function(){
        it('Should return false if not authorized', function(){
            // returned promise below allowed by chai-as-promised
            return authController.isAuthorizedPromise('fella').should.eventually.be.false;
        })
    })
    describe('getIndex', function(){
        it('should render index', function(){
            const req = {};
            const res = {
                render: sinon.spy()
            };
            authController.getIndex(req, res);
            res.render.firstCall.args[0].should.equal('index');
        })
    })
});

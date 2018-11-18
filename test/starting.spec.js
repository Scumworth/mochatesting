const assert = require('assert');
//should is appended to Object.prototype and is now available everywhere

describe('Basic Mocha Test', function() {
    it('should check 2 equal nums', function() {
        assert.equal(2,2);
    })

    it('should deal with objects', function() {
        const obj = {name: 'Dan', gender: 'male'};
        obj.should.have.property('name').equal('Dan');
    })
    it('should check for inequality without deep', function() {
        const objA = {name: 'Rex', animal: 'Dog'};
        const objB = {name: 'Rex', animal: 'Dog'};
        objA.should.not.equal(objB);
    })
    it('should check for equality of objects with deep', function() {
        const objA = {name: 'Rex', animal: 'Dog'};
        const objB = {name: 'Rex', animal: 'Dog'};
        objA.should.deep.equal(objB);
        
    })
});

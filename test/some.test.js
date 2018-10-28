'use strict';

const { assert, refute } = require("referee");

describe("some", function() {
    it("should have isPrime installed", function() {
        assert.isPrime(5);
        refute.isPrime(6);
    });
});

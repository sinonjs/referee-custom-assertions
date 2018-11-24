'use strict';

const { assert, refute } = require("@sinonjs/referee");

describe("isPrime", function() {
    it("should have isPrime installed", function() {
        assert.isPrime(5);
        refute.isPrime(6);
    });
});

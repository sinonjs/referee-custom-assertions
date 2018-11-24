'use strict';

const { assert, refute } = require("@sinonjs/referee");

describe("toString", function() {
    it("should have toString installed", function() {
        assert.toString([1, 2, 3], '1,2,3');
        refute.toString([1, 2, 3], '3,2,1');
    });
});

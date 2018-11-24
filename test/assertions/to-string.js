"use strict";

const referee = require("@sinonjs/referee");

referee.add("toString", {
  assert: function (actual, expected) {
        if (typeof expected !== "string") {
            throw new TypeError("'expected' argument should be a string");
        }
        return String(actual) === expected;
    },
    assertMessage: "${customMessage}Expected ${actual} to equal ${expected}",
    refuteMessage: "${customMessage}Expected ${actual} not to equal ${expected}",
    expectation: "toString",
    values: function (actual, expected, message) {
        return {
            actual: String(actual),
            expected: expected,
            customMessage: message
        };
    }

});

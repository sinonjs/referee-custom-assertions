"use strict";

const referee = require("@sinonjs/referee");

// adapted from https://stackoverflow.com/a/40200710
function isPrime(number){
    for (var i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return number !== 1 && number !== 0;
}

referee.add("isPrime", {
    assert: function assert(actual) {
        if (typeof actual !== "number" || actual < 0) {
            throw new TypeError("'actual' argument should be a non-negative Number");
        }
        return isPrime(actual);
    },
    assertMessage: "Expected ${actual} to be a prime number",
    refuteMessage: "Expected ${actual} to not be a prime number",
    expectation: "toBePrime"
});

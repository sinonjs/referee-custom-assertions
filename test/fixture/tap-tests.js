'use strict';

const fs = require('fs');
const tap = require('tap');

// Install mocha style globals:
tap.mochaGlobals();

// Load assertions:
fs.readdirSync('test/assertions')
  .filter(name => name.endsWith('.js'))
  .forEach(name => require(`../assertions/${name}`));

// Load tests
fs.readdirSync('test')
  .filter(name => name.endsWith('.test.js'))
  .forEach(name => require(`../${name}`));

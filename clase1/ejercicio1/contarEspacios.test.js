'use strict';

var contarEspacios = require('./contarEspacios.js');
var assert = require('assert');

describe('Contar espacios', function () {
  it('Deberia devolver numero de espacios', function () {
    assert.equal(contarEspacios('uno dos'), 1);
    assert.equal(contarEspacios('uno dos tres'), 2);
  });
});

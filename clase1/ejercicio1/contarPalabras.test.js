/*
 *  Buena practica: Testear casos extremo ademas de casos comunes
 *    http://en.wikipedia.org/wiki/Edge_case
 */

'use strict';

var contarPalabras = require('./contarPalabras.js');
var assert = require('assert');

describe('Contar palabras', function () {
  // Caso comun
  it('Deberia devolver numero de letras', function () {
    assert.equal(contarPalabras('uno dos     '), 2);
    assert.equal(contarPalabras('uno dos tres cuatro'), 4);
  });

  // Caso extremo
  it('Deberia devolver numero de letras a pesar de tener muchos espacios entre medio', function () {
    assert.equal(contarPalabras('uno     dos'), 2);
    assert.equal(contarPalabras('uno dos   tres            cuatro'), 4);
  });
});

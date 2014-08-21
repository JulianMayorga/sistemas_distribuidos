'use strict';

var contarPalabras = require('./contarPalabras.js');
var assert = require('assert');

describe('Contar palabras', function () {
	it('Deberia devolver numero de letras', function () {
		assert.equal(contarPalabras('uno dos     '), 2);
		assert.equal(contarPalabras('uno dos tres cuatro'), 4);
	});

	it('Deberia devolver numero de letras a pesar de tener muchos espacios entre medio', function () {
		assert.equal(contarPalabras('uno     dos'), 2);
		assert.equal(contarPalabras('uno dos   tres            cuatro'), 4);
	});
});

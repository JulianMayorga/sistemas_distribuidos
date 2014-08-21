'use strict';

var Empleado = require('./empleado.js');
var Persona = require('./persona.js');
var assert = require('assert');

describe('Clase Empleado', function () {
  var empleado;

  beforeEach(function (done) {
    empleado = new Empleado('juan', 'perez', 1, 23);
    done();
  });

  it('Deberia heredar de Persona', function () {
    assert.equal(empleado instanceof Persona, true);
    assert.equal(empleado instanceof Empleado, true);
  });

  describe('obtener nombre', function () {
    it('Deberia devolver nombre + apellido', function () {
      assert.equal(empleado.getnombre(), 'juan perez');
    });
  });
});

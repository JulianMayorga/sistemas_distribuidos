/*
 *  Buena practica: Mejorar chequeo de errores con 'use strict';
 *    http://msdn.microsoft.com/en-us/library/ie/br230269(v=vs.94).aspx
 */

'use strict';

function Persona(nombre, apellido, id) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.id = id;
}

Persona.prototype.getnombre = function () {
  return this.nombre + ' ' + this.apellido;
};

module.exports = Persona;

/* 
 * Hay 4 pasos para implementar herencia en javascript
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
 */

'use strict';

var Persona = require('./persona.js')

// 1. Definir constructor
function Empleado (nombre, apellido, id, id_empleado) {
  // 2. Llamar al constructor de Persona
  Persona.call(this, nombre, apellido, id);
  this.id_empleado = id_empleado;
}

// 3. Crear prototipo de Empleado que herede de prototipo de Persona
Empleado.prototype = Object.create(Persona.prototype);

// 4. Hacer que el constructor de Empleado sea el que definimos antes
Empleado.prototype.constructor = Empleado;

module.exports = Empleado;

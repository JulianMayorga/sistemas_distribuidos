'use strict';

// Hay 4 pasos para implementar herencia en javascript
// Fuente: MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

// Importo objeto Persona
var Persona = require('./persona.js')

// 1. Defino constructor
function Empleado (nombre, apellido, id, id_empleado) {
  // 2. Llamo al constructor de Persona
	Persona.call(this, nombre, apellido, id);
	this.id_empleado = id_empleado;
}

// 3. Crear prototipo de Empleado que herede de prototipo de Persona
Empleado.prototype = Object.create(Persona.prototype);

// 4. Hacer que el constructor de Empleado sea el que definimos antes
Empleado.prototype.constructor = Empleado;

// Exportar Empleado
module.exports = Empleado;

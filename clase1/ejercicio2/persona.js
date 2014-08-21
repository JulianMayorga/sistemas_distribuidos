// use strict te da mucho mejor chequeo de errores
// Fuente: http://msdn.microsoft.com/en-us/library/ie/br230269(v=vs.94).aspx
'use strict';

// Fuente: MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

// Defino constructor
function Persona(nombre, apellido, id) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.id = id;
}

// Defino metodo de Persona
Persona.prototype.getnombre = function () {
	return this.nombre + ' ' + this.apellido;
};

// Exporto el objeto Persona
module.exports = Persona;

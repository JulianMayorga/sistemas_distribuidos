'use strict';

function contarEspacios(texto) {
  var expresionRegularEspacio = /\s/g;

  var espacios = texto.match(expresionRegularEspacio);

  return espacios.length;
}

module.exports = contarEspacios;

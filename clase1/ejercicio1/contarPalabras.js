'use strict';

function contarPalabras(texto) {
	var textoConEspaciosSimples = reducirEspaciosMultiples(texto);
	var palabras = separarPalabras(textoConEspaciosSimples);
  var palabrasSinEspacios = limpiarEspacios(palabras);

	return palabrasSinEspacios.length;
}

function reducirEspaciosMultiples (texto) {
	var todosLosEspacios = /\s+/g;
	var espacioSimple = ' ';
	
	return texto.replace(todosLosEspacios, espacioSimple);
}

function separarPalabras (texto) {
	return texto.split(' ');
}

function limpiarEspacios (arreglo) {
  return arreglo.filter(noEsEspacio);
}

function noEsEspacio (elemento) {
  if (elemento !== '') {
    return true;
  } else {
    return false;
  }
}

module.exports = contarPalabras;

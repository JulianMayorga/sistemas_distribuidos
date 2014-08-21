/*
 *  Buena practica: Utilizar funciones con nombre para evitar el infierno de callbacks
 *    http://callbackhell.com/
 */

'use strict';

function contarPalabras(texto) {
  var textoConEspaciosSimples = reducirEspaciosMultiples(texto);
  var palabras = separarPalabras(textoConEspaciosSimples);
  var palabrasSinEspacios = limpiarEspacios(palabras);

  return palabrasSinEspacios.length;
}

/*
 * Buena practica: Mantener consistencia al declarar cadenas. Utilizar siempre '' o "", nunca mezclarlas.
 *  http://jslinterrors.com/mixed-double-and-single-quotes
 */

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

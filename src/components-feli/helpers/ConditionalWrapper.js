import React from "react";

/* Posible refactor utilizando JSONs o arrays (sería más lógico un array,
 * ya que cumple con el concepto de ordenado), mapeando sobre uno
 * y utilizando la key para acceder a los objetos del otro.
 * sería más genérico y podríamos pasarles múltiple condiciones,
 * aunque tal vez sería muy verboso tantos wrappers.
 */
const ConditionalWrapper = ({ condition, wrapper, defaultWrapper, children }) =>
  condition ? wrapper(children) : defaultWrapper(children);

export default ConditionalWrapper;

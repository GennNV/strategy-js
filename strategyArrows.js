// Estrategias como funciones
const estrategias = {
  asc: (datos) => [...datos].sort((a, b) => a - b),
  desc: (datos) => [...datos].sort((a, b) => b - a),
  none: (datos) => datos,
};

// Contexto
function sortContext(estrategia, datos) {
  return estrategias[estrategia]
    ? estrategias[estrategia](datos)
    : (() => {
        throw new Error("Tipo de orden inválido");
      })();
}

// Uso
const datos = [5, 3, 8, 1];

console.log("Ascendente:", sortContext("asc", datos));
console.log("Descendente:", sortContext("desc", datos));
console.log("Sin ordenar:", sortContext("none", datos));

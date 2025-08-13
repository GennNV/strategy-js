function sortArray(data, type) {
  if (type === "asc") {
    return data.sort((a, b) => a - b);
  } else if (type === "desc") {
    return data.sort((a, b) => b - a);
  } else if (type === "none") {
    return data;
  } else {
    throw new Error("Tipo de orden no válido");
  }
}

// Uso
const data = [5, 3, 8, 1];

console.log("Ascendente:", sortArray([...data], "asc"));
console.log("Descendente:", sortArray([...data], "desc"));
console.log("Sin ordenar:", sortArray([...data], "none"));

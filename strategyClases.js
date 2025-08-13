// Estrategia base
class SortStrategy {
  sort(data) {
    throw new Error("Método sort() debe ser implementado");
  }
}

// Estrategias concretas
class AscSort extends SortStrategy {
  sort(data) {
    return data.sort((a, b) => a - b);
  }
}

class DescSort extends SortStrategy {
  sort(data) {
    return data.sort((a, b) => b - a);
  }
}

class NoSort extends SortStrategy {
  sort(data) {
    return data;
  }
}

// Contexto que usa una estrategia
class SortContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

// Uso
const data = [5, 3, 8, 1];

const context = new SortContext(new AscSort());
console.log("Ascendente:", context.sort([...data]));

context.setStrategy(new DescSort());
console.log("Descendente:", context.sort([...data]));

context.setStrategy(new NoSort());
console.log("Sin ordenar:", context.sort([...data]));
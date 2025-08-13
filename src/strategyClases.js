// strategyClases.js
// Implementación del Patrón Strategy para ordenar arrays

// --- Strategy ---
class SortStrategy {
  sort(data) {
    throw new Error("Método sort() debe ser implementado");
  }
}

// --- Estrategias concretas ---
class AscSortStrategy extends SortStrategy {
  sort(data) {
    return [...data].sort((a, b) => a - b); // copia para no mutar original
  }
}

class DescSortStrategy extends SortStrategy {
  sort(data) {
    return [...data].sort((a, b) => b - a); // copia para no mutar original
  }
}

class NoSortStrategy extends SortStrategy {
  sort(data) {
    return [...data]; // copia para no mutar original
  }
}

// --- Contexto ---
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

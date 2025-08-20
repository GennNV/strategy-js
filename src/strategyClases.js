// Implementación del Patrón Strategy para ordenar arrays

// --- Strategy ---
class SortStrategy {
  sort(data) {
    throw new Error("Método sort() debe ser implementado"); // si no se implementa, se lanza un error
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

/* El ejemplo de uso se comenta ya que lo estamos usando en el index.html
Uso

const data = [5, 3, 8, 1];

const context = new SortContext(new AscSortStrategy());
console.log('Ascendente:', context.executeSort(data));

context.setStrategy(new DescSortStrategy());
console.log('Descendente:', context.executeSort(data));

context.setStrategy(new NoSortStrategy());
console.log('Sin ordenar:', context.executeSort(data));
*/

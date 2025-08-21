// ========================================
// PATRÓN STRATEGY - IMPLEMENTACIÓN CON CLASES EN JAVASCRIPT
// ========================================
// Este código muestra la implementación del patrón Strategy en JavaScript:
// - Cada estrategia de ordenamiento está encapsulada en su propia clase
// - El contexto puede cambiar dinámicamente entre estrategias
// - Cumple con el principio Open/Closed (abierto para extensión, cerrado para modificación)
// - Usa herencia de clases ES6 para implementar el patrón
// ========================================

// ========================================
// CLASE BASE DE ESTRATEGIA (STRATEGY BASE CLASS)
// ========================================
// Clase abstracta que define la interfaz común para todas las estrategias.
// En JavaScript no tenemos interfaces nativas, pero podemos simular
// el comportamiento con una clase base que lanza error si no se implementa.
// ========================================
class SortStrategy {
  // Método que debe ser implementado por las clases hijas
  sort(data) {
    throw new Error("Método sort() debe ser implementado"); // Si no se implementa, se lanza un error
  }
}

// ========================================
// ESTRATEGIAS CONCRETAS (CONCRETE STRATEGIES)
// ========================================
// Cada clase extiende SortStrategy e implementa su propia lógica
// de ordenamiento. Todas son intercambiables en tiempo de ejecución.
// ========================================

// Estrategia: Ordenamiento ascendente (menor a mayor)
class AscSortStrategy extends SortStrategy {
  sort(data) {
    // Usar spread operator para crear una copia del array original
    // y no mutar los datos originales (inmutabilidad)
    return [...data].sort((a, b) => a - b);
  }
}

// Estrategia: Ordenamiento descendente (mayor a menor)
class DescSortStrategy extends SortStrategy {
  sort(data) {
    return [...data].sort((a, b) => b - a); // copia para no mutar original
  }
}

// Estrategia: Sin ordenamiento (mantener orden original)
class NoSortStrategy extends SortStrategy {
  sort(data) {
    return [...data]; // copia para no mutar original
  }
}

// ========================================
// CONTEXTO (CONTEXT)
// ========================================
// El contexto mantiene una referencia a una estrategia
// y delega la ejecución del algoritmo en ella.
// Puede cambiar dinámicamente entre diferentes estrategias.
// ========================================
class SortContext {
  // Constructor: inicializa el contexto con una estrategia
  constructor(strategy) {
    this.strategy = strategy;
  }

  // Método para cambiar la estrategia en tiempo de ejecución
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  // Método que ejecuta la estrategia actual
  // Delega la responsabilidad del ordenamiento a la estrategia
  sort(data) {
    return this.strategy.sort(data);
  }
}

// ========================================
// EJEMPLO DE USO (COMENTADO)
// ========================================
// El ejemplo de uso se comenta ya que lo estamos usando en el index.html
// para evitar duplicación de código. Aquí se muestra cómo se usaría:
// ========================================
/*
// Ejemplo de uso del patrón Strategy:

const data = [5, 3, 8, 1];

const context = new SortContext(new AscSortStrategy());
console.log('Ascendente:', context.sort(data));

// Cambiar a estrategia descendente (sin crear nuevo contexto)
context.setStrategy(new DescSortStrategy());
console.log('Descendente:', context.sort(data));

// Cambiar a estrategia sin ordenamiento
context.setStrategy(new NoSortStrategy());
console.log('Sin ordenar:', context.sort(data));
*/

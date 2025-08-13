# Patrón Strategy - Ejemplo Ordenamiento de Arrays (JavaScript)

## 🎯 Motivación

Cuando tenemos múltiples formas de ejecutar un mismo algoritmo (p. ej. ordenar ascendente, descendente, sin ordenar), es común caer en condicionales `if/else` que dificultan la extensión.  
El patrón **Strategy** nos permite encapsular cada algoritmo en su propia clase e intercambiarlo fácilmente.

## 📂 Archivos

- `crudoIfElse.js`: versión sin patrón.
- `strategySort.js`: implementación con patrón Strategy.
- `demo.html`: demo interactiva en navegador.

## ✅ Ventajas

- Cumple el **principio Open/Closed**: podemos añadir nuevas estrategias sin modificar el código existente.
- Código más limpio y organizado (**SRP**).
- Bajo acoplamiento: el contexto no sabe cómo funciona cada estrategia.

## ⚠️ Desventajas

- Más clases y archivos (puede ser sobre-diseño para casos muy simples).

## 🚀 Ejecución

### Node.js

```bash
node strategySort.js
```

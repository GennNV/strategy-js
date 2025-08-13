# Patrón Strategy - Ejemplo Ordenamiento de Arrays (JavaScript)

## 🎯 Motivación

Cuando tenemos múltiples formas de ejecutar un mismo algoritmo (p. ej. ordenar ascendente, descendente, sin ordenar), es común caer en condicionales `if/else` que dificultan la extensión.  
El patrón **Strategy** nos permite encapsular cada algoritmo en su propia clase e intercambiarlo fácilmente.

## ❗❗ Problema de Ejemplo

Uno de los principales ejemplos que se usa para explicar strategy es poniendote en el lugar de un desarrollador de una aplicacion de navegación para viajeros.
Una de las principales funciones de esta App era la de planificar automaticamente la ruta mas cercana al destino seleccionado por el usuario mostrandola en el mapa. La primera version generaba rutas sobre calles, favoreciendo a los usuarios de vehiculos personales, pero tambien habia gente que se manejaba a pie y queria usarla, debiste añadir una funcionalidad de crear rutas para ir a pie. Nuevamente tenias la demanda de rutas en transporte publicos, teniendo en cuenta los recorridos de estos. Luego ciclistas, y asi sucesivamente querias seguir agregando, esto provocaba muchos cambios en el programa principal haciendolo cada vez mas grande la clase principal, cualquier minimo cambio te obligaba a modificar la clase en su totalidad.

## ✔✔ Solucion al Ejemplo

El patron Strategy te sugiere que agarres la clase principal y todos sus algoritmos los separes en clases separadas (llamadas **Estrategias**). La clase original pasa a llamarse **Contexto**, la cual tendra un campo para almacenar una referencia de la estrategia, en lugar de ejecutar el algoritmo por su cuenta, el _Contexto_ delega el trabajo a la _Estrategia_. La clase principal no se encarga de seleccionar el algoritmo a usar, si no que el cliente seleccion la estrategia y se la pasa al contexto.
De esta manera el _Contexto_ se vuelve independiente de cada estrategia, permitiendo el agregar nuevos algoritmos (o modificar los existentes) sin cambia el codigo de la clase principal o de otras estrategias

## 📂 Archivos

- `crudoIfElse.js`: Versión sin patrón.
- `strategyClases.js`: Implementación con patrón Strategy usando Clases.
- `strategyArrows.js`: Implementación con patrón Strategy usando Arrow Functions.
- `index.html`: Demo interactiva en navegador.

## ✅ Ventajas

- Cumple el **principio Open/Closed**: podemos añadir nuevas estrategias sin modificar el código existente.
- Código más limpio y organizado (**SRP**).
- Bajo acoplamiento: el contexto no sabe cómo funciona cada estrategia.

## ⚠️ Desventajas

- Más clases y archivos (puede ser sobre-diseño para casos muy simples).

## 🚀 Ejecución de prueba

### HTML

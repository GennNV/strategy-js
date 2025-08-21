// ========================================
// PATRÓN STRATEGY - IMPLEMENTACIÓN CON CLASES
// ========================================
// Este código muestra la solución al problema anterior usando el patrón Strategy:
// - Cada estrategia de ordenamiento está encapsulada en su propia clase
// - El contexto puede cambiar dinámicamente entre estrategias
// - Cumple con el principio Open/Closed (abierto para extensión, cerrado para modificación)
// ========================================

using System;
using System.Collections.Generic;
using System.Linq;

// ========================================
// INTERFAZ DE ESTRATEGIA (STRATEGY INTERFACE)
// ========================================
// Define el contrato que todas las estrategias deben implementar.
// Esto permite que el contexto trabaje con cualquier estrategia
// que implemente esta interfaz (polimorfismo).
// ========================================
interface ISortStrategy
{
    List<int> Sort(List<int> data);
}

// ========================================
// ESTRATEGIAS CONCRETAS (CONCRETE STRATEGIES)
// ========================================
// Cada clase implementa una estrategia específica de ordenamiento.
// Todas implementan la interfaz ISortStrategy, por lo que son
// intercambiables en tiempo de ejecución.
// ========================================

// Estrategia: Ordenamiento ascendente (menor a mayor)
class AscSortStrategy : ISortStrategy
{
    public List<int> Sort(List<int> data)
    {
        return data.OrderBy(x => x).ToList();
    }
}

// Estrategia: Ordenamiento descendente (mayor a menor)
class DescSortStrategy : ISortStrategy
{
    public List<int> Sort(List<int> data)
    {
        return data.OrderByDescending(x => x).ToList();
    }
}

// Estrategia: Sin ordenamiento (mantener orden original)
class NoSortStrategy : ISortStrategy
{
    public List<int> Sort(List<int> data)
    {
        return new List<int>(data); // copia, sin ordenar
    }
}

// ========================================
// CONTEXTO (CONTEXT)
// ========================================
// El contexto mantiene una referencia a una estrategia
// y delega la ejecución del algoritmo en ella.
// Puede cambiar dinámicamente entre diferentes estrategias.
// ========================================
class SortContext
{
    // Referencia privada a la estrategia actual
    private ISortStrategy _strategy;

    // Constructor: inicializa el contexto con una estrategia
    public SortContext(ISortStrategy strategy)
    {
        _strategy = strategy;
    }

    // Método para cambiar la estrategia en tiempo de ejecución
    public void SetStrategy(ISortStrategy strategy)
    {
        _strategy = strategy;
    }

    // Método que ejecuta la estrategia actual
    // Delega la responsabilidad del ordenamiento a la estrategia
    public List<int> ExecuteSort(List<int> data)
    {
        return _strategy.Sort(data);
    }
}

// ========================================
// PROGRAMA PRINCIPAL - DEMOSTRACIÓN DEL USO
// ========================================
// Aquí se muestra cómo usar el patrón Strategy:
// 1. Crear un contexto con una estrategia inicial
// 2. Cambiar dinámicamente entre estrategias
// 3. Ejecutar cada estrategia con los mismos datos
// ========================================
class Program
{
    static void Main()
    {
        var data = new List<int> { 5, 3, 8, 1 };

        // ========================================
        // DEMOSTRACIÓN DEL PATRÓN STRATEGY
        // ========================================
        
        // Crear contexto con estrategia ascendente
        var context = new SortContext(new AscSortStrategy());
        Console.WriteLine("Ascendente: " + string.Join(", ", context.ExecuteSort(data)));

        // Cambiar a estrategia descendente (sin crear nuevo contexto)
        context.SetStrategy(new DescSortStrategy());
        Console.WriteLine("Descendente: " + string.Join(", ", context.ExecuteSort(data)));

        // Cambiar a estrategia sin ordenamiento
        context.SetStrategy(new NoSortStrategy());
        Console.WriteLine("Sin ordenar: " + string.Join(", ", context.ExecuteSort(data)));
    }
}

// ========================================
// PATRÓN STRATEGY - IMPLEMENTACIÓN SIN PATRÓN
// ========================================
// Este código muestra el problema que resuelve el patrón Strategy:
// múltiples condicionales if/else que hacen difícil la extensión
// ========================================

using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    // ========================================
    // FUNCIÓN PRINCIPAL DE ORDENAMIENTO
    // ========================================
    // Esta función tiene el problema de usar múltiples if/else
    // para manejar diferentes estrategias de ordenamiento.
    // Si queremos agregar una nueva estrategia, debemos modificar
    // esta función, violando el principio Open/Closed.
    // ========================================
    static List<int> SortArray(List<int> data, string type)
    {
        if (type == "asc")
        {
            return data.OrderBy(x => x).ToList();
        }
        else if (type == "desc")
        {
            return data.OrderByDescending(x => x).ToList();
        }
        else if (type == "none")
        {
            return data; // sin ordenar
        }
        else
        {
            throw new ArgumentException("Tipo de orden no válido");
        }
    }

    // ========================================
    // FUNCIÓN PRINCIPAL (PUNTO DE ENTRADA)
    // ========================================
    // Aquí se demuestra el uso de la función SortArray
    // con diferentes estrategias de ordenamiento
    // ========================================
    static void Main()
    {
        var data = new List<int> { 5, 3, 8, 1 };

        // ========================================
        // DEMOSTRACIÓN DE DIFERENTES ESTRATEGIAS
        // ========================================
        
        // Probar estrategia ascendente
        Console.WriteLine("Ascendente: " + string.Join(", ", SortArray(new List<int>(data), "asc")));
        
        // Probar estrategia descendente
        Console.WriteLine("Descendente: " + string.Join(", ", SortArray(new List<int>(data), "desc")));
        
        // Probar estrategia sin ordenamiento
        Console.WriteLine("Sin ordenar: " + string.Join(", ", SortArray(new List<int>(data), "none")));
    }
}

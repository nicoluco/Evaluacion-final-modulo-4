# Evaluación Práctica: Módulo 4

Este proyecto consiste en una aplicación interactiva desarrollada en JavaScript nativo (Vanilla JS) que consume, administra y procesa datos desde un servicio web externo (API REST).

## Tecnologías Utilizadas
* **JavaScript (ES6+)** - Lógica orientada a objetos, manipulación del DOM y manejo de arreglos.
* **XMLHttpRequest** - Cliente HTTP nativo para la transferencia de datos asíncrona.

## Requerimientos Implementados

El script cumple estrictamente con las directrices de la evaluación estructurándose en una clase controladora con los siguientes componentes:

1. **Se utilizo método Fetch**
2. **Métodos de Consulta y Filtrado:**
   * **Listado General:** Imprime en la consola del desarrollador exclusivamente los nombres de los usuarios cargados.
   * **Búsqueda de Información Básica:** Solicita un nombre por `prompt` y muestra su `username` y `email`.
   * **Búsqueda de Dirección Completa:** Filtra por nombre y despliega en formato estructurado todos los campos del objeto `address`.
   * **Búsqueda de Información Avanzada:** Muestra por consola los campos de contacto y corporativos (`phone`, `website`, `company`).
   * **Mapeo Corporativo:** Lista todas las organizaciones junto con su respectivo eslogan corporativo (`catchPhrase`).
   * **Ordenamiento Alfabético:** Aplica algoritmos de ordenación local para listar los nombres ordenados de la A a la Z de manera correcta.
3. **Panel de Botones HTML:** Se vinculó un botón en la interfaz gráfica para disparar de manera interactiva la ejecución de cada uno de los métodos anteriores.

## Estructura del Proyecto
```text
├── api.html          # Interfaz de usuario con los botones de control
├── js/
│   └── App.js          # Definición de la clase e inicialización del script
└── README.md           # Documentación del proyecto
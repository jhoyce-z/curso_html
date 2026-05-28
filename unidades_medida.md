# Unidades de medida en diseño web

## ¿Qué son las unidades CSS?
Las unidades CSS definen cómo se aplican las mediciones (ancho, alto, márgenes, tamaño de fuente, etc.) en las hojas de estilo. Determinan cómo escalan los elementos, asegurando flexibilidad y precisión en el diseño web.

## Dos categorías principales

1. UNIDADES ABSOLUTAS
Tienen valores fijos y no cambian sin importar los elementos circundantes:

px (píxeles): La más usada para pantallas. Ideal para elementos fijos

cm, mm, in, pt, pc: Para hojas de estilo de impresión

| Unidad | Descripción                                                      |                   Ejemplo                               |
| ------ | ---------------------------------------------------------------- | ------------------------------------------------------- |
| px     | Píxeles. La más usada para pantallas. Ideal para elementos fijos | width: 200px; font-size: 16px; border: 2px solid black; |
| cm     | Centímetros. Para impresión                                      | width: 10cm;                                            |
| mm     | Milímetros. Para impresión                                       | width: 50mm;                                            |
| in     | Pulgadas. Para impresión                                         | width: 5in;                                             |
| pt     | Puntos. Para impresión                                           | font-size: 12pt;                                        |
| pc     | Picas. Para impresión                                            | font-size: 12pc;                                        |


2. UNiDADES RELATIVAS
Se basan en otra longitud (elemento padre, raíz o viewport):

| Unidad | Descripción                                              |                   Ejemplo                       |
| ------ | -------------------------------------------------------- | ----------------------------------------------- |
| %      | Porcentaje del elemento padre                            | width: 50%; font-size: 150%; margin: 10%;       |
| em     | Relativo al tamaño de fuente del elemento actual (padre) | font-size: 1.5em; margin: 2em; padding: 0.5em;  |
| rem    | Relativo al tamaño de fuente del elemento raíz (html)    | font-size: 2rem; margin: 1rem; padding: 0.5rem; |
| vw     | 1% del ancho del viewport (ventana visible)              | width: 100vw; font-size: 5vw; width: 50vw;      |
| vh     | 1% del alto del viewport (ventana visible)               | height: 100vh; font-size: 10vh; height: 30vh;   |
| vmin   | 1% de la dimensión más pequeña del viewport              | width: 50vmin; height: 50vmin;                  |
| vmax   | 1% de la dimensión más grande del viewport               | width: 50vmax; font-size: 5vmax;                |
| ch     | Ancho del "0" (cero) en la fuente                        | max-width: 70ch; width: 50ch;                   |
| ex     | Altura x de la fuente (raramente usada)                  | height: 1ex;                                    |

EJEMPLOS

| Unidad | Qué mide                   | Ejemplo descriptivo                                    |
| ------ | -------------------------- | ------------------------------------------------------ |
| px     | Píxeles fijos              | width: 200px; → siempre 200 píxeles, sin importar nada |
| %      | Porcentaje del padre       | width: 50%; → 50% del ancho del elemento padre         |
| rem    | Tamaño de fuente del html  | font-size: 2rem; → 2 × 16px = 32px (si html = 16px)    |
| em     | Tamaño de fuente del padre | font-size: 1.5em; → 1.5 × tamaño del padre             |
| vw     | 1% del ancho de pantalla   | width: 100vw; → ocupa todo el ancho de la ventana      |
| vh     | 1% del alto de pantalla    | height: 100vh; → ocupa todo el alto de la ventana      |
| vmin   | 1% de la dimensión menor   | width: 50vmin; → 50% del menor valor (ancho o alto)    |
| vmax   | 1% de la dimensión mayor   | width: 50vmax; → 50% del mayor valor (ancho o alto)    |
| ch     | Ancho del "0"              | max-width: 70ch; → ~70 caracteres por línea            |
| pt     | Puntos (impresión)         | font-size: 12pt; → para documentos impresos            |
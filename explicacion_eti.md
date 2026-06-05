
## 🏷️ 7. Desglose Detallado de Etiquetas Fundamentales

> A continuación, se detalla el propósito de cada etiqueta mencionada anteriormente, divididas por su comportamiento estructural.

---

###  ELEMENTOS EN BLOQUE (Estructurales y Contenedores)

| Etiqueta | Nombre | ¿Qué es? | Uso Real |
| :--- | :--- | :--- | :--- |
| 📦 **`<div>`** | Document Division | Es un contenedor genérico en bloque sin ningún significado semántico. | Se usa exclusivamente para agrupar elementos y aplicarles estilos con CSS (como crear cuadrículas o cajas flotantes). |
| 🏛️ **`<header>`** | Cabecera | Representa el grupo de elementos introductorios o de navegación de una sección o de toda la página. | Contiene normalmente el logotipo del sitio, el título principal y el menú de navegación superior. |
| 🗂️ **`<section>`** | Sección Genérica | Representa una sección genérica independiente dentro del documento que comparte una misma temática. | Se usa para fragmentar una página web larga en bloques lógicos (ej. "Quiénes somos", "Características", "Precios"). |
| 📄 **`<p>`** | Párrafo | Bloque de texto estándar estructurado para la lectura humana. | Envuelve los textos descriptivos, artículos de blog o fragmentos informativos de la web de forma ordenada. |
| 🔤 **`<h1>` a `<h6>`** | Encabezados / Títulos | Etiquetas de jerarquía para definir títulos. `<h1>` es el más importante y `<h6>` el de menor peso. | El `<h1>` define el tema principal de la página (solo debe haber uno por archivo HTML); los demás actúan como subtítulos. |
|  **`<ul>` y `<li>`** | Listas Desordenadas y Elementos de Lista | `<ul>` crea el contenedor de una lista con viñetas (puntos) y cada `<li>` representa un elemento dentro de ella. | Son la base estructural preferida por los desarrolladores para maquetar menús de navegación horizontales o verticales. |

---

### ➔ ELEMENTOS EN LÍNEA (Contenido y Estilo Interno)

| Etiqueta | Nombre | ¿Qué es? | Uso Real |
| :--- | :--- | :--- | :--- |
| 🔗 **`<a>`** | Ancla / Hipervínculo | Enlace que permite conectar nuestra página con cualquier otra URL interna o externa. | Elemento clave para redireccionar a los usuarios hacia redes sociales, páginas de contacto o descargas de archivos. |
| ️ **`<span>`** | Contenedor en Línea | Un contenedor genérico en línea que no altera la estructura, ideal para aplicar estilos a palabras aisladas. | Úsalo si deseas pintar **solo una palabra** de color dorado o rojo dentro de un párrafo largo de texto. |
| 💪 **`<strong>`** | Importancia Fuerte / Negrita | Le indica al navegador (y a los motores de búsqueda como Google) que el texto envuelto es de alta importancia. | Visualmente renderiza el texto en **negrita**, ayudando al usuario a escanear visualmente las palabras clave de un texto. |
| ✨ **`<em>`** | Énfasis / Cursiva | Marca un fragmento de texto con un énfasis tonal o semántico diferente. | Renderiza el texto en *cursiva*, ideal para citas textuales, pensamientos del autor o palabras en idiomas extranjeros. |
| 🖼️ **`<img>`** | Imagen | Inserta una imagen física en el documento a través del atributo `src` (origen). Es un elemento en línea especial porque acepta tamaños fijos. | Mostrar fotografías de productos, logotipos o fondos decorativos que complementen la lectura. |
|  **`<button>`** | Botón | Crea un elemento interactivo clickable para realizar acciones dentro del navegador. | Se usa para activar ventanas flotantes (*pop-ups*), enviar formularios de contacto o activar eventos programados con JavaScript. |

---

## 📊 Tabla de Diferenciación Semántica: ¿Estructura o Contenido?

| Etiqueta | Tipo | ¿Acepta `width`/`height`? | Rol Principal en el Desarrollo Web |
| :--- | :---: | :---: | :--- |
| **`<div>`** |  Bloque | ✅ **Sí** | Crear cajas de diseño y organizar el layout. |
| **`<header>`** | 🟦 Bloque | ✅ **Sí** | Delimitar la zona de presentación de la web. |
| **`<section>`** | 🟦 Bloque | ✅ **Sí** | Separar contenidos temáticos independientes. |
| **`<p>`** | 🟦 Bloque | ✅ **Sí** | Dar formato estructural a los textos largos. |
| **`<h1> - <h6>`** |  Bloque | ✅ **Sí** | Establecer la jerarquía visual de los títulos. |
| **`<ul> / <li>`** | 🟦 Bloque | ✅ **Sí** | Construir agrupaciones ordenadas o menús. |
| **`<a>`** | 🟩 En Línea | ❌ **No** | Permitir la navegación entre páginas web. |
| **`<span>`** | 🟩 En Línea | ❌ **No** | Aislar fragmentos de texto para darles estilos CSS. |
| **`<strong>`** |  En Línea | ❌ **No** | Resaltar con peso visual y semántico (Negrita). |
| **`<em>`** |  En Línea | ❌ **No** | Enfatizar expresiones o términos (Cursiva). |
| **`<img>`** |  En Línea | ⚠️ **Sí** *(Excepción)* | Incrustar recursos visuales en la interfaz. |
| **`<button>`** | 🟨 En Línea | ⚠️ **Sí** *(Excepción)* | Servir como disparador de acciones interactivas. |
"." 

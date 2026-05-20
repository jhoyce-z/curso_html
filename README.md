📘 Documento del Proyecto
📄 README.md

Documento que sirve para describir qué hace nuestro proyecto.

🧠 Markdown

Markdown versión mejorada de HTML utiliza parte semántica.

🌐 HTML

HTML es el lenguaje de marcado de texto que nos permite estructurar nuestra página web.
Se puede entender como el esqueleto de nuestra aplicación, ya que organiza la información
y le da formato semántico a través del uso de elementos, los cuales están conformados 
por etiquetas de apertura, contenido y etiquetas de cierre.

[!TIP]
En algunos casos encontraremos elementos huérfanos; estos solo están 
conformados por una sola etiqueta y pueden tener un atributo.

🧩 ESTRUCTURA DE UN ELEMENTO HTML
<div>hola mundo</div>

🔍 Explicación
| Parte        |            Explicación                                          |
| ------------ |----------------------------------------------------- |
| `<div>`      | Etiqueta de apertura. Indica el inicio del elemento. |
| `hola mundo` | Contenido que se mostrará dentro del elemento.       |
| `</div>`     | Etiqueta de cierre. Indica el final del elemento.    |
| `div`        | Nombre del elemento HTML utilizado. 


🏗️ ESTRUCTURA FUNDAMENTAL DEL DOCUMENTO HTML

        <!DOCTYPE html>
        <html>
        <head>
            <title>Mi Página</title>
        </head>
        <body>

        </body>
        </html>

📌 EXPLICACIÓN

🔹 <!DOCTYPE html>

Declaramos el tipo de documento. Este elemento huérfano indica al navegador que 
el documento con el que está trabajando y que se deberá renderizar es HTML. 
Siempre debe estar en la primera línea.

🔹 <html><html>

Elemento raíz, envuelve todo el contenido de la página HTML. Este elemento tiene hijos principales.

🔹 <head><head>

Elemento de configuración, contiene información importante sobre el documento como título, 
enlaces CSS, información para motores de búsqueda y descripción, entre otros.

🔹 <title><title>

Elemento de título de página, es el hijo de <head> y define el título que aparecerá en la pestaña del navegador.

🔹 <body><body>

Contiene el contenido visible del documento HTML.

🧱 ESTRUCTURA SEMÁNTICA

La estructura semántica organiza el contenido para que el documento sea más claro y profesional. 
En HTML, la semántica indica el papel o significado de cada elemento, no solo su apariencia.

Etiqueta	Función
<header>	encabezado
<nav>	navegación
<main>	contenido principal
<section>	sección temática
<article>	contenido independiente
<aside>	contenido complementario
<footer>	pie de página


📌 ORGANIZACIÓN

1️⃣ README.md
Primero va el README.md porque allí se describe el proyecto y su funcionamiento.

2️⃣ index.html
Después va el index.html, que contiene la estructura de la página.

3️⃣ css/ 
Carpeta destinada para los estilos del proyecto.


📝 ESTRUCTURA DE TEXTO EN HTML

HTML sirve para organizar el contenido de una página web usando etiquetas.
Cada etiqueta tiene una función específica.

Piensa en HTML como las piezas que forman una página web.

🔠 JERARQUÍA DE ENCABEZADOS

Los encabezados funcionan como títulos y subtítulos.

Mientras más pequeño sea el número, más importante será el título.

📖 Tipos de encabezados

| Etiqueta | Uso              |
| -------- | ---------------- |
| `<h1>`   | Título principal |
| `<h2>`   | Subtítulo        |
| `<h3>`   | Tema secundario  |
| `<h4>`   | Tema pequeño     |
| `<h5>`   | Tema más pequeño |
| `<h6>`   | Tema mínimo      |


💻 Ejemplo
<h1>Mi Página Web</h1>
<h2>Sobre mí</h2>
<h3>Mis hobbies</h3>

🔍 ¿Qué ocurre aquí?
<h1> crea el título más grande e importante.
<h2> crea un subtítulo.
<h3> crea un tema secundario.

Se usa para organizar información.

📄 PÁRRAFOS Y ÉNFASIS

Los párrafos sirven para escribir texto.

También podemos resaltar palabras importantes.

📖 Etiquetas

| Etiqueta   | Función          |
| ---------- | ---------------- |
| `<p>`      | Crear párrafo    |
| `<strong>` | Texto importante |
| `<em>`     | Dar énfasis      |


💻 Ejemplo
<p>Estoy aprendiendo HTML.</p>

<p>
HTML es <strong>importante</strong>
para crear páginas web.
</p>
🔍 ¿Qué ocurre aquí?
<p> crea un párrafo.
<strong> resalta la palabra “importante”.

📋 LISTAS

Las listas sirven para ordenar información.

📖 Tipos de listas

| Etiqueta | Función           |
| -------- | ----------------- |
| `<ul>`   | Lista con viñetas |
| `<ol>`   | Lista numerada    |
| `<li>`   | Elemento de lista |


💻 Ejemplo
<ul>
    <li>Arroz</li>
    <li>Pollo</li>
</ul>
🔍 ¿Qué ocurre aquí?
<ul> crea una lista con puntos.
<li> agrega elementos dentro de la lista.

Resultado:

• Arroz
• Pollo

💻 LISTA ORDENADA

💻 Ejemplo ordenado
<ol>
    <li>Lavar arroz</li>
    <li>Cocinar pollo</li>
</ol>
🔍 ¿Qué ocurre aquí?
<ol> crea una lista numerada.

Resultado:

Lavar arroz
Cocinar pollo
💬 Citas y referencias

Sirven para mostrar frases importantes.

📖 Etiquetas

| Etiqueta       | Función       |
| -------------- | ------------- |
| `<blockquote>` | Mostrar cita  |
| `<cite>`       | Mostrar autor |


💻 Ejemplo
<blockquote>
"La práctica hace al maestro."
</blockquote>

<cite>Autor desconocido</cite>
🔍 ¿Qué ocurre aquí?
<blockquote> muestra una frase destacada.
<cite> muestra quién dijo la frase.

💻 CÓDIGO Y TEXTO TÉCNICO

Sirve para mostrar código HTML sin ejecutarlo.

📖 Etiquetas

| Etiqueta | Función           |
| -------- | ----------------- |
| `<code>` | Mostrar código    |
| `<pre>`  | Mantener espacios |


💻 Ejemplo
<pre>
<code>
<h1>Hola Mundo</h1>
</code>
</pre>
🔍 ¿Qué ocurre aquí?

El navegador mostrará el código tal como está escrito.

No lo ejecutará.

📏 LÍNEAS Y SALTOS

Sirven para separar contenido.

📖 Etiquetas
| Etiqueta | Función          |
| -------- | ---------------- |
| `<hr>`   | Línea horizontal |
| `<br>`   | Salto de línea   |


💻 Ejemplo
<p>Hola</p>

<hr>

<p>
Bienvenido<br>
a HTML
</p>
🔍 ¿Qué ocurre aquí?
<hr> dibuja una línea.
<br> baja a la siguiente línea.

Resultado:

Hola

────────────

Bienvenido
a HTML
# 📘 Documento del Proyecto 📄 README.md

Documento que sirve para describir qué hace nuestro proyecto.

---

## 🌐 HTML

HTML es el lenguaje de marcado de texto que nos permite estructurar nuestra página web. Se puede entender como el esqueleto de nuestra aplicación, ya que organiza la información y le da formato semántico a través del uso de elementos, los cuales están conformados por etiquetas de apertura, contenido y etiquetas de cierre.

> [!TIP]
> En algunos casos encontraremos elementos huérfanos; estos solo están conformados por una sola etiqueta y pueden tener un atributo.

---

## 🧩 ESTRUCTURA DE UN ELEMENTO HTML

```html
<div>hola mundo</div>
```

### 🔍 Explicación

| Parte | Explicación |
|-------|-------------|
| `<div>` | Etiqueta de apertura. Indica el inicio del elemento. |
| `hola mundo` | Contenido que se mostrará dentro del elemento. |
| `</div>` | Etiqueta de cierre. Indica el final del elemento. |
| `div` | Nombre del elemento HTML utilizado. |

---

## 🏗️ ESTRUCTURA FUNDAMENTAL DEL DOCUMENTO HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Página</title>
</head>
<body>

</body>
</html>
```

### 📌 EXPLICACIÓN

🔹 **`<!DOCTYPE html>`** Declaramos el tipo de documento. Este elemento huérfano indica al navegador que el documento con el que está trabajando y que se deberá renderizar es HTML. Siempre debe estar en la primera línea.

🔹 **`<html>`** Elemento raíz, envuelve todo el contenido de la página HTML. Este elemento tiene hijos principales.

🔹 **`<head>`** Elemento de configuración, contiene información importante sobre el documento como título, enlaces CSS, información para motores de búsqueda y descripción, entre otros.

🔹 **`<title>`** Elemento de título de página, es el hijo de `<head>` y define el título que aparecerá en la pestaña del navegador.

🔹 **`<body>`** Contiene el contenido visible del documento HTML.

---

## 📌 ORGANIZACIÓN

### 🧱 ESTRUCTURA SEMÁNTICA

La estructura semántica organiza el contenido para que el documento sea más claro y profesional. En HTML, la semántica indica el papel o significado de cada elemento, no solo su apariencia.

| Etiqueta | Función |
|----------|---------|
| `<header>` | encabezado |
| `<nav>` | navegación |
| `<main>` | contenido principal |
| `<section>` | sección temática |
| `<article>` | contenido independiente |
| `<aside>` | contenido complementario |
| `<footer>` | pie de página |

### ⭐ ETIQUETAS MÁS USADAS

| Etiqueta | Función |
|----------|---------|
| `<h1>` | Título principal |
| `<h2>` | Subtítulo |
| `<h3>` | Título secundario |
| `<p>` | Crear párrafo |
| `<a>` | Crear enlaces |
| `<img>` | Insertar imagen |
| `<button>` | Botón interactivo |
| `<strong>` | Texto importante (negrita) |
| `<em>` | Texto con énfasis (cursiva) |
| `<br>` | Salto de línea |
| `<hr>` | Línea horizontal |
| `<ul>` | Lista con viñetas |
| `<ol>` | Lista numerada |
| `<li>` | Elemento de lista |
| `<div>` | Contenedor genérico |
| `<span>` | Contenedor en línea |

### 💻 Ejemplo

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <title>Ejemplo HTML</title>
</head>

<body>

<h1>Mi Página Web</h1>

<h2>Bienvenido</h2>

<p>Este es un ejemplo de las etiquetas más usadas en HTML.</p>

<p>
    HTML es <strong>importante</strong> para crear páginas web.
</p>

<h2>Lista de tareas</h2>

<ul>
    <li>Aprender HTML</li>
    <li>Practicar CSS</li>
    <li>Usar JavaScript</li>
</ul>

<h2>Enlace</h2>

<p>
    Visita:
    <a href="https://github.com/">GitHub</a>
</p>

<hr>

<p>Línea de separación arriba 👆</p>

</body>

</html>
```

---

1️⃣ **README.md** Primero va el README.md porque allí se describe el proyecto y su funcionamiento.

2️⃣ **index.html** Después va el index.html, que contiene la estructura de la página.

3️⃣ **css/** Carpeta destinada para los estilos del proyecto.

---

## 📝 ESTRUCTURA DE TEXTO EN HTML

HTML sirve para organizar el contenido de una página web usando etiquetas. Cada etiqueta tiene una función específica.

Piensa en HTML como las piezas que forman una página web.

---

### 🔠 JERARQUÍA DE ENCABEZADOS

Los encabezados funcionan como títulos y subtítulos.

Mientras más pequeño sea el número, más importante será el título.

#### 📖 Tipos de encabezados

| Etiqueta | Uso |
|----------|-----|
| `<h1>` | Título principal |
| `<h2>` | Subtítulo |
| `<h3>` | Tema secundario |
| `<h4>` | Tema pequeño |
| `<h5>` | Tema más pequeño |
| `<h6>` | Tema mínimo |

#### 💻 Ejemplo

```html
<h1>Mi Página Web</h1>
<h2>Sobre mí</h2>
<h3>Mis hobbies</h3>
```

#### 🔍 ¿Qué ocurre aquí?

- `<h1>` crea el título principal.
- `<h2>` crea un subtítulo.
- `<h3>` crea un tema secundario.
- Se usa para organizar información.

---

### 📄 PÁRRAFOS Y ÉNFASIS

Los párrafos sirven para escribir texto. También podemos resaltar palabras importantes.

```html
<p>Este es un párrafo de ejemplo.</p>

<p>
HTML es <strong>importante</strong> para aprender desarrollo web.
</p>
```

---

### 📋 LISTAS

Las listas sirven para organizar información en forma ordenada o con viñetas.

#### 📖 Tipos de listas

| Etiqueta | Función |
|----------|---------|
| `<ul>` | Lista con viñetas |
| `<ol>` | Lista numerada |
| `<li>` | Elemento de lista |

#### 💻 Ejemplo

```html
<ul>
    <li>Arroz</li>
    <li>Pollo</li>
</ul>
```

#### 🔍 ¿Qué ocurre aquí?

- `<ul>` crea una lista con puntos.
- `<li>` agrega elementos dentro de la lista.

**Resultado:**
- Arroz
- Pollo

#### 💻 Lista ordenada

```html
<ol>
    <li>Lavar arroz</li>
    <li>Cocinar pollo</li>
</ol>
```

#### 🔍 ¿Qué ocurre aquí?

- `<ol>` crea una lista numerada.

**Resultado:**
1. Lavar arroz
2. Cocinar pollo

---

### 💬 CITAS Y REFERENCIAS

Sirven para mostrar frases importantes.

#### 📖 Etiquetas

| Etiqueta | Función |
|----------|---------|
| `<blockquote>` | Mostrar cita |
| `<cite>` | Mostrar autor |

#### 💻 Ejemplo

```html
<blockquote>
"La práctica hace al maestro."
</blockquote>

<cite>Autor desconocido</cite>
```

#### 🔍 ¿Qué ocurre aquí?

- `<blockquote>` muestra una frase destacada.
- `<cite>` muestra quién dijo la frase.

---

### 💻 CÓDIGO Y TEXTO TÉCNICO

Sirve para mostrar el código HTML sin ejecutarlo.

#### 📖 Etiquetas

| Etiqueta | Función |
|----------|---------|
| `<code>` | Mostrar código |
| `<pre>` | Mantener espacios |

#### 💻 Ejemplo

```html
<pre>
<code>
<h1>Hola Mundo</h1>
</code>
</pre>
```

#### 🔍 ¿Qué ocurre aquí?

- El navegador mostrará el código tal como está escrito.
- No lo ejecutará.

---

### 📏 LÍNEAS Y SALTOS

Sirven para separar el contenido.

#### 📖 Etiquetas

| Etiqueta | Función |
|----------|---------|
| `<hr>` | Línea horizontal |
| `<br>` | Salto de línea |

#### 💻 Ejemplo

```html
<p>Hola</p>

<hr>

<p>
Bienvenido<br>
a HTML
</p>
```

#### 🔍 ¿Qué ocurre aquí?

- `<hr>` dibuja una línea.
- `<br>` baja a la siguiente línea.

**Resultado:**

Hola

────────────

Bienvenido
a HTML

---

## 🎨 CSS (Hojas de estilo en cascada)

CSS es el lenguaje que nos permite dar estilo a nuestros elementos HTML: posicionar, escalar, formatear, aplicar colores y transiciones.

---

### 📌 ¿Cómo aplicar CSS a un documento HTML?

Existen 3 formas de aplicar CSS:

| Tipo | Descripción | Cuándo usarlo |
|------|-------------|---------------|
| En línea | Directamente en el elemento con `style` | Pruebas rápidas, estilos muy específicos. |
| Embebido | En la etiqueta `<style>` dentro de `<head>` | Proyectos pequeños, páginas únicas. |
| Externo | Archivo `.css` separado conectado con `<link>` | ✅ **Recomendado**: proyectos reales, reutilización |

---

### 1️⃣ CSS en Línea

Se aplica directamente en el elemento usando el atributo `style`.

```html
<p style="color: pink; font-size: 23px;">Este es el texto</p>
```

> ⚠️ **Desventaja:** mezcla contenido con estilo, difícil de mantener.

---

### 2️⃣ CSS Embebido

Se usa la etiqueta `<style>` dentro del `<head>` HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>Este texto es azul y mide 18px</p>
</body>
</html>
```

> ✅ **Ventaja:** todo el CSS está en un solo archivo HTML.

---

### 3️⃣ CSS Externo ⭐ (Recomendado)

Se crea un archivo `.css` separado y se conecta al HTML con `<link>`.

#### 📁 Estructura de archivos

```
mi-proyecto/
├── index.html
└── estilos.css
```

#### 📄 Archivo: `estilos.css`

```css
p {
  color: green;
  font-size: 20px;
}

.boton {
  background: blue;
  color: white;
  padding: 10px;
}
```

#### 📄 Archivo: `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <p>Este texto es verde y mide 20px</p>
  <button class="boton">Botón estilizado</button>
</body>
</html>
```

**✅ Ventajas:**
- Separa estilo del contenido
- Reutilizable en múltiples páginas.
- Más fácil de mantener y escalar

---

### 🎯 Selectores CSS (Importante)

Para usar CSS embebido o externo necesitas entender selectores:

| Selector | Ejemplo | Descripción |
|----------|---------|-------------|
| Etiqueta | `p { }` | Selecciona todos los `<p>` |
| ID | `#mi-id { }` | Selecciona un elemento único (`id="mi-id"`) |
| Clase | `.mi-clase { }` | Selecciona elementos con `class="mi-clase"` ⭐ |

> [!RECOMENDACIÓN]
> En diseño web se recomienda usar solo selectores de tipo clase (`.nombre`), ya que son reutilizables y más flexibles.

---

### 📋 Resumen rápido

| Método | Código | Recomendación |
|--------|--------|---------------|
| En línea | `<p style="...">` | ❌ Solo para pruebas rápidas |
| Embebido | `<style>...</style>` | ⚠️ Proyectos pequeños |
| Externo | `<link href="estilos.css">` | ✅ Recomendado para proyectos reales |

---

### 💡 Consejos importantes

- **Unidades de medida:** usa `em` o `rem` para tamaños de texto (escalables)
- **Archivos externos:** siempre pon `<link>` dentro del `<head>`
- **Convención:** nombra tu archivo CSS como `estilos.css` o `style.css`
- **Selectores:** prioriza clases (`.nombre`) sobre IDs (`#nombre`)

> [!TIP] **Observacion:** averiguar que es una ruta relativa y que es una ruta absoluta.

Ruta absoluta: indica la ubicación completa de un archivo.

>Ejemplo: C:\Users\LENOVO\Desktop\curso_html
C:\Users\Solar\Documentos\index.html

Ruta relativa: indica la ubicación tomando como referencia la carpeta actual.

>Ejemplo
'''txt
## tenemos en mi carpeta del proyecto un archivo llamado 'logo.png' como aceder a este
archivo usando un aruta absoluta
C:\Users\LENOVO\Desktop\curso_html

Si estás en Documentos, entonces:

index.html
imagenes/logo.png
../css/estilos.css

Diferencia rápida:

Absoluta = camino completo.

Relativa = camino desde donde estás.



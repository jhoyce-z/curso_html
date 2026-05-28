# 📏 UNIDADES DE MEDIDA EN DISEÑO WEB

### *CSS Units — Guía Visual y Explicativa*

> Las unidades CSS permiten definir tamaños, espacios y dimensiones dentro de una página web.

---

# 📚 ¿QUÉ SON LAS UNIDADES CSS?

Las unidades CSS definen cómo se aplican las mediciones:

✅ ancho
✅ alto
✅ márgenes
✅ tamaño de fuente
✅ espaciado
✅ bordes

---

## 🎯 ¿PARA QUÉ SIRVEN?

Permiten:

* crear diseños responsivos
* controlar tamaños
* adaptar interfaces
* mejorar visualización

---

<br>

# 🧩 DOS CATEGORÍAS PRINCIPALES

---

# 1️⃣ UNIDADES ABSOLUTAS

📌 Tienen valores fijos y NO cambian según el contexto.

---

## ✨ Características

✅ precisas
✅ fijas
✅ ideales para impresión
✅ útiles para elementos específicos

---

# 📋 TABLA — UNIDADES ABSOLUTAS

| 📏 Unidad | 🧠 Descripción                       | 💻 Ejemplo         |
| --------- | ------------------------------------ | ------------------ |
| `px`      | Píxeles. La más usada para pantallas | `width: 200px;`    |
| `cm`      | Centímetros. Para impresión          | `width: 10cm;`     |
| `mm`      | Milímetros. Para impresión           | `width: 50mm;`     |
| `in`      | Pulgadas. Para impresión             | `width: 5in;`      |
| `pt`      | Puntos. Para impresión               | `font-size: 12pt;` |
| `pc`      | Picas. Para impresión                | `font-size: 12pc;` |

---

# 🖥️ PX (PÍXELES)

La unidad más utilizada en desarrollo web.

---

## ✅ Ejemplos

```css id="mr4w9z"
width: 200px;
font-size: 16px;
border: 2px solid black;
```

---

## 📌 Características

* tamaño fijo
* no depende del padre
* ideal para precisión visual

---

<br>

# 🖨️ UNIDADES DE IMPRESIÓN

Estas unidades se usan más en documentos impresos.

---

## 📌 Incluyen

* `cm`
* `mm`
* `in`
* `pt`
* `pc`

---

## 💡 Ejemplo

```css id="c2x7vm"
width: 10cm;
font-size: 12pt;
```

---

<br>

# 2️⃣ UNIDADES RELATIVAS

📌 Se basan en otra medida.

Pueden depender de:

* elemento padre
* tamaño raíz
* tamaño de pantalla

---

## ✨ Ventajas

✅ flexibles
✅ responsivas
✅ adaptables
✅ modernas

---

# 📋 TABLA — UNIDADES RELATIVAS

| 📏 Unidad | 🧠 Descripción                   | 💻 Ejemplo          |
| --------- | -------------------------------- | ------------------- |
| `%`       | Porcentaje del elemento padre    | `width: 50%;`       |
| `em`      | Relativo al tamaño del padre     | `font-size: 1.5em;` |
| `rem`     | Relativo al tamaño raíz (`html`) | `font-size: 2rem;`  |
| `vw`      | 1% del ancho del viewport        | `width: 100vw;`     |
| `vh`      | 1% del alto del viewport         | `height: 100vh;`    |
| `vmin`    | 1% de la dimensión menor         | `width: 50vmin;`    |
| `vmax`    | 1% de la dimensión mayor         | `width: 50vmax;`    |
| `ch`      | Ancho del carácter "0"           | `max-width: 70ch;`  |
| `ex`      | Altura x de la fuente            | `height: 1ex;`      |

---

<br>

# 📊 EXPLICACIÓN DE CADA UNIDAD

---

# 🔹 `%` (PORCENTAJE)

Depende del tamaño del elemento padre.

---

## ✅ Ejemplo

```css id="jlwm4o"
width: 50%;
```

---

## 📌 Significa

```txt id="6bq9vr"
ocupa el 50% del contenedor padre
```

---

<br>

# 🔹 `em`

Relativo al tamaño de fuente del elemento padre.

---

## ✅ Ejemplo

```css id="5g2rqn"
font-size: 1.5em;
margin: 2em;
padding: 0.5em;
```

---

## 📌 Ejemplo práctico

Si el padre tiene:

```css id="r9v0jt"
font-size: 20px;
```

Entonces:

```css id="ax0gmd"
1.5em = 30px
```

---

<br>

# 🔹 `rem`

Relativo al tamaño de fuente raíz (`html`).

---

## ✅ Ejemplo

```css id="o3t5pw"
font-size: 2rem;
margin: 1rem;
padding: 0.5rem;
```

---

## 📌 Ejemplo práctico

Si:

```css id="d1t7yk"
html {
  font-size: 16px;
}
```

Entonces:

```txt id="4g0vjl"
2rem = 32px
```

---

## 💡 Ventaja

Más consistente que `em`.

---

<br>

# 🔹 `vw`

Representa:

```txt id="4p8yxd"
1% del ancho de la ventana
```

---

## ✅ Ejemplo

```css id="9r2jta"
width: 100vw;
font-size: 5vw;
```

---

## 📌 Uso común

Diseños responsive.

---

<br>

# 🔹 `vh`

Representa:

```txt id="r1m7vo"
1% del alto de la ventana
```

---

## ✅ Ejemplo

```css id="x5j9qm"
height: 100vh;
```

---

## 📌 Uso común

Pantallas completas.

---

<br>

# 🔹 `vmin`

Usa la dimensión MÁS PEQUEÑA del viewport.

---

## ✅ Ejemplo

```css id="2l0rbe"
width: 50vmin;
```

---

## 💡 Ideal para

Elementos cuadrados adaptables.

---

<br>

# 🔹 `vmax`

Usa la dimensión MÁS GRANDE del viewport.

---

## ✅ Ejemplo

```css id="w9m1yt"
width: 50vmax;
```

---

<br>

# 🔹 `ch`

Representa el ancho del carácter:

```txt id="f0k3lm"
"0"
```

---

## ✅ Ejemplo

```css id="8z3yqh"
max-width: 70ch;
```

---

## 💡 Uso común

Controlar longitud de texto.

---

<br>

# 🔹 `ex`

Representa la altura de la letra:

```txt id="q3x9ja"
x
```

---

## 📌 Poco utilizada

Pero útil en tipografía avanzada.

---

<br>

# 🧪 EJEMPLOS VISUALES

| 📏 Unidad | 🧠 Qué mide          | 💻 Ejemplo descriptivo |
| --------- | -------------------- | ---------------------- |
| `px`      | Píxeles fijos        | `width: 200px;`        |
| `%`       | Porcentaje del padre | `width: 50%;`          |
| `rem`     | Tamaño raíz          | `font-size: 2rem;`     |
| `em`      | Tamaño del padre     | `font-size: 1.5em;`    |
| `vw`      | Ancho pantalla       | `width: 100vw;`        |
| `vh`      | Alto pantalla        | `height: 100vh;`       |
| `vmin`    | Dimensión menor      | `width: 50vmin;`       |
| `vmax`    | Dimensión mayor      | `width: 50vmax;`       |
| `ch`      | Ancho del “0”        | `max-width: 70ch;`     |
| `pt`      | Puntos impresión     | `font-size: 12pt;`     |

---

<br>

# 🚀 ¿CUÁNDO USAR CADA UNA?

| ✅ Situación         | 📏 Unidad recomendada |
| ------------------- | --------------------- |
| Tamaños fijos       | `px`                  |
| Responsive design   | `%`, `vw`, `vh`       |
| Tipografía moderna  | `rem`                 |
| Espaciados internos | `em`                  |
| Pantallas completas | `vh`, `vw`            |
| Lectura de texto    | `ch`                  |
| Impresión           | `pt`, `cm`, `mm`      |

---

<br>

# 📱 UNIDADES Y RESPONSIVE DESIGN

Las unidades relativas ayudan a:

✅ adaptar el diseño
✅ mejorar móviles
✅ crear interfaces flexibles

---

## 💡 Recomendación moderna

Usar principalmente:

```txt id="8n4vke"
rem + % + vw/vh
```

---

<br>

# ❌ ERRORES COMUNES

| ❌ Error             | ✅ Solución                  |
| ------------------- | --------------------------- |
| usar solo px        | combinar unidades relativas |
| textos muy pequeños | usar rem                    |
| diseños rígidos     | usar porcentajes            |
| ignorar móviles     | usar vw/vh                  |

---

<br>

# 🏁 CONCLUSIÓN

Las unidades CSS permiten construir interfaces:

✅ flexibles
✅ modernas
✅ responsivas
✅ profesionales

---

# 🚀 CLAVE FINAL

```txt id="l4x8gm"
Elegir la unidad correcta
mejora el diseño,
la adaptabilidad
y la experiencia del usuario
```

# 🏷️ Etiquetas de Tipo Bloque y en Línea
### *Sus ejemplos y diferencias fundamentales*

---

## 🧱 Glosario: Etiquetas en Bloque (Block) vs. En Línea (Inline)

> *La forma en la que los elementos de HTML se comportan por defecto en el espacio y pantalla de tu navegador.*

> [!TIP]
> **Regla de Oro Visual:** Los elementos en **Bloque** son egoístas y adoran quedarse con todo el ancho de la pantalla. Los elementos **En Línea** son amigables, solo ocupan el espacio de su propio contenido y permiten que otros se sienten a su lado.

---

### 🟦 Etiquetas de Tipo Bloque (Block-level)

| Aspecto | Descripción |
| :--- | :--- |
| 📌 **Concepto** | Comienzan siempre en una línea nueva y ocupan automáticamente todo el ancho disponible (el 100% de su contenedor). Aunque tengan poco texto, no dejarán que nada se ponga a su lado. Se les puede aplicar propiedades de ancho (`width`) y alto (`height`). |
| 🌐 **Ejemplo Real** | Se usan para estructurar las secciones principales de una página web, párrafos y contenedores de tarjetas. |
| 💻 **Ejemplo Práctico** | Las etiquetas estructurales como `<div>`, `<header>`, `<section>`, `<p>`, `<h1>` hasta `<h6>`, y `<ul>`/`<li>`. |

---

### 🟩 Etiquetas de Tipo En Línea (Inline)

| Aspecto | Descripción |
| :--- | :--- |
|  **Concepto** | No empiezan en una línea nueva; se acomodan una al lado de la otra en la misma línea. Solo ocupan el ancho exacto de lo que miden sus palabras o su contenido interno. Ignoran por completo las propiedades de alto (`height`) y ancho (`width`) en CSS. |
|  **Ejemplo Real** | Se usan para estilizar partes específicas de un texto (como resaltar palabras en negrita), poner enlaces cliqueables o pequeños fragmentos informativos. |
| 💻 **Ejemplo Práctico** | Las etiquetas de formato de texto y navegación como `<a>`, `<span>`, `<strong>`, `<em>`, `<img>`, y `<button>`. |

---

## 📊 Matriz de Comparación Directa: Block vs. Inline

> *Esta tabla resume de manera contundente las diferencias técnicas y de comportamiento entre ambos tipos de etiquetas:*

| Característica | Elementos en Bloque (`Block`) | Elementos en Línea (`Inline`) | Diferencia Crítica de Comportamiento |
| :--- | :---: | :---: | :--- |
| **Inicio de línea** | ✅ **Sí** *(Salta a una línea nueva)* | ❌ **No** *(Se alinea de corrido)* | El bloque rompe el flujo vertical; la línea continúa el flujo horizontal. |
| **Ancho automático** |  **100%** de su contenedor | 📐 **Solo el ancho** de su contenido | El bloque genera cajas completas; la línea solo envuelve texto/objetos. |
| **Soporte de Width/Height** | ✅ **Sí** los respeta | ❌ **No** los altera *(Los ignora)* | No puedes cambiar el tamaño de una etiqueta `<span>` o `<a>` directamente en CSS. |
| **Uso de Padding/Margin** |  **Completo** *(Arriba, abajo, lados)* | 🟡 **Parcial** *(Solo izquierda y derecha)* | El margen superior e inferior no desplaza a otros elementos en etiquetas inline. |
| **Uso Principal** | 🏗️ Estructurar y maquetar layouts | 🎨 Estilizar texto o micro-interacciones | Los bloques crean el esqueleto de la web; las líneas decoran el contenido interno. |
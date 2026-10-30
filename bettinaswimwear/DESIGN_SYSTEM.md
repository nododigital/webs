# Guía de Estilo y UI (Design System) — Bettina Swimwear
**Referencia visual:** `image_5b94ba.jpg`

---

## 1. Concepto Visual y Dirección de Arte
* **Estética General:** Orgánica, minimalista, elegante y cálida (Estilo *Quiet Luxury* / *Earthy Premium*).
* **Sensación:** Espacios amplios, texturas naturales (madera, piedra, fibras), iluminación cálida y líneas muy limpias.
* **Uso del Espacio (Whitespace):** Abundante. Los elementos deben respirar. Evitar la saturación visual. Margins y paddings generosos.

---

## 2. Paleta de Colores (Variables CSS)
Basado en los tonos tierra extraídos del *moodboard*:

```css
:root {
  /* Fondo principal y áreas de respiro */
  --bg-cream: #F2EFEA; /* Blanco roto / Crema texturizado */
  
  /* Tonos primarios para fondos de sección, botones o elementos destacados */
  --primary-olive: #7A7258; /* Verde oliva cálido */
  --primary-terracotta: #80583A; /* Marrón cálido / Arcilla */
  
  /* Tipografía */
  --text-dark: #2D2B26; /* Gris muy oscuro con matiz cálido para textos legibles */
  --text-light: #F2EFEA; /* Para textos sobre fondos oscuros (oliva o terracota) */
  --text-accent: #80583A; /* Para subtítulos o enlaces sutiles */
  
  /* Bordes y divisores */
  --border-delicate: rgba(122, 114, 88, 0.3); /* Oliva con transparencia para líneas finas */
}
```

---

## 3. Tipografía
* **Titulares (H1, H2, H3) y Logotipo:**
  * **Fuentes:** `Playfair Display`, `Cormorant Garamond` o `Cinzel`.
  * **Estilo:** Serif, elegante, peso regular o ligero (300/400).
  * **Uso:** Títulos de secciones, frases destacadas. Letras ligeramente espaciadas (`letter-spacing: 0.05em`).
* **Cuerpo de Texto (P, Span, Botones):**
  * **Fuentes:** `Montserrat`, `Lato` o `Inter`.
  * **Estilo:** Sans-serif, geométrica, limpia, peso ligero a regular (300/400).
  * **Uso:** Descripciones, menús de navegación, textos largos. Alta legibilidad.
* **Acentos Visuales (Monograma / Firmas):**
  * **Fuentes:** `Great Vibes` o `Pinyon Script`.
  * **Uso:** Solo para detalles decorativos, iniciales grandes de fondo o firmas.

---

## 4. Estilo de Componentes UI
* **Botones:**
  * **Estilos:** Planos o con contorno (outline). Sin degradados.
  * **Primario:** Fondo `var(--primary-olive)` o `var(--primary-terracotta)`, texto `var(--bg-cream)`.
  * **Secundario (Outline):** Fondo transparente, borde de `1px solid var(--text-dark)`, texto `var(--text-dark)`.
  * **Bordes (Radius):** Cero (`0px`) para un look más arquitectónico y editorial, o muy sutil (`2px`). Nunca bordes completamente redondeados (pill-shape).
  * **Padding:** Amplio (ej. `padding: 12px 32px;`).
* **Sombras (Box-Shadow):**
  * Evitar sombras pesadas o artificiales. Si se usan, deben ser extremadamente suaves y difusas para emular iluminación natural:
    ```css
    box-shadow: 0 10px 30px -5px rgba(45, 43, 38, 0.05);
    ```
* **Bordes y Líneas:**
  * Uso de líneas divisorias muy finas (`1px solid var(--border-delicate)`) para separar secciones de manera elegante.

---

## 5. Tratamiento de Imágenes y Layout
* **Imágenes:** Deben tener tonos cálidos y texturas naturales (hojas, madera, piedra, telas de lino). Si se usan filtros de CSS, aplicar un ligero tono sepia o calidez (`sepia(10%) contrast(95%)`).
* **Composición:** Usar layouts asimétricos o de estilo revista/editorial. Alternar imágenes grandes con bloques de texto con mucho margen.
* **Fondos:** Alternar entre secciones con fondo `--bg-cream` y secciones de respiro con fondos plenos en `--primary-olive` o `--primary-terracotta` con texto claro.

---

## 6. Reglas de Preservación del Repositorio
* **PROHIBICIÓN ESTRICTA:** Queda prohibido modificar, sobrescribir o tocar los directorios `backup/` y `copy/`.


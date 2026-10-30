# Bettina Swimwear — Reglas del Proyecto y Sistema de Diseño

## 1. REGLA ESTRICTA DE CARPETAS PROTEGIDAS
- **NUNCA toques, leas, sobrescribas ni modifiques las carpetas `backup/` y `copy/`**. Están reservadas como resguardo intocable del cliente.

---

## 2. MANUAL DE ESTILOS Y SISTEMA DE DISEÑO (DESIGN SYSTEM)
Todo cambio visual, maquetación o componente en el proyecto `bettinaswimwear` debe ceñirse rigurosamente a las siguientes directrices:

### Concepto Visual
- **Estética:** *Quiet Luxury* / *Earthy Premium*, minimalista, orgánica y cálida.
- **Whitespace:** Abundante espacio en blanco y márgenes amplios. Evitar sobrecarga visual.

### Paleta de Colores
```css
:root {
  --bg-cream: #F2EFEA;            /* Blanco roto / Crema texturizado */
  --primary-olive: #7A7258;       /* Verde oliva cálido */
  --primary-terracotta: #80583A;  /* Marrón cálido / Arcilla */
  --text-dark: #2D2B26;           /* Gris muy oscuro con matiz cálido */
  --text-light: #F2EFEA;          /* Textos sobre fondo oscuro */
  --text-accent: #80583A;         /* Subtítulos o enlaces sutiles */
  --border-delicate: rgba(122, 114, 88, 0.3); /* Oliva con transparencia para líneas finas */
}
```

### Tipografía
- **Titulares:** `Playfair Display`, `Cormorant Garamond` o `Cinzel` (Serif, elegante, 300/400, `letter-spacing: 0.05em`).
- **Cuerpo y UI:** `Montserrat`, `Lato` o `Inter` (Sans-serif limpia, 300/400).
- **Acentos decorativos:** `Great Vibes` o `Pinyon Script`.

### Componentes UI
- **Botones:** Planos o con contorno (outline), sin degradados.
  - Primario: Fondo `var(--primary-olive)` o `var(--primary-terracotta)`, texto `var(--bg-cream)`.
  - Secundario: Borde `1px solid var(--text-dark)`, texto `var(--text-dark)`.
  - Border-radius: `0px` o muy sutil `2px`. **Nunca** bordes redondeados tipo píldora.
  - Padding generoso (ej. `12px 32px`).
- **Sombras:** Difusas y sutiles: `box-shadow: 0 10px 30px -5px rgba(45, 43, 38, 0.05);`.
- **Líneas divisorias:** `1px solid var(--border-delicate)`.
- **Fondos:** Alternar entre secciones `--bg-cream` y fondos plenos `--primary-olive` o `--primary-terracotta`.


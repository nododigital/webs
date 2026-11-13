# Contexto del Proyecto — Bettina Swimwear

> **Última actualización:** 13 de Noviembre, 2026  
> **Archivo de control:** `CONTEXTO.md` (Memoria persistente según regla `@AGENTS.md`)

---

## 1. Estado Actual y Cambios Recientes (Lo que ya está hecho)

### Catálogo de Referencias y Variantes
* **Grilla Responsive (4 columnas Desktop / 2 columnas Mobile):**
  * **Desktop (laptops 1366px y pantallas >= 1024px):** 4 columnas por fila. Las 12 referencias se distribuyen exactamente en **3 filas de 4 columnas**.
  * **Mobile:** 2 columnas por fila. Las 12 referencias se distribuyen en **6 filas de 2 columnas**.
  * **Escala Visual Adaptativa:** Alturas de banner proporcionales (`220px` móvil, `280px` tablet, `340px` desktop) y cabeceras de tarjeta (`.cat-header`) optimizadas para que los títulos y badges no colisionen en pantallas estrechas.
* **Migración y Estructura:** Se migró el catálogo de Sanity a Cloudinary (`cloud_name: juf33buk`). Se estructuraron 12 referencias oficiales (`Arena`, `Azure`, `Luna Mare`, `Perla`, `Palma`, `Saint`, `Marina`, `Bendita`, `Coconut`, `Marfil`, `Sirena`, `Solea`) con 20 variantes y 27 fotos en total.
* **Resolución de Nombres en Cloudinary:** Carga sin colisiones de nombres usando sufijos descriptivos (`arena_azul_editorial` vs `arena_azul_catalogo`) bajo `bettinaswimwear/catalogo/{ref}/{variante}/`. Mapeo respaldado en `E:\Carpetas\Descargas\catalogo_bettina\catalogo_cloudinary.json`.
* **Esquema de Precios:**
  * **Bendita:** $300.000 COP
  * **Luna Mare:** $280.000 COP
  * **Demás 10 referencias:** $250.000 COP
* **Barra de Anuncio Superior:** Actualizada a *"ENVÍOS GRATIS POR COMPRAS SUPERIORES A $300.000"*.
* **WhatsApp:** Configurado con el número `573116504321` y mensaje dinámico pre-armado con referencia, variante y precio.

### Navegación y UX: Falso Interstitial / Modal de Detalle
* **Preservación Total del Scroll:** La grilla principal (`#vista-inicio`) nunca se oculta (`display: none`) ni se resetea al hacer scroll.
* **Capa Elevada:** Al pulsar una referencia, se abre `#vista-detalle` como un modal a pantalla completa en móviles y una tarjeta flotante centrada con fondo desenfocado (`backdrop-filter: blur(8px)`) en desktop.
* **Optimización Visual Mobile (Above-the-Fold en Galaxy S23 Ultra y móviles):**
  * Basado en la captura real del Galaxy S23 Ultra, se ajustaron las alturas y márgenes verticales del modal para que el botón de WhatsApp (*"Quiero este modelo"*) quede **100% visible en el viewport inicial**, sin quedar recortado ni exigir scroll al usuario.
  * `.visor-imagen` en móvil ajustado a `height: 32vh; min-height: 190px; max-height: 265px;` (previamente `42vh`).
  * Ritmo vertical compacto en móvil: `.modal-dialog` padding `0.75rem 1rem`, `.modal-header-nav` márgenes reducidos, tipografía del bloque de texto principal ajustada armónicamente (`h2` a `1.5rem`, precio a `1.3rem`), miniaturas a `56px` y botón WA con padding `0.7rem 1rem` y `border-radius: 6px`.
  * La altura total del contenido en móvil pasó de ~730px a ~510px, garantizando visibilidad inmediata sobre cualquier pantalla móvil moderna ($\ge 600$px).
* **Sincronización con Botón "Atrás" (`History API`):** Al abrir una referencia se añade `#ref-nombre` al historial. Si el usuario presiona el botón "Atrás" o usa el gesto táctil del teléfono, el modal se cierra fluidamente sin sacarlo del sitio web.
* **Cierres Adicionales:** Botón *"← Volver a referencias"*, botón de cierre `✕`, tecla `Escape` o clic fuera del modal.

### Visor de Producto, Carrusel y Autoplay
* **Autoplay Inteligente:** En variantes con múltiples fotos ($n > 1$), las imágenes rotan automáticamente cada **3 segundos** (`3000 ms`).
* **Detención por Intervención:** El autoplay se detiene de forma definitiva en cuanto el usuario interviene manualmente (flechas `‹`/`›`, dots inferiores o deslizamiento táctil `touch/swipe`).
* **Optimización Web (CLS y Caché):** Contenedor `.visor-imagen` con alturas responsive fijas (`42vh` móvil, `58vh` desktop) y `contain: layout paint` para eliminar saltos de maquetación (CLS).
* **Precarga en Memoria:** `precargarTodoElCatalogo()` ejecuta en segundo plano (`requestIdleCallback`) para precachear las 27 imágenes en RAM, logrando cambios de imagen instantáneos.

### Hero y Portada
* **Imagen Hero:** Subida de `bettina-hero.jfif` optimizada en Cloudinary como `bettinaswimwear/hero/bettina-hero.jpg` (2.49 MB a ~151 KB, -93.8% con `f_auto,q_auto,c_scale,w_1920`).
* **Diseño Limpio:** Se eliminaron los textos superpuestos (*"Inspirados en la Tierra"* / *"Creados para el Mar"*) y la capa de oscurecimiento artificial, mostrando la fotografía editorial con nitidez y luz natural.

### Video de Fondo (Loop Decorativo)
* **Video Activo:** `Chica_bailando_en_el_escenario_4c95b02a.mp4` subido a Cloudinary (`v1794373811`).
* **Optimización:** Transformación `q_auto,w_1280` pasando de 4.30 MB a **1.08 MB (-75.0%)**.
* **Carga Diferida:** Atributos `preload="none"` y activación mediante `IntersectionObserver` (`rootMargin: 300px`), evitando que el video compita con la carga inicial de fotos.

### Tipografía y Código
* **Tipografía Serif:** Cambiada a **EB Garamond** en todo el proyecto:
  * Google Fonts importada en `index.html`.
  * Variable `--font-serif: "EB Garamond", serif;` en `style.css`.
  * Aplicada en todo el bloque de referencias, tarjetas, títulos, precios, variantes y modal.
* **Corrección de Advertencias CSS:** Eliminado `vertical-align: middle` de elementos con `display: block` en `style.css`.

---

## 2. Reglas Activas y Decisiones de Diseño

1. **REGLA ABSOLUTA DE CARPETAS PROTEGIDAS:**
   * **NUNCA tocar, leer, sobrescribir ni modificar las carpetas `backup/` y `copy/`**. Son intocables.
2. **Sistema de Diseño (*Quiet Luxury* / *Earthy Premium*):**
   * **Paleta:**
     * `--bg-cream: #F2EFEA;` (Fondo y tarjetas modales)
     * `--primary-olive: #7A7258;` (Detalles y badges)
     * `--primary-terracotta: #80583A;` (Acentos y precios)
     * `--text-dark: #2D2B26;` (Texto principal)
     * `--border-delicate: rgba(122, 114, 88, 0.3);` (Líneas divisorias finas)
   * **Tipografía:** `EB Garamond` para titulares y catálogo; `Montserrat` / `Inter` para UI secundaria.
   * **Botones:** Bordes planos o radio sutil de `0px` a `2px`. Nunca formas redondeadas tipo píldora.
   * **Sombras:** Difusas y tenues (`box-shadow: 0 10px 30px -5px rgba(45, 43, 38, 0.05);`).

---

## 3. Pendientes Inmediatos

1. **Validación en Dispositivo Móvil:**
   * Confirmar en el Galaxy S23 Ultra que la visualización del modal despliega el botón de WhatsApp holgadamente en el primer plano.
2. **Control de Versiones (Git):**
   * Realizar commit y push a GitHub (`git push origin main`) con los cambios de la grilla (4 desktop / 2 mobile) y el ajuste de altura del modal de detalle.

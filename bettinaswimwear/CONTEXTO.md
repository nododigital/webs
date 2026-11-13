# Contexto del Proyecto — Bettina Swimwear

> **Última actualización:** 13 de Noviembre, 2026  
> **Archivo de control:** `CONTEXTO.md` (Memoria persistente según regla `@AGENTS.md`)

---

## 1. Estado Actual y Cambios Recientes (Lo que ya está hecho)

### Catálogo de Referencias y Variantes
* **Grilla Responsive (4 columnas Desktop / 2 columnas Mobile):**
  * **Desktop (laptops 1366px y pantallas >= 1024px):** 4 columnas por fila. Las 12 referencias se distribuyen exactamente en **3 filas de 4 columnas**.
  * **Mobile:** 2 columnas por fila. Las 12 referencias se distribuyen en **6 filas de 2 columnas**.
  * **Banners de Tarjetas con Proporción Cuadrada:** Se ajustó `.card-categoria img.banner` a `aspect-ratio: 1 / 1; height: auto;`, mostrando las imágenes en su encuadre 1:1 original sin cortes de cabecera ni laterales.
* **Actualización de Imágenes Cloudinary (Recorte Cuadrado 1024x1024):** Se actualizaron los campos de imágenes en `appData.categorias` a partir de `catalogo_cloudinary.json`, incorporando las nuevas versiones optimizadas y recortadas a formato cuadrado por el usuario.
* **Ajustes en Referencias (Imágenes y Variantes):**
  * **Palma (Unificación a Variante Blanco con Slides):** Se unificaron las variantes "Rosado" y "Verde Oliva" en una sola variante denominada **"Blanco"**, integrando sus 2 fotografías en carrusel deslizable con autoplay.
  * **Arena (Variante Negro):** Se reemplazó la imagen previa por `Gemini_Generated_Image_b7q0xwb7q0xwb7q0.jfif`, optimizada a $1024 \times 1024$ px y subida a Cloudinary como `bettinaswimwear/catalogo/arena/negro/arena_negro.jpg` (`v1794590805`).
  * **Luna Mare (Variante Dorado):** Se eliminó la foto secundaria `luna_mare_foto.jpg`, quedando únicamente con `luna_mare_dorado_sin_pareo.png`.
  * **Luna Mare (Variante Gris):** Se creó la variante "Gris" subiendo a Cloudinary la imagen `LUNA MARE FOTO.jpg` optimizada a $1024 \times 1024$ px (`bettinaswimwear/catalogo/luna_mare/gris/luna_mare_gris.jpg`) con el precio de $280.000 COP.
* **Migración y Estructura:** Se estructuraron las 12 referencias oficiales (`Arena`, `Azure`, `Luna Mare`, `Perla`, `Palma`, `Saint`, `Marina`, `Bendita`, `Coconut`, `Marfil`, `Sirena`, `Solea`) con 20 variantes y 27 fotos en total.
* **Esquema de Precios:**
  * **Bendita:** $300.000 COP
  * **Luna Mare:** $280.000 COP
  * **Demás 10 referencias:** $250.000 COP
* **Barra de Anuncio Superior:** Actualizada a *"ENVÍOS GRATIS POR COMPRAS SUPERIORES A $300.000"*.
* **WhatsApp:** Configurado con el número `573116504321` y mensaje dinámico pre-armado con referencia, variante y precio.

### Navegación y UX: Falso Interstitial / Modal de Detalle
* **Preservación Total del Scroll:** La grilla principal (`#vista-inicio`) nunca se oculta (`display: none`) ni se resetea al hacer scroll.
* **Capa Elevada:** Al pulsar una referencia, se abre `#vista-detalle` como un modal a pantalla completa en móviles y una tarjeta flotante centrada con fondo desenfocado (`backdrop-filter: blur(8px)`) en desktop.
* **Visor con Formato Cuadrado Exacto (1:1 Aspect Ratio):**
  * `.visor-imagen` configurado con `aspect-ratio: 1 / 1; height: auto;`.
  * **Mobile:** `max-width: min(100%, 35vh, 300px); margin: 0 auto;`. Mantiene la fotografía 100% cuadrada y centrada, al tiempo que preserva la altura total compacta (~530px) para que el botón de WhatsApp (*"Quiero este modelo"*) quede siempre visible sin necesidad de scroll.
  * **Desktop:** `max-width: 460px; max-height: 460px;` en grilla `1fr 1fr`, presentando la fotografía de producto con máximo detalle y elegancia armónica.
* **Sincronización con Botón "Atrás" (`History API`):** Al abrir una referencia se añade `#ref-nombre` al historial. Si el usuario presiona el botón "Atrás" o usa el gesto táctil del teléfono, el modal se cierra fluidamente sin sacarlo del sitio web.
* **Cierres Adicionales:** Botón *"← Volver a referencias"*, botón de cierre `✕`, tecla `Escape` o clic fuera del modal.

### Visor de Producto, Carrusel y Autoplay
* **Transición Limpia y Decodificación Asíncrona sin Parpadeo (`img.decode()`):**
  * Se eliminó el delay/parpadeo de centésimas de segundo donde el navegador mantenía dibujada la imagen previa antes de procesar la nueva en la GPU.
  * Ocultamiento instantáneo de la foto saliente (`opacity: 0` mediante clase `.cargando`) y revelado suave (`transition: opacity 0.12s`) únicamente cuando la nueva imagen ya está decodificada en memoria gráfica (`await img.decode()`).
  * En `cerrarDetalle()`, se resetea la imagen en segundo plano tras el fade-out (250ms), garantizando que al abrir cualquier otra referencia nunca haya residuos visuales en el modal.
* **Autoplay Inteligente:** En variantes con múltiples fotos ($n > 1$), las imágenes rotan automáticamente cada **3 segundos** (`3000 ms`).
* **Detención por Intervención:** El autoplay se detiene de forma definitiva en cuanto el usuario interviene manualmente (flechas `‹`/`›`, dots inferiores o deslizamiento táctil `touch/swipe`).
* **Optimización Web (CLS y Caché):** Contenedor `.visor-imagen` con alturas responsive fijas (`42vh` móvil, `58vh` desktop) y `contain: layout paint` para eliminar saltos de maquetación (CLS).
* **Precarga en Memoria:** `precargarTodoElCatalogo()` ejecuta en segundo plano (`requestIdleCallback`) para precachear las 27 imágenes en RAM, logrando cambios de imagen instantáneos.

### Hero y Portada
* **Imagen Hero:** Subida de `bettina-hero.jfif` optimizada en Cloudinary como `bettinaswimwear/hero/bettina-hero.jpg` (2.49 MB a ~151 KB, -93.8% con `f_auto,q_auto,c_scale,w_1920`).
* **Diseño Limpio:** Se eliminaron los textos superpuestos (*"Inspirados en la Tierra"* / *"Creados para el Mar"*) y la capa de oscurecimiento artificial, mostrando la fotografía editorial con nitidez y luz natural.

### Video de Fondo (Loop Decorativo)
* **Video Activo:** `Chica_bailando_en_el_escenario_fd62bf7f.mp4` subido a Cloudinary (`v1794592839`).
* **Optimización:** Transformación `q_auto,w_1280` pasando de 3.51 MB a **0.95 MB (-72.9%)**.
* **Encuadre y Posicionamiento:** Contenedor a `h-[60dvh]` con `object-cover` y punto focal vertical fijado con precisión exacta al **62%** (`object-position: center 62% !important`).
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
2. **REGLA ESTRICTA DE CONTROL DE VERSIONES (GIT):**
   * **NUNCA ejecutar `git add`, `git commit` ni `git push` por iniciativa propia.**
   * Todas las operaciones de Git son directrices exclusivas del usuario y solo se ejecutarán si se solicita de manera explícita.
3. **Sistema de Diseño (*Quiet Luxury* / *Earthy Premium*):**
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

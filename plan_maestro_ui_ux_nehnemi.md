# 🗺️ Plan Maestro de Rediseño UI/UX para Nehnemi (Landing Page)

**Documento de Referencia para Agentes de IA y Equipo de Desarrollo**
*Proyecto: Nehnemi - Experiencia de Exploración Urbana y Coleccionables Históricos.*

## 1. Visión y Objetivos Estratégicos

Nehnemi es una iniciativa que conecta a los usuarios con la historia oculta de Guadalajara. Actualmente, nuestra punta de lanza son nuestros **Kits de Exploración**, pequeños juegos independientes llenos de coleccionables y cartas de personajes históricos.

* **Público Objetivo:** Jóvenes locales (Gen Z / Millennials), amantes de la historia, jugadores de juegos de mesa/cartas y turistas culturales.
* **Enfoque Principal:** *Mobile-First* para fácil navegación, con alto enfoque visual en las ilustraciones de las cartas.
* **Meta de Conversión:** Lograr que los visitantes descubran, se interesen y adquieran nuestros **Kits de Exploración y Coleccionables Históricos** (dejando el registro de la app para una fase futura). Además, **captar correos electrónicos a través de un formulario de newsletter** para construir una comunidad activa e interesada en el desarrollo de futuros juegos y coleccionables.

## 2. Sistema de Diseño (Design System)

### A. Paleta de Colores (Identidad "Dark Urban Fantasy / Códice")
* **Background Primario:** `#120F0D` a `#1A1612` (Gradiantes radiales para resaltar las cartas).
* **Superficies/Tarjetas (Glassmorphism):** `#261F18` con opacidad al 80% y `backdrop-blur-md`. Bordes sutiles en `rgba(212, 175, 55, 0.15)`.
* **Acentos (Oro / Patrimonio):** `#D4AF37` (Primario, para botones de compra y marcos de cartas) y `#F2DFB0` (Hover states).
* **Énfasis/Interactividad (Verde Neón/Magia):** `#10B981` (Para etiquetas de "Nuevo" o rareza de cartas).
* **Texto:** `#F9F2DD` (Títulos) y `#D9C8A7` (Descripciones de productos).

### B. Tipografía
* **Títulos (Display/Narrativa):** `Cinzel` o `Syne` (Aporta un tono épico y de misterio a las cartas).
* **Cuerpo de texto & UI:** `Manrope`, `Inter` o `Geist` (Limpia y moderna).

### C. Animaciones (Framer Motion / Tailwind)
* **Efecto estrella:** Las cartas de personajes deben tener un efecto de "Tilt" (inclinación 3D) al pasar el cursor o hacer tap en móvil, emulando el brillo holográfico de cartas coleccionables.
* Botones principales con efecto de "respiración" sutil.

## 3. Arquitectura de Información y Componentes (Layout)

### 📍 Header & Navegación
* Logo de Nehnemi.
* Menú oculto en móvil. En desktop: `Colección`, `Personajes`, `Historia`, `Únete`.
* CTA primario: **"Ver Kits"** (Botón sólido dorado).

### 🚀 Hero Section
* **Layout:** Flex-col en móvil, Grid 2-columnas en Desktop.
* **Copy:**
  * Tagline: `COLECCIONABLES HISTÓRICOS · GUADALAJARA`
  * H1: *"La historia de la ciudad está en tus manos."*
  * Subtítulo: *"Descubre nuestros kits de exploración: pequeños juegos, cartas de personajes ilustres y misterios del pasado de Guadalajara listos para coleccionar."*
* **CTAs:** `[Explorar los Kits]` (Primario) | `[Conoce a los Personajes]` (Secundario outline).
* **Visual:** Composición tipo "Fan spread" (abanico) mostrando 3 cartas de personajes históricos de Nehnemi flotando y solapándose.

### 🛍️ Sección 1: Los Kits (Nuestro Producto)
* Grid de productos (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
* **Tarjetas de Producto:**
  * Imagen del Kit o sobre de cartas.
  * Título (ej. "Kit: El Secreto del Hospicio").
  * Descripción breve (Qué incluye: 5 cartas, 1 mapa, 1 token de historia).
  * Etiqueta de precio o CTA "Saber más".

### 🃏 Sección 2: Galería de Personajes (El Atractivo Visual)
* Carrusel interactivo estilo *Cover Flow*.
* Mostrar el arte de las cartas de personajes históricos (ej. un general revolucionario, un arquitecto de la catedral).
* Al hacer clic, la carta se voltea (Flip animation) revelando un fragmento de su historia o sus estadísticas de juego.

### 🏛️ Sección 3: El Universo Nehnemi (Lore)
* Breve sección narrativa explicando que estos kits son la puerta de entrada a un universo más grande de exploración urbana.
* Mención sutil de los lugares históricos en los que se basan los juegos (Catedral, Palacio de Gobierno, etc.).

### 📩 Sección 4: Únete a la Sociedad (Newsletter y Comunidad)
* **Objetivo:** Convertir visitantes en "Cronistas" (suscriptores) para mantenerlos al tanto del desarrollo, futuros lanzamientos y crear comunidad.
* **Copy:**
  * **Título (H2):** *"Únete a la Sociedad de Cronistas"*
  * **Subtítulo:** *"Descubre los secretos detrás del desarrollo de Nehnemi. Recibe historias ocultas de la ciudad, adelantos de nuevas cartas y acceso anticipado a futuros coleccionables antes que nadie."*
* **Formulario:** Minimalista, de un solo campo para Email.
* **Botón CTA (Submit):** *"Revelar el pasado" o "Suscribirme"*
* **Mensaje de éxito:** *"¡Bienvenido Cronista! El primer secreto va en camino a tu bandeja."*

### 📜 Footer
* Links a redes sociales, términos de servicio y contacto.

## 4. Instrucciones Directas para Agentes de IA (Prompt Master)

*Copia y pega este bloque en herramientas como Cursor, v0, Bolt.new o Claude/ChatGPT para generar código.*

```
Actúa como un Desarrollador Frontend Experto y Diseñador UI/UX.
Tu tarea es construir la Landing Page de "Nehnemi" usando [Astro / React / Next.js] con Tailwind CSS.

REGLAS ESTRICTAS DE DISEÑO:
1. Tema: "Dark Urban Fantasy / Coleccionables". Fondo: #1A1612. Textos: #F9F2DD y #D9C8A7. Acentos: #D4AF37 (Oro).
2. Estilo de Componentes: Glassmorphism para paneles. El foco visual absoluto debe ser en "Cartas Coleccionables" (Trading Cards).
3. Animaciones: Implementa un efecto 3D "Tilt" y brillo (glare) en las imágenes de las cartas para que se sientan como coleccionables físicos reales al interactuar.
4. Layout: Mobile-first con gaps consistentes (gap-8 a gap-12).

SECCIONES A CONSTRUIR:
1. Navbar (Logo, Links a 'Kits' y 'Personajes', CTA 'Ver Tienda/Kits').
2. Hero Section (H1 enfocado en coleccionar la historia, 2 botones CTA, y a la derecha una composición de cartas apiladas flotando).
3. 'Nuestros Kits' (Grid de tarjetas mostrando paquetes de juegos/cartas con descripción y botones de interés).
4. 'Galería de Cartas' (Carrusel interactivo mostrando el arte de personajes históricos. Si es posible, añade una animación de 'flip' para ver el reverso).
5. Newsletter ('Únete a la Sociedad de Cronistas'): Una sección visualmente destacada (usando un panel glassmorphism oscuro y acentos dorados) para captar emails. El copy debe sugerir misterio y acceso a información privilegiada sobre el desarrollo del juego y coleccionables futuros.
6. Footer básico.

Genera código semántico, orientado a producto/e-commerce ligero y captación de leads.
```

## 5. Roles del Equipo Técnico

* **Osvaldo (UI/UX):** Diseño detallado de las cartas de personajes (frente y reverso), empaques de los kits y assets para la web.
* **Samuel (Dev):** Implementación de este código, enfocándose especialmente en las animaciones 3D de las cartas (puedes usar librerías como `react-tilt` o CSS puro), la galería de productos y la conexión del formulario de la newsletter.
* **Christian (Contenido):** Redacción del lore en las cartas, descripciones atractivas de los kits y el micro-copy enfocado en despertar el deseo de coleccionismo y la curiosidad para suscribirse a la newsletter.
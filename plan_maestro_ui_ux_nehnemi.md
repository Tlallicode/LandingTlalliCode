# 🗺️ Plan Maestro de Rediseño UI/UX para Nehnemi (Landing Page)

**Documento de Referencia para Agentes de IA y Equipo de Desarrollo**
*Proyecto: Nehnemi - App de Exploración Urbana & Kits Coleccionables (Proyecto de Titulación).*

## 1. Visión y Objetivos Estratégicos

<selection-tag>Nehnemi es una iniciativa que conecta a los usuarios con la historia oculta de Guadalajara. Nuestro producto central es una aplicación móvil gamificada de exploración urbana. Como complemento y punta de lanza para generar tracción, ofrecemos nuestros **Kits de Exploración**, pequeños juegos físicos independientes llenos de coleccionables y cartas de personajes históricos ligados a la app.</selection-tag>

* **Público Objetivo:** Jóvenes locales (Gen Z / Millennials), estudiantes, turistas culturales y entusiastas de la tecnología y los videojuegos de realidad aumentada.
* **Enfoque Principal:** *Mobile-First*, enfocado en transmitir la experiencia híbrida (digital/física).
* **Metas de Conversión de la Landing Page:**
    1. **Pre-registro / Newsletter (Primario):** Captar correos de "beta-testers" o interesados en el lanzamiento de la app (Proyecto de Titulación).
    2. **Promoción de los Kits (Secundario):** Mostrar los coleccionables como una forma de experimentar Nehnemi *ahora mismo* y apoyar el proyecto.

## 2. Sistema de Diseño (Design System)

### A. Paleta de Colores (Identidad "Tecnología Urbana & Códice Histórico")
* **Fondo Principal:** `#120F0D` (Efecto nocturno, modo oscuro natural para apps móviles).
* **Superficies/Tarjetas (UI de la App):** `#261F18` con `backdrop-blur` y bordes en `#3A2F23`.
* **Acentos (Oro / Patrimonio):** `#D4AF37` (Para elementos históricos, cartas, rangos).
* **Interactividad (Cian/Verde Neón):** `#00F2FE` o `#10B981` (Para simular la geolocalización, pines de mapa digitales y botones de acción principal).
* **Texto:** `#F9F2DD` (Títulos) y `#D9C8A7` (Texto secundario).

### B. Tipografía
* **Títulos (Display/Narrativa):** `Cinzel` o `Syne` (Conecta con lo histórico).
* **Cuerpo de texto & UI:** `Manrope` o `Inter` (Look tecnológico y moderno para la interfaz de la app).

## 3. Arquitectura de Información y Componentes (Layout)

### 📍 Header & Navegación
* Logo de Nehnemi.
* Menú: `La App`, `El Mapa`, `Kits Coleccionables`, `Únete a la Beta`.
* CTA destacado: **"Registrarse a la Beta"**.

### 🚀 Hero Section (El Centro de la Experiencia)
* **Objetivo:** Mostrar de inmediato que es una app móvil interactiva.
* **Layout (Desktop):** Split view.
  * **Izquierda (Copy):**
    * Tagline: `PROXIMAMENTE · APP DE EXPLORACIÓN URBANA`
    * H1: *"Juega con la historia oculta de Guadalajara."*
    * Subtítulo: *"Descubre la ciudad como nunca antes. Una aplicación que combina geolocalización, narrativa y misterios reales. Únete a la beta cerrada y conviértete en un Cronista Fundador."*
    * CTA: `[Unirse a la Beta (Email)]` (Botón principal con brillo).
  * **Derecha (Visual Hook):** Un mockup de smartphone 3D o de alta calidad mostrando la interfaz de la app (el mapa oscuro con pines brillantes o una pantalla de misión).

### 📱 Sección 1: La App - ¿Cómo Funciona? (Características Clave)
* **Layout:** Grid o presentación alternada de características.
* **1. Explora el Mapa:** "Usa la geolocalización para encontrar puntos de interés ocultos en la ciudad." (Visual: UI del mapa).
* **2. Resuelve Misterios:** "Desbloquea misiones al llegar a lugares emblemáticos como la Catedral o el Hospicio Cabañas." (Visual: Pantalla de narrativa/quiz).
* **3. Sube de Rango:** "De 'Ruinas' a 'Mictlán de Sendas'. Gana insignias digitales por tu exploración." (Visual: Sistema de progresión).

### 📦 Sección 2: El Universo Físico - Los Kits de Exploración
* **Transición narrativa:** "La historia no solo vive en tu pantalla..."
* **Objetivo:** Presentar los productos físicos como expansiones del juego.
* **Layout:** Galería o carrusel.
* **Contenido:**
  * Mostrar los **Kits de Exploración** físicos.
  * Resaltar las **Cartas de Personajes Históricos** (Aplicar el efecto de inclinación/Tilt 3D para que luzcan coleccionables).
  * CTA: `[Adquirir Kit / Ver Más]`

### 📩 Sección 3: Newsletter (Convocatoria a Beta-Testers)
* **Objetivo:** Crear la base de datos para el proyecto de titulación.
* **Copy:**
  * H2: *"Forma parte del origen. Únete a la Sociedad de Cronistas."*
  * Subtítulo: *"Regístrate para tener acceso anticipado a la app, recibir noticias sobre el desarrollo y obtener beneficios exclusivos en nuestros kits físicos."*
* **Formulario:** Campo de Email limpio y directo.

### 📜 Footer
* Links institucionales (si aplica para la universidad/titulación), redes sociales.

## 4. Instrucciones Directas para Agentes de IA (Prompt Master)

```markdown
Actúa como un Desarrollador Frontend Experto y Diseñador UI/UX.
Tu tarea es construir la Landing Page de "Nehnemi" usando [Astro / React / Next.js] con Tailwind CSS.

CONTEXTO DEL PROYECTO:
Es una landing page para el lanzamiento de una App Móvil/Videojuego de exploración urbana con geolocalización. Adicionalmente, el proyecto vende "Kits de Exploración" físicos (cartas y juegos coleccionables).

REGLAS DE DISEÑO:
1. Tema: "Tech Urbano Oscuro" + "Códice Histórico". Fondo principal: #120F0D.
2. Tipografía: Títulos épicos/históricos (ej. Cinzel), cuerpo de texto moderno y limpio (ej. Inter).
3. Acentos visuales: Usa Cian/Verde Neón (#00F2FE) para elementos tecnológicos/app y Oro (#D4AF37) para elementos históricos y cartas.

SECCIONES REQUERIDAS:
1. Hero Section: Título poderoso sobre "Jugar con la historia". A la izquierda el copy y el formulario de captura de email (Beta-testers). A la derecha, DEBES simular un mockup de un smartphone mostrando un mapa oscuro con pines de neón.
2. Características de la App: Grid de 3 columnas explicando el gameplay (Exploración GPS, Resolución de Misterios, Insignias). Usa diseño de tarjetas "Glassmorphism".
3. Sección de Kits Físicos: Muestra productos físicos (cartas). Implementa una animación 'Tilt' (3D en hover) para las cartas coleccionables.
4. Sección CTA Final/Newsletter: Un bloque oscuro y misterioso invitando a unirse a la "Sociedad de Cronistas" (beta testers) con un input de email.

El código debe ser completamente responsivo, priorizando la vista móvil.
```

## 5. Roles del Equipo (Alineado a Proyecto Académico)

* **Samuel (Desarrollo Técnico):**
  * Configurar la arquitectura frontend.
  * Asegurar que el formulario de "Beta-testers" (Newsletter) guarde los datos correctamente (indispensable para las pruebas con usuarios de la titulación).
* **Osvaldo (UI/UX):**
  * Crear los mockups de la interfaz de la app para el Hero Section.
  * Diseñar la estética visual que una la app móvil (tecnología) con los kits físicos (historia).
* **Christian (Contenido/Dirección):**
  * Redactar el copy enfatizando la propuesta de valor del *videojuego* como atractivo principal, usando los kits como ganchos adicionales.
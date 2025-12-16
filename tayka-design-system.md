# TAYKA - Sistema de Diseño Pedagógico
## Diseño para Niños con Autismo

---

## 🎨 PALETA DE COLORES

### Colores Primarios (Calmantes y Claros)
```css
--tayka-sky-blue: #87CEEB;      /* Azul cielo - calma */
--tayka-soft-green: #90EE90;    /* Verde suave - naturaleza */
--tayka-warm-yellow: #FFD966;   /* Amarillo cálido - alegría */
--tayka-gentle-coral: #FF9999;  /* Coral suave - calidez */
--tayka-lavender: #E6E6FA;      /* Lavanda - serenidad */
```

### Colores de Apoyo
```css
--tayka-white: #FFFFFF;
--tayka-cream: #FFF8DC;         /* Fondo suave */
--tayka-light-gray: #F5F5F5;    /* Áreas secundarias */
--tayka-dark-text: #2C3E50;     /* Texto principal */
--tayka-medium-text: #5A6C7D;   /* Texto secundario */
```

### Colores de Estado (Visuales claros)
```css
--tayka-success: #4CAF50;       /* Verde éxito */
--tayka-warning: #FFA726;       /* Naranja advertencia */
--tayka-info: #29B6F6;          /* Azul información */
--tayka-complete: #9C27B0;      /* Púrpura completado */
```

---

## 📝 TIPOGRAFÍA

### Fuentes Recomendadas
```css
/* Opción 1: Sans-serif amigable */
font-family: 'Nunito', 'Comic Neue', 'Quicksand', sans-serif;

/* Opción 2: Más estructura */
font-family: 'Poppins', 'Open Sans', sans-serif;

/* Para números y elementos importantes */
font-family: 'Fredoka One', 'Baloo 2', cursive;
```

### Escalas de Tamaño
```css
--tayka-text-xs: 14px;   /* Notas pequeñas */
--tayka-text-sm: 16px;   /* Texto normal */
--tayka-text-md: 18px;   /* Texto destacado */
--tayka-text-lg: 24px;   /* Subtítulos */
--tayka-text-xl: 32px;   /* Títulos */
--tayka-text-2xl: 48px;  /* Títulos principales */
--tayka-text-3xl: 64px;  /* Hero */
```

### Espaciado y Legibilidad
```css
line-height: 1.6;        /* Espaciado generoso */
letter-spacing: 0.5px;   /* Letras separadas */
font-weight: 600;        /* Peso medio-bold para claridad */
```

---

## 🎯 COMPONENTES CLAVE

### 1. TARJETAS DE CATEGORÍA (Tipo DibuBaron)
```
Características:
- Bordes redondeados grandes (border-radius: 24px)
- Sombras suaves (box-shadow: 0 8px 24px rgba(0,0,0,0.1))
- Emoji grande arriba (font-size: 64px)
- Efecto hover con elevación
- Transiciones suaves (300ms)
- Fondo gradiente suave opcional
```

### 2. BOTONES GRANDES Y CLAROS
```
Características:
- Mínimo 48px de altura (fácil de tocar)
- Padding generoso: 16px 32px
- Bordes redondeados: 16px
- Iconos + texto siempre
- Estados visuales muy claros (hover, active, disabled)
- Efecto de "press" al hacer click
```

### 3. INDICADORES DE PROGRESO
```
Elementos visuales:
- Barra de progreso con emojis
- Números grandes y claros
- Estrellas/medallas por logros
- Checkmarks animados ✓
- Colores que cambian según avance
```

### 4. NAVEGACIÓN VISUAL
```
Características:
- Menú con iconos grandes
- Breadcrumbs con emojis
- "Estás aquí" bien marcado
- Flechas grandes para siguiente/anterior
- Siempre visible dónde estás
```

---

## 🌟 PRINCIPIOS DE DISEÑO PARA AUTISMO

### 1. PREDECIBILIDAD
```
✓ Layout consistente en todas las páginas
✓ Elementos siempre en el mismo lugar
✓ Mismos colores para mismas acciones
✓ Rutas de navegación claras
✓ Sin cambios inesperados
```

### 2. CLARIDAD VISUAL
```
✓ Espacios blancos abundantes
✓ Un elemento principal por sección
✓ Jerarquía visual muy clara
✓ Contraste alto para lectura
✓ Sin fondos complejos o texturas
```

### 3. FEEDBACK INMEDIATO
```
✓ Animaciones de confirmación
✓ Sonidos opcionales (con control)
✓ Cambios de color al interactuar
✓ Mensajes de éxito claros
✓ Celebraciones visuales de logros
```

### 4. CONTROL DEL USUARIO
```
✓ Pausar/reanudar actividades
✓ Ajustar velocidad de animaciones
✓ Activar/desactivar sonidos
✓ Modo de alto contraste
✓ Tamaño de texto ajustable
```

### 5. REDUCCIÓN DE ANSIEDAD
```
✓ Sin temporizadores estresantes
✓ Permitir errores sin penalización
✓ Poder volver atrás siempre
✓ Guardar progreso automáticamente
✓ Opciones de "pausa sensorial"
```

---

## 🎪 ELEMENTOS INTERACTIVOS ESPECIALES

### 1. ZONA DE CALMA
```
Incluir un botón accesible siempre:
- "🌙 Zona Tranquila"
- Lleva a espacio minimalista
- Colores suaves
- Animaciones lentas opcionales
- Sonidos de naturaleza (opcional)
```

### 2. SISTEMA DE RECOMPENSAS VISUAL
```
- Stickers coleccionables
- Avatares personalizables
- Jardín que crece con actividades
- Álbum de logros
- Celebraciones sin presión
```

### 3. INSTRUCCIONES MULTIMODAL
```
Cada actividad tiene:
- 👁️ Imagen/video demostrativo
- 📝 Texto simple paso a paso
- 🔊 Audio opcional (voz clara)
- ✋ Ejemplo interactivo
```

### 4. TRANSICIONES SUAVES
```css
/* Todas las transiciones lentas y predecibles */
transition: all 400ms ease-in-out;

/* Cambios de página con fade */
opacity: 0 → 1
transform: translateY(20px) → translateY(0)
```

---

## 📱 COMPONENTES RESPONSIVE

### Breakpoints
```css
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

### Grid Adaptativo
```css
/* Mobile: 1 columna */
/* Tablet: 2 columnas */
/* Desktop: 3-4 columnas */
/* Mantener siempre espacio generoso */
```

---

## 🎨 ELEMENTOS DECORATIVOS

### Emojis Pedagógicos
```
✨ - Especial/Destacado
⭐ - Logro/Estrella
🎯 - Objetivo/Meta
💚 - Bien hecho/Positivo
🎨 - Creatividad
🚀 - Inicio/Adelante
⏸️ - Pausa
🏠 - Home/Inicio
👋 - Bienvenida
🎉 - Celebración
```

### Formas Amigables
```
- Círculos y óvalos (nunca esquinas agudas)
- Nubes
- Estrellas redondeadas
- Corazones suaves
- Ondas
```

---

## 🔧 UTILIDADES CSS

### Sombras Suaves
```css
.tayka-shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.tayka-shadow-md {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.tayka-shadow-lg {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

### Bordes Redondeados
```css
.tayka-rounded-sm { border-radius: 8px; }
.tayka-rounded-md { border-radius: 16px; }
.tayka-rounded-lg { border-radius: 24px; }
.tayka-rounded-xl { border-radius: 32px; }
.tayka-rounded-full { border-radius: 9999px; }
```

### Espaciados Consistentes
```css
/* Sistema de 8px */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
```

---

## 🎬 ANIMACIONES RECOMENDADAS

### Entrada de Elementos
```css
@keyframes tayka-fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Celebración
```css
@keyframes tayka-celebrate {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
```

### Pulso Suave
```css
@keyframes tayka-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}
```

---

## 📋 CHECKLIST DE ACCESIBILIDAD

- [ ] Contraste mínimo 4.5:1 para texto
- [ ] Todos los botones mínimo 44x44px
- [ ] Navegación por teclado completa
- [ ] Screen reader friendly
- [ ] Sin dependencia de color únicamente
- [ ] Texto alternativo en todas las imágenes
- [ ] Subtítulos en videos
- [ ] Autoplay deshabilitado
- [ ] Animaciones respetan prefers-reduced-motion
- [ ] Focus states visibles

---

## 💡 IDEAS INNOVADORAS PARA TAYKA

### 1. Modo Silencioso Visual
- Todo funciona solo con feedback visual
- Sin sonidos molestos
- Vibraciones suaves opcionales (móvil)

### 2. Calendario Visual de Rutinas
- Secuencias de actividades con imágenes
- "Primero-después" visual
- Progreso del día claramente marcado

### 3. Zona de Exploración Libre
- Espacio sin objetivos
- Solo para jugar y descubrir
- Sin "correcto/incorrecto"

### 4. Personalización de Avatar
- Representación visual del niño
- Acompaña en todas las actividades
- Celebra junto con el niño

### 5. Panel de Control Parental
- Vista de progreso simple
- Ajustes de sensibilidad sensorial
- Reportes visuales claros

---

## 🌈 PATRONES DE COLOR POR SECCIÓN

### Zona de Aprendizaje
```css
background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
```

### Zona de Juegos
```css
background: linear-gradient(135deg, #FFF9C4 0%, #FFF59D 100%);
```

### Zona de Calma
```css
background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%);
```

### Zona de Logros
```css
background: linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%);
```

---

## 🎯 PRÓXIMOS PASOS RECOMENDADOS

1. Crear biblioteca de componentes en Figma/Design
2. Implementar sistema de tokens de diseño
3. Desarrollar guía de voz y tono
4. Testear con usuarios reales (niños con autismo)
5. Iterar basado en feedback

---

**RECUERDA**: Cada niño es único. Este sistema debe ser flexible y adaptable a necesidades individuales.

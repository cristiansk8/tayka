# 🌈 TAYKA - Guía Visual Pedagógica
## Sistema de Diseño para Aplicar a tus Componentes Existentes

---

## 🎨 PALETA DE COLORES CORE

### Colores Principales
```css
/* Copia estos a tu globals.css o tailwind.config.js */

:root {
  /* Primarios - Calmantes */
  --tayka-blue: #87CEEB;
  --tayka-green: #90EE90;
  --tayka-yellow: #FFD966;
  --tayka-coral: #FF9999;
  --tayka-purple: #DDA0DD;
  
  /* Fondos */
  --tayka-bg-main: #FFFEF9;
  --tayka-bg-card: #FFFFFF;
  --tayka-bg-soft: #F5F5F5;
  
  /* Textos */
  --tayka-text-dark: #2C3E50;
  --tayka-text-medium: #5A6C7D;
  --tayka-text-light: #95A5A6;
  
  /* Estados */
  --tayka-success: #4CAF50;
  --tayka-warning: #FFA726;
  --tayka-info: #29B6F6;
}
```

### Si usas Tailwind, extiende así:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        tayka: {
          blue: '#87CEEB',
          green: '#90EE90',
          yellow: '#FFD966',
          coral: '#FF9999',
          purple: '#DDA0DD',
        }
      }
    }
  }
}
```

---

## 📐 ESPACIADOS Y PROPORCIONES

### Sistema de 8px (multiplicadores)
```
xs: 8px    (0.5rem)
sm: 16px   (1rem)
md: 24px   (1.5rem)
lg: 32px   (2rem)
xl: 48px   (3rem)
2xl: 64px  (4rem)
```

### Aplicar a tus componentes:
```css
/* Cards/Tarjetas */
padding: 24px;          /* Espacio interno generoso */
margin-bottom: 24px;    /* Separación clara */

/* Botones */
padding: 16px 32px;     /* Grandes y fáciles de tocar */
min-height: 48px;       /* Táctil amigable */

/* Secciones */
margin-bottom: 48px;    /* Respiración entre secciones */
```

---

## 🔤 TIPOGRAFÍA

### Fuentes Google Fonts Recomendadas
```html
<!-- Pega en tu _document.js o layout -->
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Fredoka:wght@500;600;700&display=swap" rel="stylesheet">
```

### Aplicar en CSS:
```css
/* Texto general */
body {
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.3px;
}

/* Títulos */
h1, h2, h3 {
  font-family: 'Fredoka', 'Nunito', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* Tamaños */
h1 { font-size: 48px; }  /* Hero */
h2 { font-size: 32px; }  /* Secciones */
h3 { font-size: 24px; }  /* Cards */
p  { font-size: 18px; }  /* Texto base */
```

---

## 🎯 BORDES Y SOMBRAS (COPIAR/PEGAR)

### Clases CSS Utility
```css
/* Agrega a tu CSS global */

.tayka-rounded-sm { border-radius: 12px; }
.tayka-rounded-md { border-radius: 16px; }
.tayka-rounded-lg { border-radius: 24px; }
.tayka-rounded-xl { border-radius: 32px; }

.tayka-shadow-sm { 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.tayka-shadow-md { 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.tayka-shadow-lg { 
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.tayka-shadow-hover {
  transition: all 300ms ease;
}

.tayka-shadow-hover:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
```

---

## ✨ EFECTOS Y TRANSICIONES

### Transiciones Suaves Globales
```css
/* Aplicar a elementos interactivos */
.tayka-transition {
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover states */
.tayka-hover {
  cursor: pointer;
  transition: all 300ms ease;
}

.tayka-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* Focus visible para accesibilidad */
.tayka-focus:focus {
  outline: 3px solid var(--tayka-blue);
  outline-offset: 4px;
  border-radius: 8px;
}
```

### Animaciones Recomendadas
```css
/* Fade In desde abajo */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulso suave */
@keyframes gentlePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Rebote celebración */
@keyframes celebrate {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(0.95); }
  75% { transform: scale(1.05); }
}

/* Aplicar */
.fade-in {
  animation: fadeInUp 600ms ease-out;
}

.pulse {
  animation: gentlePulse 2s ease-in-out infinite;
}
```

---

## 🎨 PATRONES DE DISEÑO ESPECÍFICOS

### 1. CARDS/TARJETAS (Estilo DibuBaron)
```css
.tayka-card {
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 400ms ease;
}

.tayka-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  border-color: var(--tayka-blue);
}

/* Agregar barra de color superior */
.tayka-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--tayka-blue), var(--tayka-purple));
  border-radius: 24px 24px 0 0;
  opacity: 0;
  transition: opacity 300ms;
}

.tayka-card:hover::before {
  opacity: 1;
}
```

### 2. BOTONES
```css
.tayka-btn {
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 300ms ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tayka-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.tayka-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Variantes de color */
.tayka-btn-primary {
  background: linear-gradient(135deg, var(--tayka-blue), #5DADE2);
  color: white;
}

.tayka-btn-success {
  background: linear-gradient(135deg, var(--tayka-green), #66BB6A);
  color: #1B5E20;
}

.tayka-btn-warning {
  background: linear-gradient(135deg, var(--tayka-yellow), #FFB74D);
  color: #E65100;
}
```

### 3. INPUTS/FORMULARIOS
```css
.tayka-input {
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  padding: 16px 20px;
  border: 3px solid #E0E0E0;
  border-radius: 12px;
  transition: all 300ms ease;
  background: white;
}

.tayka-input:focus {
  outline: none;
  border-color: var(--tayka-blue);
  box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.2);
  transform: scale(1.02);
}

.tayka-input::placeholder {
  color: #BDBDBD;
  font-weight: 400;
}
```

---

## 🌟 EMOJIS PEDAGÓGICOS (SISTEMA)

### Mapeo Consistente
```javascript
const TAYKA_EMOJIS = {
  // Navegación
  home: '🏠',
  back: '⬅️',
  next: '➡️',
  
  // Estados
  success: '✅',
  complete: '🎉',
  inProgress: '⏳',
  locked: '🔒',
  
  // Acciones
  play: '▶️',
  pause: '⏸️',
  stop: '⏹️',
  restart: '🔄',
  
  // Categorías (personalizar según tu app)
  learn: '📚',
  games: '🎮',
  creative: '🎨',
  music: '🎵',
  calm: '🌙',
  
  // Feedback
  great: '⭐',
  good: '👍',
  try: '💪',
  help: '💡',
  
  // Emociones (para identificación)
  happy: '😊',
  sad: '😢',
  angry: '😠',
  calm: '😌',
  excited: '🤩',
}
```

---

## 📊 GRID LAYOUTS

### Layout Principal
```css
.tayka-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Grid de tarjetas responsivo */
.tayka-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* Para móvil - 1 columna */
@media (max-width: 640px) {
  .tayka-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

/* Tablet - 2 columnas */
@media (min-width: 641px) and (max-width: 1024px) {
  .tayka-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop - 3-4 columnas */
@media (min-width: 1025px) {
  .tayka-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
```

---

## 🎯 COMPONENTES ESPECÍFICOS PARA AUTISMO

### 1. Barra de Progreso Visual
```css
.tayka-progress {
  width: 100%;
  height: 24px;
  background: #E0E0E0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.tayka-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--tayka-green), var(--tayka-blue));
  border-radius: 12px;
  transition: width 800ms ease;
  position: relative;
}

/* Agregar emoji al final */
.tayka-progress-bar::after {
  content: '⭐';
  position: absolute;
  right: -12px;
  top: -2px;
  font-size: 28px;
  animation: gentlePulse 1.5s ease-in-out infinite;
}
```

### 2. Panel de Navegación Secuencial
```css
.tayka-breadcrumb {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
}

.tayka-breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tayka-breadcrumb-separator {
  font-size: 24px;
  color: #BDBDBD;
}

.tayka-breadcrumb-current {
  color: var(--tayka-blue);
  background: rgba(135, 206, 235, 0.2);
  padding: 8px 16px;
  border-radius: 12px;
}
```

### 3. Zona de Calma (Botón Siempre Visible)
```css
.tayka-calm-button {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #E1BEE7, #CE93D8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 300ms ease;
  z-index: 1000;
}

.tayka-calm-button:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

/* Contenido: 🌙 */
```

---

## 🎨 GRADIENTES DE FONDO POR SECCIÓN

```css
/* Aprendizaje */
.tayka-bg-learn {
  background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #90CAF9 100%);
}

/* Juegos */
.tayka-bg-play {
  background: linear-gradient(135deg, #FFF9C4 0%, #FFF59D 50%, #FFF176 100%);
}

/* Creatividad */
.tayka-bg-create {
  background: linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 50%, #F48FB1 100%);
}

/* Calma */
.tayka-bg-calm {
  background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 50%, #CE93D8 100%);
}

/* Logros */
.tayka-bg-achievement {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%);
}
```

---

## 🚀 ANIMACIONES DE ENTRADA (Scroll)

```css
/* Usar con IntersectionObserver o librería como AOS */
.tayka-scroll-fade {
  opacity: 0;
  transform: translateY(30px);
  transition: all 600ms ease;
}

.tayka-scroll-fade.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Delays escalonados */
.tayka-scroll-fade:nth-child(1) { transition-delay: 0ms; }
.tayka-scroll-fade:nth-child(2) { transition-delay: 100ms; }
.tayka-scroll-fade:nth-child(3) { transition-delay: 200ms; }
.tayka-scroll-fade:nth-child(4) { transition-delay: 300ms; }
```

---

## 💡 TIPS DE IMPLEMENTACIÓN

### 1. Consistencia Visual
```
✅ Usa SIEMPRE los mismos bordes redondeados (24px para cards)
✅ Mantén los mismos espaciados (sistema de 8px)
✅ Colores consistentes para mismas acciones
✅ Transiciones de misma duración (300-400ms)
```

### 2. Jerarquía Clara
```
✅ Un elemento principal por sección
✅ Títulos grandes y evidentes
✅ Espacios en blanco abundantes
✅ Contraste alto para legibilidad
```

### 3. Feedback Inmediato
```
✅ Hover states en TODOS los elementos clickeables
✅ Active states (cuando se hace click)
✅ Animaciones de confirmación
✅ Cambios de color claros
```

### 4. Accesibilidad
```
✅ Contraste mínimo 4.5:1
✅ Botones mínimo 44x44px (móvil 48x48px)
✅ Focus states visibles
✅ Navegación por teclado
✅ Labels descriptivos
```

---

## 📱 RESPONSIVE MOBILE-FIRST

```css
/* Base: Mobile */
.tayka-element {
  font-size: 16px;
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .tayka-element {
    font-size: 18px;
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .tayka-element {
    font-size: 20px;
    padding: 32px;
  }
}
```

---

## 🎯 CHECKLIST RÁPIDO ANTES DE LANZAR

- [ ] Todos los botones tienen hover y focus states
- [ ] Bordes redondeados consistentes (16-24px)
- [ ] Sombras suaves en cards
- [ ] Transiciones suaves (300-400ms)
- [ ] Emojis usados consistentemente
- [ ] Espaciados múltiplos de 8px
- [ ] Contraste de color adecuado
- [ ] Responsive en móvil, tablet, desktop
- [ ] Fuentes grandes y legibles (mínimo 16px)
- [ ] Sin animaciones bruscas o rápidas

---

**¿Necesitas que profundice en alguna sección específica?**
**¿O prefieres que te muestre cómo aplicar esto a un componente tuyo en particular?**

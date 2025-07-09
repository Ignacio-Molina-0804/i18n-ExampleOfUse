# 📚 Proyecto de Internacionalización (i18n) con Astro

Un sistema de internacionalización completo para sitios web estáticos construidos con **Astro**, que soporta múltiples idiomas con un enfoque estructurado y fácil de mantener.

---

## 🌍 Características Principales

- ✅ Soporte multi-idioma (español, inglés, extensible a más)
- 🗂️ Sistema de traducción centralizado
- 🧱 Layout común con selector de idioma
- 🔍 Rutas optimizadas para SEO
- 🔐 Tipado seguro con TypeScript
- 🔄 Fallback automático al idioma por defecto

---

## 🛠 Estructura del Proyecto

```
src/
├── i18n/
│   ├── ui.ts        # Todas las traducciones
│   └── util.ts      # Lógica de traducción
│
├── layouts/
│   └── Layout.astro # Layout base
│
└── pages/
    ├── en/          # Versión en inglés
    │   ├── index.astro
    │   └── about/
    │       └── index.astro
    └── es/          # Versión en español
        ├── index.astro
        └── about/
            └── index.astro
```

---

## ⚙️ Configuración

### ✅ Requisitos

- [Node.js](https://nodejs.org/) v16+
- [Astro](https://astro.build/) v2+

### 🔧 Instalación

```bash
npm install
npm run dev
```

---

## 📝 Cómo Agregar un Nuevo Idioma

### 1. Añadir idioma a la configuración:

```js
// astro.config.mjs
locales: ['es', 'en', 'fr'] // Agregar nuevo código
```

### 2. Añadir traducciones:

```ts
// ui.ts
export const languageList = {
    fr: "Français" // Nuevo idioma
};

export const labels = {
    fr: {
        'nav.home': 'Accueil',
        // ...
    }
};
```

### 3. Crear carpetas de páginas:

```
src/pages/fr/[páginas].astro
```

---

## 🧠 Conceptos Clave

### `ui.ts`

- Centraliza todas las traducciones
- Estructura jerárquica: idioma > clave > texto
- Fácil de mantener y actualizar

### `util.ts`

- Sistema de fallback automático
- Función *factory* para crear traductores
- Tipado seguro para prevenir errores

### Layout Principal

- Selector de idioma automático
- Navegación traducida
- Estilos base consistentes

---

## 🚀 Mejoras Futuras

- 📦 Carga diferida de traducciones para mejor performance
- 🔌 Sistema de plugins para extensiones
- ↔️ Soporte RTL (derecha a izquierda)
- 🧩 Interpolación de variables en traducciones
- 📖 Documentación interactiva con ejemplos

---

## 📊 Estadísticas del Código

- 🌐 Idiomas soportados: 2 (extensible)
- 💬 Traducciones implementadas: 4 por idioma
- ⚙️ Líneas de configuración: 15
- ♻️ Componentes reutilizables: 3

---

## 👨‍💻 Uso Básico

```astro
---
import { useTranslations } from "../i18n/util";

const t = useTranslations(Astro.currentLocale);
---

<h1>{t('home.title')}</h1>
```

---

## 📌 Ejemplo Práctico

Para crear una nueva página traducida:

1. Agrega las claves en `ui.ts`
2. Crea el archivo en ambas carpetas de idioma
3. Usa el sistema de traducción

```ts
// ui.ts
'en': {
    'contact.title': 'Contact Us'
},
'es': {
    'contact.title': 'Contáctenos'
}
```

---

## 📚 Recursos Adicionales

- [Documentación oficial de Astro i18n](https://docs.astro.build/en/guides/internationalization/)
- [Guía de mejores prácticas para i18n](https://formatjs.github.io)
- [Estándares de internacionalización (W3C i18n)](https://www.w3.org/International/)
// @ts-check
import { defineConfig } from 'astro/config';

// Configuración principal de Astro
export default defineConfig({
    i18n: {
        defaultLocale: 'es',  // Idioma por defecto del sitio
        locales: ['es', 'en', 'fr'],  // Idiomas soportados
        
        routing: {
            // PrefixDefaultLocale: true = siempre muestra el idioma en la URL
            // Ej: /es/inicio en lugar de /inicio para el idioma default
            prefixDefaultLocale: true, 

            // RedirectToDefaultLocale (comentado)
            // Si true, redirige / → /es cuando el default es 'es'
            // redirectToDefaultLocale: false
        }
    }
});
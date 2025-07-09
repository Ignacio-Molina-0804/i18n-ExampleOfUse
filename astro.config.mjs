// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    i18n: {

        defaultLocale: 'es',
        locales: ['es', 'en', 'fr'],
        routing: {

            // PrefixDefaultLocale Modifica la URL para incluir el idioma por defecto.
            // Por ejemplo, si el idioma por defecto es 'es', la URL será '/es/'
            prefixDefaultLocale: true, 

            // RedirectToDefaultLocale Redirige a la URL del idioma por defecto 
            // si no se especifica un idioma.
            // Por ejemplo, si el usuario accede a '/', será redirigido a '/es/'
            // Esto es útil para evitar URLs sin idioma
            // redirectToDefaultLocale: false

        }

    }

});

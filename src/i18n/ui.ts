// Archivo central de traducciones que contiene:
// - Lista de idiomas disponibles
// - Textos traducidos organizados por idioma y clave

/**
 * Lista de idiomas soportados con su nombre display
 * clave: código de idioma (ISO 639-1)
 * valor: nombre del idioma en ese idioma
 */
export const languageList = {
    es: "Español",
    en: "English"
    // Nota: Para agregar francés, añadir: fr: "Français"
};

/**
 * Objeto con todas las traducciones del sitio
 * Estructura:
 * - Primer nivel: código de idioma (ej: 'es', 'en')
 * - Segundo nivel: clave de traducción (ej: 'nav.home')
 * - Valor: texto traducido
 */
export const labels = {
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'home.title': 'Hola a todos',
        'about.title': 'Acerca de la comunidad'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'home.title': 'Hello everyone',
        'about.title': 'About the community'
    }
    // Ejemplo para agregar francés:
    // fr: {
    //     'nav.home': 'Accueil',
    //     'nav.about': 'À propos',
    //     'home.title': 'Bonjour à tous',
    //     'about.title': 'À propos de la communauté'
    // }
};
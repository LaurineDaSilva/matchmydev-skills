import { createI18n } from 'vue-i18n';
import enMessages from './en.js';
import frMessages from "./fr.js";

const shortDatetimeFormat = {
    year: 'numeric', month: 'short', day: '2-digit'
}
const longDatetimeFormat ={
    year: 'numeric', month: 'long', day: 'numeric'
}

const datetimeFormats = {
    'en': {
        short: shortDatetimeFormat,
        long: longDatetimeFormat
    },
    'fr': {
        short: shortDatetimeFormat,
        long: longDatetimeFormat
    }
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: enMessages,
        fr: frMessages,
    },
    datetimeFormats
})

// ---------------  Afficher les libélés dans la langue favorite de votre navigateur ---------------

// if (navigator.language.includes('fr') ) {
//     i18n.global.locale = 'fr';
// } else {
//     i18n.global.locale = 'en';
// }

export default i18n
import { ui } from "@i18n/ui";
import { defaultLocale } from "@constants/constants";

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLocale]) {
        return ui[lang][key] || ui[defaultLocale][key];
    };
}

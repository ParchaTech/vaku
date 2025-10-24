import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://vakú.com",
    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
    }
});

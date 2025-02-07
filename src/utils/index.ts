export const getLang = () => document.documentElement.lang || "en";

export const updateLangFromPathname = (pathname: string, lang: string) => {
    const path = pathname.split("/");
    if (path[1] === "en" || path[1] === "fr") {
        return path[1];
    }
};

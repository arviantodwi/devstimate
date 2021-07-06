import i18n from "i18next";
import { Cookies } from "react-cookie";
import { initReactI18next } from "react-i18next";

import trans_en from "./en";

const resources = {
  en: {
    translation: trans_en,
  },
};

// Get the value of locale cookies if it's already exists.
// Else we will create it.
const cookies = new Cookies();
let locale = cookies.get("locale");
if (!locale) {
  cookies.set("locale", "en", { path: "/" });
  locale = "en";
}

// See https://react.i18next.com/guides/quick-start for the documentation
// of i18next configuration below.
i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

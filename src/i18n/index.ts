import spanish from "./es.json";
import english from "./en.json";

type I18NParams = {
  currentLocale: string;
};

const LOCALES = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const getI18N = ({ currentLocale = "es" }: I18NParams) => {
  if (currentLocale === LOCALES.ENGLISH) return english;
  return spanish;
};

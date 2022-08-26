const RELEASE_DATE = {
  DAY: {
    SINGLE: "deň",
    FEW: "dni",
    MORE: "dní",
  },
  HOUR: {
    SINGLE: "hodina",
    FEW: "hodiny",
    MORE: "hodín",
  },
  MINUTE: {
    SINGLE: "minúta",
    FEW: "minúty",
    MORE: "minút",
  },
  SECOND: {
    SINGLE: "sekunda",
    FEW: "sekundy",
    MORE: "sekúnd",
  },
};

const NAVBAR = {
  USER_LOGGED_IN: {},
  USER_LOGGED_OUT: [
    { TEXT: "inšpiruj sa priateľmi", ROUTE: "/feed" },
    { TEXT: "kto sme?", ROUTE: "/about" },
    { TEXT: "zaregistruj aj mňa", ROUTE: "/sign-up" },
    { TEXT: "prihlás ma", ROUTE: "/log-in" },
  ],
};

const COOKIES_TEXT = {
  MAIN: `Tu V Kuchynke môžeš nájsť tieto 3 dôležité časti: Pravidlá používania siete V Kuchynke, Zásady ochrany osobných údajov a Pravidlá používania súborov cookies. Pre bližšie a rýchlejšie vysvetlenie ich významu klikni sem. Pre podrobné porozumenie, neváhaj navštíviť každú zo spomínaných častí.`,
  SIDE: `DÔLEŽITÉ: Registrovaním sa V Kuchynke vyjadruješ svoj súhlas s Pravidlami používania siete V Kuchynke, Zásadami ochrany osobných údajov a Pravidlami používania súborov cookies.`,
};

export default { RELEASE_DATE, NAVBAR, COOKIES_TEXT };

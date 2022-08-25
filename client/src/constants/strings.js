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

export default { RELEASE_DATE, NAVBAR };

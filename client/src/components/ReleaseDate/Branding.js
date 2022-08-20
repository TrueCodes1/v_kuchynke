import React from "react";
import styled from "styled-components";

// IMPORTING COMMON STYLESHEETS, VARIABLES
import "../../styles/fonts/fonts.sass";
import {
  FONT_SIZES,
  FONT_FAMILIES,
  COLORS,
  BREAKPOINTS,
} from "../../styles/variables";

// STYLED COMPONENTS
const Parent = styled.h1`
  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${FONT_SIZES.MAIN_BRANDING};
  }

  @media only screen and (min-width: calc(${BREAKPOINTS.MOBILE} + 1px)) and (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.MAIN_BRANDING};
  }

  @media only screen and (min-width: calc(${BREAKPOINTS.TABLET} + 1px)) {
    font-size: ${FONT_SIZES.MAIN_BRANDING};
  } ;
`;

const Branding = ({ isDarkTheme }) => {
  return (
    <>
      <Parent
        data-testid="branding-parent"
        className={`
            release-countdown-branding
            ${isDarkTheme === true ? "dark" : "light"}
        `}
      >
        {/* STRINGS SHOULD BE LOADED INSTEAD OF HARDOCING, THE BEST SOLUTION FOR THIS TO BE CHOSEN TILL OCTOBER  */}
        V Kuchynke
      </Parent>
    </>
  );
};

export default Branding;

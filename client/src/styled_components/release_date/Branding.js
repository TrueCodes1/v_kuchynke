// global imports
import styled from "styled-components";

// styles imports
import "../../styles/fonts/fonts.sass";
import { COLORS, FONT_SIZES, BREAKPOINTS } from "../../styles/variables";

// styled components
export const Parent = styled.h1`
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

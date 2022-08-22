// global imports
import styled from "styled-components";

// styles imports
import "../../styles/fonts/fonts.sass";
import { COLORS, FONT_SIZES, BREAKPOINTS } from "../../styles/variables";

// styled components
export const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${FONT_SIZES.LARGE};
    min-width: 125px;
    max-width: 125px;
    min-height: 125px;
    max-height: 125px;
    margin: 5px;
  }

  @media only screen and (min-width: calc(${BREAKPOINTS.MOBILE} + 1px)) and (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.GIANT};
    min-width: 135px;
    max-width: 135px;
    min-height: 135px;
    max-height: 135px;
    margin: 7.5px;
  }

  @media only screen and (min-width: calc(${BREAKPOINTS.TABLET} + 1px)) {
    font-size: ${FONT_SIZES.ULTRA_GIANT};
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
    margin: 0 10px;
  } ;
`;

export const Number = styled.div`
  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${FONT_SIZES.MEDIUM};
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.MOBILE} + 1px)) and (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.LARGE};
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.TABLET} + 1px)) {
    font-size: ${FONT_SIZES.GIANT};
  } ;
`;

export const Unit = styled.div`
  opacity: 0.5;
  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${FONT_SIZES.SMALL};
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.MOBILE} + 1px)) and (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.MEDIUM};
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.TABLET} + 1px)) {
    font-size: ${FONT_SIZES.MEDIUM};
  } ;
`;

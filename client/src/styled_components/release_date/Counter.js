// global imports
import styled from "styled-components";

// styles imports
import "../../styles/fonts/fonts.sass";
import { COLORS, FONT_SIZES, BREAKPOINTS } from "../../styles/variables";

// styled components
export const Parent = styled.div`
  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 40px;
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.MOBILE} + 1px)) and (max-width: ${BREAKPOINTS.TABLET}) {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 40px;
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.TABLET} + 1px)) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  } ;
`;

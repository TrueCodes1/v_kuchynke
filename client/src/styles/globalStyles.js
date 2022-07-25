import { createGlobalStyle } from "styled-components";

// IMPPORTING STYLES VARIABLES
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  BREAKPOINTS,
} from "../styles/variables";

const GlobalStyle = createGlobalStyle`
    * {

        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    body {
        overflow-x: hidden;
    }

    &.dark,
    &.light {
        
        transition: all .5s ease;

    }

    &.background {
        
        &.dark {
        
            background: ${COLORS.PRIMARY};

        }
    }

    &.background {
        
        &.light {
        
            background: ${COLORS.TERTIARY};
        }
    
    }
`;

export default GlobalStyle;

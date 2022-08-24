// global imports
import { createGlobalStyle } from "styled-components";

// styles imports
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
        font-family: ${FONT_FAMILIES.MAIN};
        user-select: none;
        
    }

    .release-countdown-branding {

        font-family: ${FONT_FAMILIES.SIDE}

    }

    a {
        text-decoration: none
    }

    /* EVERY COMPONENT, THAT CHANGES ITS COLOR ONCE THE THEME IS SWITCHED
    DOES SO WITH A SMOOTH TRANSITION BETWEEN THE COLORS */
    &.dark,
    &.light,
    * {
        
        transition: all .5s ease;

    }

    /* THIS CLASS APPLIES TO ALL THE COMPONENTS THAT CARRY THE CLASS 'dark' ONCE
    THE THEME OF THE APP IS SWITCHED, BUT DIFFERENTLY FOR SPECIFIC COMPONENTS
    (E.G. BACKGROUND CHANGES ITS BACKGROUND COLOR, TEXT CHANGES ITS COLOR, ...).
    THIS ALL WORKS SAME WITH CLASS 'light', JUST WITH DIFFERENT COLOR */
    &.dark {

        &.background,
        .cookies-popup-background {

            background: ${COLORS.PRIMARY};

            &.cookies-popup-background {
                opacity: .59;
            }

        }

        &.release-countdown-branding,
        &.navbar,
        a,
        .branding-home-page,
        button,
        .cookies-popup-content,
        .footer-text {

            color: ${COLORS.SECONDARY};

        }

        .question {
            color: ${COLORS.PRIMARY};
            background: ${COLORS.SECONDARY};
        }

        &.release-countdown-counter-child {

            background: ${COLORS.PRIMARY};
            box-shadow: 1px 1px 2px rgba(116, 80, 100, 0.3), -1px -1px 2px rgba(80, 56, 70, 0.5), inset -10px 10px 20px rgba(80, 56, 70, 0.2), inset 10px -10px 20px rgba(80, 56, 70, 0.2), inset -10px -10px 20px rgba(116, 80, 100, 0.9), inset 10px 10px 25px rgba(80, 56, 70, 0.9);
            color: ${COLORS.SECONDARY}

        }

        button {

            background: ${COLORS.PRIMARY};
            &.large {
                box-shadow: -11px 11px 22px rgba(74, 52, 65, 0.2), 11px -11px 22px rgba(74, 52, 65, 0.2), -11px -11px 22px rgba(122, 84, 105, 0.9), 11px 11px 28px rgba(74, 52, 65, 0.9), inset 1px 1px 2px rgba(122, 84, 105, 0.3), inset -1px -1px 2px rgba(74, 52, 65, 0.5);
            }

        }

        &.theme-switch {

            background: ${COLORS.SECONDARY};

        }

    }
    
    /* FOR CLOSER EXPLANATION, SEE THE COMMENT ABOVE THE CLASS 'dark', RIGHT BEFORE
    THIS CLASS */
    &.light {

        &.background {

            background: ${COLORS.SECONDARY};

        }

        &.release-countdown-branding, 
        &.navbar,
        a, 
        .branding-home-page,
        button,
        .cookies-popup-content,
        .footer-text {

            color: ${COLORS.PRIMARY};

        }

        .question {
            color: ${COLORS.SECONDARY};
            background: ${COLORS.PRIMARY};
        }

        &.release-countdown-counter-child {

            background: ${COLORS.SECONDARY};
            box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(204, 204, 204, 0.5), inset -6px 6px 12px rgba(204, 204, 204, 0.2), inset 6px -6px 12px rgba(204, 204, 204, 0.2), inset -6px -6px 12px rgba(255, 255, 255, 0.9), inset 6px 6px 15px rgba(204, 204, 204, 0.9);
            color: ${COLORS.PRIMARY}
        }

        &.theme-switch {

            background: ${COLORS.PRIMARY};

        }

    }

`;

export default GlobalStyle;

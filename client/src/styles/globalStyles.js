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

    /* EVERY COMPONENT, THAT CHANGES ITS COLOR ONCE THE THEME IS SWITCHED
    DOES SO WITH A SMOOTH TRANSITION BETWEEN THE COLORS */
    &.dark,
    &.light,
    * {
        
        transition: all .25s ease;

    }

    a {
        text-decoration: none;
    }

    .cookies-popup-link {
        padding: 0 1.5px;
        border-bottom: 2px solid transparent;
        transition: .15s ease;
    }

    /* THIS CLASS APPLIES TO ALL THE COMPONENTS THAT CARRY THE CLASS 'dark' ONCE
    THE THEME OF THE APP IS SWITCHED, BUT DIFFERENTLY FOR SPECIFIC COMPONENTS
    (E.G. BACKGROUND CHANGES ITS BACKGROUND COLOR, TEXT CHANGES ITS COLOR, ...).
    THIS ALL WORKS SAME WITH CLASS 'light', JUST WITH DIFFERENT COLOR */
    &.dark {

        &.background,
        .cookies-popup-background {

            background: ${COLORS.PRIMARY};

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

        .question,
        .question-opened-content {
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

        .question-choice {
            border: 2px solid ${COLORS.PRIMARY};

            &:hover {
                border: 2px solid ${COLORS.PRIMARY};
                background: ${COLORS.PRIMARY};
                color: ${COLORS.SECONDARY};
                transition: .1s ease;
            }
        }

        .question-suggestion-input {
            color: ${COLORS.PRIMARY};
            background: ${COLORS.SECONDARY};
            box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(199, 199, 199, 0.5), inset -8px 8px 16px rgba(199, 199, 199, 0.2), inset 8px -8px 16px rgba(199, 199, 199, 0.2), inset -8px -8px 16px rgba(255, 255, 255, 0.9), inset 8px 8px 20px rgba(199, 199, 199, 0.9);
        }
        
        .cookies-popup-link {
            color: ${COLORS.SECONDARY};

            &:hover {
                border-bottom: 2px solid ${COLORS.SECONDARY};
                transition: .15s ease
            }
        }
    }
    
    /* FOR CLOSER EXPLANATION, SEE THE COMMENT ABOVE THE CLASS 'dark', RIGHT BEFORE
    THIS CLASS */
    &.light {

        &.background{

            background: ${COLORS.SECONDARY};

        }

        &.release-countdown-branding, 
        &.navbar,
        a, 
        .branding-home-page,
        button,
        .footer-text {

            color: ${COLORS.PRIMARY};

        }

        .question,
        .question-opened-content {
            color: ${COLORS.SECONDARY};
            background: ${COLORS.PRIMARY};
        }

        &.release-countdown-counter-child {

            background: ${COLORS.SECONDARY};
            box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(204, 204, 204, 0.5), inset -6px 6px 12px rgba(204, 204, 204, 0.2), inset 6px -6px 12px rgba(204, 204, 204, 0.2), inset -6px -6px 12px rgba(255, 255, 255, 0.9), inset 6px 6px 15px rgba(204, 204, 204, 0.9);
            color: ${COLORS.PRIMARY}
        }

        
        button {

            background: ${COLORS.SECONDARY};
            &.large {
                box-shadow: -11px 11px 22px rgba(197, 197, 197, 0.2), 11px -11px 22px rgba(197, 197, 197, 0.2), -11px -11px 22px rgba(255, 255, 255, 0.9), 11px 11px 28px rgba(197, 197, 197, 0.9), inset 1px 1px 2px rgba(197, 197, 197, 0.9), inset -1px -1px 2px rgba(197, 197, 197, 0.9);
            }

        }

        &.theme-switch  {

            background: ${COLORS.PRIMARY};

        }
        .cookies-popup-background  {

            background: ${COLORS.PRIMARY};
            opacity: .75;

        }
        
        .cookies-popup-content {
            color: ${COLORS.SECONDARY}
        }

        .question-choice {
            border: 2px solid ${COLORS.SECONDARY};
            
            &:hover {
                border: 2px solid ${COLORS.SECONDARY};
                background: ${COLORS.SECONDARY};
                color: ${COLORS.PRIMARY};
                transition: .1s ease;
            }
        }

        .question-suggestion-input {
            color: ${COLORS.SECONDARY};
            background: ${COLORS.PRIMARY};
            box-shadow: 1px 1px 2px rgba(117, 81, 101, 0.3), -1px -1px 2px rgba(79, 55, 69, 0.5), inset -7px 7px 14px rgba(79, 55, 69, 0.2), inset 7px -7px 14px rgba(79, 55, 69, 0.2), inset -7px -7px 14px rgba(117, 81, 101, 0.9), inset 7px 7px 18px rgba(79, 55, 69, 0.9);
        }
        
        .cookies-popup-link {
            color: ${COLORS.SECONDARY};
            
            &:hover {
                border-bottom: 2px solid ${COLORS.SECONDARY};
                transition: .15s ease
            }
        }
    }

`;

export default GlobalStyle;

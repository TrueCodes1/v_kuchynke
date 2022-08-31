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
        
        transition: all .15s ease;

    }

    a {
        text-decoration: none;
    }

    .cookies-popup-link {
        padding: 0 1.5px;
        border-bottom: 2px solid transparent;
        transition: .15s ease;
    }

    #photo-cropper-button-save {
        color: ${COLORS.PRIMARY};
        background: ${COLORS.SECONDARY};
        font-weight: 600;
    }

    #photo-cropper-button-cancel {
        color: ${COLORS.SECONDARY};
        background: ${COLORS.PRIMARY};
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
        .footer-text,
        .sign-up-header,
        .sign-up-password-match,
        .progress-bar-text,
        .sign-up-cookies-text,
        ul,
        .loading-text,
        .log-in-form-text,
        .about-us-text,
        .user-profile-name,
        .profile-info-card-wrapper,
        .profile-info-card-grid-text  {

            color: ${COLORS.SECONDARY};

        }

        .question,
        .question-opened-content {
            color: ${COLORS.PRIMARY};
            background: ${COLORS.SECONDARY};
        }

        &.release-countdown-counter-child,
        .sign-up-photo-wrapper {

            background: ${COLORS.PRIMARY};
            box-shadow: 1px 1px 2px rgba(116, 80, 100, 0.3), -1px -1px 2px rgba(80, 56, 70, 0.5), inset -10px 10px 20px rgba(80, 56, 70, 0.2), inset 10px -10px 20px rgba(80, 56, 70, 0.2), inset -10px -10px 20px rgba(116, 80, 100, 0.9), inset 10px 10px 25px rgba(80, 56, 70, 0.9);
            color: ${COLORS.SECONDARY}

        }

        button,
        label {

            background: ${COLORS.PRIMARY};
            color: ${COLORS.SECONDARY};
            
            &.button-large,
            &.label-large {
                box-shadow: -11px 11px 22px rgba(74, 52, 65, 0.2), 11px -11px 22px rgba(74, 52, 65, 0.2), -11px -11px 22px rgba(122, 84, 105, 0.9), 11px 11px 28px rgba(74, 52, 65, 0.9), inset 1px 1px 2px rgba(122, 84, 105, 0.3), inset -1px -1px 2px rgba(74, 52, 65, 0.5);
            }
            
            &.button-mid,
            &.label-mid {
                box-shadow: -4px 4px 8px rgba(81, 56, 71, 0.2), 4px -4px 8px rgba(81, 56, 71, 0.2), -4px -4px 8px rgba(115, 80, 99, 0.9), 4px 4px 10px rgba(81, 56, 71, 0.9), inset 1px 1px 2px rgba(115, 80, 99, 0.3), inset -1px -1px 2px rgba(81, 56, 71, 0.5);
            }
            
            &.button-small,
            &.label-small {
                box-shadow: -4px 4px 8px rgba(81, 56, 71, 0.2), 4px -4px 8px rgba(81, 56, 71, 0.2), -4px -4px 8px rgba(115, 80, 99, 0.9), 4px 4px 10px rgba(81, 56, 71, 0.9), inset 1px 1px 2px rgba(115, 80, 99, 0.3), inset -1px -1px 2px rgba(81, 56, 71, 0.5);
            }
        }

        .progress-bar-wrapper {
            background: rgb(243, 243, 243, .25)
        }
        
        .loading-animation-background{
            background: rgb(98, 68, 85, .75)
        }

        &.theme-switch,
        .progress-bar-content,
        .navbar-underline {

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
        
        .cookies-popup-link,
        .sign-up-text-link {
            color: ${COLORS.SECONDARY};

            &:hover {
                border-bottom: 2px solid ${COLORS.SECONDARY};
                transition: .05s ease
            }
        }

        input{
            box-shadow: 1px 1px 2px rgba(117, 81, 101, 0.3), -1px -1px 2px rgba(79, 55, 69, 0.5), inset -7px 7px 14px rgba(79, 55, 69, 0.2), inset 7px -7px 14px rgba(79, 55, 69, 0.2), inset -7px -7px 14px rgba(117, 81, 101, 0.9), inset 7px 7px 18px rgba(79, 55, 69, 0.9);
            background: ${COLORS.PRIMARY};
            color: ${COLORS.SECONDARY};

            &::placeholder {
                color: ${COLORS.SECONDARY};
                opacity: .5;
            }
        }

        .loading-animation-pancake {
            .bubble {
                background: ${COLORS.SECONDARY}
            }    
            
            #pan, 
            #pastry {
                background: ${COLORS.SECONDARY}
            }
            
            #handle {
                border-top: 10px solid ${COLORS.SECONDARY};
                border-left: 10px solid transparent
            }
             
        }
        
        #question-suggestion-button {

            background: ${COLORS.SECONDARY};
            color: ${COLORS.PRIMARY};
            
            &.button-large {
                box-shadow: -11px 11px 22px rgba(197, 197, 197, 0.2), 11px -11px 22px rgba(197, 197, 197, 0.2), -11px -11px 22px rgba(255, 255, 255, 0.9), 11px 11px 28px rgba(197, 197, 197, 0.9), inset 1px 1px 2px rgba(197, 197, 197, 0.9), inset -1px -1px 2px rgba(197, 197, 197, 0.9);
            }

            &.button-mid {
                box-shadow: -5px 5px 10px rgba(197, 197, 197, 0.2), 5px -5px 10px rgba(197, 197, 197, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(197, 197, 197, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(197, 197, 197, 0.5);
            }
            
            &.button-small {
                box-shadow: -5px 5px 10px rgba(197, 197, 197, 0.2), 5px -5px 10px rgba(197, 197, 197, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(197, 197, 197, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(197, 197, 197, 0.5);
            }
        }

        .side-choice {
            background: ${COLORS.PRIMARY};
            box-shadow: -5px 5px 10px rgba(85, 59, 74, 0.2), 5px -5px 10px rgba(85, 59, 74, 0.2), -5px -5px 10px rgba(111, 77, 96, 0.9), 5px 5px 13px rgba(85, 59, 74, 0.9), inset 1px 1px 2px rgba(111, 77, 96, 0.3), inset -1px -1px 2px rgba(85, 59, 74, 0.5);
            
            &.clicked {
                box-shadow: 1px 1px 2px rgba(131, 91, 114, 0.3), -1px -1px 2px rgba(65, 45, 56, 0.5), inset -4px 4px 8px rgba(65, 45, 56, 0.2), inset 4px -4px 8px rgba(65, 45, 56, 0.2), inset -4px -4px 8px rgba(131, 91, 114, 0.9), inset 4px 4px 10px rgba(65, 45, 56, 0.9);
            }
        }

        .profile-info-card-wrapper {
            background: ${COLORS.PRIMARY};
            box-shadow: -11px 11px 22px rgba(79, 55, 69, 0.2), 11px -11px 22px rgba(79, 55, 69, 0.2), -11px -11px 22px rgba(117, 81, 101, 0.9), 11px 11px 28px rgba(79, 55, 69, 0.9), inset 1px 1px 2px rgba(117, 81, 101, 0.3), inset -1px -1px 2px rgba(79, 55, 69, 0.5);
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
        .footer-text,
        .sign-up-header,
        .sign-up-password-match,
        .progress-bar-text,
        .sign-up-cookies-text,
        ul,
        .loading-text,
        .log-in-form-text,
        .about-us-text,
        .user-profile-name,
        .profile-info-card-wrapper,
        .profile-info-card-grid-text {

            color: ${COLORS.PRIMARY};

        }

        .question,
        .question-opened-content {
            color: ${COLORS.SECONDARY};
            background: ${COLORS.PRIMARY};
        }

        &.release-countdown-counter-child,
        .sign-up-photo-wrapper {

            background: ${COLORS.SECONDARY};
            box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(204, 204, 204, 0.5), inset -6px 6px 12px rgba(204, 204, 204, 0.2), inset 6px -6px 12px rgba(204, 204, 204, 0.2), inset -6px -6px 12px rgba(255, 255, 255, 0.9), inset 6px 6px 15px rgba(204, 204, 204, 0.9);
            color: ${COLORS.PRIMARY}
        }

        
        button,
        label {

            background: ${COLORS.SECONDARY};
            color: ${COLORS.PRIMARY};
            
            &.button-large,
            &.label-large {
                box-shadow: -11px 11px 22px rgba(197, 197, 197, 0.2), 11px -11px 22px rgba(197, 197, 197, 0.2), -11px -11px 22px rgba(255, 255, 255, 0.9), 11px 11px 28px rgba(197, 197, 197, 0.9), inset 1px 1px 2px rgba(197, 197, 197, 0.9), inset -1px -1px 2px rgba(197, 197, 197, 0.9);
            }

            &.button-mid,
            &.label-mid {
                box-shadow: -5px 5px 10px rgba(197, 197, 197, 0.2), 5px -5px 10px rgba(197, 197, 197, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(197, 197, 197, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(197, 197, 197, 0.5);
            }
            
            &.button-small,
            &.label-small {
                box-shadow: -5px 5px 10px rgba(197, 197, 197, 0.2), 5px -5px 10px rgba(197, 197, 197, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(197, 197, 197, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(197, 197, 197, 0.5);
            }
        }

        .progress-bar-wrapper {
            background: rgb(98, 68, 85, .25)
        }

        .loading-animation-background{
            background: rgb(243, 243, 243, .25)
        }
        
        &.theme-switch,
        .progress-bar-content,
        .navbar-underline  {

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
                transition: .05s ease
            }
        }
        
        .sign-up-text-link {
            &:hover {
                border-bottom: 2px solid ${COLORS.PRIMARY};
                transition: .05s ease
            }
        }
        
        input{
            box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(199, 199, 199, 0.5), inset -3px 3px 6px rgba(199, 199, 199, 0.2), inset 3px -3px 6px rgba(199, 199, 199, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.9), inset 3px 3px 8px rgba(199, 199, 199, 0.9);
            background: ${COLORS.SECONDARY};
            color: ${COLORS.PRIMARY};

            &::placeholder {
                color: ${COLORS.PRIMARY};
                opacity: .5;
            }
        }
        
        .loading-animation-pancake {
            .bubble {
                background: ${COLORS.PRIMARY}
            }    
            
            #pan, 
            #pastry {
                background: ${COLORS.PRIMARY}
            }
            
            #handle {
                border-top: 10px solid ${COLORS.PRIMARY};
                border-left: 10px solid transparent
            }
             
        }

        #question-suggestion-button {

            background: ${COLORS.PRIMARY};
            color: ${COLORS.SECONDARY};
            
            &.button-large {
                box-shadow: -11px 11px 22px rgba(74, 52, 65, 0.2), 11px -11px 22px rgba(74, 52, 65, 0.2), -11px -11px 22px rgba(122, 84, 105, 0.9), 11px 11px 28px rgba(74, 52, 65, 0.9), inset 1px 1px 2px rgba(122, 84, 105, 0.3), inset -1px -1px 2px rgba(74, 52, 65, 0.5);
            }
            
            &.button-mid{
                box-shadow: -4px 4px 8px rgba(81, 56, 71, 0.2), 4px -4px 8px rgba(81, 56, 71, 0.2), -4px -4px 8px rgba(115, 80, 99, 0.9), 4px 4px 10px rgba(81, 56, 71, 0.9), inset 1px 1px 2px rgba(115, 80, 99, 0.3), inset -1px -1px 2px rgba(81, 56, 71, 0.5);
            }
            
            &.button-small {
                box-shadow: -4px 4px 8px rgba(81, 56, 71, 0.2), 4px -4px 8px rgba(81, 56, 71, 0.2), -4px -4px 8px rgba(115, 80, 99, 0.9), 4px 4px 10px rgba(81, 56, 71, 0.9), inset 1px 1px 2px rgba(115, 80, 99, 0.3), inset -1px -1px 2px rgba(81, 56, 71, 0.5);
            }
        }
        
        .side-choice {
            background: ${COLORS.SECONDARY};
            box-shadow: -7px 7px 14px rgba(194, 194, 194, 0.2), 7px -7px 14px rgba(194, 194, 194, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(194, 194, 194, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(194, 194, 194, 0.5);

            &.clicked {
                box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(146, 146, 146, 0.5), inset -5px 5px 10px rgba(146, 146, 146, 0.2), inset 5px -5px 10px rgba(146, 146, 146, 0.2), inset -5px -5px 10px rgba(255, 255, 255, 0.9), inset 5px 5px 13px rgba(146, 146, 146, 0.9);
            }
        }
        
        .profile-info-card-wrapper {
            background: ${COLORS.SECONDARY};
            box-shadow: -23px 23px 46px rgba(151, 151, 151, 0.2), 23px -23px 46px rgba(151, 151, 151, 0.2), -23px -23px 46px rgba(255, 255, 255, 0.9), 23px 23px 58px rgba(151, 151, 151, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(151, 151, 151, 0.5);
        }
    }

`;

export default GlobalStyle;

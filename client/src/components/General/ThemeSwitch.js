// GLOBAL IMPORTS
import React from "react";
import styled from "styled-components";

// IMPORTING REDUX RELATED STUFF
import { useDispatch } from "react-redux";

// IMPORTING COMMON STYLESHEETS, VARIABLES
import "../../styles/fonts/fonts.sass";
import {
  FONT_SIZES,
  FONT_FAMILIES,
  COLORS,
  BREAKPOINTS,
} from "../../styles/variables";

// IMPORTING ASSETS
import moonImage from "../../assets/ThemeSwitch/theme_switch_moon.svg";
import sunImage from "../../assets/ThemeSwitch/theme_switch_sun.svg";

// IMPORTING REDUX FUNCTIONS FOR DISPATCH
import updateIsDarkTheme from "../../actions/IsDarkTheme";

// STYLED COMPONENTS
//
// TO BOTH OF THE SWITCHES, GLOBAL STYLING APPLIES FROM THE GLOBAL STYLES
const Parent = styled.div`
  min-width: 60px;
  max-width: 60px;
  min-height: 50px;
  min-height: 50px;
  border-radius: 100px 0 0 100px;
  position: fixed;
  z-index: 90;
  top: 50px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ImageChild = styled.img`
  position: aboslute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  transform: translateX(0);
  transition: 0.2s ease;
  &.left {
    transform: translateX(15px);
    transiton: 0.1s ease;

    &.leave {
      transform: translateX(80px);
      transiton: 0.1s ease;
    }
  }
  &.right {
    transform: translateX(-15px);
    transiton: 0.1s ease;

    &.leave {
      transform: translateX(40px);
      transiton: 0.1s ease;
    }
  }
`;

const ThemeSwitch = ({ isDarkTheme }) => {
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(updateIsDarkTheme(!isDarkTheme));
  };

  return (
    <>
      <Parent
        data-testid="theme-switch-parent"
        className={`theme-switch ${isDarkTheme === true ? "dark" : "light"}`}
        onClick={changeTheme}
      >
        <ImageChild
          data-testid="theme-switch-left"
          className={`left ${isDarkTheme === true ? "leave" : ""}`}
          src={moonImage}
        />
        <ImageChild
          data-testid="theme-switch-right"
          className={`right ${isDarkTheme === true ? "" : "leave"}`}
          src={sunImage}
        />
      </Parent>
    </>
  );
};

export default ThemeSwitch;

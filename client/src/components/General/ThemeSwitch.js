// global imports
import React from "react";

// redux related stuff imports
import { useDispatch } from "react-redux";

// redux dispatch functions imports
import updateIsDarkTheme from "../../actions/IsDarkTheme";

// assets imports
import moonImage from "../../assets/ThemeSwitch/theme_switch_moon.svg";
import sunImage from "../../assets/ThemeSwitch/theme_switch_sun.svg";

// styled components imports
import {
  Parent,
  ImageChild,
} from "../../styled_components/theme_switch/ThemeSwitch";

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

// global imports
import classNames from "classnames";
import React from "react";

// redux related stuff imports
import { useDispatch } from "react-redux";

// redux dispatch functions imports
import updateIsDarkTheme from "../../actions/isDarkTheme";

// assets imports
import moonImage from "../../assets/ThemeSwitch/theme_switch_moon.svg";
import sunImage from "../../assets/ThemeSwitch/theme_switch_sun.svg";

// styled components imports
import {
  Parent,
  ImageChild,
} from "../../styledComponents/ThemeSwitch/ThemeSwitch";

const ThemeSwitch = ({ isDarkTheme }) => {
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(updateIsDarkTheme(!isDarkTheme));
  };

  return (
    <>
      <Parent
        data-testid="theme-switch-parent"
        className={classNames(
          { "theme-switch": true },
          { dark: isDarkTheme === true },
          { light: isDarkTheme !== true }
        )}
        onClick={changeTheme}
      >
        <ImageChild
          data-testid="theme-switch-left"
          className={classNames(
            { left: true },
            { leave: isDarkTheme === true }
          )}
          src={moonImage}
        />
        <ImageChild
          data-testid="theme-switch-right"
          className={classNames(
            { right: true },
            { leave: isDarkTheme !== true }
          )}
          src={sunImage}
        />
      </Parent>
    </>
  );
};

export default ThemeSwitch;

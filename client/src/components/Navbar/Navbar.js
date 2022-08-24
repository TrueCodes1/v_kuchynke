// global imports
import classNames from "classnames";
import { Link } from "react-router-dom";

// components imports
import BrandingHeart from "./BrandingHeart";
import ChristmasLights from "./ChristmasLights";
import ThemeSwitch from "./ThemeSwitch";

// styled components
import {
  StyledNavbar,
  NavList,
  NavItem,
} from "../../styledComponents/Navbar/Navbar";

const Navbar = ({ isDarkTheme, isUserLoggedIn, isChristmasTheme }) => {
  return (
    <>
      <StyledNavbar
        className={`navbar ${classNames(
          { dark: isDarkTheme === true },
          { light: isDarkTheme !== true }
        )}`}
      >
        <Link to="/">
          <BrandingHeart />
        </Link>
        <ChristmasLights />
        <ThemeSwitch isDarkTheme={isDarkTheme} />
        <NavList>
          <Link to="/feed">
            <NavItem>inšpiruj sa priateľmi</NavItem>
          </Link>
          <Link to="/about">
            <NavItem>kde to som?</NavItem>
          </Link>
          <Link to="sign-up">
            <NavItem>zaregistruj aj mňa</NavItem>
          </Link>
          <Link to="log-in">
            <NavItem>prihlás ma</NavItem>
          </Link>
        </NavList>
      </StyledNavbar>
    </>
  );
};

export default Navbar;

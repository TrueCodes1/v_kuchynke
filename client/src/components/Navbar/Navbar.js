// global imports
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

// constants imports
import strings from "../../constants/strings";

// components imports
import BrandingHeart from "./BrandingHeart";
import ChristmasLights from "./ChristmasLights";
import ThemeSwitch from "./ThemeSwitch";

// styled components
import {
  CurrentUnderline,
  StyledNavbar,
  NavList,
  NavItem,
} from "../../styledComponents/Navbar/Navbar";

const Navbar = ({ isDarkTheme, isUserLoggedIn, isChristmasTheme }) => {
  const location = useLocation();

  return (
    <>
      <StyledNavbar className="navbar">
        <Link to="/">
          <BrandingHeart isDarkTheme={isDarkTheme} />
        </Link>
        <ChristmasLights isDarkTheme={isDarkTheme} />
        <ThemeSwitch isDarkTheme={isDarkTheme} />
        <NavList>
          {strings.NAVBAR.USER_LOGGED_OUT.map((route) => (
            <Link to={route.ROUTE} key={route.ROUTE}>
              <NavItem>
                {route.TEXT}
                <CurrentUnderline
                  className={`navbar-underline
                    ${location.pathname === route.ROUTE ? "visible" : "hidden"}
                  `}
                />
              </NavItem>
            </Link>
          ))}
        </NavList>
      </StyledNavbar>
    </>
  );
};

export default Navbar;

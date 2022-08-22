// global imports
import classNames from "classnames";

// styled components
import {
  StyledNavbar,
  NavList,
  NavItem,
} from "../../styled_components/navbar/Navbar";

const Navbar = ({ isDarkTheme, loggedIn }) => {
  return (
    <>
      <StyledNavbar
        className={classNames(
          { navbar: true },
          { dark: isDarkTheme === true },
          { light: isDarkTheme !== true }
        )}
      >
        <NavList>
          <NavItem>inšpiruj sa priateľmi</NavItem>
          <NavItem>kde to som?</NavItem>
          <NavItem>zaregistruj aj mňa</NavItem>
          <NavItem>prihlás ma</NavItem>
        </NavList>
      </StyledNavbar>
    </>
  );
};

export default Navbar;

// global imports
import styled from "styled-components";

// styled components
export const StyledNavbar = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding-top: 60px;
  z-index: 999;
`;

export const NavList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  margin: 0 40px;
`;

// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 100px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  z-index: 1002;
`;

export const Close = styled.img`
  position: absolute;
  height: 35px;
  width: 35px;
  top: 40px;
  right: 40px;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: 0.1s ease;
  }
`;

export const Header = styled.p`
  font-size: ${FONT_SIZES.LARGE};
  font-weight: 600;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  margin-top: 40px;
  height: 90%;
  overflow: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const ListChild = styled.li`
  width: 97.5%;
  height: 100px;
  margin: 10px 0;
  display: flex;
`;

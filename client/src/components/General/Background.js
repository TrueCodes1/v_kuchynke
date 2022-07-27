import React from "react";
import styled from "styled-components";

// IMPORTING COMMON STYLESHEETS, VARIABLES
import "../../styles/fonts/fonts.sass";
import {
  FONT_SIZES,
  FONT_FAMILIES,
  COLORS,
  BREAKPOINTS,
} from "../../styles/variables";

// STYLED COMPONENTS
const Parent = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  height: fit-content;
`;

const Background = ({ isDarkTheme }) => {
  return (
    <>
      <Parent
        className={`
            background
            ${isDarkTheme === true ? "dark" : "light"}
        `}
      />
    </>
  );
};

export default Background;

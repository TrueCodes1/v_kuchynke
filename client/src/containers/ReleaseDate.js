import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// IMPORTING COMPONENTS, TO WHICH THE STATES WILL BE
// PASSED AS PROPS
import Background from "../components/General/Background";
import ThemeSwitch from "../components/General/ThemeSwitch";
import Branding from "../components/ReleaseDate/Branding";
import Counter from "../components/ReleaseDate/Counter";

// STYLED COMPONENT - INSIDE THE CONTAINERS, IF ANY STYLED COMPONENT
// IS CREATED, IT IS ONLY THE PARENT FOR THE IMPORTED COMPONENTS
const Parent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function ReleaseDate() {
  // REDUX STATES
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const dataReleaseCountdown = useSelector(
    (state) => state.dataReleaseCountdown
  );

  return (
    <>
      <Background isDarkTheme={isDarkTheme} />
      <Parent>
        <Branding isDarkTheme={isDarkTheme} />
        <Counter
          isDarkTheme={isDarkTheme}
          dataReleaseCountdown={dataReleaseCountdown}
        />
      </Parent>
      <ThemeSwitch isDarkTheme={isDarkTheme} />
    </>
  );
}

import React, { useEffect } from "react";
import styled from "styled-components";
// IMPORTING REDUX-RELATED STUFF
import { useDispatch } from "react-redux";

// IMPORTING CHILDREN COMPONENTS
import CounterChild from "./CounterChild";

// IMPORTING COMMON STYLESHEETS, VARIABLES
import "../../styles/fonts/fonts.sass";
import {
  FONT_SIZES,
  FONT_FAMILIES,
  COLORS,
  BREAKPOINTS,
} from "../../styles/variables";

// IMPORTING REDUX FUNCTIONS FOR DISPATCH
import updateDataReleaseCountdownCounter from "../../actions/DataReleaseCountdown";

// IMPORTING OTHER FUNCTIONS
import findCurrentDateDifference from "../../functions/ReleaseDate/findCurrentDifference";

// STYLED COMPONENTS
const Parent = styled.div`
  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 40px;
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.MOBILE} + 1px)) and (max-width: ${BREAKPOINTS.TABLET}) {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 40px;
  }
  @media only screen and (min-width: calc(${BREAKPOINTS.TABLET} + 1px)) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  } ;
`;

const Counter = ({ isDarkTheme, dataReleaseCountdown }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let currentDifference;
    const updateCounterInterval = setInterval(() => {
      clearInterval(updateCounterInterval);
      currentDifference = undefined;
      currentDifference = findCurrentDateDifference();
      dispatch(updateDataReleaseCountdownCounter(currentDifference));
    }, 1000);
  });

  return (
    <>
      <Parent>
        <CounterChild
          isDarkTheme={isDarkTheme}
          content={dataReleaseCountdown.days}
          type="DAY"
        />
        <CounterChild
          isDarkTheme={isDarkTheme}
          content={dataReleaseCountdown.hours}
          type="HOUR"
        />
        <CounterChild
          isDarkTheme={isDarkTheme}
          content={dataReleaseCountdown.minutes}
          type="MINUTE"
        />
        <CounterChild
          isDarkTheme={isDarkTheme}
          content={dataReleaseCountdown.seconds}
          type="SECOND"
        />
      </Parent>
    </>
  );
};

export default Counter;

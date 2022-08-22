// global imports
import React, { useEffect } from "react";

// redux related stuff imports
import { useDispatch } from "react-redux";

// redux functions for dispatch imports
import updateDataReleaseCountdownCounter from "../../actions/DataReleaseCountdown";

// components imports
import CounterChild from "./CounterChild";

// other functions imports
import findCurrentDateDifference from "../../functions/ReleaseDate/findCurrentDifference";

// styled components
import { Parent } from "../../styled_components/release_date/Counter";

const Counter = ({ isDarkTheme, dataReleaseCountdown }) => {
  const dispatch = useDispatch();

  const updateCounter = () => {
    let currentDifference = findCurrentDateDifference();
    dispatch(updateDataReleaseCountdownCounter(currentDifference));
  };

  useEffect(() => {
    updateCounter();

    const updateCounterInterval = setInterval(() => {
      updateCounter();
    }, 1000);
  }, []);

  return (
    <>
      <Parent data-testid="counter-parent">
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

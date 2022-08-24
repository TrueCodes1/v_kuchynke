// global imports
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// components imports
import Branding from "../../components/Countdown/Branding";
import Counter from "../../components/Countdown/Counter";

// styled components imports
import { Parent } from "../../styledComponents/ReleaseDate/CountdownContainer";

const Countdown = () => {
  // Redux states
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const dataReleaseCountdown = useSelector(
    (state) => state.dataReleaseCountdown
  );

  return (
    <Parent>
      <Branding isDarkTheme={isDarkTheme} />
      <Counter
        isDarkTheme={isDarkTheme}
        dataReleaseCountdown={dataReleaseCountdown}
      />
    </Parent>
  );
};

export default Countdown;

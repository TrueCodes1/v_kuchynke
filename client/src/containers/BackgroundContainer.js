import React from "react";
import { useSelector } from "react-redux";

// IMPORTING COMPONENTS, TO WHICH THE STATES WILL BE
// PASSED AS PROPS
import Background from "../components/General/Background";

export default function BackgroundContainer() {
  // REDUX STATES
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  return (
    <>
      <Background isDarkTheme={isDarkTheme} />
    </>
  );
}

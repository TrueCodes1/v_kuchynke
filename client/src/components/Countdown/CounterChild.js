// global imports
import classNames from "classnames";
import React from "react";

// strings imports
import strings from "../../constants/strings";

// styled components imports
import {
  Parent,
  Number,
  Unit,
} from "../../styledComponents/ReleaseDate/CounterChild";

const CounterChild = ({ content, isDarkTheme, type }) => {
  return (
    <Parent
      data-testid="counter-child"
      className={classNames(
        { "release-countdown-counter-child": true },
        { dark: isDarkTheme === true },
        { light: isDarkTheme !== true }
      )}
    >
      <Number data-testid="counter-child-number">{content.number}</Number>
      <Unit data-testid="counter-child-text">
        {strings.RELEASE_DATE[type][content.type]}
      </Unit>
    </Parent>
  );
};

export default CounterChild;

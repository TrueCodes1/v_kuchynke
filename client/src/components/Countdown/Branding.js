// global imports
import classNames from "classnames";
import React from "react";

// styled components imports
import { Parent } from "../../styledComponents/ReleaseDate/Branding";

const Branding = ({ isDarkTheme }) => {
  return (
    <Parent
      data-testid="branding-parent"
      className={classNames(
        { "release-countdown-branding": true },
        { dark: isDarkTheme === true },
        { light: isDarkTheme !== true }
      )}
    >
      {/* String will be loaded instead of hardcoding. The best solution to be chosen by October.  */}
      V Kuchynke
    </Parent>
  );
};

export default Branding;

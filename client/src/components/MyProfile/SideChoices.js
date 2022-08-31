// global imports
import classNames from "classnames";

// assets imports
import generalLight from "../../assets/MyProfile/SideChoices/general_light.svg";
import generalDark from "../../assets/MyProfile/SideChoices/general_dark.svg";
import myRecipesLight from "../../assets/MyProfile/SideChoices/my_recipes_light.svg";
import myRecipesDark from "../../assets/MyProfile/SideChoices/my_recipes_dark.svg";
import myFeedLight from "../../assets/MyProfile/SideChoices/my_feed_light.svg";
import myFeedDark from "../../assets/MyProfile/SideChoices/my_feed_dark.svg";
import mySavedRecipesLight from "../../assets/MyProfile/SideChoices/my_saved_recipes_light.svg";
import mySavedRecipesDark from "../../assets/MyProfile/SideChoices/my_saved_recipes_dark.svg";
import settingsLight from "../../assets/MyProfile/SideChoices/settings_light.svg";
import settingsDark from "../../assets/MyProfile/SideChoices/settings_dark.svg";

// components imports
import SideChoice from "./SideChoice";

// styled components imports
import { MainWrapper } from "../../styledComponents/MyProfile/SideChoices";

const SideChoices = ({ currentSideChoice, onClick }) => {
  return (
    <MainWrapper>
      <SideChoice
        img={{ dark: generalDark, light: generalLight }}
        onClick={() => onClick("general")}
        classNames={classNames({ clicked: currentSideChoice === "general" })}
      />
      <SideChoice
        img={{ dark: myRecipesDark, light: myRecipesLight }}
        onClick={() => onClick("my-recipes")}
        classNames={classNames({ clicked: currentSideChoice === "my-recipes" })}
        imgClassnames="my-recipes-icon"
      />
      <SideChoice
        img={{ dark: myFeedDark, light: myFeedLight }}
        onClick={() => onClick("my-feed")}
        classNames={classNames({ clicked: currentSideChoice === "my-feed" })}
      />
      <SideChoice
        img={{ dark: mySavedRecipesDark, light: mySavedRecipesLight }}
        onClick={() => onClick("my-saved-recipes")}
        classNames={classNames({
          clicked: currentSideChoice === "my-saved-recipes",
        })}
      />
      <SideChoice
        img={{ dark: settingsDark, light: settingsLight }}
        onClick={() => onClick("settings")}
        classNames={classNames({ clicked: currentSideChoice === "settings" })}
        imgClassnames="settings-icon"
      />
    </MainWrapper>
  );
};

export default SideChoices;

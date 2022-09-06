// global imports
import { useState } from "react";

// components imports
import SideChoices from "../../components/MyProfile/SideChoices";

// pages imports
import General from "./General";
import MyFeed from "./MyFeed";
import MyRecipes from "./MyRecipes";
import MySavedRecipes from "./MySavedRecipes";
import Settings from "./Settings";

// styled components imports
import { MainWrapper } from "../../styledComponents/MyProfile/General";
import ProfileInfoCard from "../../components/General/ProfileInfoCard";
import ProfileInfoCardOpened from "../../components/General/ProfileInfoCardOpened";
import ProfileUserIntro from "../../components/General/ProfileUserIntro";

const MyProfile = () => {
  // common My Profile states
  const [currentSideChoice, setCurrentSideChoice] = useState("general");

  // common My Profile functions
  const handleSideChoice = (newSideChoice) => {
    setCurrentSideChoice(newSideChoice);
  };

  return (
    <>
      <SideChoices
        currentSideChoice={currentSideChoice}
        onClick={handleSideChoice}
      />
      {currentSideChoice === "general" && <General />}
      {currentSideChoice === "my-recipes" && <MyRecipes />}
      {currentSideChoice === "my-feed" && <MyFeed />}
      {currentSideChoice === "my-saved-recipes" && <MySavedRecipes />}
      {currentSideChoice === "settings" && <Settings />}
    </>
  );
};

export default MyProfile;

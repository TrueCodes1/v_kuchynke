// global imports
import { useState } from "react";

// components imports
import General from "../../components/MyProfile/General";
import MyFeed from "../../components/MyProfile/MyFeed";
import MyRecipes from "../../components/MyProfile/MyRecipes";
import MySavedRecipes from "../../components/MyProfile/MySavedRecipes";
import Settings from "../../components/MyProfile/Settings";
import SideChoices from "../../components/MyProfile/SideChoices";

const MyProfile = () => {
  const [currentSideChoice, setCurrentSideChoice] = useState("general");

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

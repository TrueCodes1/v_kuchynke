// global imports
import { useState } from "react";

// components imports
import ProfileInfoCard from "../General/ProfileInfoCard";
import ProfileUserIntro from "../General/ProfileUserIntro";

// styled components imports
import { MainWrapper } from "../../styledComponents/MyProfile/General";

const General = () => {
  const [openedStats, setOpenedStats] = useState(false);
  const [openedFriendsList, setOpenedFriendsList] = useState(false);

  const handleClickStats = () => {
    setOpenedStats((prev) => !prev);
  };

  const handleClickFriendsList = () => {
    setOpenedFriendsList((prev) => !prev);
  };

  return (
    <MainWrapper>
      <ProfileInfoCard
        type="grid"
        header="Tvoje štatistiky"
        opened={openedStats}
        open={handleClickStats}
        buttonText="pozrieť si štatistiky"
      />
      <ProfileUserIntro />
      <ProfileInfoCard
        type="list"
        header="Tvoji priatelia"
        opened={openedFriendsList}
        open={handleClickFriendsList}
        buttonText="pozrieť si celý zoznam"
      />
    </MainWrapper>
  );
};

export default General;

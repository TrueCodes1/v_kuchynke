// global imports
import { useState } from "react";

// components imports
import ProfileInfoCard from "../General/ProfileInfoCard";
import ProfileInfoCardOpened from "../General/ProfileInfoCardOpened";
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
        open={handleClickStats}
        buttonText="pozrieť si štatistiky"
      />
      {openedStats && (
        <ProfileInfoCardOpened
          type="stats"
          close={handleClickStats}
          header="Tvoje štatistiky"
        />
      )}
      <ProfileUserIntro />
      <ProfileInfoCard
        type="list"
        header="Tvoji priatelia"
        open={handleClickFriendsList}
        buttonText="pozrieť si celý zoznam"
      />
      {openedFriendsList && (
        <ProfileInfoCardOpened
          type="friends"
          close={handleClickFriendsList}
          header="Tvoji priatelia"
        />
      )}
    </MainWrapper>
  );
};

export default General;

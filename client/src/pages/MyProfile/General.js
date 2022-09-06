// components imports
import ProfileUserIntro from "../../components/General/ProfileUserIntro";

// containers imports
import FriendsListProfileInfoCard from "../../containers/MyProfile/General/FriendsListProfileInfoCard";
import StatsProfileInfoCard from "../../containers/MyProfile/General/StatsProfileInfoCard";

// styled components imports
import { MainWrapper } from "../../styledComponents/MyProfile/General";

const General = () => {
  return (
    <MainWrapper>
      <StatsProfileInfoCard
        cardType="grid"
        contentType="stats"
        header="Tvoje štatistiky"
        buttonText="otvoriť celé štatistiky"
      />
      <ProfileUserIntro />
      <FriendsListProfileInfoCard
        cardType="list"
        contentType="friends"
        header="Tvoji priatelia"
        buttonText="otvoriť celý zoznam"
      />
    </MainWrapper>
  );
};

export default General;

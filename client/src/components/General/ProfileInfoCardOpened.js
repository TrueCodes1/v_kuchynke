// global imports
import { useSelector } from "react-redux";

// assets imports
import closeDark from "../../assets/General/close.svg";
import closeLight from "../../assets/General/close_light.svg";

// styled components imports
import {
  MainWrapper,
  Close,
  Header,
  ListWrapper,
  ListChild,
} from "../../styledComponents/General/ProfileInfoCardOpened";

const ProfileInfoCardOpened = ({ type, close, header }) => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  return (
    <MainWrapper className="profile-info-card-opened-wrapper">
      <Close
        onClick={() => close()}
        src={isDarkTheme ? closeLight : closeDark}
      />
      <Header className="profile-info-card-opened-header">{header}</Header>
      <ListWrapper>
        {type === "stats" && <>tu sa objavia Tvoje štatistiky</>}
        {type === "friends" && <>tu sa objaví zoznam Tvojich priateľov</>}
      </ListWrapper>
    </MainWrapper>
  );
};

export default ProfileInfoCardOpened;

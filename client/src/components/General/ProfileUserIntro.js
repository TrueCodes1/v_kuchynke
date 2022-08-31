// assets imports
import examplePhoto from "../../assets/MyProfile/photo_me.jpg";

// styled components imports
import {
  MainWrapper,
  UserPhoto,
  UserName,
} from "../../styledComponents/General/ProfileUserIntro";

const ProfileUserIntro = () => {
  return (
    <MainWrapper>
      <UserPhoto src={examplePhoto} />
      <UserName className="user-profile-name">Norbert Sviatko</UserName>
    </MainWrapper>
  );
};

export default ProfileUserIntro;

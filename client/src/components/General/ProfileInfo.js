// components imports
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileInfoCardOpened from "./ProfileInfoCardOpened";

const ProfileInfo = ({
  isOpened,
  onClickOpen,
  cardType = "list",
  contentType = "friends",
  header = "Neuvedený obsah",
  buttonText = "otvoriť celý obsah",
}) => {
  return (
    <>
      <ProfileInfoCard
        type={cardType}
        header={header}
        open={onClickOpen}
        buttonText={buttonText}
      />
      {isOpened && (
        <ProfileInfoCardOpened
          type={contentType}
          close={onClickOpen}
          header={header}
        />
      )}
    </>
  );
};

export default ProfileInfo;

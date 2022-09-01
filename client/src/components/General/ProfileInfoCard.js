// global imports
import classNames from "classnames";
import { useSelector } from "react-redux";

// assets imports
import photoMe from "../../assets/MyProfile/photo_me.jpg";
import messageIconLight from "../../assets/General/message_icon_light.svg";
import messageIconDark from "../../assets/General/message_icon_dark.svg";
import heartLight from "../../assets/MyProfile/heart_light.svg";
import heartDark from "../../assets/MyProfile/heart_dark.svg";
import listLight from "../../assets/MyProfile/list_light.svg";
import listDark from "../../assets/MyProfile/list_dark.svg";
import varechaLight from "../../assets/MyProfile/varecha_light.svg";
import varechaDark from "../../assets/MyProfile/varecha_dark.svg";
import peopleLight from "../../assets/MyProfile/people_light.svg";
import peopleDark from "../../assets/MyProfile/people_dark.svg";

// components imports
import Button from "../General/Button";

// styled components imports
import {
  MainWrapper,
  Header,
  ContentWrapper,
  ContentChild,
  GridImg,
  GridText,
  ListImgWrapper,
  ListImg,
  ListContentWrapper,
  ListContentName,
  ListContentSide,
  ListContentMessageIcon,
} from "../../styledComponents/General/ProfileInfoCard";

const ProfileInfoCard = ({ type, header, open, buttonText }) => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  return (
    <MainWrapper className="profile-info-card-wrapper">
      <Header>{header}</Header>
      <ContentWrapper className={classNames({ grid: type === "grid" })}>
        {type === "grid" && (
          <>
            <ContentChild className="grid-child">
              <GridImg src={isDarkTheme ? heartLight : heartDark} />
              <GridText className="profile-info-card-grid-text">
                38 dohromady
              </GridText>
            </ContentChild>
            <ContentChild className="grid-child">
              <GridImg src={isDarkTheme ? listLight : listDark} />
              <GridText className="profile-info-card-grid-text">
                25 dohromady
              </GridText>
            </ContentChild>
            <ContentChild className="grid-child">
              <GridImg src={isDarkTheme ? varechaLight : varechaDark} />
              <GridText className="profile-info-card-grid-text">
                12 dohromady
              </GridText>
            </ContentChild>
            <ContentChild className="grid-child">
              <GridImg src={isDarkTheme ? peopleLight : peopleDark} />
              <GridText className="profile-info-card-grid-text">
                25 dohromady
              </GridText>
            </ContentChild>
          </>
        )}
        {type === "list" && (
          <>
            <ContentChild>
              <ListImgWrapper>
                <ListImg src={photoMe} />
              </ListImgWrapper>
              <ListContentWrapper>
                <ListContentName>Norbert Sviatko</ListContentName>
                <ListContentSide>priatelia od 18. októbra 2022</ListContentSide>
              </ListContentWrapper>
              <ListContentMessageIcon
                src={isDarkTheme ? messageIconLight : messageIconDark}
              />
            </ContentChild>
            <ContentChild>
              <ListImgWrapper>
                <ListImg src={photoMe} />
              </ListImgWrapper>
              <ListContentWrapper>
                <ListContentName>Norbert Sviatko</ListContentName>
                <ListContentSide>priatelia od 18. októbra 2022</ListContentSide>
              </ListContentWrapper>
              <ListContentMessageIcon
                src={isDarkTheme ? messageIconLight : messageIconDark}
              />
            </ContentChild>
            <ContentChild>
              <ListImgWrapper>
                <ListImg src={photoMe} />
              </ListImgWrapper>
              <ListContentWrapper>
                <ListContentName>Norbert Sviatko</ListContentName>
                <ListContentSide>priatelia od 18. októbra 2022</ListContentSide>
              </ListContentWrapper>
              <ListContentMessageIcon
                src={isDarkTheme ? messageIconLight : messageIconDark}
              />
            </ContentChild>
          </>
        )}
      </ContentWrapper>
      <Button
        type="click"
        size="mid"
        classNames="profile-card-button"
        onClick={open}
        text={buttonText}
      />
    </MainWrapper>
  );
};

export default ProfileInfoCard;

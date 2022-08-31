// global imports
import { useSelector } from "react-redux";

// styled components imports
import { MainWrapper, Img } from "../../styledComponents/MyProfile/SideChoice";

const SideChoice = ({
  img,
  imgClassnames = undefined,
  classNames,
  onClick,
}) => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  return (
    <MainWrapper
      className={`side-choice ${classNames}`}
      onClick={() => onClick()}
    >
      <Img src={isDarkTheme ? img.light : img.dark} className={imgClassnames} />
    </MainWrapper>
  );
};

export default SideChoice;

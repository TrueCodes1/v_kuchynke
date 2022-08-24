// assets imports
import heartImgDark from "../../assets/BrandingHeart/heart_dark.png";

// styled components imports
import { Parent, Image } from "../../styledComponents/Navbar/BrandingHeart";

const BrandingHeart = ({ isDarkTheme }) => {
  return (
    <>
      <Parent>
        <Image src={heartImgDark} />
      </Parent>
    </>
  );
};

export default BrandingHeart;

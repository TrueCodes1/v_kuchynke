// assets imports
import heartImgDark from "../../assets/BrandingHeart/heart_dark.png";
import heartImgLight from "../../assets/BrandingHeart/heart_light.png";

// styled components imports
import { Parent, Image } from "../../styledComponents/Navbar/BrandingHeart";

const BrandingHeart = ({ isDarkTheme }) => {
  return (
    <>
      <Parent>
        <Image src={isDarkTheme ? heartImgDark : heartImgLight} />
      </Parent>
    </>
  );
};

export default BrandingHeart;

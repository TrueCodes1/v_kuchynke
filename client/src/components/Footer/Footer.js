// global imports
import { useSelector } from "react-redux";

// assets imports
import heartImgSmall from "../../assets/Footer/heart_small_footer.svg";
import heartImgSmallDark from "../../assets/Footer/heart_small_footer_dark.svg";

// components imports
import ChristmasSnow from "./ChristmasSnow";

// styled components import
import {
  Parent,
  FooterTextWrapper,
  FooterTextChild,
  FooterImgChild,
} from "../../styledComponents/Footer/Footer";

const Footer = ({ isDarkTheme }) => {
  return (
    <Parent>
      <FooterTextWrapper className="footer-text">
        <FooterTextChild>s</FooterTextChild>
        <FooterImgChild src={isDarkTheme ? heartImgSmall : heartImgSmallDark} />
        <FooterTextChild>vyrobené pre moju priateľku</FooterTextChild>
      </FooterTextWrapper>
      <ChristmasSnow />
    </Parent>
  );
};

export default Footer;

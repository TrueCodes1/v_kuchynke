// assets imports
import heartImgSmall from "../../assets/Footer/heart_small_footer.svg";

// components imports
import ChristmasSnow from "./ChristmasSnow";

// styled components import
import {
  Parent,
  FooterTextWrapper,
  FooterTextChild,
  FooterImgChild,
} from "../../styledComponents/Footer/Footer";

const Footer = () => {
  return (
    <Parent>
      <FooterTextWrapper className="footer-text">
        <FooterTextChild>s</FooterTextChild>
        <FooterImgChild src={heartImgSmall} />
        <FooterTextChild>vyrobené pre moju priateľku</FooterTextChild>
      </FooterTextWrapper>
      <ChristmasSnow />
    </Parent>
  );
};

export default Footer;

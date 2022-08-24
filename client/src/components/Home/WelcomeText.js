// styled components imports
import {
  Parent,
  BrandingSmallText,
  BrandingLargeText,
} from "../../styledComponents/Home/WelcomeText";

const WelcomeText = () => {
  return (
    <Parent>
      <BrandingSmallText className="branding-home-page">
        vitajte u nás
      </BrandingSmallText>
      <BrandingLargeText className="branding-home-page">
        V KUCHYNKE
      </BrandingLargeText>
    </Parent>
  );
};

export default WelcomeText;

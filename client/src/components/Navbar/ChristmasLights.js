// assets imports
import christmasLightsLightImg from "../../assets/ChristmasLights/christmas_lights_light.svg";
import christmasLightsDarkImg from "../../assets/ChristmasLights/christmas_lights_dark.svg";

// styled components imports
import { Parent, Image } from "../../styledComponents/Navbar/ChristmasLights";

const ChristmasLights = ({ isDarkTheme }) => {
  return (
    <>
      <Parent>
        <Image
          src={isDarkTheme ? christmasLightsLightImg : christmasLightsDarkImg}
        />
      </Parent>
    </>
  );
};

export default ChristmasLights;

// assets imports
import christmasLightsLightImg from "../../assets/ChristmasLights/christmas_lights_light.svg";

// styled components imports
import { Parent, Image } from "../../styledComponents/Navbar/ChristmasLights";

const ChristmasLights = ({ isDarkTheme }) => {
  return (
    <>
      <Parent>
        <Image src={christmasLightsLightImg} />
      </Parent>
    </>
  );
};

export default ChristmasLights;

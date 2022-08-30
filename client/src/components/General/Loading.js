// components imports
import LoadingAnimation from "./LoadingAnimation";

// styled components imports
import {
  MainWrapper,
  AnimationWrapper,
  Text,
} from "../../styledComponents/General/Loading";

const Loading = ({ text }) => {
  return (
    <MainWrapper className="loading-animation-background">
      <AnimationWrapper>
        <LoadingAnimation />
      </AnimationWrapper>
      <Text className="loading-text">{text}</Text>
    </MainWrapper>
  );
};

export default Loading;

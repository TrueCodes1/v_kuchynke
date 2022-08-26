// styled components imports
import {
  MainWrapper,
  TextPart,
  BarWrapper,
  BarContent,
} from "../../styledComponents/General/ProgressBar";

const ProgressBar = ({ text, value }) => {
  return (
    <MainWrapper>
      <TextPart className="progress-bar-text">{text}</TextPart>
      <BarWrapper className="progress-bar-wrapper">
        <BarContent
          className="progress-bar-content"
          style={{ width: `${value}%` }}
        />
      </BarWrapper>
    </MainWrapper>
  );
};

export default ProgressBar;

// styled components imports
import {
  Parent,
  SideText,
  MainText,
} from "../../styledComponents/Home/Question";

const Question = () => {
  return (
    <Parent className="question">
      <SideText className="question-text top">anketa týždňa</SideText>
      <MainText className="question-text">
        Patrí podľa Teba ananás na pizzu?
      </MainText>
      <SideText className="question-text bottom">daj nám vedieť</SideText>
    </Parent>
  );
};

export default Question;

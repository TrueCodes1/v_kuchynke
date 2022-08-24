// global imports
import { useState } from "react";

// assets imports
import close from "../../assets/General/close.svg";

// styled components imports
import {
  Choice,
  MainText,
  OpenedChoicesWrapper,
  OpenedClose,
  OpenedContent,
  OpenedQuestion,
  OpenedSideText,
  OpenedSuggestionInput,
  OpenedSuggestionText,
  OpenedSuggestionWrapper,
  ParentOfClosed,
  ParentOfOpened,
  SideText,
} from "../../styledComponents/Home/Question";
import Button from "../General/Button";

const Question = () => {
  const [isQuestionOpened, setIsQuestionOpened] = useState(false);

  return isQuestionOpened ? (
    <ParentOfOpened>
      <OpenedContent className="question-opened-content">
        <OpenedClose
          src={close}
          onClick={() => setIsQuestionOpened(!isQuestionOpened)}
        />
        <OpenedSideText>anketa týždňa</OpenedSideText>
        <OpenedQuestion>Patrí podľa Teba ananás na pizzu?</OpenedQuestion>
        <OpenedQuestion className="side">Ktorý tím si Ty?</OpenedQuestion>
        <OpenedChoicesWrapper>
          <Choice className="question-choice">tím pizza Hawai</Choice>
          <Choice className="question-choice">
            tím "ananás na pizzi nemá čo hľadať"
          </Choice>
        </OpenedChoicesWrapper>
        <OpenedSuggestionWrapper>
          <OpenedSuggestionText>
            Máš návrh na anketu ďalšieho týždňa? Čakáme naň:
          </OpenedSuggestionText>
          <OpenedSuggestionInput
            className="question-suggestion-input"
            placeholder="Tvoja otázka..."
          />
          <Button type="small" text="odošli" />
        </OpenedSuggestionWrapper>
      </OpenedContent>
    </ParentOfOpened>
  ) : (
    <ParentOfClosed
      className="question"
      onClick={() => setIsQuestionOpened(!isQuestionOpened)}
    >
      <SideText className="question-text top">anketa týždňa</SideText>
      <MainText className="question-text">
        Patrí podľa Teba ananás na pizzu?
      </MainText>
      <SideText className="question-text bottom">daj nám vedieť</SideText>
    </ParentOfClosed>
  );
};

export default Question;

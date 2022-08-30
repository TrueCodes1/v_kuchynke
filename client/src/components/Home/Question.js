// global imports
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Redux reducers imports
import updateIsLoading from "../../actions/isLoading";

// assets imports
import close from "../../assets/General/close.svg";
import closeLight from "../../assets/General/close_light.svg";

// components imports
import Button from "../General/Button";

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

const Question = ({ isDarkTheme }) => {
  const dispatch = useDispatch();

  const [isQuestionOpened, setIsQuestionOpened] = useState(false);
  const [questionInputValue, setQuestionInputValue] = useState("");

  const handleQuestionInputChange = (e) => {
    setQuestionInputValue(e.target.value);
  };

  const finishQuestionSuggestion = () => {
    dispatch(
      updateIsLoading({
        isLoading: true,
        loadingType: "QUESTION_SUGGESTION_SENT",
      })
    );

    setTimeout(() => {
      dispatch(
        updateIsLoading({
          isLoading: false,
          loadingType: "",
        })
      );
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isQuestionOpened ? (
        <motion.div
        // All the animations should be finished when the first official version of the app is ready.
        >
          <ParentOfOpened>
            <OpenedContent className="question-opened-content">
              <OpenedClose
                src={isDarkTheme ? close : closeLight}
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
                  value={questionInputValue}
                  onChange={(e) => handleQuestionInputChange(e)}
                />
                <Button
                  type="click"
                  size="small"
                  text="odošli"
                  onClick={() => finishQuestionSuggestion()}
                  disabled={questionInputValue.length === 0}
                  id="question-suggestion-button"
                />
              </OpenedSuggestionWrapper>
            </OpenedContent>
          </ParentOfOpened>
        </motion.div>
      ) : (
        <motion.div>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Question;

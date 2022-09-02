// global imports
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";

// assets imports
import arrowDownLight from "../../assets/General/arrow_down.svg";
import arrowDownDark from "../../assets/General/arrow_down_dark.svg";

// styled components imports
import {
  MainWrapper,
  TopPart,
  RollUpIcon,
  Label,
  TypesWrapper,
  TypesChild,
} from "../../styledComponents/General/TypesChoice";

const TypesChoice = ({ label, types, type, onTypeChange }) => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const [rolledUp, setRolledUp] = useState(false);

  const handleRolledUpClick = () => {
    setRolledUp((prev) => !prev);
  };

  return (
    <MainWrapper
      className={classNames("types-wrapper", { "rolled-up": rolledUp })}
    >
      <TopPart>
        <Label>{label}</Label>
        <RollUpIcon
          src={isDarkTheme ? arrowDownLight : arrowDownDark}
          className={classNames({ rotated: !rolledUp })}
          onClick={() => handleRolledUpClick()}
        />
      </TopPart>
      {types && (
        <TypesWrapper>
          {types.map((typeSpec, idx) => (
            <TypesChild
              key={typeSpec}
              onClick={() => onTypeChange(idx)}
              className={`type-child ${type === idx ? "chosen" : undefined}`}
            >
              {typeSpec}
            </TypesChild>
          ))}
        </TypesWrapper>
      )}
    </MainWrapper>
  );
};

export default TypesChoice;

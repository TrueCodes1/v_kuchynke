// styled components imports
import {
  MainWrapper,
  Label,
  TypesWrapper,
  TypesChild,
} from "../../styledComponents/General/TypesChoice";

const TypesChoice = ({ label, types, type, onTypeChange }) => {
  return (
    <MainWrapper className="types-wrapper">
      <Label>{label}</Label>
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

// components imports
import SearchBar from "./SearchBar";

// styled components imports
import {
  MainWrapper,
  TopPart,
  OrderChoiceWrapper,
  OrderChoiceChild,
} from "../../styledComponents/MyProfile/SearchZone";

const SearchZone = ({
  inputClassNames,
  placeholder,
  name,
  value,
  onInputChange,
  order,
  onOrderChange,
}) => {
  return (
    <MainWrapper>
      <TopPart>
        <SearchBar
          classNames={inputClassNames}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onInputChange}
        />
        <OrderChoiceWrapper className="text">
          <OrderChoiceChild
            onClick={() => onOrderChange()}
            className={order === -1 && "chosen"}
          >
            OD NAJNOVŠÍCH
          </OrderChoiceChild>
          <OrderChoiceChild
            onClick={() => onOrderChange()}
            className={order === 1 && "chosen"}
          >
            OD NAJSTARŠÍCH
          </OrderChoiceChild>
        </OrderChoiceWrapper>
      </TopPart>
    </MainWrapper>
  );
};

export default SearchZone;

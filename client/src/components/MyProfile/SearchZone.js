// components imports
import SearchBar from "./SearchBar";
import TypesChoice from "../General/TypesChoice";

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
  type,
  onTypeChange,
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
      <TypesChoice
        id="my-recipes-search-zone"
        label="hľadať v"
        types={[
          "všetky kategórie",
          "nezaradené recepty",
          "druhé jedlá",
          "polievky",
          "omáčky",
          "zákusky",
          "špeciality",
          "prílohy",
          "vianočné",
        ]}
        type={type}
        onTypeChange={onTypeChange}
      />
    </MainWrapper>
  );
};

export default SearchZone;

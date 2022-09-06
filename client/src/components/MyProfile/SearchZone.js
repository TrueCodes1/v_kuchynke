// components imports
import SearchBar from "./SearchBar";
import TypesChoice from "../General/TypesChoice";

// styled components imports
import {
  MainWrapper,
  TopPart,
  OrderChoiceWrapper,
  OrderChoiceChild,
  BottomPart,
  NumberOfResults,
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
  numberOfResults,
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
            onClick={() => onOrderChange("DESC")}
            className={order === -1 && "chosen"}
          >
            OD NAJNOVŠÍCH
          </OrderChoiceChild>
          <OrderChoiceChild
            onClick={() => onOrderChange("ASC")}
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
      <BottomPart>
        <NumberOfResults className="text">
          {numberOfResults < 1 && "nezobrazujú sa žiadne výsledky"}
          {numberOfResults === 1 && "zobrazuje sa 1 výsledok"}
          {numberOfResults > 1 &&
            numberOfResults < 5 &&
            `zobrazujú sa ${numberOfResults} výsledky`}
          {numberOfResults > 4 && `zobrazuje sa ${numberOfResults} výsledkov`}
        </NumberOfResults>
      </BottomPart>
    </MainWrapper>
  );
};

export default SearchZone;

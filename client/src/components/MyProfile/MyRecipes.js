// global imports
import { useState } from "react";

// mocks imports
import { mockRecipes } from "../../mockData/MyProfile/MyRecipes";

// functions imports
import { search } from "../../functions/General/search";

// components imports
import SearchZone from "./SearchZone";
import SearchResults from "./SearchResults";

// styled components imports
import {
  MainWrapper,
  Name,
  TopDivisionWrapper,
  TopDivisionChild,
} from "../../styledComponents/MyProfile/MyRecipes";

const MyRecipes = ({
  division,
  onDivisionChange,
  searchValue,
  onSearchValueChange,
  order,
  onOrderChange,
  type,
  onTypeChange,
  numberOfResults,
  searchResults,
  onSearchResultsChange,
}) => {
  const listForSearch = mockRecipes;

  const searchOption = {
    includeScore: true,
    keys: ["name"],
  };

  const searchInRecipes = (e) => {
    onSearchValueChange(e);
    const result = search(listForSearch, searchOption, e.target.value);
    onSearchResultsChange(result);
  };

  return (
    <MainWrapper>
      <Name className="text">Norbert Sviatko</Name>
      <TopDivisionWrapper>
        <TopDivisionChild
          className={`text ${division === "public" && "chosen"}`}
          onClick={() => onDivisionChange()}
        >
          verejné
        </TopDivisionChild>
        <TopDivisionChild
          className={`text ${division === "private" && "chosen"}`}
          onClick={() => onDivisionChange()}
        >
          súkromné
        </TopDivisionChild>
      </TopDivisionWrapper>
      <SearchZone
        inputClassNames="my-recipes-search-input"
        placeholder="Vyhľadaj recept..."
        name="my-recipes-search-input"
        value={searchValue}
        onInputChange={searchInRecipes}
        order={order}
        onOrderChange={onOrderChange}
        type={type}
        onTypeChange={onTypeChange}
        numberOfResults={numberOfResults}
      />
      <SearchResults results={searchResults} />
    </MainWrapper>
  );
};

export default MyRecipes;

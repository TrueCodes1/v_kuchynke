// global imports
import { useState } from "react";

// components imports
import SearchZone from "./SearchZone";

// styled components imports
import {
  MainWrapper,
  Name,
  TopDivisionWrapper,
  TopDivisionChild,
} from "../../styledComponents/MyProfile/MyRecipes";

const MyRecipes = () => {
  const [division, setDivision] = useState("public");
  const [searchValue, setSearchValue] = useState("");
  const [order, setOrder] = useState(-1);

  const handleDivisionChange = () => {
    setDivision((prev) => (prev === "public" ? "private" : "public"));
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOrderChange = () => {
    setOrder((prev) => (prev === -1 ? 1 : -1));
  };

  return (
    <MainWrapper>
      <Name className="text">Norbert Sviatko</Name>
      <TopDivisionWrapper>
        <TopDivisionChild
          className={`text ${division === "public" && "chosen"}`}
          onClick={() => handleDivisionChange()}
        >
          verejné
        </TopDivisionChild>
        <TopDivisionChild
          className={`text ${division === "private" && "chosen"}`}
          onClick={() => handleDivisionChange()}
        >
          súkromné
        </TopDivisionChild>
      </TopDivisionWrapper>
      <SearchZone
        inputClassNames="my-recipes-search-input"
        placeholder="Vyhľadaj recept..."
        name="my-recipes-search-input"
        value={searchValue}
        onInputChange={handleSearchValueChange}
        order={order}
        onOrderChange={handleOrderChange}
      />
    </MainWrapper>
  );
};

export default MyRecipes;

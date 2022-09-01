// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled-components
export const StyledInput = styled.input`
  width: 100%;
  font-size: ${FONT_SIZES.MINI};
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: transparent;
  margin: 10px 0;

  &.my-recipes-search-input {
    width: 55%;
  }
`;

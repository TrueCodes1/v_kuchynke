// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
`;

export const CookiesTextWrapper = styled.div``;

export const CookiesText = styled.p`
  font-size: ${FONT_SIZES.MINI};
  margin: 10px 0;

  &.strong {
    font-weight: bold;
  }
`;

export const CookiesList = styled.ul`
  margin: 20px 0;
`;

export const BottomWrapper = styled.div`
  width: 100%;
`;

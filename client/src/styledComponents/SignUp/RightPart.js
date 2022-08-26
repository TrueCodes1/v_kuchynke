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
  height: 75%;
`;

export const CookiesTextWrapper = styled.div``;

export const CookiesText = styled.p`
  font-size: ${FONT_SIZES.MINI};
`;

export const BottomWrapper = styled.div`
  width: 100%;
`;

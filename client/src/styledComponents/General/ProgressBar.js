// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const TextPart = styled.p`
  font-size: ${FONT_SIZES.ULTRA_MINI};
`;

export const BarWrapper = styled.div`
  height: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 100px;
  overflow: hidden;
  margin-top: 10px;
`;

export const BarContent = styled.div`
  height: 100%;
  width: 0;
  border-radius: 100px;

  &.25 {
    width: 25%;
  }

  &.50 {
    width: 50%;
  }

  &.75 {
    width: 75%;
  }

  &.100 {
    width: 100%;
  }
`;

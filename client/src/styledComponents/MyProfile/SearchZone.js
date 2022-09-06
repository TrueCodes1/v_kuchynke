// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const TopPart = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const OrderChoiceWrapper = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const OrderChoiceChild = styled.p`
  font-size: ${FONT_SIZES.SMALL};
  cursor: pointer;
  opacity: 0.25;

  &:nth-child(1) {
    margin-right: 20px;
  }

  &.chosen {
    opacity: 1;
  }
`;

export const BottomPart = styled.div`
  margin-top: 20px;
`;

export const NumberOfResults = styled.p`
  opacity: 0.5;
`;

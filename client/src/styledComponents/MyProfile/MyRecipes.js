// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components imports
import { MainWrapperUnstyled } from "./MyProfile";

// styled components
export const MainWrapper = styled(MainWrapperUnstyled)`
  top: 110px;
  padding: 0 180px;
`;

export const Name = styled.p`
  font-size: ${FONT_SIZES.GIANT};
  font-weight: 600;
`;

export const TopDivisionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const TopDivisionChild = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  font-weight: 500;
  opacity: 0.25;
  cursor: pointer;

  &:nth-child(1) {
    margin-right: 20px;
  }

  &.chosen {
    opacity: 1;
  }
`;

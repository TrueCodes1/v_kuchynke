// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled compoennts
export const Parent = styled.div`
  position: absolute;
  width: 375px;
  top: 150px;
  left: 0;
  padding: 20px;
  border-radius: 0 10px 10px 0;
`;

export const SideText = styled.p`
  font-size: ${FONT_SIZES.SMALL};
  font-weight: 800;
  opacity: 0.5;

  &.top {
    margin-bottom: 10px;
  }

  &.bottom {
    margin-top: 10px;
  }
`;

export const MainText = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  font-weight: 600;
  line-height: 1.25em;
  max-width: 300px;
  word-break: keep-all;
`;

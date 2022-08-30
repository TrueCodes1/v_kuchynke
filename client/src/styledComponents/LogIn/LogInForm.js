// global imports
import styled from "styled-components";

// styled imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  position: absolute;
  width: 32%;
  height: 50%;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextUnderInput = styled.p`
  font-size: ${FONT_SIZES.MINI};
  opacity: 0.5;
  margin: 20px 0;
`;

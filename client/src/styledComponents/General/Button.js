// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES, FONT_FAMILIES } from "../../styles/variables";

// styled components
export const LargeButton = styled.button`
  font-size: ${FONT_SIZES.MEDIUM};
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 15px 60px;
  width: 350px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 120px;
  margin: 0 auto;
  cursor: pointer;
  z-index: 1000;
`;

export const MidButton = styled.button`
  font-size: ${FONT_SIZES.SMALL};
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px 40px;
  width: 250px;
  cursor: pointer;
`;

export const SmallButton = styled.button`
  font-size: ${FONT_SIZES.MEDIUM};
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px 40px;
  width: 170px;
  cursor: pointer;
`;

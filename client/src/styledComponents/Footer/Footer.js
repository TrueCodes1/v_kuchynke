// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const Parent = styled.div`
  position: absolute;
  bottom: 0;
  height: fit-content;
  width: 100%;
  padding-bottom: 30px;
  z-index: 10;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterTextChild = styled.p`
  font-size: ${FONT_SIZES.MINI};
  font-weight: 300;
`;

export const FooterImgChild = styled.img`
  height: 20px;
  margin: 0 10px;
`;

// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES, FONT_FAMILIES } from "../../styles/variables";

// styled components
export const Parent = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  bottom: 25px;
  left: 25px;
  border-radius: 10px;
  overflow: hidden;
  z-index: 11;
  backdrop-filter: blur(10px);
  filter: drop-shadow(37px -37px 121px rgba(0, 0, 0, 0.23));
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.59;
`;

export const Content = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 30px;
`;

export const CookiesHeader = styled.p`
  font-size: ${FONT_SIZES.SMALL};
  font-weight: 600;
`;

export const CookiesText = styled.p`
  font-size: ${FONT_SIZES.MINI};
  font-weight: 400;
`;

export const ArrowImage = styled.img`
  width: 30px;
  position: absolute;
  right: 30px;
  top: 40px;
`;

// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES, FONT_FAMILIES } from "../../styles/variables";

// styled components
export const Parent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  text-align: center;
`;

export const BrandingSmallText = styled.p`
  font-size: ${FONT_SIZES.LARGE};
  opacity: 50%;
`;

export const BrandingLargeText = styled.p`
  font-size: ${FONT_SIZES.MAIN_BRANDING};
  font-family: ${FONT_FAMILIES.SIDE};
`;

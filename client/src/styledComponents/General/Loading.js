// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999999999999999;
`;

export const AnimationWrapper = styled.div``;

export const Text = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-top: 20px;
`;

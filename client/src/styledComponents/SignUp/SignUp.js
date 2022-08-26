// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 85%;
  bottom: 0;
  left: 0;
  padding: 20px 50px 0 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PasswordMatch = styled.p`
  font-size: ${FONT_SIZES.ULTRA_MINI};
  font-weight: 300;
`;

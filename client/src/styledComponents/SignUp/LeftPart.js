// global imports
import styled from "styled-components";

// styled imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = styled.p`
  font-size: ${FONT_SIZES.LARGE};
  font-weight: 600;
  margin-bottom: 20px;
`;

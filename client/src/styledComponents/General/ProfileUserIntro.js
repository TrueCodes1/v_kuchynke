// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const UserPhoto = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const UserName = styled.p`
  font-size: ${FONT_SIZES.LARGE};
  font-weight: 600;
  margin-top: 20px;
`;

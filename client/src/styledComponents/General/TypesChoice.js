// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Label = styled.p`
  opacity: 0.5;
`;

export const TypesWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TypesChild = styled.div`
  margin: 10px;
  padding: 10px 15px;
  font-size: ${FONT_SIZES.ULTRA_MINI};
  border-radius: 5px;
  cursor: pointer;
`;

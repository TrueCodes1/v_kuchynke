// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px 0;
`;

export const LargeLabel = styled(Label)`
  font-size: ${FONT_SIZES.MEDIUM};
  border-radius: 10px;
  padding: 15px 60px;
  width: 350px;
`;

export const MidLabel = styled(Label)`
  font-size: ${FONT_SIZES.SMALL};
  border-radius: 5px;
  padding: 10px 40px;
  width: 250px;
`;

export const SmallLabel = styled(Label)`
  font-size: ${FONT_SIZES.MEDIUM};
  border-radius: 5px;
  padding: 10px 40px;
  width: 170px;
`;

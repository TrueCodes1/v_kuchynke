// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 70%;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Child = styled.p`
  margin: 15px 0;
`;

export const Header = styled(Child)`
  font-size: ${FONT_SIZES.GIANT};
  font-weight: 800;
`;

export const MidText = styled(Child)`
  font-size: ${FONT_SIZES.MEDIUM};
`;

export const SmallText = styled(Child)`
  font-size: ${FONT_SIZES.SMALL};
`;

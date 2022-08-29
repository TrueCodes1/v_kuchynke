// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px 0;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &.sign-up-button {
    width: 100%;
  }

  &#photo-cropper-button {
    box-shadow: none;
    margin-top: 30px;
  }
`;

export const LargeButton = styled(Button)`
  font-size: ${FONT_SIZES.MEDIUM};
  border-radius: 10px;
  padding: 15px 60px;
  width: 350px;
`;

export const MidButton = styled(Button)`
  font-size: ${FONT_SIZES.SMALL};
  border-radius: 5px;
  padding: 10px 40px;
  width: 250px;
`;

export const SmallButton = styled(Button)`
  font-size: ${FONT_SIZES.MEDIUM};
  border-radius: 5px;
  padding: 10px 40px;
  width: 170px;
`;

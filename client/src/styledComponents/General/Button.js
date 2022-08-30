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
  font-weight: 600;

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

  &.home-page-daily-tip-button {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 150px;
  }

  &#question-suggestion-button {
    margin: 20px 0 10px 0;
    float: right;
  }

  &.about-us-link-button {
    margin: 30px 0;
    width: 300px;
    padding: 20px 40px;
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
  font-size: ${FONT_SIZES.MINI};
  border-radius: 5px;
  padding: 10px 40px;
  width: 170px;
`;

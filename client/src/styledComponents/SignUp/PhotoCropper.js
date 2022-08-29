// global imports
import styled from "styled-components";
import SliderUnstyled, {
  sliderUnstyledClasses,
} from "@mui/base/SliderUnstyled";

// styles imports
import { COLORS } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 20px 0;
  background: rgb(98, 68, 85, 0.25);
  backdrop-filter: blur(10px);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSlider = styled(SliderUnstyled)`
  height: 4px;
  margin-top: 20px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 50px;
    background-color: ${COLORS.SECONDARY};
    opacity: 0.5;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 50px;
    background-color: ${COLORS.SECONDARY};
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${COLORS.SECONDARY};

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 5px 5px 10px rgb(243, 243, 243, 0.25),
        -5px 5px 10px rgb(243, 243, 243, 0.25),
        5px -5px 10px rgb(243, 243, 243, 0.25),
        -5px -5px 10px rgb(243, 243, 243, 0.25);
    }
  }

  & .${sliderUnstyledClasses.valueLabel} {
    display: none;
  }
`;

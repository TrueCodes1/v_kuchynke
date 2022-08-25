// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const ParentOfClosed = styled.div`
  position: absolute;
  width: 375px;
  top: 150px;
  left: 0;
  padding: 20px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;

export const SideText = styled.p`
  font-size: ${FONT_SIZES.SMALL};
  font-weight: 800;
  opacity: 0.5;

  &.top {
    margin-bottom: 10px;
  }

  &.bottom {
    margin-top: 10px;
  }
`;

export const MainText = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  font-weight: 600;
  line-height: 1.25em;
  max-width: 300px;
  word-break: keep-all;
`;

export const ParentOfOpened = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(20px);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpenedContent = styled.div`
  border-radius: 10px;
  padding: 40px;
  position: absolute;
`;

export const OpenedSideText = styled.p`
  font-size: ${FONT_SIZES.SMALL};
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 20px;
`;

export const OpenedQuestion = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  font-weight: 600;

  &.side {
    opacity: 0.5;
  }
`;

export const OpenedChoicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Choice = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  font-weight: 600;
  line-height: 1.25em;
  text-align: center;
  border-radius: 5px;
  width: 250px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 40px 20px 30px 20px;
  cursor: pointer;
`;

export const OpenedSuggestionWrapper = styled.div``;

export const OpenedSuggestionText = styled.p`
  font-size: ${FONT_SIZES.SMALL};
  font-weight: 600;
`;

export const OpenedSuggestionInput = styled.textarea`
  outline: none;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  border: none;
  height: 6em;
  width: 100%;
  resize: none;
  font-size: ${FONT_SIZES.MEDIUM};
`;

export const OpenedClose = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 1001;
`;

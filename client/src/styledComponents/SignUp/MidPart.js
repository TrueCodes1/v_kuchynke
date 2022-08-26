// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const PhotoWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
`;

export const TextContent = styled.p`
  width: 150px;
`;

export const Photo = styled.img`
  max-width: 100%;
`;

export const FileInput = styled.input`
  visibility: hidden;
`;

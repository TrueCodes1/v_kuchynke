// global imports
import styled from "styled-components";

// styled components
export const MainWrapper = styled.div`
  width: 110px;
  height: 70px;
  margin: 15px 0;
  border-radius: 0 200px 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 46px;
  margin-right: 10px;

  &.my-recipes-icon {
    height: 55px;
  }

  &.settings-icon {
    height: 80px;
  }
`;

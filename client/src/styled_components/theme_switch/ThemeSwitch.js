// global imports
import styled from "styled-components";

// styled components
export const Parent = styled.div`
  min-width: 60px;
  max-width: 60px;
  min-height: 50px;
  min-height: 50px;
  border-radius: 100px 0 0 100px;
  position: fixed;
  z-index: 90;
  top: 50px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ImageChild = styled.img`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  transform: translateX(0);
  transition: 0.2s ease;

  &.left {
    transform: translateX(15px);
    transition: 0.25s ease;

    &.leave {
      transform: translateX(80px);
      transition: 0.25s ease;
    }
  }

  &.right {
    transform: translateX(-15px);
    transition: 0.25s ease;

    &.leave {
      transform: translateX(40px);
      transition: 0.25s ease;
    }
  }
`;

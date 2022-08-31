// global imports
import styled from "styled-components";

// styles imports
import { FONT_SIZES } from "../../styles/variables";

// styled components
export const MainWrapper = styled.div`
  width: 375px;
  min-height: 450px;
  margin: 0 60px;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  font-weight: 600;
  margin-bottom: 25px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &.grid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

export const ContentChild = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  &.grid-child {
    width: 152.5px;
    height: 120px;
    margin: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const GridImg = styled.img`
  height: 60%;
`;

export const GridText = styled.p`
  font-size: ${FONT_SIZES.MINI};
  font-weight: 500;
  opacity: 0.5;
`;

export const ListImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 10px;
`;

export const ListImg = styled.img`
  width: 100%;
`;

export const ListContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
`;

export const ListContentText = styled.p`
  font-size: ${FONT_SIZES.ULTRA_MINI};
`;

export const ListContentName = styled(ListContentText)`
  font-weight: 500;
`;

export const ListContentSide = styled(ListContentText)`
  font-weight: 400;
  opacity: 0.5;
`;

export const ListContentMessageIcon = styled.img`
  width: 40px;
  margin-left: 20px;
`;

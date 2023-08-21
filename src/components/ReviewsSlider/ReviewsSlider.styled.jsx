import { styled } from "styled-components";
import Slider from 'react-slick';

export const StyledSliser = styled(Slider)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ReviewsWrapper = styled.div`
  padding: 0 20px 122px 20px;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding: 0 94px 179px 94px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 128px 211px 128px;
  }
`;

export const ReviewWrapper = styled.div`
  padding: 32px;
  margin-right: 24px;

  display: flex;
  gap: 18px;

  height: 194px;

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.10);

  @media screen and (min-width: 768px) {
    height: 187px;
  }
`;

// 

export const Title = styled.h2`
  margin-bottom: 50px;

  font-family: Inter;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  text-align: center;
  text-transform: uppercase;

  color: #3E85F3;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.10;
  }
`;

export const Name = styled.h3`
  margin-bottom: 13px;

  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  color: #343434;
`;

export const Review = styled.p`
  margin-top: 24px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  color: rgba(17, 17, 17, 0.70);
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const BtnArrowNext = styled.button`
  position: absolute;
  bottom: -60px;
  left: calc(50% + 5px);

  @media screen and (min-width: 768px) {
      bottom: -80px;
  }
`;

export const BtnArrowPrev = styled.button`
  position: absolute;
  bottom: -60px;
  left: calc(50% - 80px);

  @media screen and (min-width: 768px) {
      bottom: -80px;
  }
`;

export const Icon = styled.svg`
  width: 50px;
  height: 50px;

  stroke: #111;
  fill: transparent;

  @media screen and (min-width: 768px) {
      width: 61px;
      height: 61px;
  }
`;
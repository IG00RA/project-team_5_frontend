import styled from 'styled-components';

export const Wrap = styled.div`
  margin-bottom: 64px;
  width: 100%;
  background-color: ${ p => p.theme.colors.homePage.bg};

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1067px) {
    margin-bottom: 118px;
  }
`

export const Title = styled.h2`
  text-align: center;
  color: ${ p => p.theme.colors.homePage.titleText};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.57;
    margin-bottom: 50px;
  }
`

export const CarouselWrap = styled.div`
  width: 335px;
  height: 194px;
  margin: 0 auto;

  & > * {
    display: flex;
    width: 100%;
    & > * {
      display: flex;
      & > * {
        display: flex;
        width: 100%;
        & > * {
        display: flex;
        gap: 24px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    height: 187px;
  }

    @media screen and (min-width: 1067px) {
    width: 1184px;
  }
`

export const ReviewWrap = styled.div`
  display: flex;
  padding: 24px 20px 24px 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  height: 100%;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.10);

  @media screen and (min-width: 768px) {
    padding: 32px 32px 50px 32px;
    align-items: start;
  }

  @media screen and (min-width: 1067px) {
    padding: 32px;
    width: 580px;
    height: 187px;
  }
`

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 18px;
`

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`
export const PhotoWrap = styled.div`
  width: 50px;
  height: 50px;
  align-items: center;
`

export const ReviewPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: blue;
  text-align: center;
`

export const ReviewUsername = styled.p`
  color: ${ p => p.theme.colors.header.userText};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.28;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: 500;
  }

  @media screen and (min-width: 1067px) {
    font-size: 18px;
  }
`

export const ReviewRaiting = styled.div`

  display: flex;
  flex-direction: row-revers;
  align-items: center;
  justify-content: start;
  gap: 10px;

    & input {
      width: 14px;
      height: 14px;
      display: flex;  
      margin-right: 10px;
      justify-content: center;
    }
`

export const ReviewText = styled.p`
  width: 100%;
  color: ${ p => p.theme.colors.notFoundPage.darkText};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  display: flex;
  justify-content: center;
  text-align: start;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-item: center;
  }
`
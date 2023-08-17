import styled from 'styled-components';

export const Wrap = styled.div`
  margin-bottom: 64px;
  max- width: 335px;
  background-color: var(--white);

  @media screen and (min-width: 375px) {
    max- width: 516px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1184px;
    margin-bottom: 118px;
  }
`

export const Title = styled.h2`
  text-align: center;
  color: var(--blue);
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 50px;
  }
`

export const ReviewWrap = styled.div`
  display: flex;
  padding: 24px 20px 24px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  width: 335px;
  height: 194px;

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.10);
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
`

export const ReviewPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: tomato;
  text-align: center;
  align-items: center;
/*   overflow: hidden;
  object-fit: cover; */
`

export const ReviewUsername = styled.p`
  color: #343434;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  text-align: start;
`
export const ReviewRaiting = styled.p`
  width: 110px;
  height: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ReviewText = styled.p`
  color: rgba(17, 17, 17, 0.70);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: start;
`
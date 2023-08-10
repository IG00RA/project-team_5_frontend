import { styled } from 'styled-components';

export const Wrap = styled.div`
  height: 812px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
	flex-direction: column;
  background-color: #3E85F3;
  padding: 256px 59px 256px 58px;


  @media screen and (max-width: 374px) {

  }
  @media screen and (min-width: 375px) {

  }
  @media screen and (min-width: 768px) {

  }
`
export const Logo = styled.img`
  width: 142px;
  height: 142px;
  flex-shrink: 0;
  margin: 0 auto;
`
export const Title = styled.h1`
  color: #FFF;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  margin-top: 2px;
`
export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
	flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`

export const LogInButton = styled.button`
  width: 131px;
  height: 46px;
  flex-shrink: 0;
  padding: 14px 33.5px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #3E85F3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 6px;
`
export const SignUpLink = styled.a`
  color: #FFF;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 116.667% */
  text-decoration-line: underline;
`
export const LogInIcon = styled.div`
  stroke: #fff;
  height: 18px;
  width: 18px;
  fill: transparent;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  
`
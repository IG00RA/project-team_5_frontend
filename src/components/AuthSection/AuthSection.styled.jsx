import { styled } from 'styled-components';

export const Wrap = styled.div`
  /* max-height: 812px; */
  height: 100vh;
  min-height: 812px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
	flex-direction: column;
  background-color: var(--blue);
  padding: 256px 59px 256px 58px;
  
  @media screen and (min-width: 375px) {
    /* max-height: 812px; */
    padding: 331px 92px 330px 91px;  
  }

  @media screen and (min-width: 768px) {
    /* max-height: 770px; */
    padding: 187px 369px 200px 369px; 
  }
`
export const Logo = styled.img`
  width: 142px;
  height: 142px;
  flex-shrink: 0;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 150px;
    height: 149px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`

export const Title = styled.h1`
  color: var(--white);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
  margin-top: 2px;

  @media screen and (min-width: 375px) {
    font-size: 100px;
    line-height: 130px;
    margin-top: 0px;
  }

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 150px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;

  @media screen and (min-width: 375px) {
    flex-direction: row-reverse;
    gap: 24px;
    margin-top: 40px;
  }
`

export const ButtonsWrap = styled.a`
  display: flex;
  align-items: center;
	flex-direction: column;
  gap: 16px;
  cursor: auto;

  &:hover svg,
  &:focus svg {
    stroke: var(--white);
  }

  &:hover,
  &:focus{
    button {
      background-color: var(--bluePriority);
      color: var(--white);
    }
  }

/*   @media screen and (min-width: 375px) {
    flex-direction: row-reverse;
    gap: 24px;
    margin-top: 40px;
  } */
`

export const LogInButton = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px 33.5px;
  color: var(--blue);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  cursor: pointer;

  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  background-color: var(--white);
  cursor: pointer;
`
export const SignUpLink = styled.a`
  color: var(--white);;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  text-decoration-line: underline;

  &:hover,
  &:focus{
    color: var(--bluePriority);
  }

  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
`
export const LogInIcon = styled.svg`
  stroke: var(--blue);
  height: 18px;
  width: 18px;
  fill: transparent;
  }

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`
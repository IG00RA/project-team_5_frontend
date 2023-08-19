import { styled } from 'styled-components';

export const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  min-height: 812px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${p => p.theme.colors.homePage.titleText};
  padding: 256px 59px 256px 58px;v

  @media screen and (min-width: 375px) {
    padding: 331px 92px 330px 91px;
    min-height: 1024px;
  }

  @media screen and (min-width: 768px) {
    padding: 187px auto 200px auto;
    min-height: 770px;
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
  color: ${p => p.theme.colors.homePage.bg};
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
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

export const TextStyle = styled.span`
  font-style: oblique;
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

export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  cursor: auto;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.homePage.bg};
  }

  &:hover,
  &:focus {
    button {
      background-color: ${p => p.theme.colors.homePage.hoverColor};
      color: ${p => p.theme.colors.homePage.bg};
    }
  }
`

export const LogInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px 33.5px;
  color: ${p => p.theme.colors.homePage.titleText};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  cursor: pointer;

  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  background-color: ${p => p.theme.colors.homePage.bg};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  `

export const SignUpLink = styled.a`
  color: ${p => p.theme.colors.homePage.bg};
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  text-decoration-line: underline;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.homePage.hoverColor};
  }

  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
`

export const LogInIcon = styled.svg`
  stroke: ${p => p.theme.colors.homePage.titleText};
  height: 18px;
  width: 18px;
  fill: transparent;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`

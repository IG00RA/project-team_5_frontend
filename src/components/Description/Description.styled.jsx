import { styled } from 'styled-components';

export const Wrap = styled.div`
  padding: 64px 20px;
  background-color: ${p => p.theme.colors.homePage.bg};
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 768px) {
    padding: 64px 128px 100px 128px;
  }
`

export const SectionWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    display: flex;
    gap: 228px;
    justify-content: space-around;
    flex-direction: row;
    padding-left: 77px;
    padding-right: 0px;
  }
`
export const SecondSectionWrap = styled.div`
  @media screen and (min-width: 375px) {  

    margin-left: auto;
    max-width: 275px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-contant: space-evenly;
    padding-left: 0px;
  }
`
export const DesktopSectionWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 228px;
    justify-content: space-around;
    flex-direction: row-reverse;
    margin-left: 0px;
  }
`

export const Number = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -4px;
  color: ${p => p.theme.colors.homePage.titleText};

  @media screen and (min-width: 375px) {
    font-size: 104px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.homePage.titleText};
  background: ${p => p.theme.colors.homePage.lightBg};

  width: 214px;
  height: 56px;
  border-radius: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 375px) {
    width: 264px;
    height: 56px;
    margin-top: 20px;
    font-size: 40px;
    line-height: 44px;
  }
`

export const DarkTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.homePage.darkTitle};

  width: 139px;
  height: 40px;
  margin-top: 14px;

  @media screen and (min-width: 375px) {
    font-size: 40px;
    line-height: 44px;
  }
`

export const LastTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.homePage.titleText};
  background: ${p => p.theme.colors.homePage.lightBg};

  width: 139px;
  height: 56px;
  border-radius: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`

export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.homePage.darkTitle};
  margin-top: 8px;

  @media screen and (min-width: 375px) {
    font-family: Inter;
    font-size: 40px;
    line-height: 44px;
    margin-top: 14px;
  }
`

export const Text = styled.p`
  color: ${p => p.theme.colors.homePage.darkText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 14px;

  @media screen and (min-width: 375px) {
    max-width: 275px;
  }
`
export const Image = styled.img`
  width: 335px;
  height: 457px;
  border-radius: 40px;
  background: ${p => p.theme.colors.homePage.imageBg};
  margin-top: 40px;
  text-align: center;

  @media screen and (min-width: 375px) {
    width: 704px;
    height: 700px;
    border-radius: 100px;
    margin-top: 48px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 604px;
    height: 700px;
    margin-top: 0px;
  }
`

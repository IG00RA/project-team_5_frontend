import { styled } from 'styled-components';

export const Wrap = styled.div`
  padding: 64px 20px;
  background-color: ${p => p.theme.colors.homePage.bg};
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1067px) {
    padding: 64px 128px 100px 128px;
    overflow: hidden; 
  }
`

export const SectionWrap = styled.div`
  @media screen and (min-width: 1067px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 228px;
    
    padding-left: 77px;
    padding-right: 0px;
  }
`
export const SecondSectionWrap = styled.div`
  @media screen and (min-width: 768px) {  

    margin-left: auto;
    max-width: 275px;
  }

  @media screen and (min-width: 1067px) {
    display: flex;
    flex-direction: column;
    justify-contant: space-evenly;
    padding-left: 0px;
  }
`
export const DesktopSectionWrap = styled.div`
  @media screen and (min-width: 1067px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 228px;
    
    margin-left: 0px;
  }
`

export const Number = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -4px;
  color: ${p => p.theme.colors.homePage.titleText};

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
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

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
    margin-top: 20px;
    font-size: 40px;
    line-height: 1.1;
  }
`

export const DarkTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
  color: ${p => p.theme.colors.homePage.darkTitle};

  width: 139px;
  height: 40px;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`

export const LastTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
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
  line-height: 1.25;
  text-transform: uppercase;
  color: ${p => p.theme.colors.homePage.darkTitle};
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    font-family: Inter;
    font-size: 40px;
    line-height: 1.1;
    margin-top: 14px;
  }
`

export const Text = styled.p`
  color: ${p => p.theme.colors.homePage.darkText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    max-width: 275px;
  }
`
export const Image = styled.img`
  width: 335px;
  border-radius: 40px;
  background: ${p => p.theme.colors.homePage.imageBg};
  margin-top: 40px;
  object-fit: contain;


  @media screen and (min-width: 768px) {
    width: 704px;
    border-radius: 100px;
    margin-top: 48px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1067px) {
    width: 604px;
    margin-top: 0px;
  }
`

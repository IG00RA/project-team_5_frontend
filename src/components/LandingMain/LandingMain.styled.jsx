import { styled } from 'styled-components';

export const Wrap = styled.div`
  padding: 64px 20px;
  background-color: var(--white);
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
    gap: 228px;
  }
`

export const Number = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -4px;
  color: var(--blue);

  @media screen and (min-width: 375px) {
    font-size: 104px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  color: var(--blue);
  background: var(--lightBlue1);

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
  color: var(--darkBG);

  width: 139px;
  height: 40px;
/*   display: flex;
  align-items: center;
  justify-content: center; */
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
  color: var(--blue);
  background: var(--lightBlue1);

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
  color: var(--darkBG);
  margin-top: 8px;

  @media screen and (min-width: 375px) {
    font-family: Inter;
    font-size: 40px;
    line-height: 44px;
    margin-top: 14px;
  }
`

export const Text = styled.p`
  color: var(--blackText);
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
  background: var(--lightBlue2);
  margin-top: 40px;
  text-align: center;

  @media screen and (min-width: 375px) {
    width: 704px;
    height: 700px;
    border-radius: 100px;
    margin-top: 48px;
  }
`
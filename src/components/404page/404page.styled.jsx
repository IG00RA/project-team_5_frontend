import { styled } from 'styled-components';

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
	flex-direction: column;
  background-color: #F7F6F9;
  padding: 264px 61px 246px 62px;

  @media screen and (min-width: 375px) {
    padding: 323px 133px 247px 132px;
  }

  @media screen and (min-width: 768px) {
    padding: 262px 468px 184px 469px;
  }
`
export const PictureWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 252px;
  height: 150px;

  color: #3E85F3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 100px;
  font-weight: 700;
  line-height: 150px;

  @media screen and (min-width: 375px) {
    font-size: 200px;
    line-height: 250px;
  }
`
export const Picture = styled.img`
  width: 81px;
  height: 188px;
  transform: rotate(-11deg);

  @media screen and (min-width: 375px) {
    width: 178px;
    height: 414px;
    transform: rotate(-11.558deg);
  }

  @media screen and (min-width: 768px) {
    transform: rotate(-11deg);
  }
`
export const Text = styled.p`
  margin-top: 28px;
  max-width: 281px;
  text-align: center;
  color: rgba(17, 17, 17, 0.70);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 375px) {
    margin-top: 80px;
    max-width: 387px;
  }
`

export const HomeButton = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px 32px;
  margin-top: 28px;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  cursor: pointer;

  border-radius: 16px;
  background: var(--blue);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  @media screen and (min-width: 375px) {
    margin-top: 32px;
    padding: 16px 48px;
    width: 211px;
    height: 56px;

    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }

  &:hover,
  &:focus {
    border: 1px solid var(--white);
    color: var(--white);
    background-color: #2b78ef;
    stroke: var(--white);

    @media screen and (min-width: 375px) {
      width: 213px;
    }
  }
`
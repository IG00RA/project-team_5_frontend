import { styled } from 'styled-components';

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${p => p.theme.colors.notFoundPage.bg};
  padding: 264px 61px 246px 62px;

  @media screen and (min-width: 768px) {
    padding: 323px 133px 247px 132px;
  }

  @media screen and (min-width: 1067px) {
    padding: 262px 468px 184px 469px;
  }
`;
export const PictureWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 252px;
  height: 150px;

  color: ${p => p.theme.colors.notFoundPage.titeText};
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 0.75;
    z-index: 1;
    width: 503px;
  }
`;
export const Picture = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 188px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 414px;
  }
`;
export const Text = styled.p`
  margin-top: 28px;
  max-width: 281px;
  text-align: center;
  color: ${p => p.theme.colors.notFoundPage.littleText};
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    min-width: 387px;
  }
`;

export const HomeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px 32px;
  margin-top: 28px;
  color: ${p => p.theme.colors.button.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;
  cursor: pointer;

  border-radius: 16px;
  background: ${p => p.theme.colors.button.mainBg};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 450ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding: 16px 48px;
    width: 211px;
    height: 56px;

    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.button.text};
    background-color: ${p => p.theme.colors.button.hoverBg};

    @media screen and (min-width: 768px) {
      width: 213px;
    }
  }
`;

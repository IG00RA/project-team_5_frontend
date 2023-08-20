import { styled } from 'styled-components';
import gooseImage from '../../images/registration-page/goose-signup.webp';
import gooseImage2x from '../../images/registration-page/goose-signup-2x.webp';
import { lightColors } from 'utils/theme';
export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${lightColors.lightBlue1};
`;

export const FormContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 335px;
  }
  @media screen and (min-width: ${props => props.theme.media.s}) {
    width: 335px;
  }
  @media screen and (min-width: ${props => props.theme.media.m}) {
    width: 480px;
    margin-bottom: 24px;
  }
`;

export const ImageContainer = styled.div`
  width: 368px;
  height: 521px;
  position: absolute;
  right: 60px;
  bottom: 19px;
  background-image: url(${gooseImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${gooseImage2x});
  }

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

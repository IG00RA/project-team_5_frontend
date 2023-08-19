import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  width: 100%;
  padding: 0 18px 40px;

  border-radius: 16px;

  background-color: ${props => props.theme.colors.accountPage.mainBg};

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 24px;
    column-gap: 50px;

    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: calc((100% - 758px) / 2);
    padding-right: calc((100% - 758px) / 2);
  }
`;

export const UserPreview = styled.div`
  position: relative;
  top: -22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    position: static;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.accountPage.mainText};
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 18);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const UserLabel = styled.p`
  color: ${props => props.theme.colors.accountPage.secondText};
  font-size: 12px;
  font-weight: 600;
  line-height: calc(14 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const AvatarContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 72px;
  height: 72px;

  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.accountPage.accent};
  border-radius: 50%;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.accountPage.avatarBg};
  border: 2px solid ${props => props.theme.colors.accountPage.accent};
  border-radius: 50%;
`;

export const AvatarText = styled.span`
  font-size: 38px;
  font-weight: 600;
  color: ${props => props.theme.colors.accountPage.secondText};

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

export const FileInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const CommonInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.accountPage.border};
  background-color: ${props => props.theme.colors.accountPage.mainBg};

  color: ${props => props.theme.colors.accountPage.mainText};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const Label = styled.p`
  margin-bottom: 8px;
  color: ${props => props.theme.colors.accountPage.secondText};
  font-size: 12px;
  line-height: calc(14 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const CommonField = styled.label`
  position: relative;
  width: 100%;
  max-width: 354px;
`;

export const AvatarField = styled.label`
  cursor: pointer;
  position: relative;
`;

export const Icon = styled.svg`
  stroke: ${props => props.theme.colors.accountPage.icon};
  fill: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: -4px;
  right: 15px;

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accountPage.accent};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Use = styled.use`
  height: 8px;
  width: 8px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  bottom: -16px;
  right: 4px;
  color: #e74a3b;
  font-size: 11px;
  line-height: calc(14 / 12);

  @media screen and (min-width: 768px) {
    bottom: -18px;
    font-size: 12px;
  }
`;

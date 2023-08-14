import styled from 'styled-components';

export const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 59px 18px 40px;
`;

export const AvatarContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 72px;
  height: 72px;

  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid var(--blue);
  border-radius: 50%;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: var(--darkBG);
`;

export const AvatarText = styled.span`
  font-size: 38px;
  font-weight: 600;
  color: var(--greySub);
`;

export const FileInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const AvatarField = styled.label`
  cursor: pointer;
  position: relative;
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: -4px;
  right: 15px;

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--blue);
`;

export const Svg = styled.svg`
  stroke: var(--white);
  height: 8px;
  width: 8px;
`;

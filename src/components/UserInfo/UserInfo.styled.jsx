import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors?.grey || '#343434'};
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 18);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const AvatarContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 32px;
  height: 32px;

  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors?.blue || '#3e85f3'};
  border-radius: 50%;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors?.darkBG || '#171820'};
`;

export const AvatarText = styled.span`
  font-size: 38px;
  font-weight: 600;
  color: ${props => props.theme.colors?.greySub || '#84828a'};

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

export const AvatarField = styled.div``;

import styled from 'styled-components';

export const AvatarContainer = styled.div`
  overflow: hidden;

  width: 124px;
  height: 124px;

  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid var(--blue);
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: var(--darkBG);
`;

export const AvatarText = styled.span`
  font-size: 54px;
  font-weight: 600;
  color: var(--greySub);
`;

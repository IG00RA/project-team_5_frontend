import { styled } from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 14px 18px 18px 14px;

  width: 100%;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.80);
  background: #F7F6F9;
`;

export const Title = styled.h3`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1.28;

color: #111;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 32px;
  border: 1.8px solid #3E85F3;
`;

export const TextWrapper = styled.div`
  padding: 4px 12px 4px 12px;

  border-radius: 4px;
  
  background-color: ${p => {
  switch (p.$priority) {
    case 'medium':
      return '#F3B249'
    case 'high':
      return '#EA3D65'
    case 'low':
      return '#72C2F8'
    default:
      return
  }
  }};
`;

export const Text = styled.p` 
  text-transform: capitalize;
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.20;

  color: #F7F6F9;
`;
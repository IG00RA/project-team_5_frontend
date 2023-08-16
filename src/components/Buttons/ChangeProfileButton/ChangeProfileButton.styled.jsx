import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  width: 195px;
  height: 46px;
  margin-top: 22px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors?.blue || '#3e85f3'};
  box-shadow: 4px 2px 16px 0px
    ${props => props.theme.colors?.greyElements || '#88a5bf7a'};

  &:hover,
  &:focus {
    background-color: #2b78ef;
    box-shadow: 4px 2px 16px 0px
      ${props => props.theme.colors?.greyElements || '#88a5bf7a'};
  }

  &:disabled {
    background-color: ${props => props.theme.colors?.greyElements || '#efefef'};
    box-shadow: none;

    p {
      color: ${props => props.theme.colors?.blackText || '#111111'};
    }
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
`;

export const Text = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: ${props => props.theme.colors?.white || '#ffffff'};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const CastomLoader = styled.div`
  position: relative;
  bottom: 20px;
  transform: scale(0.4);
`;

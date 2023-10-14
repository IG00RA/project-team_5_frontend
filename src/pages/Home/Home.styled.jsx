import styled from 'styled-components';

export const LanguageWrap = styled.div`
  & > button {
    position: absolute;
    top: 30px;
    right: 30px;
    border: solid 2px #ffffffbd;
    border-radius: 50%;
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
`;

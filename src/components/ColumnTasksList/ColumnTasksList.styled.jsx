import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  height: 100%;

  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: 2px;

  /* &::-webkit-scrollbar {
    width: 0;
    height: 0;
  } */

  // полоса прокрутки (скроллбар)

  &::-webkit-scrollbar {
    width: 0.35rem;
    border: 0.0625rem solid rgba(0, 0, 0, 0.237);
    background-color: transparent;
  }

  // ползунок скроллбара

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.modal.task.taskScroll};
    border-radius: 0.2rem;
    box-shadow: 2px 1px 9px 0px rgba(136, 165, 191, 0.48);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.colors.modal.task.taskScrollHover};
  }
`;

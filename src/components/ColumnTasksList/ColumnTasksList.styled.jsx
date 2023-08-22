import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  height: 100%;
  width: 100%;

  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: 2px;
  scrol &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  // полоса прокрутки (скроллбар)

  &::-webkit-scrollbar {
    width: 0.4rem;
    border: 0.0625rem solid rgba(105, 104, 104, 0.237);
    background-color: transparent;
  }

  // ползунок скроллбара

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.modal.task.taskScroll};
    border-radius: 0.2rem;
    border: 1px solid rgba(105, 104, 104, 0.237);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.colors.modal.task.taskScrollHover};
  }

  &::-webkit-scrollbar-track {
    margin-left: 2px;
  }
`;

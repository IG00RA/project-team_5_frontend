import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-basis: calc((100% - 16px) / 3);
  width: 100%;

  margin-top: 16px;
  padding-bottom: 34px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  // полоса прокрутки (скроллбар)

  &::-webkit-scrollbar {
    height: 0.4rem;
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

  @media (min-width: 768px) {
    overflow: auto;
    white-space: nowrap;
  }
`;

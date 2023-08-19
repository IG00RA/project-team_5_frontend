import styled from 'styled-components';

export const ScrollToTopButton = styled.div`
  @media screen and (max-width: 374px) {
    display: none;
  }

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #3E85F3;
  color: #fff;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s, visibility 0.3s;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  border-radius: 16px;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
    color: ${p => p.theme.colors.notFoundPage.titeText};
    background-color: ${p => p.theme.colors.notFoundPage.hoverBg};
  }
`;
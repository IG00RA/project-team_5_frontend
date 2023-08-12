import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #3e85f3;
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

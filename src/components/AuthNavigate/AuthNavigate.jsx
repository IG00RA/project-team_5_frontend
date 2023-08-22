import PropTypes from 'prop-types';
import { StyledLink } from './AuthNavigate.styled';

export const AuthNavigate = ({ link, text }) => {
  return <StyledLink to={link}>{text}</StyledLink>;
};

AuthNavigate.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

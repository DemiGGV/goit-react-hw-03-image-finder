import PropTypes from 'prop-types';
import { ButtonS } from 'components/MainContainerCSS';

export const Button = ({ onChange }) => (
  <ButtonS type="button" onClick={() => onChange()}>
    Load more
  </ButtonS>
);

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
};

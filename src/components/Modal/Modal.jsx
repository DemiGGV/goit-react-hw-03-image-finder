import PropTypes from 'prop-types';

export const Modal = ({ image, tags }) => {
  return <img src={image} alt={tags} />;
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

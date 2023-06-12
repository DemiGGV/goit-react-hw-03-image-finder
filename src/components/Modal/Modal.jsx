import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    padding: 5,
    border: 'none',
    position: 'static',
    borderRadius: 0,
    overflow: 'hidden',
  },
};
ReactModal.setAppElement('#root');

export const Modal = ({ image, isOpenState, onChange }) => {
  return (
    <ReactModal
      isOpen={isOpenState}
      contentLabel="Modal window"
      onRequestClose={() => {
        onChange({});
      }}
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
      style={customStyles}
    >
      <img src={image.largeImageURL} alt={image.tags} loading="lazy" />
    </ReactModal>
  );
};

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  isOpenState: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

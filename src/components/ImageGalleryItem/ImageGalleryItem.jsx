import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import ReactModal from 'react-modal';
import { Modal } from '../Modal/Modal';
import {
  ImageGalleryItemImage,
  ImageGalleryItemS,
} from 'components/MainContainerCSS';

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

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  componentWillUnmount = () => {
    clearAllBodyScrollLocks();
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;

    return (
      <ImageGalleryItemS style={{ height: '260px' }}>
        <ImageGalleryItemImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.handleOpenModal}
        />
        <ReactModal
          isOpen={isModalOpen}
          contentLabel="Modal window"
          onRequestClose={this.handleCloseModal}
          onAfterOpen={() => disableBodyScroll(document)}
          onAfterClose={() => enableBodyScroll(document)}
          style={customStyles}
        >
          <Modal image={image.largeImageURL} tags={image.tags} />
        </ReactModal>
      </ImageGalleryItemS>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

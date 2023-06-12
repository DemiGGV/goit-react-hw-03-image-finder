import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryS } from 'components/MainContainerCSS';

export const ImageGallery = ({ imgArr, modalToggle }) => {
  return (
    <ImageGalleryS>
      {imgArr.map(image => (
        <ImageGalleryItem key={image.id} image={image} onChange={modalToggle} />
      ))}
    </ImageGalleryS>
  );
};

ImageGallery.propTypes = {
  imgArr: PropTypes.arrayOf(PropTypes.object),
  modalToggle: PropTypes.func.isRequired,
};

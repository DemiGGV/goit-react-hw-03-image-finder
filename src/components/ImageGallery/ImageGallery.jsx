import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryS } from 'components/MainContainerCSS';

export const ImageGallery = ({ imgArr }) => {
  return (
    <ImageGalleryS>
      {imgArr.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageGalleryS>
  );
};

ImageGallery.propTypes = {
  imgArr: PropTypes.arrayOf(PropTypes.object),
};

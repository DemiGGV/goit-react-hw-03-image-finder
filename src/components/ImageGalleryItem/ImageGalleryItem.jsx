import PropTypes from 'prop-types';

import {
  ImageGalleryItemImage,
  ImageGalleryItemS,
} from 'components/MainContainerCSS';

export const ImageGalleryItem = ({ image, onChange }) => {
  return (
    <ImageGalleryItemS style={{ height: '260px' }}>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => {
          onChange(image);
        }}
      />
    </ImageGalleryItemS>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

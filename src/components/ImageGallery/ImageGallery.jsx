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

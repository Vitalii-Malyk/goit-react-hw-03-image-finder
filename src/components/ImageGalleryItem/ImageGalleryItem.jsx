import {
  StyleGalleryItem,
  StyleImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ webformatURL, id }) => {
        return (
          <StyleGalleryItem className="gallery-item" key={id}>
            <StyleImg src={webformatURL} alt="" />
          </StyleGalleryItem>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;

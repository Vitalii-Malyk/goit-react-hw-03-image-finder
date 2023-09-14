import {
  StyleGalleryItem,
  StyleImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ largeImageURL, id }) => {
        return (
          <StyleGalleryItem className="gallery-item" key={id}>
            <StyleImg
              src={largeImageURL}
              alt=""
              onClick={() => onClick(largeImageURL)}
            />
          </StyleGalleryItem>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;

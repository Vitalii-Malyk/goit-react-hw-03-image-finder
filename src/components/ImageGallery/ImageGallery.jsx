import { GalleryStyle } from 'components/ImageGallery/ImageGallery.styled';

const ImageGallery = ({ children }) => {
  return <GalleryStyle className="Gallery">{children}</GalleryStyle>;
};

export default ImageGallery;

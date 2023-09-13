import { GalleryStyle } from 'components/ImageGallery/ImageGallery.styled';

const ImageGalary = ({ children }) => {
  return <GalleryStyle className="Gallery">{children}</GalleryStyle>;
};

export default ImageGalary;

import { IconButtonStyle } from 'components/IconButton/IconButton.styled';

const IconButton = ({ children }) => (
  <IconButtonStyle type="submit" className="IconButton">
    {children}
  </IconButtonStyle>
);

export default IconButton;

import { IconButtonLoadMoreStyle } from 'components/ButtonLoadMore/ButtonLoadMore.styled';

const IconButtonLoadMore = ({ children, onClick }) => (
  <IconButtonLoadMoreStyle
    type="button"
    className="IconButtonLoadMore"
    onClick={onClick}
  >
    {children}
  </IconButtonLoadMoreStyle>
);

export default IconButtonLoadMore;

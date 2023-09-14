import { IconButtonLoadMoreStyle } from 'components/ButtonLoadMore/ButtonLoadMore.styled';

const IconButtonLoadMore = ({ children }) => (
  <IconButtonLoadMoreStyle type="button" className="IconButtonLoadMore">
    {children} Load more...
  </IconButtonLoadMoreStyle>
);

export default IconButtonLoadMore;

import { GalleryStyle } from 'components/ImageGallery/ImageGallery.styled';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import IconButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { ReactComponent as SearchIcon } from 'Icons/searchIcon.svg';
import getImages from 'services/getImages';
import Loader from 'components/Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchRequest !== this.props.searchRequest) {
      this.serverRequest();
    }
    if (prevProps.page !== this.props.page && this.props.page > 1) {
      this.serverRequestMore();
    }
  }

  serverRequest = () => {
    const { searchRequest, page } = this.props;

    getImages(searchRequest, page)
      .then(response => {
        this.setState({
          images: response.hits,
          status: 'resolve',
          totalHits: response.totalHits,
        });
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  serverRequestMore = () => {
    const { searchRequest, page } = this.props;

    getImages(searchRequest, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: 'resolve',
        }));
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  render() {
    const { images, status, totalHits } = this.state;
    const fff = totalHits <= this.props.page * 12;

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'resolve')
      return (
        <>
          <GalleryStyle className="Gallery">
            <ImageGalleryItem images={images} onClick={this.props.onClick} />
          </GalleryStyle>
          {!fff && (
            <IconButtonLoadMore onClick={this.props.loadNextPage}>
              <SearchIcon width="32px" height="32px" />
              Load more...
            </IconButtonLoadMore>
          )}
        </>
      );
  }
}

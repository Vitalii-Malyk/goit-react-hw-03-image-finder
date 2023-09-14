import { GalleryStyle } from 'components/ImageGallery/ImageGallery.styled';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import IconButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { ReactComponent as SearchIcon } from 'Icons/searchIcon.svg';
import getImages from 'services/getImages';

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchRequest !== this.props.searchRequest) {
      this.serverRequest();
      // .then(response => response.json())
      // .then(data => this.setState({ images: data.hits, data: data }));
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
    if (status === 'pending') {
      return;
      // return <Loader />;
    }
    if (status === 'resolve')
      return (
        <>
          <GalleryStyle className="Gallery">
            <ImageGalleryItem images={images} onClick={this.props.onClick} />
          </GalleryStyle>
          ;
          {totalHits > 12 && (
            <IconButtonLoadMore onClick={this.props.loadMoreBtn}>
              <SearchIcon width="32px" height="32px" />
            </IconButtonLoadMore>
          )}
          {totalHits === 0 &&
            alert('There are no images available for this request!')}
        </>
      );
  }
}

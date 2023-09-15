import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import IconButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Loader from 'components/Loader/Loader';
import getImages from 'services/getImages';

import { GalleryStyle } from 'components/ImageGallery/ImageGallery.styled';

import { ReactComponent as SearchIcon } from 'Icons/searchIcon.svg';

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    totalHits: null,
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
    if (searchRequest) {
      this.setState({ status: 'pending' });
      getImages(searchRequest, page)
        .then(response => {
          this.setState({
            images: response.hits,
            status: 'resolve',
            totalHits: response.totalHits,
          });
        })
        .catch(error => this.setState({ status: 'rejected' }));
    } else return;
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
    const howManyPictures = totalHits <= this.props.page * 12;

    if (totalHits === 0) {
      return Notify.failure(
        'There were no images found for your request. Try another request',
        {
          position: 'center-center',
          timeout: 1500,
          clickToClose: true,
        }
      );
    } else if (status === 'pending') {
      return <Loader />;
    } else if (status === 'resolve') {
      return (
        <>
          <GalleryStyle className="Gallery">
            <ImageGalleryItem images={images} onClick={this.props.onClick} />
          </GalleryStyle>
          {!howManyPictures && (
            <IconButtonLoadMore onClick={this.props.loadNextPage}>
              <SearchIcon width="32px" height="32px" />
              Load more...
            </IconButtonLoadMore>
          )}
        </>
      );
    } else if (status === 'rejected') {
      return Notify.failure('Error, try reloading the page!', {
        position: 'center-center',
        timeout: 1500,
        clickToClose: true,
      });
    }
  }
}

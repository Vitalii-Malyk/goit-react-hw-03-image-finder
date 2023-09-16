import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import IconButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import getImages from 'services/getImages';
import Loader from 'components/Loader/Loader';

import { ReactComponent as SearchIcon } from 'Icons/searchIcon.svg';

import { AppEl } from 'components/App.styled';

export default class App extends Component {
  state = {
    searchRequest: '',
    images: [],
    modalImg: '',
    showModal: false,
    page: 1,
    status: 'idle',
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      this.serverRequest();
    }
    if (prevState.page !== this.state.page && this.state.page > 1) {
      this.serverRequestMore();
    }
  }

  serverRequest = () => {
    const { searchRequest, page } = this.state;
    if (searchRequest) {
      this.setState({ status: 'pending' });
      getImages(searchRequest, page)
        .then(response => {
          this.setState({
            images: response.hits,
            totalHits: response.totalHits,
            status: 'resolve',
          });
        })
        .catch(error => this.setState({ status: 'rejected' }));
    } else return;
  };

  serverRequestMore = () => {
    const { searchRequest, page } = this.state;
    getImages(searchRequest, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: 'resolve',
        }));
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  formSubmitHandler = searchRequest => {
    this.setState({ searchRequest: searchRequest });
  };

  loadNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  };

  render() {
    console.log(this.state);
    const { modalImg, showModal, images, status, totalHits } = this.state;
    const howManyPictures = totalHits <= this.state.page * 12;
    const paramsNotifyFailure = {
      position: 'center-center',
      timeout: 1500,
      clickToClose: true,
    };

    return (
      <AppEl>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {totalHits === 0 &&
          Notify.failure(
            'There were no images found for your request. Try another request',
            { paramsNotifyFailure }
          )}
        {status === 'pending' && <Loader />}
        {status === 'resolve' && (
          <ImageGallery className="Gallery">
            <ImageGalleryItem images={images} onClick={this.getLargeImg} />
          </ImageGallery>
        )}
        {!howManyPictures && (
          <IconButtonLoadMore onClick={this.loadNextPage}>
            <SearchIcon width="32px" height="32px" />
            Load more...
          </IconButtonLoadMore>
        )}
        {status === 'rejected' &&
          Notify.failure('Error, try reloading the page!', {
            paramsNotifyFailure,
          })}
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </AppEl>
    );
  }
}

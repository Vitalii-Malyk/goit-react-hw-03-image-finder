import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalary from './ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

import { AppEl } from 'components/App.styled';

export default class App extends Component {
  state = {
    searchRequest: '',
    modalImg: '',
    showModal: false,
    page: 1,
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
    const { modalImg, showModal, page } = this.state;
    return (
      <AppEl>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGalary
          searchRequest={this.state.searchRequest}
          onClick={this.getLargeImg}
          loadNextPage={this.loadNextPage}
          page={page}
        />
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </AppEl>
    );
  }
}

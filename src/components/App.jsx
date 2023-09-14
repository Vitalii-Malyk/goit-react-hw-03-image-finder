import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalary from './ImageGallery/ImageGallery';

import { AppEl } from 'components/App.styled';

class App extends Component {
  state = {
    searchRequest: '',
    modalImg: '',
    showModal: false,
  };

  formSubmitHandler = searchRequest => {
    this.setState({ searchRequest: searchRequest });
  };

  loadMoreBtn = () => {
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
    return (
      <AppEl>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGalary
          searchRequest={this.state.searchRequest}
          onClick={this.getLargeImg}
          loadMoreBtn={this.loadMoreBtn}
        />
      </AppEl>
    );
  }
}

export default App;

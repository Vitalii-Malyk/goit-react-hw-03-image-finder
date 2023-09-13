import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalary from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';

class App extends Component {
  state = {
    searchRequest: '',
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      console.log(this.state);
      console.log(prevState);
      getImages(this.state.searchRequest)
        .then(response => response.json())
        .then(data => this.setState({ images: data.hits }));
    }
  }

  formSubmitHandler = searchRequest => {
    this.setState({ searchRequest: searchRequest });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGalary>
          <ImageGalleryItem images={this.state.images} />
        </ImageGalary>
      </div>
    );
  }
}

export default App;

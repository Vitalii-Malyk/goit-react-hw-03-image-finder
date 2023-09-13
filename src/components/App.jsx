import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';

class App extends Component {
  state = {
    searchRequest: '',
  };

  formSubmitHandler = searchRequest => {
    console.log(this.state);
    return this.setState(searchRequest);
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
      </div>
    );
  }
}

export default App;

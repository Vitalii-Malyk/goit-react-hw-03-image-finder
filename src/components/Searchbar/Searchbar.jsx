import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchRequest: value });
  };

  сreateRequest = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchRequest);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      searchRequest: '',
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.сreateRequest}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchRequest}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

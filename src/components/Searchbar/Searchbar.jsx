import React, { Component } from 'react';

import {
  SearchbarEl,
  SearchForm,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';
import IconButtonStyle from 'components/IconButton/IconButton';

import { ReactComponent as SearchIcon } from 'Icons/searchIcon.svg';

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
      <SearchbarEl className="searchbar">
        <SearchForm className="form" onSubmit={this.сreateRequest}>
          <IconButtonStyle type="submit" className="button">
            <SearchIcon width="24px" height="24px" />
          </IconButtonStyle>
          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchRequest}
          />
        </SearchForm>
      </SearchbarEl>
    );
  }
}

export default Searchbar;

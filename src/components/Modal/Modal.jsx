import { Component } from 'react';

import { OverlayEl, ModalEl, ImgEl } from 'components/Modal/Modal.styled';

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.clickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }

  clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  clickEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <OverlayEl className="overlay" onClick={this.clickBackdrop}>
        <ModalEl className="modal">
          <ImgEl src={this.props.url} alt="" />
        </ModalEl>
      </OverlayEl>
    );
  }
}

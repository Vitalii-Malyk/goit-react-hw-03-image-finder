import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';

export const StyleGalleryItem = styled('li')(() => {
  return {
    borderRadius: '2px',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
  };
});

export const StyleImg = styled('img')(() => {
  return {
    width: '100%',
    height: '260px',
    objectFit: 'cover',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'block',
    maxWidth: '100%',

    //     &:hover: {
    //   transform: 'scale(1.03)',
    //   cursor: 'zoom-in',
    // },
  };
});

import styled from 'styled-components';

export const LoaderStyle = styled('div')(() => {
  return {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: '10',
  };
});

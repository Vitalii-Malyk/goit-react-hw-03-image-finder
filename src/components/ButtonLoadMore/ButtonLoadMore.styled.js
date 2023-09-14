import styled from 'styled-components';

export const IconButtonLoadMoreStyle = styled.button`
  margin: 0 auto;
  width: 150px;
  padding: 5px;
  border: none;
  color: white;
  border-radius: 10px;
  background-color: rgb(63, 81, 181, 0.8);
  cursor: pointer;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.01);
  }
`;

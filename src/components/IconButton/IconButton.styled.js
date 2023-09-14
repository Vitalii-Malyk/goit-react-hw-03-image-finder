import styled from 'styled-components';

export const IconButtonStyle = styled.button`
  margin: 0;
  padding: 5px;
  border: none;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
  }
`;

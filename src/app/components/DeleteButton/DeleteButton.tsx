import React from 'react';
import styled from 'styled-components';
styled;

export default function DeleteButton(): JSX.Element {
  return (
    <>
      <Button>x</Button>
    </>
  );
}

const Button = styled.button`
  color: white;
  background-color: red;
  border-radius: 5px;
  box-shadow: royalblue;
`;

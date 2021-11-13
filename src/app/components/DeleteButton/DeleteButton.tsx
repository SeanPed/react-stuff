import React from 'react';
import styled from 'styled-components';

type DeleteButtonProps = {
  deleteCard: () => void;
};
export default function DeleteButton({
  deleteCard,
}: DeleteButtonProps): JSX.Element {
  return (
    <>
      <Button onClick={deleteCard}>x</Button>
    </>
  );
}

const Button = styled.button`
  color: white;
  background-color: red;
  border-radius: 5px;
  box-shadow: royalblue;
`;

import React from 'react';
import styled from 'styled-components';

export default function AddForm(): JSX.Element {
  return (
    <>
      <Form action="">
        <input type="text" />
        <input type="text" />
        <button type="submit">Click me fool!</button>
      </Form>
    </>
  );
}

const Form = styled.form`
  background: hotpink;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

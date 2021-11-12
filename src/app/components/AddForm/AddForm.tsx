import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export default function AddForm(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('https://json-server.neuefische.de/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, description: description }),
    });
    navigate('/');
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:{' '}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Label>
        <Label>
          Description:{' '}
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Label>
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

const Label = styled.label`
  color: green;
`;

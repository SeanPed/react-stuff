import React from 'react';
import styled from 'styled-components';
import StyledTag from '../Tag/Tag';
import TagList from '../TagList/TagList';

type CardProps = {
  name: string;
  description: string;
  categorys?: string[];
};

function Card({ name, description, categorys }: CardProps): JSX.Element {
  return (
    <StyledCard>
      <h2>{name}</h2>
      <p>{description}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: #fffffe;
  color: #272343;
  border-radius: 3px;
  border: 2px solid #272343;
  display: inline-block;
  padding: 5px 8px;
  max-width: 250px;
`;

export default Card;

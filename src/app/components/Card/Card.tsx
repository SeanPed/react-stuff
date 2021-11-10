import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';
import TagList from '../TagList/TagList';

type CardProps = {
  title: string;
  description: string;
  tags: string[];
};

function Card({ title, description, tags }: CardProps): JSX.Element {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{description}</p>
      <TagList>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </TagList>
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

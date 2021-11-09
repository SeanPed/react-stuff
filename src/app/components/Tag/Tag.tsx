import React from 'react';
import styled from 'styled-components';

type TagProps = {
  value: string;
};

function Tag({ value }: TagProps): JSX.Element {
  return <StyledTag>{value}</StyledTag>;
}

const StyledTag = styled.li`
  list-style: none;
  background-color: #e3f6f5;
  color: #2d334a;
  padding: 3px 5px;
  display: inline-block;
  border-radius: 5px;
  border: 2px #272343 solid;
  font-weight: bolder;
`;

export default Tag;

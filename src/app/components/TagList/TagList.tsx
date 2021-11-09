import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type TagListProps = {
  children: ReactNode;
};
function TagList({ children }: TagListProps): JSX.Element {
  return <StyledTagList>{children}</StyledTagList>;
}

const StyledTagList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  margin-left: 0;
  padding: 0;
`;

export default TagList;

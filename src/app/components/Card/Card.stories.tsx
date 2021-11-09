import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const Example = (): JSX.Element => (
  <Card
    title={'Headline'}
    description={'This is a description for a beautiful card!'}
    tags={[]}
  ></Card>
);
export const ExampleWithTags = (): JSX.Element => (
  <Card
    title={'Headline'}
    description={'This is a description for a beautiful card!'}
    tags={['White', 'Used']}
  ></Card>
);

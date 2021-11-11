import React from 'react';
import DetailCard from './DetailCard';

export default {
  title: 'Component/DetailCard',
  component: DetailCard,
};

export const Detail = (): JSX.Element => (
  <DetailCard
    name="Old Toorhbrush"
    description="you could use it to clean shoes"
    categories={['toiletry', 'tool']}
  />
);

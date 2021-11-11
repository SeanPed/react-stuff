import React from 'react';
import { Link } from 'react-router-dom';

type DetailCardProps = {
  name: string;
  description: string;
  categories?: string[];
};

export default function DetailCard({
  name,
  description,
  categories,
}: DetailCardProps): JSX.Element {
  return (
    <article>
      <Link to={'/'}>Back</Link>
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {categories?.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </article>
  );
}

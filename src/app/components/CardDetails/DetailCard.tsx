import React from 'react';
import { Link } from 'react-router-dom';
import Deletebutton from '../DeleteButton/DeleteButton';

type DetailCardProps = {
  name: string;
  description: string;
  categories?: string[];
  onDelete: () => void;
};

export default function DetailCard({
  name,
  description,
  categories,
  onDelete,
}: DetailCardProps): JSX.Element {
  return (
    <article>
      <Link to={'/'}>Back</Link>
      <Deletebutton deleteCard={onDelete} />
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {categories?.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </article>
  );
}

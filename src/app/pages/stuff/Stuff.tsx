import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Stuff(): JSX.Element {
  const { stuffParams } = useParams();
  return (
    <>
      <h2>Stuff</h2>
      <p>
        You have a {stuffParams} on your list. Back to{' '}
        <Link to="/stuff">Stuff</Link>
      </p>
    </>
  );
}
export default Stuff;

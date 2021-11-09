import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';

function Stuff(): JSX.Element {
  const { stuffParams } = useParams();
  return (
    <>
      <h2>Stuff</h2>
      <p>
        You have a {stuffParams} on your list. Back to{' '}
        <Button>
          <Link to="/stuff">Stuff</Link>
        </Button>
        <Link to="/stuff">
          <Button large={true}>Stuff</Button>
        </Link>
      </p>
    </>
  );
}
export default Stuff;

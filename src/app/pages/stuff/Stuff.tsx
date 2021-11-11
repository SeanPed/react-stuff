import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/CardDetails/DetailCard';
import type { Thing } from '../../types';

function Stuff(): JSX.Element {
  const [thing, setThing] = useState<null | Thing>(null);
  const { thingID } = useParams();

  useEffect(() => {
    //standart function from React - calls a new function - as seen below
    async function fetchOne() {
      //function must be async since we use await in code
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${thingID}`
      ); // link to API
      const fetchedOne = await response.json(); //api written in json - convert to JS
      setThing(fetchedOne);
    }
    fetchOne();
  });

  return (
    <>
      {thing && (
        <DetailCard
          name={thing.name}
          description={thing.description}
          categories={thing.categories}
        />
      )}
    </>
  );
}
export default Stuff;

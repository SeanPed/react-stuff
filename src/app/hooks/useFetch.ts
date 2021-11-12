import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const importAll = (r: any): never[] => r.keys().map(r);

const UseImageLoader = (): string[] => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const importItems = (): never[] =>
      importAll(
        require.context('../assets/engagement', false, /\.(png|jpe?g|svg)$/)
      );
    setItems(importItems);
  }, []);

  return items;
};

export default UseImageLoader;

import { useState, useEffect } from 'react';

const UseScrollSpy = (scrollDistance = 10): boolean => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      const scrollCheck = window.scrollY >= scrollDistance;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener('scroll', onScroll);

    return (): void => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll, scrollDistance]);
  return scroll;
};

export default UseScrollSpy;

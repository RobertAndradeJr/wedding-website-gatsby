import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Invitation from '../components/Invitation';
import EventsList from '../components/EventsList';
import City from '../components/City';
import HowWeMet from '../components/HowWeMet';
import Directions from '../components/Directions';

export const Home: React.FC = () => {
  useEffect(() => {
    const location = window.location.hash;
    const scrollTo = document.getElementById(location.replace(/#/, ''));
    scrollTo !== null &&
      scrollTo.scrollIntoView({
        behavior: 'smooth'
      });
  });
  return (
    <>
      <Hero />
      <Invitation />
      <HowWeMet />
      <EventsList />
      <City />
      <Directions />
    </>
  );
};

export default Home;

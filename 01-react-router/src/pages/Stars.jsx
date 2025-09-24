import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import { starsLoader } from '../data/loaders.js';
import { useOutletContext } from 'react-router';

const Stars = () => {
  const stars = useOutletContext();

  if (!stars) return <p className='message--loading'>Loading...</p>;

  return (
    <>
      <div className='grid'>
        <title>Stars Gallery</title>
        {stars?.map((star) => (
          <Card star={star} key={star.id} />
        ))}
      </div>
      <span className='scroll-thingy' role='img' aria-label='Scroll Thingy Rocket'></span>
    </>
  );
};

export default Stars;

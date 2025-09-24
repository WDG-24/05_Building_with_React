import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
import { starsLoader } from '../data/loaders.js';

export default function MainLayout() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await starsLoader();
      console.log(data);
      setStars(data);
    };
    fetchData();
  }, []);

  return (
    <div className='body'>
      <Header />
      <Outlet context={stars} />
      <footer>&copy; footerbla</footer>
    </div>
  );
}

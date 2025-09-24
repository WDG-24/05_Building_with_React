import { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router';
import { starsLoader } from '../data/loaders.js';

export default function SingleStar() {
  // const [star, setStar] = useState(null);

  const { slug } = useParams();
  const stars = useOutletContext();

  const star = stars.find((s) => s.slug === slug);

  // console.log('PARAMS: ', params);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await starsLoader();
  //     console.log(data);
  //     const s = data.find((star) => star.id === Number(id));
  //     setStar(s);
  //   };
  //   fetchData();
  // }, [id]);

  return (
    star && (
      <Link to='/'>
        <article className='star'>
          <img src={star.url} alt={star.heading} className='star__img' />
          <h1 className='star__heading'>{star.heading}</h1>
          <p className='star__description'>{star.description}</p>
        </article>
      </Link>
    )
  );
}

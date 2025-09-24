import { Link } from 'react-router';

const Card = ({ star }) => {
  const { url, heading, description, id, slug } = star;

  return (
    <Link className='star' to={`/star/${slug}`}>
      <div>
        <img src={url} alt={heading} className='star__img' />
      </div>
      <h3 className='star__heading'>{heading}</h3>
      <p className='star__description'>{description}</p>
    </Link>
  );
};

export default Card;

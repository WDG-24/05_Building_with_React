import { Link } from 'react-router';
import { useTheme } from '../../contexts/ThemeContext.jsx';
import { useBooking } from '../../contexts/BookingContext.jsx';

const DestinationCard = ({ title, image, text, slug }) => {
  const { theme } = useTheme();
  const { bookingState, addDestination, removeDestination } = useBooking();

  const isBooked = bookingState.destinations.includes(slug);

  // console.log('RENDERING: CARD');
  function handleClick() {
    if (isBooked) {
      removeDestination(slug);
    } else {
      addDestination(slug);
    }
  }

  return (
    <div data-theme={theme} className='card bg-base-100 shadow-md'>
      <figure>
        <img src={image} alt='Tokyo' className='h-48 w-full object-cover' />
      </figure>
      <div className='card-body'>
        <Link to={`/destinations/${slug}`}>
          <h2 className='card-title text-lg font-semibold hover:text-primary'>{title}</h2>
        </Link>
        <p>{text}</p>
        <div className='card-actions justify-end'>
          <button type='button' className={`btn ${isBooked ? 'btn-error' : 'btn-primary'}`} onClick={handleClick}>
            {isBooked ? 'Unbook' : 'Book now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

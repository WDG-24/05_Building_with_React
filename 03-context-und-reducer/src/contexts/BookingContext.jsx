import { createContext, useContext, useReducer } from 'react';

const BookingContext = createContext();

const initialState = {
  destinations: [],
  premium: false,
  myNumber: 42,
};

function reducer(state, action) {
  switch (action.type) {
    case 'add_booking': {
      const premium = state.destinations.length >= 2;
      const destinations = [...state.destinations, action.payload];
      return { ...state, destinations, premium };
    }
    case 'remove_destination': {
      const destinations = state.destinations.filter((d) => d !== action.payload);
      const premium = destinations.length >= 2;
      return { ...state, destinations, premium };
    }

    default:
      throw new Error('Unknown action: ', action.type);
  }
}

export default function BookingContextProvider({ children }) {
  const [bookingState, dispatch] = useReducer(reducer, initialState);
  console.log(bookingState);

  function addDestination(dest) {
    dispatch({ type: 'add_booking', payload: dest });
  }

  function removeDestination(dest) {
    dispatch({ type: 'remove_destination', payload: dest });
  }

  return (
    <BookingContext.Provider value={{ bookingState, addDestination, removeDestination }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}

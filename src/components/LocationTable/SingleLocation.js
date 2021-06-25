import React from 'react';
import { useDispatchCart } from '../Cart/Cart';

const SingleLocation = ({ location }) => {
  const navItemStyle = {
    textDecoration: 'none',
    color: 'black',
    border: '1px solid black',
    padding: '5px',
  };

  const dispatch = useDispatchCart();
  const addToCart = (item) => dispatch({ type: 'ADD', item });

  // console.log(location);
  return (
    <div>
      <div
        style={{ width: '300px', height: '180px' }}
        className="card p-1 m-1 text-white bg-info"
      >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            Seat No.{location.seatNo}
          </h6>
          <p className="card-text">
            From {location.locationFrom} - to - {location.locationTo} - $
            {location.price}
          </p>
          <button
            onClick={() => addToCart(location)}
            style={navItemStyle}
            to="#"
            className="card-link"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleLocation;

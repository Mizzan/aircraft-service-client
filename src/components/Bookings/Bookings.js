import React from 'react';
import { useCart, useDispatchCart } from '../Cart/Cart';
import CheckoutPage from '../CheckoutPage/CheckoutPage';

const Bookings = ({ location, index, handleRemove }) => {
  return (
    <>
      <div style={{ borderRadius: '10px' }} className="container bg-info">
        <div className="py-3 d-flex flex-wrap justify-content-between text-light my-3">
          <div>
            <span>Seat No - {location.seatNo}</span>
            <p>
              {location.locationFrom} to {location.locationTo}
            </p>
            <p>Price: ${location.price}</p>
          </div>
          <button
            style={{
              width: '200px',
              marginTop: '20px',
              padding: '10px 0',
              height: '40px',
              color: 'black',
            }}
            className="btn btn-danger"
            onClick={() => handleRemove(index)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();

  const totalPrice = items.reduce(
    (total, b) => parseInt(total) + parseInt(b.price),
    0
  );

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', index });
  };

  const titleStyle = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'tomato',
    height: '300px',
    padding: '10px',
    color: 'white',
    margin: '0 0 30px 0',
  };

  if (items.length === 0) {
    return (
      <main>
        <h1 style={titleStyle}>Your cart is empty.</h1>
      </main>
    );
  }
  return (
    <>
      <main>
        {items.map((item, index) => (
          <Bookings
            handleRemove={handleRemove}
            key={index}
            location={item}
            index={index}
          />
        ))}
        <CheckoutPage totalPrice={totalPrice} />
      </main>
    </>
  );
}

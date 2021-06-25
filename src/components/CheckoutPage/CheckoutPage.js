import React, { useState } from 'react';

const CheckoutPage = ({ totalPrice }) => {
  const [policy, setPolicy] = useState(0);

  const economyPackage = () => setPolicy(1);
  const businessPackage = () => setPolicy(2);

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const titleStyle = {
    textAlign: 'center',
    background: 'tomato',
    padding: '10px',
    color: 'white',
    margin: '40px 0 30px 0',
  };

  const subTitle = {
    background: 'yellow',
    padding: '20px',
    borderRadius: '20px',
  };
  const subTitle1 = {
    background: 'purple',
    color: 'white',
    padding: '20px',
    borderRadius: '20px',
  };

  return (
    <div>
      <div className="container">
        <h2 style={{ textAlign: 'center', margin: '50px 0' }}>
          Your current total cost is:{' '}
          {totalPrice.toLocaleString('en', {
            style: 'currency',
            currency: 'USD',
          })}
        </h2>
        <h3 style={titleStyle}>Choose your package</h3>
        <div style={divStyle}>
          <h4 style={subTitle} onClick={economyPackage}>
            Economy
          </h4>
          <h4 style={subTitle1} onClick={businessPackage}>
            Business
          </h4>
        </div>

        <div className="d-grid my-5">
          <h3 className="text-center">
            {policy === 0
              ? 'Choose your package'
              : policy === 1
              ? 'You choose Economy Package, so cost is the same.'
              : `You choose Business, so your current total cost would be $${(
                  totalPrice + 50
                ).toFixed(2)}`}
          </h3>
          <div className="btn btn-lg btn-outline-info mt-5">Pay</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

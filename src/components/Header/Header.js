import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        height: '200px',
        textAlign: 'center',
      }}
      className="bg-info"
    >
      <div
        style={{
          transform: 'translate(0%, 70%)',
        }}
        className="container mx-auto"
      >
        <h2 className="text-light">Welcome to aircraft service limited</h2>
        <h4 className="text-light">Select your desire destination</h4>
      </div>
    </div>
  );
};

export default Header;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleLocation from './SingleLocation';

const LocationTable = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://whispering-reef-09244.herokuapp.com/bookings');
      // console.log(res.data);
      setLocations(res.data);
    };

    getData();
  }, []);

  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      {locations.map((location) => (
        <SingleLocation key={location.seatNo} location={location} />
      ))}
    </div>
  );
};

export default LocationTable;

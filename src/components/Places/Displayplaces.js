import React from 'react'
import Placedata from './Placedata';
import { TrekkingPlaces } from '../../usingdata'; // Import the data

const Displayplaces = () => {
  return (
    <div className="display">
            {TrekkingPlaces.map((place, index) => (
            <Placedata
              key={index}
              name={place.name}
              details={place.details}
              img={place.img}
              trekroute={place.trekroute}
              url={place.url} // Ensure this line is there
            />
        ))}
    </div>
  )
}

export default Displayplaces;



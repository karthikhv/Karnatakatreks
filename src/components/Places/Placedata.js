import React from 'react';
import "./Place.css";

const Placedata = (props) => {
  
  return (
    <div className="top">
      <div className="place-main">
        <div className="img-row">
          <div className="changeimg">
            <img src={props.img} alt="" />
          </div>
          <div className="routebutton">
            <img src={props.trekroute} alt="" />
          </div>
        </div>
        <div className="contain">
          <h1>{props.name}</h1> 
          <h6>{props.details}</h6> 
        </div>
      </div>
    </div>
  );
}

export default Placedata;

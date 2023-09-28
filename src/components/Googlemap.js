import React from 'react';
import "./MyMap.css";

const Googlemap = () => {
    return (
        <div className="Google">
            <div className="mapcontainer">
                <div className="map">
                    <iframe 
                        title="Embedded Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.7684688!2d75.7754016!3d13.3152582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbd8d01fa8e6e35%3A0x1288e4641281dc11!2sChikmagalur%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4vEXAMPLECODE"
                        width="100%" 
                        height="450" 
                        frameBorder="0" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Googlemap;

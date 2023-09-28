import React from 'react';
import "./MyMap.css"
const Mymap = () => {
    const locations = [
        { name: 'Kudremukha', link: 'https://maps.app.goo.gl/GvjMBbFWRgvx9Fwi6' },
        { name: 'Kurinjal', link: 'https://maps.app.goo.gl/H4W4JGWcrfgJhQPs7' },
        { name: 'kodachadri', link: 'https://maps.app.goo.gl/vQpwZ3GVttNKMxXg7' },
        { name: 'Thadiyandamol', link: 'https://maps.app.goo.gl/TnaPGczsjBoZ2SXD6' },
        { name: 'Nethravathi', link: 'https://maps.app.goo.gl/gpesxSSyDGGcyhiN7' },
        { name: 'merthi gudda', link: 'https://maps.app.goo.gl/LsWyEA3DeTThTE1A8' },
        { name: 'kumara parvatha', link: 'https://maps.app.goo.gl/QnL6iFxxuN4j6E956' },
        { name: 'kemmangundi Z point', link: 'https://maps.app.goo.gl/1hUd9sU1PdhetffYA' },
        { name: 'kote Betta', link: 'https://maps.app.goo.gl/1F4QoTHJnWPVP5MA7' },
        { name: 'Narasimha Parvatha peak', link: 'https://maps.app.goo.gl/Q3J9DQVSbftx5eHD9' },
    ];

    return (
        <div className="mymap">
            {locations.map((location, index) => (
                <div key={index} className="titlebutton">
                    <span className="location-name">{location.name}</span>
                    <a href={location.link} target="_blank" rel="noopener noreferrer" className="map-link">
                        <button className="map-btn">View on Map</button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Mymap;

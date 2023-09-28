import React, { useState, useEffect,useMemo } from 'react';
import './Wallpaper.css';

// Importing images
import img1 from "../assets/trek/trek1.jpg"
import img2 from "../assets/trek/trek2.jpg"
import img3 from "../assets/trek/trek3.jpg"
import img4 from "../assets/trek/trek4.jpg"
import img5 from "../assets/trek/trek5.jpg"
import img6 from "../assets/trek/trek6.jpg"


const Wallpaper = () => {
    const images = useMemo(() => [img1, img2, img3, img4, img5, img6], []);
    
    const [currentImage, setCurrentImage] = useState(images[0]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            let randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomIndex]);
        }, 4000); 
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="home-screen" style={{ backgroundImage: `url(${currentImage})` }}>
        </div>
    );
}

export default Wallpaper;

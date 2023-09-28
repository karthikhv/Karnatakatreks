import React, { useState, useEffect, useMemo } from 'react';
import "./Rotateimg.css";

import img1 from "../../assets/myimg/img1.jpg";
import img2 from "../../assets/myimg/img2.jpg";
import img3 from "../../assets/myimg/img3.jpg";
import img4 from "../../assets/myimg/img4.jpg";
import img5 from "../../assets/myimg/img5.jpg";
import img6 from "../../assets/myimg/img6.jpg";

const Rotateimg = () => {
    const images = useMemo(() => [img1, img2, img3, img4, img5, img6], []);
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImageIndex(randomIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="rota" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="overlay"></div>
            <div className="box">
                {images.map((image, index) => (
                    <span key={index} style={{ '--i': index + 1 }} className={index === currentImageIndex ? "showing" : ""}>
                        <img src={image} alt="" />
                    </span>
                ))}
            </div>
        </div>
    );
}


export default Rotateimg;

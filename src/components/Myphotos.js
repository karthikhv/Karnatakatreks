/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react'
import "./Mypho.css"

import i1 from "../assets/myphoto/i1.jpg"
import i2 from "../assets/myphoto/i2.jpg"
import i3 from "../assets/myphoto/i3.jpg"
import i4 from "../assets/myphoto/i4.jpg"
import i5 from "../assets/myphoto/i5.jpg"
import i6 from "../assets/myphoto/i6.jpg"
import i7 from "../assets/myphoto/i7.jpg"
import i8 from "../assets/myphoto/i8.jpg"
import i9 from "../assets/myphoto/i9.jpg"
import i10 from "../assets/myphoto/i10.jpg"
import i11 from "../assets/myphoto/i11.jpg"
import i12 from "../assets/myphoto/i12.jpg"
import i13 from "../assets/myphoto/i13.jpg"
import i14 from "../assets/myphoto/i14.jpg"
import i15 from "../assets/myphoto/i15.jpg"
import i16 from "../assets/myphoto/i16.jpg"
import i17 from "../assets/myphoto/i17.jpg"
import i18 from "../assets/myphoto/i18.jpg"
import i19 from "../assets/myphoto/i19.jpg"
import i20 from "../assets/myphoto/i20.jpg"
import i21 from "../assets/myphoto/i21.jpg"
import i22 from "../assets/myphoto/i22.jpg"
import i23 from "../assets/myphoto/i23.jpg"
import i24 from "../assets/myphoto/i24.jpg"
import i25 from "../assets/myphoto/i25.jpg"
import i26 from "../assets/myphoto/i26.jpg"
import i27 from "../assets/myphoto/i27.jpg"
import i28 from "../assets/myphoto/i28.jpg"
import i29 from "../assets/myphoto/i29.jpg"
import i30 from "../assets/myphoto/i30.jpg"
import i31 from "../assets/myphoto/i31.jpg"

//... other imports

const Myphotos = () => {
    const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24, i25, i26, i27, i28, i29, i30, i31];

    const [openImage, setOpenImage] = useState(null); // to track the opened image

    return (
        <div className="pernal">
            <div className="piccontain">
                {images.map((image, index) => (
                    <div className="img-box" key={index} onClick={() => setOpenImage(image)}>
                        <img src={image} alt={`image-${index}`} />
                    </div>
                ))}
            </div>

            {openImage && (
                <div className="modal" onClick={() => setOpenImage(null)}>
                    <img className="modal-image" src={openImage} alt="modal content" />
                </div>
            )}
        </div>
    )
}

export default Myphotos;

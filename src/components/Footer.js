import React from 'react';
import "./Footer.css";
import {  FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="maincontent">
          <div className="left"> 
            <div className="phone">
              <h4>
                <FaPhone size={20} style={{color:'white', marginRight:"25px"}} />
                +91-7618743479
              </h4>            
            </div>
            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{color:'white', marginRight:"25px"}} />
                karthikhv018@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>Social media</h4>
            <div className="social">
              <a href="https://www.facebook.com/karthik_hv" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{color:'white', marginRight:"25px"}} />
              </a>
              <a href="https://www.linkedin.com/in/karthikhv018/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{color:'white', marginRight:"25px"}} />
              </a>
              <a href="https://www.instagram.com/karthik_hv/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{color:'white', marginRight:"25px"}} />
              </a>
              <a href="https://github.com/karthikhv" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{color:'white', marginRight:"25px"}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

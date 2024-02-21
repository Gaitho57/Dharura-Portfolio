import "./FooterStyles.css";

import { FiFacebook, FiHome, FiLinkedin, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import React from 'react';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FiHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Moi Avenue Avenue</p>
              <p>Nairobi</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FiPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              12343543
            </h4>
          </div>
          <div className="email">
            <h4>
              <FiMail size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              dharura@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Company</h4>
          <p>This is the about section of Dharura
             that describes what its purpose and functions are</p>
          <div className="socials">
            <FiFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FiTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FiLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
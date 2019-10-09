import React from 'react';

import Tlogo from '../../assets/telegraph_diamond_black.svg';

import './style.scss';

const Footer = () => (
  <div className="row transition footer">
    <div className="wide-content-width">
      <a className="footer-telegraph-link" href="http://www.telegraph.co.uk/">
        <img className="footer-telegraph-logo" src={Tlogo} alt="Telegraph logo" />
      </a>
      <p className="footer-copy-link">&copy; 2019 Telegraph Media Group Limited</p>
      <ul className="footer-links">
        <li>
          <a target="_blank" href="http://www.telegraph.co.uk/termsandconditions">
            Terms and conditions
          </a>
        </li>
        <li>
          <a target="_blank" href="http://www.telegraph.co.uk/topics/about-us/3691972/Privacy-and-Cookie-Policy.html">
            Privacy policy
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;

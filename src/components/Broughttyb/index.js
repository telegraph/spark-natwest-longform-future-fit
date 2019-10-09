import React from 'react';

import './style.scss';

import natImg from '../../assets/natwest-stacked-logo.svg';

function Broughttyb() {
  return (
    <div className="partner">
      <p>Brought to you by</p>
      <img src={natImg} alt="NatWest" />
    </div>
  );
}

export default Broughttyb;

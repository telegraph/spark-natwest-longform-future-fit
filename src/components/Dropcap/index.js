import React from 'react';

import './style.scss';

const Dropcap = ({ children }) => (
  <span className="dropcap">
    <span className="face top" />
    <span className="face left" />
    <span className="face right">
      <span className="dropcap__letter">
        { children}
      </span>
    </span>
  </span>
);

export default Dropcap;

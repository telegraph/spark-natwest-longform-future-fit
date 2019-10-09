import React from 'react';

import './style.scss';

const CTA = props => (
  <div className="cta">
    <div className="cta__inner">
    {props.children}
    </div>
  </div>
);

export default CTA;

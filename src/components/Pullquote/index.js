import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';

function Pullquote(props) {
  const [bodyContent, isVisible] = makeVisible();


  return (
    <div className={`pullquote ${props.quote ? 'pullquote--withquote' : ''} ${props.specialQuote ? 'pullquote--special' : ''} ${isVisible ? 'visible' : ''}`} ref={bodyContent}>
      {props.children}
    </div>
  );
}

export default Pullquote;

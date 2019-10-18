import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';

function Pullquote({quote, specialQuote, notopborder, children}) {
  const [bodyContent, isVisible] = makeVisible();


  return (
    <div className={`pullquote ${quote ? 'pullquote--withquote' : ''} ${notopborder ? 'pullquote--notopborder' : ''} ${specialQuote ? 'pullquote--special' : ''} ${isVisible ? 'visible' : ''}`} ref={bodyContent}>
      {children}
    </div>
  );
}

export default Pullquote;

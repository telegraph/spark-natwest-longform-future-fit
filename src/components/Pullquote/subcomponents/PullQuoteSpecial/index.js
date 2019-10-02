import React from 'react';

import makeVisible from '../../../../hooks/makeVisible';

import './style.scss';

export default function PullQuoteSpecial(props) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <div className={`pullquote-special-container ${isVisible ? 'visible' : ''}`} ref={bodyContent}>
      {props.children}
    </div>
  );
}

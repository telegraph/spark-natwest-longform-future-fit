import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';

export default function AnimationTrigger(props) {
  const [bodyContent, isVisible] = makeVisible();

  return (
    <div className={`trigger ${isVisible ? 'visible' : ''}`} ref={bodyContent}>
      {props.children}
    </div>
  );
}

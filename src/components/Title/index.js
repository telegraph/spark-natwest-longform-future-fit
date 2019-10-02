import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';


function Title({ copy, img }) {
  const [title, isVisible] = makeVisible();

  return (
    <div className="title" style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translate3d(${isVisible ? '0%' : '-40px'}, 0, 0)` }} ref={title}>
      <h2 className="title__content">
        { copy }
      </h2>
      <img src={img} alt={copy} />
    </div>
  );
}

export default Title;

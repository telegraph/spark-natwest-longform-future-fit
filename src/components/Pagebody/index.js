import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import Title from '../Title';

import './style.scss';

function Pagebody({
  title, img, noPadding, children, purple, anchor
}) {
  const [bodyContent] = makeVisible();

  return (
    <div className={`pagebody ${!title ? 'pagebody--notitle' : ''} ${noPadding ? 'no-padding-top' : ''} ${purple ? 'purple' : ''}`} id={anchor}>
      {title ? <Title copy={title} img={img} /> : ''}
      <div className={`pagebody__content ${title ? '' : 'pagebody__content--notitle'}`} ref={bodyContent}>
        {children}
      </div>
    </div>
  );
}

export default Pagebody;

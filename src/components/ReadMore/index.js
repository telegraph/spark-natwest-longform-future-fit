import React from 'react';
import './style.scss';

const ReadMore = props => (
  <div className="read-more">
    <p>{props.content}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.82 10">
      <defs></defs>
      <title>read more</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon className="cls-1" points="9.41 4.71 0.59 0 0 0.59 9.41 10 18.82 0.59 18.23 0 9.41 4.71" />
        </g>
      </g>
    </svg>
  </div>
);

export default ReadMore;

import React from 'react';

import './style.scss';

function BackgroundBubble(props) {
  return (
    <div className="box parallax" style={{ top: `${props.pos.top}`, left: `${props.pos.left}` }}
    />
  );
}

export default BackgroundBubble;

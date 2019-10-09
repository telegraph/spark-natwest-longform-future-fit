import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import Bubbles from '../Bubbles';


import './style.scss';

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

function Timeline({ title, items, oneLineTitle, anchor }) {
  // Set state
  const [fixed, updateFixed] = useState(false);
  const [titleFade, triggerTitleFade] = useState(false);
  // DOM Refs
  const timeLine = useRef(null);
  const timelineTitle = useRef(null);

  // const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  const handleScroll = () => {
    // Calculates when the timeline title should be fixed / when it should fade
    window.requestAnimationFrame(() => {
      const timeLineBB = timeLine.current.getBoundingClientRect();
      const timeLineTitleBB = timelineTitle.current.getBoundingClientRect();
      if (timeLineBB.top - window.innerHeight < 0 && timeLineBB.bottom > 0) {
        if ((timeLineTitleBB.top < 110 && !fixed) && (timeLineBB.bottom - window.innerHeight > 0)) {
          updateFixed(true);
          triggerTitleFade(false);
        } else if ((timeLineBB.bottom < 0 && fixed) || timeLineBB.top > 110) {
          updateFixed(false);
          triggerTitleFade(false);
        } else if (timeLineBB.bottom < (window.innerHeight / 2)) {
          triggerTitleFade(true);
          setTimeout(() => {
            updateFixed(false);
          }, 300);
        }
      }
    });
  };

  useEffect(() => {
    // On mount
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="scrollGallery" id={anchor} ref={timeLine}>
      <h3 className={`scrollGallery__title ${fixed ? 'fixed' : ''} ${titleFade ? 'fade' : ''} ${oneLineTitle ? 'oneLine' : ''}`} ref={timelineTitle}>
        {title}
      </h3>
      {items.map((item, i) => {
        return (
          <div className={`slides`} key={`slide-${i + 1}`}>
            <div className="text-box">
              <div className="svg-container">
                {typeof (item.img) !== 'function'
                  ? <img src={item.img} alt="yo" />
                  : <item.img />
                }
              </div>
              <h4>
                {item.title}
              </h4>
              <h5>
                {item.date}
              </h5>
              <p>{item.copy}</p>
            </div>
          </div>
        );
      })}
      <Bubbles />
    </div>
  );
}

export default Timeline;

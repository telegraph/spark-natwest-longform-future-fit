import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import './style.scss';

export default function Bubbles({ lessBubbles, leastBubbles }) {
  const [data, setData] = useState([]);
  const transitions = useTransition (data, '1', {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  });

  const bubbleData = [
    { x: 15, y: 3 },
    { x: 85, y: 6 },
    { x: 40, y: 9 },
    { x: 70, y: 12 },
    { x: 15, y: 15 },
    { x: 80, y: 18 },
    { x: 15, y: 21 },
    { x: 85, y: 24 },
    { x: 10, y: 27 },
    { x: 75, y: 30 },
    { x: 5, y: 33 },
    { x: 80, y: 36 },
    { x: 20, y: 39 },
    { x: 95, y: 42 },
    { x: 25, y: 45 },
    { x: 90, y: 48 },
    { x: 30, y: 51 },
    { x: 70, y: 54 },
    { x: 10, y: 57 },
    { x: 80, y: 60 },
    { x: 20, y: 63 },
    { x: 60, y: 66 },
    { x: 35, y: 69 },
    { x: 80, y: 72 },
    { x: 20, y: 75 },
    { x: 75, y: 78 },
    { x: 25, y: 81 },
    { x: 75, y: 84 },
    { x: 15, y: 87 },
    { x: 80, y: 90 },
    { x: 25, y: 93 },
    { x: 70, y: 96 },
  ];

  const bubbleLessData = [
    { x: 15, y: 3 },
    { x: 80, y: 9 },
    { x: 10, y: 15 },
    { x: 65, y: 21 },
    { x: 15, y: 27 },
    { x: 75, y: 33 },
    { x: 10, y: 39 },
    { x: 85, y: 45 },
    { x: 35, y: 51 },
    { x: 60, y: 57 },
    { x: 5, y: 63 },
    { x: 70, y: 69 },
    { x: 40, y: 75 },
    { x: 85, y: 81 },
    { x: 10, y: 87 },
    { x: 65, y: 93 },
  ];

  const bubblesLeastData = [
    { x: 15, y: 3 },
    { x: 80, y: 15 },
    { x: 15, y: 27 },
    { x: 75, y: 39 },
    { x: 10, y: 51 },
    { x: 90, y: 63 },
    { x: 20, y: 75 },
    { x: 70, y: 87 },
  ];

  useEffect(() => {
    setData(() => {
      if (lessBubbles) {
        return bubbleLessData;
      } else if (leastBubbles) {
        return bubblesLeastData;
      } else {
        return bubbleData;
      }
    });
  }, []);

  return (
    <div className="container">
      { data.map(bubble => <animated.div className="box" style={{ top: `${bubble.y}%`, left: `${bubble.x}%` }} />)}
    </div>
  );
}

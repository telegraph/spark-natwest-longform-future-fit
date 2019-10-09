import { useEffect, useState, useRef } from 'react';

// makeVisible hook that creates visible state, refs element and adds / removes
// event listener for scroll and changes state as so...
export default () => {
  const [isVisible, setVisibility] = useState(false);
  const ref = useRef(null);

  const listener = () => {
    window.requestAnimationFrame(() => {
      const distance = ref.current.getBoundingClientRect().top - window.innerHeight;
      if (distance < -200) {
        setVisibility(true);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', listener, true);
    return function cleanup() {
      window.removeEventListener('scroll', listener, true);
    };
  });
  return [ref, isVisible];
};

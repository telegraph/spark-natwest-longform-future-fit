import React, { useEffect, useState } from 'react';

import './style.scss';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const changeProgress = () => {
    window.requestAnimationFrame(() => {
      let progressState = progress;
      const docHeight = document.body.scrollHeight;
      const scrolled = window.scrollY + window.innerHeight;
      const difference = docHeight + scrolled;
      const percentage = difference / docHeight - 1;
      progressState = percentage;
      setProgress(progressState);
    });
  };

  useEffect(() => {
    // on update
    document.addEventListener('scroll', changeProgress);
    return function cleanup() {
      document.removeEventListener('scroll', changeProgress);
    };
  });

  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};

export default ProgressBar;

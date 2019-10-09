import React, { useEffect, useState } from 'react';
import HeroSVG from '../svgs/HeroSVG';
import ReadMore from '../ReadMore';

import './style.scss';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
          Future-proofing
          <br />
          your business
        </h1>
        <p>
          It has never been more important for companies to embrace
          the digital revolution – and with savvy investments and clever
          collaboration, the future is bright
        </p>
      </div>
      <div className={`hero__art ${loaded ? 'visible-art' : ''}`}>
        <HeroSVG />
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;

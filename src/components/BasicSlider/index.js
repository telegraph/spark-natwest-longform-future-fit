import React, { useState, useEffect } from 'react';

import Slide from './subcomponents/Slide';

import './style.scss';

export default function BasicSlider({ dataProp, columns, title }) {
  const [currentSlide, changeCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const [currentSlideHeight, setCurrentSlideHeight] = useState(0);

  const grabData = () => {
    setData(dataProp);
  };

  const prevSlide = () => {
    changeCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    changeCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    grabData();
  }, []);

  const grabSlideRefHeight = (ref) => {
    const { height } = ref.current.getBoundingClientRect();
    setCurrentSlideHeight(height);
  };

  return (
    <div className="basic-slider">
      <h2 className="basic-slider__title">
        {title}
      </h2>
      <div className="basic-slider__container" style={{ height: `${currentSlideHeight}px` }}>
        <div className="controls">
          <div
            className={`arrow left-arrow ${currentSlide <= 0 ? 'noclick' : ''}`}
            onClick={() => prevSlide()}
          />
          <div className="total">
            {`${currentSlide + 1} of ${data.length}`}
          </div>
          <div
            className={`arrow right-arrow ${
              currentSlide >= data.length - 1 ? 'noclick' : ''
              }`}
            onClick={() => nextSlide()}
          />
        </div>
        {data.map((item, i) => {
          return (
            <Slide twoColumns={!!columns} currentSlide={currentSlide} img={item.img} logo={item.logo} title={item.title} copy={item.copy} i={i} getHeight={grabSlideRefHeight} key={`basic-${i + 1}`} />
          );
        })}
      </div>
    </div>
  );
}

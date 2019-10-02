import React, { useRef, useEffect } from 'react';

export default function Slide(props) {
  const slide = useRef(null);
  const { getHeight, currentSlide, i, img, logo, copy } = props;

  useEffect(() => {
    if (currentSlide === i) {
      getHeight(slide);
    }
  }, [currentSlide]);


  return (
    <div
      ref={slide}
      className={`basic-slider__item ${
        currentSlide === i ? 'visible' : ''
      } ${i < currentSlide ? 'prev-slide' : ''}`}
    >
      <div className="img-container">
        <img className="img-photo" src={img} alt="company" />
        <img className="img-logo" src={logo} alt="company logo" />
      </div>
      <p dangerouslySetInnerHTML={{ __html: copy }} />
    </div>
  );
}

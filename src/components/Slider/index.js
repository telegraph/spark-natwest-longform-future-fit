import React, { useState, useEffect, useRef } from 'react';

import { shopSlider } from '../../data';

import officeSliderCube from '../../assets/office-slider-cube.svg';

import './style.scss';

function Slider({ link }) {
  const [items] = useState(shopSlider);
  const [currentItem, changeCurrentItem] = useState(0);
  const [itemProgress, changeItemProgress] = useState(0);
  const [childEls, setChildEls] = useState(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const points = useRef(null);
  const container = useRef(null);

  function calcItemProgress() {
    // works out gap between each point
    const changeValue = 100 / (items.length - 1);
    // * the current item by the gap distance
    const calcProgress = currentItem * changeValue;
    // set it as state
    changeItemProgress(calcProgress);
  }

  useEffect(() => {
    // When container ref is loaded / changes
    if (container.current !== null) {
      setChildEls([...container.current.querySelectorAll('.container__item')]);
    }
  }, [items]);

  useEffect(() => {
    // Whenever currentItem is updated...
    calcItemProgress();
    if (container.current !== null && childEls !== null) setContainerHeight(childEls[currentItem].offsetHeight);
  }, [currentItem]);

  useEffect(() => {
    // if the child els are present - but only do this function on first slide
    if (childEls !== null && currentItem === 0) setContainerHeight(childEls[0].offsetHeight);
  }, [childEls]);

  function prevItem() {
    const itemState = currentItem;
    changeCurrentItem(itemState - 1);
  }

  function nextItem() {
    const itemState = currentItem;
    changeCurrentItem(itemState + 1);
  }

  return (
    <div className="slider" id={link || ''}>
      <h2 className="slider__title">
        Transforming our business landscape
      </h2>
      <div className="slider__bg" />
      <div className="slider__container" ref={container}
        style={{ height: `${containerHeight}px` }}
      >
        {items.map((item, i) => (
          <div
            className={`container__item ${currentItem === i ? 'visible' : ''}`}
            key={`container-item-${i + 1}`}
          >
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
      <div className="slider__progress-mobile">
        <div role="button" className={`slider-cont slider-prev ${currentItem < 1 ? 'noclick' : ''}`} onClick={() => prevItem()} />
        <div className="slider-total">
          {`${currentItem + 1} of ${items.length}`}
        </div>
        <div role="button" className={`slider-cont slider-next ${currentItem >= (items.length - 1) ? 'noclick' : ''}`} onClick={() => nextItem()} />
      </div>
      <div className="slider__progress">
        <div className="progress-points" ref={points}>
          {items.map((item, i) => {
            return (
              <div
                role="button"
                className={`progress-point ${
                  currentItem === i ? 'active' : ''
                }`}
                onClick={() => changeCurrentItem(i)}
                key={`office-slider${i + 1}`}
              />
            );
          })}
        </div>
        <div className="progress-line">
          <input
            type="range"
            min="0"
            max={items.length - 1}
            onChange={e => changeCurrentItem(parseInt(e.target.value, 10))}
            value={currentItem}
            step="1"
          />
          <div className="line-marker" style={{ left: `${itemProgress}%` }}>
            <img src={officeSliderCube} alt="cube" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;

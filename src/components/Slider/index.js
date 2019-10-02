import React, { useState, useEffect, useRef } from 'react';
import { skylineSlider } from '../../data';
import officeSliderCube from '../../assets/office-slider-cube.svg';

import './style.scss';
import SkylineSVG from '../svgs/SkylineSVG';

function Slider() {
  const [items, setItems] = useState([]);
  const [currentItem, changeCurrentItem] = useState(0);
  const [itemProgress, changeItemProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const points = useRef(null);

  function calcItemProgress() {
    // works out gap between each point
    const changeValue = 100 / (items.length - 1);
    // * the current item by the gap distance
    const calcProgress = currentItem * changeValue;
    // set it as state
    changeItemProgress(calcProgress);
  }

  useEffect(() => {
    // on Mount
    setItems(skylineSlider);
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 970) {
      setIsMobile(true);
    } else if (width > 970) {
      setIsMobile(false);
    }
  });

  useEffect(() => {
    // Whenever currentItem is updated...
    calcItemProgress();
  }, [currentItem]);


  function handleThis(e) {
    changeCurrentItem(parseInt(e.target.value, 10));
  }

  function changeItem(index) {
    changeCurrentItem(index);
  }

  function prevItem() {
    const itemState = currentItem;
    changeCurrentItem(itemState - 1);
  }

  function nextItem() {
    const itemState = currentItem;
    changeCurrentItem(itemState + 1);
  }

  return (
    <div className="slider">
      {/* <h2 className="slider__title">
        The sustainable office
      </h2> */}
      <div className="slider__bg">
        <SkylineSVG isMobile={isMobile} />
      </div>
      <div className="slider__container">
        {items.map((item, i) => (
          <div
            className={`container__item ${currentItem === i ? 'visible' : ''}`}
            key={`container-item-${i + 1}`}
          >
            <h4>{item.title}</h4>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
      <div className="slider__progress-mobile">
        <div role="button" className={`slider-cont slider-prev ${currentItem < 1 ? 'noclick' : ''}`} onClick={() => prevItem()} />
        <div className="slider-total">
          {`${currentItem + 1} of ${items.length}`}
        </div>
        <div role="button" className={`slider-cont slider-next ${currentItem >= 7 ? 'noclick' : ''}`} onClick={() => nextItem()} />
      </div>
      <div className="slider__progress">
        <div className="progress-points" ref={points}>
          {items.map((item, i) => {
            return (
              <div
                className={`progress-point ${
                  currentItem === i ? 'active' : ''
                }`}
                onClick={(e) => changeItem(i, e)}
                key={`office-slider${i + 1}`}
              />
            );
          })}
        </div>
        <div className="progress-line">
          <input
            type="range"
            min="0"
            max="7"
            onChange={handleThis}
            value={currentItem}
            step="1"
          />
          <div className="line-marker" style={{ left: `${itemProgress}%` }}>
            <img src={officeSliderCube} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;

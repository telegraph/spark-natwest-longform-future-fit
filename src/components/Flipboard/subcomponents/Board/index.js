import React from 'react';

export default function Board({ img, title, copy }) {
  return (
    <div className="flipboard-item-wrapper">
      <div className="flipboard__container__item">
        <div className="flipboard__container__item__inner flipboard__container__item__inner--front">
          <img src={img} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="flipboard__container__item__inner flipboard__container__item__inner--back">
          <p>{copy}</p>
        </div>
      </div>
    </div>
  );
}
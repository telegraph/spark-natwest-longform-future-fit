import React from 'react';

import Board from './subcomponents/Board';

import { flipBoardData } from '../../data';

import './index.scss';

export default function Flipboard() {
  return (
    <div className="flipboard">
      <h2>Which tech terms do you need to know about?</h2>
      <div className="flipboard__container">
        {flipBoardData.map(board => (
          <Board {...board} />
        ))}
      </div>
    </div>
  );
}

import React from 'react';

import Board from './subcomponents/Board';

import { flipBoardData } from '../../data';

import './index.scss';

export default function Flipboard() {
  return (
    <div className="flipboard">
      <div className="flipboard__container">
        {flipBoardData.map(board => (
          <Board {...board} />
        ))}
      </div>
    </div>
  );
}

import React from 'react';

import './style.scss';

const Credits = () => (
  <div className="row paragraph transition">
    <div className="content-width">
      <div className="credits">
        <div className="credit-listing">
          Produced by
          <span className="credit-name"><strong>Telegraph Spark</strong></span>
        </div>

        <div className="credit-listing">
          Words
          <span className="credit-name"><strong>Rob Waugh</strong></span>
          Commissioning Editor
          <span className="credit-name"><strong>Rachael Adams</strong></span>
        </div>

        <div className="credit-listing">
          Sub-editor
          <span className="credit-name"><strong>Richard Dixon</strong></span>

          Lead Designer
          <span className="credit-name"><strong>Betty Guerra</strong></span>
        </div>

        <div className="credit-listing">
          Digital Developer
          <span className="credit-name"><strong>Alex Hooper</strong></span>

          Picture Editor
          <span className="credit-name"><strong>Alice Griffiths</strong></span>
        </div>

        <div className="credit-listing">
          Project Manager
          <span className="credit-name"><strong>Ellie Evans</strong></span>
        </div>

      </div>
    </div>
  </div>
);

export default Credits;

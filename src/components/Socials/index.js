import React from 'react';

import fbImg from '../../assets/socials/facebook.svg';
import twitterImg from '../../assets/socials/twitter.svg';
import mailImg from '../../assets/socials/mail.svg';

import './style.scss';

function Socials() {
  return (
    <div className="socials">
      <a className="addthis_button_facebook" href="#">
        <img src={fbImg} />
      </a>
      <a className="addthis_button_twitter" href="#">
        <img src={twitterImg} />
      </a>
      <a className="addthis_button_mailto" href="#">
        <img src={mailImg} />
      </a>
    </div>
  );
}

export default Socials;

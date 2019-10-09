import React, {useState, useRef, useEffect} from 'react';
import { TweenMax, TimelineMax, Elastic, Power3, Power1 } from 'gsap';

import './style.scss';

export default function HeroSVG() {
  // Define Wifi refs
  const wifiSmall = useRef(null);
  const wifiMed = useRef(null);
  const wifiLarge = useRef(null);
  // Define msg refs
  const msg1 = useRef(null);
  const msg1Bub1 = useRef(null);
  const msg1Bub2 = useRef(null);
  const msg1Bub3 = useRef(null);

  const msg2Bub1 = useRef(null);
  const msg2Bub2 = useRef(null);
  const msg2Bub3 = useRef(null);

  const msg2 = useRef(null);
  // Define 3d Printer ref
  const ThreeDPrinter = useRef(null);

  // Robot parts
  const strutMain = useRef(null);
  const strutTop = useRef(null);

  // Container for all svg sections
  const cont1Printer = useRef(null);
  const cont2Wifi = useRef(null);
  const cont3Watch = useRef(null);
  const cont4Msg = useRef(null);
  const cont5Msg = useRef(null);
  const cont6Cloud = useRef(null);
  const cont7Cyl = useRef(null);
  const cont8Robot = useRef(null);

  useEffect(() => {
    // On Mount
    const elFadeIn = new TimelineMax({ paused: true });
    // Fade in all elements on mount
    elFadeIn
      .fromTo(cont1Printer.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0)
      .fromTo(cont2Wifi.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.15)
      .fromTo(cont3Watch.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.3)
      .fromTo(cont4Msg.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.45)
      .fromTo(cont5Msg.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.6)
      .fromTo(cont6Cloud.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.75)
      .fromTo(cont7Cyl.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.9)
      .fromTo(cont8Robot.current, 0.6, { ease: Power3.easeOut, opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 1.05);

    setTimeout(() => {
      elFadeIn.play();
    }, 1500);


    const wifiTL = new TimelineMax({ repeat: -1, yoyo: true });
    wifiTL
      .fromTo(wifiSmall.current, 1, { opacity: 0 }, { opacity: 1 })
      .fromTo(wifiMed.current, 1, { opacity: 0 }, { opacity: 1 })
      .fromTo(wifiLarge.current, 1, { opacity: 0 }, { opacity: 1 });

    const msg1TL = new TimelineMax({ repeat: -1, yoyo: true });

    msg1TL
      .to(msg1Bub3.current, 2, { ease: Elastic.easeInOut.config(1.75, 0.3), x: 0, y: -5 }, 0)
      .to(msg1Bub2.current, 2, { ease: Elastic.easeInOut.config(1.75, 0.3), x: 0, y: -5 }, 0.1)
      .to(msg1Bub1.current, 2, { ease: Elastic.easeInOut.config(1.75, 0.3), x: 0, y: -5 }, 0.2);

    const threeDpTL = new TimelineMax({ repeat: -1, yoyo: true });
    threeDpTL
      .to(ThreeDPrinter.current, 5, { x: 15, y: -10 });

    const strutMove = new TimelineMax({ repeat: -1, yoyo: true });
    strutMove
      .fromTo(strutMain.current, 8, { ease: Power3.easeInOut, rotation: -20, scale: 1, transformOrigin: 'bottom bottom'}, {rotation: 30, scale: 0.9}, 0)
      .fromTo(strutTop.current, 8, { ease: Power3.easeInOut, y: -15, x: -35, scale: 1 }, { y: 25, x: 45, scale: 0.95 }, 0);
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
id="Layer_1" viewBox=" 0 0 683.2 424.1" data-name="Layer 1">
    <defs>
        <linearGradient id="linear-gradient" x1="403.9" x2="488.4" y1="353.6"
        y2="313.2" gradientTransform="matrix(1 0 0 -1 0 426)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f6f3f7" />
            <stop offset="1" stopColor="#77488a" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="374.2" x2="455.5" y1="401.8"
        y2="354.8" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-3" x1="172.1" x2="190.4" y1="172.3"
        y2="155.7" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-4" x1="141.6" x2="189.6" y1="212.3"
        y2="154.8" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-5" x1="104" x2="152.3" y1="316.9"
        y2="263.8" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-6" x1="93.3" x2="107.2" y1="261.1"
        y2="261.1" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-7" x1="79.1" x2="92.9" y1="245.3"
        y2="245.3" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-8" x1="122.9" x2="162.1" y1="232.6"
        y2="207.2" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-9" x1="142.8" x2="179" y1="271.2"
        y2="234.5" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-10" x1="142.3" x2="174.2" y1="225.1"
        y2="191" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-11" x1="117.9" x2="166.1" y1="307.6"
        y2="254.3" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-12" x1="548" x2="573.9" y1="286.4"
        y2="268.9" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-13" x1="486.2" x2="573.4" y1="363.4"
        y2="363.4" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-14" x1="500.2" x2="564.7" y1="346.3"
        y2="346.3" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-15" x1="514.1" x2="555.8" y1="329.1"
        y2="329.1" xlinkHref="#linear-gradient" />
        <clipPath id="clip-path">
            <polygon fill="none" points="297.6 161.6 272 176.5 246.2 161.6 271.8 146.7 297.6 161.6"
            />
        </clipPath>
        <linearGradient id="linear-gradient-16" x1="247.4" x2="319.7" y1="373.1"
        y2="315.6" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-17" x1="283" x2="338" y1="191.4" y2="165.1"
        xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-18" x1="299.2" x2="354.2" y1="249.1"
        y2="222.9" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-19" x1="404.9" x2="469.4" y1="225.3"
        y2="225.3" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-20" x1="401.9" x2="467.3" y1="269.3"
        y2="269.3" xlinkHref="#linear-gradient" />
    </defs>
    <g id="NatWest-longform_1-sustainability-desktop" data-name="NatWest-longform 1-sustainability-desktop">
        <path fill="#00b0bc" d="M0 300v-28.2l58-11.3L451.4 33.3c10.2-6 26.8-6 37 0l165.2 96 29.6-5.8v29.2c0 4-2.6 7.8-7.7 10.8L231.9 419.7a41 41 0 0 1-37.1 0L7.6 311c-5.2-3-7.7-7.1-7.6-11z"
        />
        <path fill="#4a6cb8" d="M213 170.9v253.2a37.2 37.2 0 0 1-18.2-4.4L7.6 311c-5.2-3-7.7-7-7.6-11v-28.2l58-11.3z"
        />
        <path fill="#26bcc6" d="M7.8 260.7c-10.3 5.9-10.4 15.5-.2 21.4L194.8 391c10.2 6 26.8 6 37 0l443.7-256.2c10.3-6 10.3-15.6 0-21.5L488.6 4.4c-10.3-5.9-26.9-5.9-37.1 0z"
        />
        <polygon fill="#4a6cb7" points="66.7 243.5 261.9 356.9 632.5 142.7 437.4 29.3 66.7 243.5"
        />
        <g id="cont-printer" ref={cont1Printer}>
        <polygon fill="#6581c3" points="488.6 95.4 403.4 143.9 336.4 106.1 421.6 57.5 488.6 95.4"
        />
        <polygon fill="#f8f4fa" points="421.6 17 421.6 61.9 460.4 39.5 421.6 17"
        />
        <polygon fill="#00b0bc" points="426.7 25.9 426.7 55.7 464.5 77.5 464.4 47.7 426.7 25.9"
        />
        <polygon fill="url(#linear-gradient)" points="469.7 39.5 400.6 79.4 400.8 135.3 469.7 95.4 469.7 39.5"
        />
        <polygon fill="#f8f4fa" points="352.7 51.7 352.7 107.6 400.8 135.3 400.6 79.4 352.7 51.7"
        />
        <polygon fill="#00b0bc" points="357.8 60.6 357.8 90.5 395.6 112.2 395.5 82.4 357.8 60.6"
        />
        <polygon fill="url(#linear-gradient-2)" points="361.9 51.7 400.6 74.1 421.6 61.9 421.6 17 361.9 51.7"
        />
        <polygon fill="#00b0bc" points="445.8 30.9 435.6 25 435.6 33.4 445.8 39.3 445.8 30.9"
        />
        <polygon fill="#4a6cb8" points="446.9 31.6 445.8 30.9 445.8 39.3 446.9 38.8 446.9 31.6"
        />
        <line x1="444.7" x2="385" y1="32.4" y2="67.1" fill="none" stroke="#7a2296"
        strokeMiterlimit="10" strokeWidth="2" />
        <line x1="437.4" x2="378.7" y1="28.8" y2="62.9" fill="none" stroke="#7a2296"
        strokeMiterlimit="10" strokeWidth="2" />
        <polygon fill="#f8f4fa" points="462.8 49 407.5 81 407.6 104.5 438 108.1 462.8 93.8 462.8 49"
        />
        <polygon fill="#33c0c9" points="462.8 76.5 462.8 49 439 62.8 462.8 76.5"
        />
        <polygon fill="#fff" points="462.8 93.8 462.8 91.4 426.2 70.2 407.5 81 407.6 104.5 438 108.1 462.8 93.8"
        />
        <polygon fill="#4a6cb8" points="440 91.7 416.4 105.6 407.6 104.5 438.2 87.4 440 91.7"
        />
        <polygon fill="#33c0c9" points="418 74.9 438.2 87.4 407.6 104.5 407.6 81 418 74.9"
        />
        <path fill="#fff" d="M421.6 11.6l-69 40.1 48 27.7 69-40zm-21 62.5l-38.7-22.4L421.6 17l38.8 22.5z"
        />
        <g id="_3d-printer" data-name="3d-printer" ref={ThreeDPrinter}>
            <polygon fill="#4a6cb8" points="384.2 25.9 384.2 40 387.5 40 387.5 25.9 385.8 24.3 384.2 25.9"
            />
            <path fill="#4a6cb8" d="M407.3 58.7h-4l1.4 3.8a.3.3 0 0 0 .2.2 1 1 0 0 0 .9 0 .3.3 0 0 0 .1-.2z"
            />
            <path fill="#00bfc8" d="M408.6 57.7a1.6 1.6 0 0 1-1 1.4 5 5 0 0 1-4.6 0 1.6 1.6 0 0 1-1-1.4V53h6.6z"
            />
            <polygon fill="#00b0bc" points="405.4 46.1 396.9 41.3 396.9 51.1 405.4 56 405.4 46.1"
            />
            <polygon fill="#33c0c9" points="413.8 41.3 405.4 36.4 396.9 41.3 405.4 46.1 413.8 41.3"
            />
            <polygon fill="#4a6cb8" points="405.4 46.1 413.8 41.3 413.8 51.1 405.4 56 405.4 46.1"
            />
            <path fill="#4a6cb8" d="M402 23.2c-3.3-4.7-8.7-7.2-12.8-5.9-3.3 1-5.2 4.2-5.2 8.6h3.3c0-2 .5-4.7 2.9-5.4s6.3.6 9 4.6a25.6 25.6 0 0 1 4.5 16.1.8.8 0 0 0 .5.7 2.5 2.5 0 0 0 2.4 0 .8.8 0 0 0 .4-.6v-.1c0-5.3-.4-11.3-5-18z"
            />
        </g>
        </g>
        <ellipse cx="138.6" cy="318.1" fill="none" stroke="#fff" strokeMiterlimit="10"
        strokeWidth="1.3" rx="25.7" ry="14.9" transform="rotate(-.2 139.2 315.3)"
        />
        <path fill="#42145f" d="M558 62.8c-2.6 1.6-2.7 4.1 0 5.7a11 11 0 0 0 10 0c2.7-1.5 2.7-4.1 0-5.7a10.9 10.9 0 0 0-10 0z"
        />
        <path fill="#490b63" d="M79.3 337v4.5a1.6 1.6 0 0 0 .8 1.4l41.3 24a.8.8 0 0 0 1-.3.8.8 0 0 0 .1-.4v-4.7a1.1 1.1 0 0 0-.6-1l-41.5-24.2a.7.7 0 0 0-1 .3.7.7 0 0 0-.1.3z"
        />
        <g id="cont-robot" ref={cont8Robot}>
        <polygon fill="#6581c3" points="212.1 244.9 151.8 279.9 91.1 244.9 151.4 209.9 212.1 244.9"
        />
        <polygon fill="#fff" points="105.2 239.3 151.6 266.3 198.4 239.3 151.9 212.3 105.2 239.3"
        />
        <polygon fill="#f8f4fa" points="105.2 239.3 105.2 246.4 151.6 273.4 151.6 266.3 105.2 239.3"
        />
        <polygon fill="url(#linear-gradient-3)" points="198.4 239.3 198.4 246.4 151.6 273.4 151.6 266.3 198.4 239.3"
        />
        <path fill="url(#linear-gradient-4)" d="M136.6 236.1c0 2.3 1.5 4.5 4.4 6.2a23.6 23.6 0 0 0 21.5 0c3-1.7 4.4-4 4.4-6.2v-22.4h-30.3z"
        />
        
        <path fill="#fff" d="M154 180.1c-2-1-4.8-1-7.8.8-1 .6-27.3 20-27.3 20a18.5 18.5 0 0 0-8.5 14.5c0 2.7 1 4.6 2.5 5.5l5.5 3.3s42.5-39.6 42.2-40-6.7-4-6.7-4z"
        />
        <path fill="url(#linear-gradient-8)" d="M124.6 204.3s26.4-19.4 27.3-20c6-3.4 11-.6 11 6.3s-4.9 15.3-10.9 18.8l-27.4 14.3c-4.6 2.7-8.4.5-8.4-4.8s3.7-11.9 8.4-14.6z"
        />
        <path fill="#4a6cb8" d="M153 188.3a14.3 14.3 0 0 0-6.5 11.3c0 4.1 3 5.8 6.5 3.7a14.3 14.3 0 0 0 6.5-11.3c0-4-2.9-5.8-6.5-3.7z"
        />
        <path fill="#4a6cb7" d="M125 210.5a8.3 8.3 0 0 0-3.8 6.5c0 2.4 1.7 3.4 3.8 2.2a8.3 8.3 0 0 0 3.8-6.6c0-2.4-1.8-3.3-3.8-2.1z"
        />
        <g id="strut-main" ref={strutMain}>
          <path fill="#f8f4fa" d="M126.8 229.3l-6.6-4a8.3 8.3 0 0 1-3.8-9.3l28.7-104.5 9.5-5.9 14.1 8.1-19.3 85z"
          />
          <polygon fill="url(#linear-gradient-9)" points="136.7 215.9 159.2 119.5 145.1 111.5 154.6 105.6 168.8 113.8 149.4 198.7 136.7 215.9"
          />
        </g>
        <g id="strut-top" ref={strutTop}>
          <path fill="#f8f4fa" d="M151.6 100.8c-1.2-.7-2.8-.6-4.6.5l-.8.5-59.3 39a11.2 11.2 0 0 0-5.1 8.8 4 4 0 0 0 1 2.9l6.2 3.8 68.7-51.9z"
          />
          <path fill="url(#linear-gradient-5)" d="M93 144.5l59.2-39 .8-.6c3.6-2 6.6-.4 6.6 3.7A14.3 14.3 0 0 1 153 120l-60.2 36.3c-2.8 1.6-5 .3-5-3a11.2 11.2 0 0 1 5-8.7z"
          />
          <path fill="#4a6cb7" d="M153 107a10.2 10.2 0 0 0-4.6 8c0 3 2.1 4.2 4.7 2.7a10.2 10.2 0 0 0 4.6-8c0-3-2.1-4.1-4.6-2.7z"
          />
          <path fill="#4a6cb8" d="M93 147a6.3 6.3 0 0 0-3 5c0 1.8 1.4 2.5 3 1.6a6.3 6.3 0 0 0 2.8-5c0-1.7-1.3-2.5-2.9-1.6z"
          />
          <polygon fill="#f8f4fa" points="79.6 157.5 93.4 165.5 107.2 157.5 93.4 149.5 79.6 157.5"
          />
          <polygon fill="#f8f4fa" points="79.6 157.5 79.6 164.3 93.4 172.3 93.4 165.5 79.6 157.5"
          />
          <polygon fill="url(#linear-gradient-6)" points="107.2 157.5 107.2 164.3 93.4 172.3 93.4 165.5 107.2 157.5"
          />
          <polygon fill="#33c0c9" points="21.6 158.7 55 178.1 88.6 158.7 55.2 139.3 21.6 158.7"
          />
          <polygon fill="#fff" points="59.8 164.3 69.2 169.8 74.3 166.9 64.9 161.4 59.8 164.3"
          />
          <polygon fill="#4a6cb7" points="21.6 158.7 21.6 192.4 55 211.8 55 178.1 21.6 158.7"
          />
          <polygon fill="#00b0bc" points="88.6 158.7 88.6 192.4 55 211.8 55 178.1 88.6 158.7"
          />
          <polygon fill="#f8f4fa" points="74.3 166.9 74.3 176.8 69.2 179.6 69.2 169.8 74.3 166.9"
          />
          <polygon fill="#fff" points="36 150.3 45.5 155.8 50.5 152.9 41.1 147.4 36 150.3"
          />
          <polygon fill="#fff" points="77.6 181.5 79.1 182.4 92.9 172.3 88.6 169.7 88.6 173.6 77.6 181.5"
          />
          <polygon fill="#f8f4fa" points="77.6 181.5 77.6 188.4 79.1 189.3 79.1 182.4 77.6 181.5"
          />
          <polygon fill="url(#linear-gradient-7)" points="92.9 172.3 92.9 181.3 79.1 189.3 79.1 182.4 92.9 172.3"
          />
                  <path fill="#f8f4fa" d="M165 109.6c-1.3-.6-2.9-.5-4.7.5l-.8.5-59.3 39a11.2 11.2 0 0 0-5.1 8.9 4 4 0 0 0 .9 2.8l6.3 3.8 68.7-51.8z"
        />
        <path fill="url(#linear-gradient-11)" d="M106.2 153.3l59.4-39a7.2 7.2 0 0 1 .8-.5c3.6-2.1 6.5-.4 6.5 3.7a14.3 14.3 0 0 1-6.5 11.2l-60.1 36.4c-2.9 1.6-5.2.3-5.2-3a11.2 11.2 0 0 1 5.1-8.8z"
        />
        <path fill="#4a6cb8" d="M166.4 115.9a10.1 10.1 0 0 0-4.6 8c0 3 2 4.1 4.6 2.6a10.2 10.2 0 0 0 4.6-8c0-2.9-2-4-4.6-2.6zM106.2 155.9a6.3 6.3 0 0 0-2.8 5c0 1.8 1.3 2.5 2.9 1.6a6.3 6.3 0 0 0 2.8-5c0-1.8-1.3-2.5-2.9-1.6z"
        />
        <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="0.8"
        d="M118.1 155.1v5.2a6.3 6.3 0 0 1-3 5.4l-14.4 8.6a1.8 1.8 0 0 1-2.4-.6 1.8 1.8 0 0 1-.2-1V167"
        />
        <polygon fill="#f8f4fa" points="145.1 111.5 152.2 115.5 159.2 119.5 167.9 114.2 161.5 109.6 154.6 105.6 145.1 111.5"
        />
        </g>
        <path fill="#fff" d="M167.8 188.6c-2-1.1-4.7-1-7.7.8-1 .5-27.4 19.9-27.4 19.9a18.6 18.6 0 0 0-8.4 14.6c0 2.7 1 4.6 2.5 5.4l5.5 3.3s42.5-39.6 42.1-39.8l-6.6-4.2z"
        />
        <path fill="url(#linear-gradient-10)" d="M138.4 212.8s26.4-19.4 27.4-20c6-3.4 10.9-.6 11 6.3s-5 15.3-11 18.8l-27.3 14.3c-4.7 2.7-8.5.5-8.5-4.8s3.8-12 8.4-14.7z"
        />
        <path fill="#4a6cb8" d="M166.9 196.8a14.3 14.3 0 0 0-6.5 11.2c0 4.1 3 5.8 6.5 3.7a14.3 14.3 0 0 0 6.5-11.2c0-4.1-2.9-5.8-6.5-3.7zM138.8 219a8.3 8.3 0 0 0-3.7 6.5c0 2.4 1.7 3.3 3.8 2.1a8.3 8.3 0 0 0 3.7-6.5c0-2.4-1.7-3.4-3.8-2.2z"
        />
        </g>
        <g id="cont-wifi" ref={cont2Wifi}>
        <polygon fill="#6581c3" points="591.7 140 543.3 168.1 494.5 140 542.9 111.8 591.7 140"
        />
        <polygon fill="#fff" points="512 133.3 543.1 151.4 574.4 133.3 543.3 115.3 512 133.3"
        />
        <polygon fill="#f8f4fa" points="512 133.3 512 142.3 543.1 160.4 543.1 151.4 512 133.3"
        />
        <polygon fill="url(#linear-gradient-12)" points="574.4 133.3 574.4 142.3 543.1 160.4 543.1 151.4 574.4 133.3"
        />
        <g id="wifi-large" ref={wifiLarge}>
            <path fill="#fff" d="M562.3 48.4l2.6 1.2 5 1.7a40.6 40.6 0 0 0-7.6-2.9m-23-10.9A68.5 68.5 0 0 0 510.7 49a107 107 0 0 0-29.4 30.6l5.5 5.3 5 1.7.8-1.3-.9 1.3-5-1.7-5.4-5.3 5 1.7c8-12.3 18-23.1 29.3-30.6a69 69 0 0 1 32.5-11.9 50.3 50.3 0 0 1 20.2 2.6 50.1 50.1 0 0 0-25.1-4.3l-3.9.4"
            />
            <path fill="url(#linear-gradient-13)" d="M544.2 39.2a68.8 68.8 0 0 0-28.6 11.5 107 107 0 0 0-29.4 30.6l5.5 5.3.9-1.4a98 98 0 0 1 26.7-27.7 60.6 60.6 0 0 1 25.2-10 54 54 0 0 1 3.3-.4 43.4 43.4 0 0 1 14.5 1.3 40.6 40.6 0 0 1 7.6 2.9l3.5-7.8a48.4 48.4 0 0 0-5-2.1 50.3 50.3 0 0 0-20.3-2.6c-1.3 0-2.6.2-3.8.4"
            />
            <polyline fill="#f8f3f8" points="481.3 79.6 486.8 84.9 491.8 86.6 486.2 81.3 481.3 79.6"
            />
        </g>
        <g id="wifi-med" ref={wifiMed}>
            <path fill="#fff" d="M554.6 68.3l1.6.8 5 1.7a23 23 0 0 0-6.5-2.5m-14.8-10.2a48.2 48.2 0 0 0-20 8.1c-9.6 6.4-18.1 16-24.7 26.8l5.6 5.4 5 1.6.3-.7-.4.7-5-1.6-5.5-5.4 5 1.7a85.5 85.5 0 0 1 24.5-26.8 48.5 48.5 0 0 1 20-8.1l2.6-.3a32.8 32.8 0 0 1 13 1.6c-5.3-2-11.7-3.7-18-3.3l-2.5.3"
            />
            <path fill="url(#linear-gradient-14)" d="M544.8 59.8a48.5 48.5 0 0 0-20 8.1 86 86 0 0 0-24.6 26.8l5.5 5.3.4-.7a76 76 0 0 1 22.3-24.5A40.2 40.2 0 0 1 545 68l2-.2a26 26 0 0 1 7.6.5 23 23 0 0 1 6.5 2.5l3.5-7.9a30 30 0 0 0-4.3-1.8 32.8 32.8 0 0 0-13-1.6q-1.3 0-2.5.3"
            />
            <polyline fill="#f8f3f8" points="495.2 93 500.7 98.4 505.7 100 500.1 94.7 495.2 93"
            />
        </g>
        <g id="wifi-small" ref={wifiSmall}>
            <path fill="#fff" d="M546.7 88.5a7 7 0 0 1 .5.5l5 1.7a7 7 0 0 0-1.7-1.4 7.3 7.3 0 0 0-3.8-.8m-6-9.8a28.4 28.4 0 0 0-11.7 4.8 64.3 64.3 0 0 0-19.8 23l5.8 5.5 5 1.7.5-1.1-.5 1-5-1.6-5.8-5.6 5 1.7c5-9.4 12-17.8 19.8-23a28.2 28.2 0 0 1 11.5-4.8 15.2 15.2 0 0 1 7.2.6l-2.2-1a17.6 17.6 0 0 0-9.7-1.3"
            />
            <path fill="url(#linear-gradient-15)" d="M545.4 80.3a28.2 28.2 0 0 0-11.5 4.8 64.2 64.2 0 0 0-19.8 23l5.8 5.6.5-1.1A55.6 55.6 0 0 1 537.5 92a20 20 0 0 1 8-3.4 10.5 10.5 0 0 1 1.1-.1 7.3 7.3 0 0 1 3.9.8 7 7 0 0 1 1.6 1.4l3.7-8.1a10.8 10.8 0 0 0-1.2-.8 13.8 13.8 0 0 0-2.1-.9 15.2 15.2 0 0 0-7.2-.6"
            />
            <polyline fill="#f8f3f8" points="509.1 106.5 514.9 112.1 519.9 113.7 514.1 108.2 509.1 106.5"
            />
        </g>
        </g>
        <g id="cont-cloud" ref={cont6Cloud}>
        <polygon fill="#6581c3" points="314.3 162 272.1 186.5 229.6 162 271.8 137.5 314.3 162"
        />
        <polygon fill="#f8f4fa" points="297.6 163.5 272 178.4 246.2 163.5 246.2 161.6 297.6 161.6 297.6 163.5"
        />
        <polygon fill="#fff" points="297.6 161.6 272 176.5 246.2 161.6 271.9 146.7 297.6 161.6"
        />
        <g clipPath="url(#clip-path)">
            <polyline fill="none" stroke="#00b0bc" strokeMiterlimit="10" points="286.6 174 269.7 164.1 259.9 164.1"
            />
            <path fill="#00afbb" d="M260.3 163.4a.7.7 0 0 1 .4 1 .7.7 0 0 1-.5.4 2.6 2.6 0 0 1-2.3 0 .7.7 0 0 1 0-1.4 2.6 2.6 0 0 1 2.4 0z"
            />
            <line x1="289.9" x2="263.2" y1="171.9" y2="156.2" fill="none" stroke="#00b0bc"
            strokeMiterlimit="10" />
            <path fill="#00afbb" d="M264.3 155.5a.7.7 0 0 1 0 1.4 2.6 2.6 0 0 1-2.4 0c-.6-.4-.6-1 0-1.4a2.6 2.6 0 0 1 2.4 0z"
            />
            <line x1="311" x2="284.3" y1="174" y2="158.2" fill="none" stroke="#00b0bc"
            strokeMiterlimit="10" />
            <path fill="#00afbb" d="M285 157.3a.8.8 0 0 1 .4 1 .7.7 0 0 1-.4.4 2.7 2.7 0 0 1-2.4 0c-.6-.4-.6-1 0-1.4a2.7 2.7 0 0 1 2.4 0z"
            />
            <polyline fill="none" stroke="#00b0bc" strokeMiterlimit="10" points="292.1 169.8 270.3 156.9 270.3 150.4"
            />
            <path fill="#00afbb" d="M271.4 149.7a.7.7 0 0 1 .5 1 .7.7 0 0 1-.5.4 2.6 2.6 0 0 1-2.3 0 .7.7 0 0 1 0-1.4 2.6 2.6 0 0 1 2.3 0z"
            />
        </g>
        <line x1="259" x2="259" y1="67" y2="164.5" fill="none" stroke="#00b0bc"
        strokeMiterlimit="10" />
        <line x1="263.1" x2="263.1" y1="65" y2="156" fill="none" stroke="#00b0bc"
        strokeMiterlimit="10" />
        <line x1="270.3" x2="270.3" y1="65.9" y2="155.5" fill="none" stroke="#00b0bc"
        strokeMiterlimit="10" />
        <path fill="#f8f4fa" d="M305.2 45l-77.6 57.6-11-6.5V92a28 28 0 0 1 12.7-21.9v-7.7c0-12.3 8.6-27.2 19.3-33.4l8.9-5.1a14.2 14.2 0 0 1 15.4-.2c2.4 1.5 10.1 5.8 10.1 5.8l-6.1 13.1 15.6-9a9.1 9.1 0 0 1 10.2 0l10.3 6z"
        />
        <path fill="#fff" d="M233.2 88.8l7-12.2-11-6.5a26.3 26.3 0 0 0-9.4 10.4zM249.3 50.5l31.4-18L261.6 22a17.9 17.9 0 0 0-4.2 1.8l-9 5.2a39 39 0 0 0-13.2 13.8c5.8 3 14 7.4 14 7.7z"
        />
        <polygon fill="#fff" points="278.9 38.2 273.3 40.1 281.6 53.2 303.5 40.1 292.5 33.6 276.9 42.6 278.9 38.2"
        />
        <path fill="url(#linear-gradient-16)" d="M268.4 30.3c10.7-6.1 19.4-1.2 19.5 11.1v7.7l15.6-9c7-4 12.7-.8 12.7 7.3v4l-88.6 51.2v-4.1a28 28 0 0 1 12.6-21.9V69c0-12.3 8.6-27.2 19.3-33.4z"
        />
        </g>
        <g id="msg-2" ref={cont5Msg}>
            <polygon fill="#6581c3" points="344.7 256.2 325.6 267.3 306.3 256.2 325.4 245.1 344.7 256.2"
            />
            <polygon fill="#f8f4fa" points="321.1 207.2 321.2 242.2 320.9 245 274.3 275 269.8 271.8 269.7 236.9 321.1 207.2"
            />
            <polygon fill="url(#linear-gradient-17)" points="325.5 210.4 325.6 245.3 325.6 255.3 316.9 250.4 274.3 275 274.1 240 325.5 210.4"
            />
            <path ref={msg2Bub1} id="msg2Bub1" fill="#4a6cb8" d="M311.8 234c1.2-.7 2-.1 2 1.2a4.5 4.5 0 0 1-2 3.5c-1 .6-2 .1-2-1.2a4.5 4.5 0 0 1 2-3.5z"
            />
            <path ref={msg2Bub2} id="msg2Bub2" fill="#4a6cb8" d="M300 240.5c1.1-.6 2 0 2 1.2a4.4 4.4 0 0 1-2 3.5c-1.1.7-2 .1-2-1.2a4.5 4.5 0 0 1 2-3.5z"
            />
            <path ref={msg2Bub3} id="msg1Bub1" fill="#4a6cb8" d="M288.2 246.7c1.2-.6 2-.1 2 1.2a4.5 4.5 0 0 1-2 3.5c-1 .6-2 .1-2-1.2a4.5 4.5 0 0 1 2-3.5z"
            />
            <polygon fill="#fff" points="325.5 210.4 321.1 207.2 269.7 236.9 274.1 240 325.5 210.4"
            />
        </g>
        <g id="msg-1" ref={cont4Msg}>
            <polygon fill="#6581c3" points="358.8 196.2 339.6 207.3 320.4 196.2 339.5 185.1 358.8 196.2"
            />
            <polygon fill="#f8f4fa" points="335 148.4 335.1 183.3 334.8 186.2 288.1 216.1 283.8 213 283.6 178 335 148.4"
            />
            <polygon fill="url(#linear-gradient-18)" points="339.4 151.5 339.5 186.5 339.6 196.5 330.8 191.5 288.1 216.1 288.1 181.2 339.4 151.5"
            />
            <path ref={msg1Bub1} id="msg1Bub1" fill="#4a6cb8" d="M325.8 175.1c1-.7 2-.1 2 1.2a4.4 4.4 0 0 1-2 3.5c-1.2.6-2 .1-2-1.2a4.5 4.5 0 0 1 2-3.5z"
            />
            <path ref={msg1Bub2} id="msg1Bub2" fill="#4a6cb8" d="M314 181.7c1.1-.7 2-.1 2 1.2a4.5 4.5 0 0 1-2 3.5c-1.1.6-2 .1-2-1.2a4.5 4.5 0 0 1 2-3.5z"
            />
            <path ref={msg1Bub3} id="msg1Bub3" fill="#4a6cb8" d="M302.1 187.9c1.2-.7 2-.2 2.1 1.1a4.5 4.5 0 0 1-2 3.5c-1.1.7-2 .2-2-1.1a4.5 4.5 0 0 1 2-3.5z"
            />
            <polygon fill="#fff" points="339.4 151.5 335 148.4 283.6 178 288.1 181.2 339.4 151.5"
            />
        </g>
        <g id="cont-cyl" ref={cont7Cyl}>
        <polygon fill="#6581c3" points="301.4 319.7 259.2 344.2 216.8 319.7 258.9 295.2 301.4 319.7"
        />
        <path fill="#f8f4fa" d="M277.4 320v-47.2h-36.6v47.1c0 2.8 1.8 5.5 5.4 7.5a28.5 28.5 0 0 0 25.9 0c3.5-2 5.3-4.8 5.3-7.5z"
        />
        <g id="cyl-liquid">
        <path fill="#00b0bc" d="M259.1 327.6a23.7 23.7 0 0 1-11.4-2.7c-2.5-1.4-4-3.3-4-5V295h30.8v24.8c0 1.8-1.4 3.6-3.9 5a23.5 23.5 0 0 1-11.5 2.7z"
        />
        <path fill="#4a6cb7" d="M261.5 327.5a22.3 22.3 0 0 0 9-2.6c2.5-1.4 4-3.2 4-5v-24.8h-13z"
        />
        <path fill="#33c0c9" d="M270 288.8c6 3.5 6 9.1 0 12.6s-15.7 3.5-21.7 0-6-9.1-.1-12.6 15.7-3.5 21.7 0z"
        />
        </g>
        <path fill="#fff" d="M272 265.3c7.2 4.1 7.2 10.8 0 15s-18.6 4.1-25.8 0-7.2-10.9 0-15 18.6-4.2 25.8 0z"
        />
        <path fill="#f8f4fa" d="M259.1 273.9a8.3 8.3 0 0 1-4-1c-.8-.5-1.3-1.1-1.3-1.7v-3h10.5v3c0 .6-.4 1.3-1.3 1.8a8.2 8.2 0 0 1-3.9.9z"
        />
        <path fill="#fff" d="M262.8 266c2 1.3 2.1 3.2 0 4.4a8.3 8.3 0 0 1-7.5 0c-2-1.2-2-3.1 0-4.3a8.2 8.2 0 0 1 7.5 0z"
        />
        </g>
        <g id="cont-watch" ref={cont3Watch}>
        <polygon fill="#6581c3" points="478.5 207.8 420.6 240.4 388.5 222.3 446.4 189.7 478.5 207.8"
        />
        <polygon fill="#fff" points="469.4 176 465.9 174.5 464.9 176.2 466.9 176.8 469.4 176"
        />
        <path fill="#f2fbfc" d="M380.7 197.8s2.6 7.5 8.9 11 26.1 13.8 26.1 13.8l-9.3-10.3-11-10.6z"
        />
        <path fill="#fff" d="M448.2 180.8a46.4 46.4 0 0 1-9.6 18.2c-7.6 8.9-13.2 15.2-27.6 17 0 0 6.6 9 20.2 7.3s26-17.1 34.2-34l1.5-12.5-10.5-3.3z"
        />
        <path fill="url(#linear-gradient-19)" d="M409.2 213.2a22.6 22.6 0 0 0 21.8 9c14.5-2 25-16.2 29.8-26a69 69 0 0 0 6-19.5l2.6-.7a77 77 0 0 1-5.9 20.4c-4.8 10.5-14.5 25.4-32.5 28.7-17.4 3.1-26.2-13.4-26.2-13.4z"
        />
        <polygon fill="#4a6cb8" points="416.6 162.8 416.4 209.2 408.3 213.7 375.1 148.1 383.1 143.6 416.6 162.8"
        />
        <polygon fill="#00b0bc" points="408.4 167.4 408.3 213.7 374.9 194.4 375.1 148.1 408.4 167.4"
        />
        <polygon fill="#33c0c9" points="408.4 167.4 416.6 162.8 383.1 143.6 375.1 148.1 408.4 167.4"
        />
        <path fill="url(#linear-gradient-20)" d="M461.5 186s5.2-13.5 2.7-27.5-10.6-25.3-25.6-25.3c-16 0-30.3 22.1-30.2 26.1l-3 1.8-3.5-19.8 38.3-14L451 133s12 5.3 15.4 23.7c3 17-2.3 28.4-2.3 28.4z"
        />
        <path fill="#fff" d="M384.4 149.2s2-11.2 14.8-21.5 24.9-8.2 28.4-6.7 23.4 12 23.4 12-9.3-4.5-19.2-1-24.3 16.3-26.5 29.2z"
        />
        <path fill="#f2fbfc" d="M464.2 158.5c-2.1-12-8.4-22-19.6-24.6 3.2 5.1 4.6 10 5.9 21 1.3 11.8-4.3 25.1-4.3 25.1l15.3 6s5.2-13.5 2.7-27.5z"
        />
        <polyline fill="none" stroke="#944eab" strokeMiterlimit="10" points="391.7 164.6 391.7 180.9 397.7 193.7"
        />
        </g>
    </g>
</svg>
  );
}

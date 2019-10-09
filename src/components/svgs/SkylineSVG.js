import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

import { TimelineMax, Linear } from 'gsap';

// function isVisible(ref) {
//     const elVisible = ref.current.getBoundingClientRect().bottom - window.innerHeight;
//     const latestKnownScrollY = 0;
//   });
// }

function animations(refs) {

  const {
    car1,
    car2,
    car4,
    car5,
    car6,
    car7,
    plane,
    skyline,
  } = refs;

  const car1TL = new TimelineMax({ repeat: -1, repeatDelay: 2, paused: true });
  car1TL
    .to(car1.current, 10, { x: `400%`, y: `300%` }, 0)
    .to(car1.current, 1, { opacity: 1 }, 0)
    .to(car1.current, 1, { opacity: 0 }, 3);

  const car2TL = new TimelineMax({ repeat: -1, paused: true });
  car2TL
    .fromTo(car2.current, 20, {x: `400%` , y: `-280%`, opacity: 0}, { x: `-400%`, y: `290%`, opacity: 1 }, 0)
    .to(car2.current, 1, { opacity: 1 }, 0)
    .to(car2.current, 1, { opacity: 0 }, 15);

  const car4TL = new TimelineMax({ repeat: -1, repeatDelay: 1, paused: true });
  car4TL
    .fromTo(car4.current, 16, { x: `-300%`, y: `-200%`, opacity: 0 }, { x: `400%`, y: `300%`, opacity: 1 }, 0)
    .to(car4.current, 1, { opacity: 1 }, 0)
    .to(car4.current, 1, { opacity: 0 }, 4);

  const car5TL = new TimelineMax({ repeat: -1, paused: true });
  car5TL
    .fromTo(car5.current, 14, { opacity: 0 }, { x: `400%`, y: `300%`, opacity: 1 }, 2)
    .to(car5.current, 1, { opacity: 1 }, 2)
    .to(car5.current, 1, { opacity: 0 }, 6);

  const car6TL = new TimelineMax({ repeat: -1, paused: true });
  car6TL
    .fromTo(car6.current, 20, { x: `400%` , y: `-280%`, opacity: 0}, { x: `-400%`, y: `290%`, opacity: 1 }, 0)
    .to(car6.current, 1, { opacity: 1 }, 0)
    .to(car6.current, 1, { opacity: 0 }, 9);

  const car7TL = new TimelineMax({ repeat: -1, paused: true });
  car7TL
    .fromTo(car7.current, 18, {opacity: 0}, { x: `400%`, y: `300%`, opacity: 1 }, 8)
    .to(car7.current, 1, { opacity: 1 }, 8)
    .to(car7.current, 1, { opacity: 0 }, 17);

  const planeTL = new TimelineMax({ repeat: -1, paused: true });
  planeTL
    .fromTo(plane.current, 20, { x: `100%`, y: `-200%` }, { ease: Linear.easeNone, x: `-600%`, y: `500%` }, 0)
    .to(plane.current, 1, { ease: Linear.easeNone, opacity: 1 }, 0)
    .to(plane.current, 1, { ease: Linear.easeNone, opacity: 0 }, 19);

  return (playing) => {
    if (playing) {
      car1TL.play();
      car2TL.play();
      car4TL.play();
      car5TL.play();
      car6TL.play();
      car7TL.play();
      planeTL.play();
    } else if (!playing) {
      car1TL.pause();
      car2TL.pause();
      car4TL.pause();
      car5TL.pause();
      car6TL.pause();
      car7TL.pause();
      planeTL.pause();
    }
  }
}

export default function SkylineSVG({isMobile}) {

  const car1 = useRef(null);
  const car2 = useRef(null);
  const car4 = useRef(null);
  const car5 = useRef(null);
  const car6 = useRef(null);
  const car7 = useRef(null);
  const plane = useRef(null);
  const skyline = useRef(null);

  const [togglePlay, setTogglePlay] = useState({
    callback: () => { },
    set: false,
  });

  let playing = false;
  let lastScrollY = 0;
  let ticking = false;

  const update = (refEl) => {
    const wh = window.innerHeight;
    const { top, bottom } = refEl.current.getBoundingClientRect();
    const elVisible = bottom - wh;
    if (elVisible < 0 && elVisible > -wh) {
      playing = true;
      togglePlay.callback(playing);
    } else if (top > wh || -elVisible > wh) {
      playing = false;
      togglePlay.callback(playing);
    }
    ticking = false;
  };

  const requestTick = refEl => {
    if (!ticking) {
      window.requestAnimationFrame(() => update(refEl));
      ticking = true;
    }
  }

  const onScroll = (refEl) => {
    lastScrollY = window.scrollY;
    requestTick(refEl);
  }

  useEffect(() => {
    // On update
    const handleScroll = () => onScroll(skyline);
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  useEffect(() => {
    if (!togglePlay.set && car1.current && car2.current && car4.current && car5.current && car6.current && car7.current && plane.current && skyline.current) {
      setTogglePlay({
        callback: animations({
          car1,
          car2,
          car4,
          car5,
          car6,
          car7,
          plane,
          skyline,
        }),
        set: true,
      });
    }
  });


  return (
    <svg className={`${ isMobile ? 'isMobile' : '' }`} ref={skyline} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      id="skyline-container" data-name="Layer 1" viewBox="0 0 1920 1080.42">
      <defs>
        <clipPath id="clip-path">
          <polygon fill="none" points="276.73 360.94 276.73 777.91 141.65 856.9 141.65 319.53 276.73 360.94"
          />
        </clipPath>
        <clipPath id="clip-path-2">
          <polygon fill="none" points="57.22 270.31 57.22 807.68 141.65 856.9 141.65 319.53 57.22 270.31"
          />
        </clipPath>
        <clipPath id="clip-path-3">
          <polygon fill="none" points="203.96 628.39 203.96 522.7 343.51 604.06 343.51 709.75 203.96 628.39"
          />
        </clipPath>
        <clipPath id="clip-path-4">
          <polygon fill="none" points="483.07 628.39 483.07 522.7 343.51 604.06 343.51 709.75 483.07 628.39"
          />
        </clipPath>
        <clipPath id="clip-path-5">
          <polygon fill="none" points="203.96 474.93 203.96 369.23 343.51 450.59 343.51 556.29 203.96 474.93"
          />
        </clipPath>
        <clipPath id="clip-path-6">
          <polygon fill="none" points="483.07 474.93 483.07 369.23 343.51 450.59 343.51 556.29 483.07 474.93"
          />
        </clipPath>
        <clipPath id="clip-path-7">
          <polygon fill="none" points="203.96 319.26 203.96 213.57 343.51 294.93 343.51 400.62 203.96 319.26"
          />
        </clipPath>
        <clipPath id="clip-path-8">
          <polygon fill="none" points="483.07 319.26 483.07 213.57 343.51 294.93 343.51 400.62 483.07 319.26"
          />
        </clipPath>
        <clipPath id="clip-path-9">
          <polygon fill="none" points="247.53 211.56 247.53 138.87 343.51 194.83 343.51 267.52 247.53 211.56"
          />
        </clipPath>
        <clipPath id="clip-path-10">
          <polygon fill="none" points="439.5 211.56 439.5 138.87 343.51 194.83 343.51 267.52 439.5 211.56"
          />
        </clipPath>
        <clipPath id="clip-path-11">
          <polygon fill="none" points="1666.04 187.42 1666.04 582.81 1750.47 632.03 1750.47 236.64 1666.04 187.42"
          />
        </clipPath>
        <clipPath id="clip-path-12">
          <polygon fill="none" points="1750.47 236.64 1750.47 632.03 1834.89 582.81 1834.89 187.42 1750.47 236.64"
          />
        </clipPath>
        <clipPath id="clip-path-13">
          <polygon fill="none" points="1716.33 187.65 1716.33 103.23 1750.47 123.13 1750.47 207.55 1716.33 187.65"
          />
        </clipPath>
        <clipPath id="clip-path-14">
          <polygon fill="none" points="1784.61 187.65 1784.61 103.23 1750.47 123.13 1750.47 207.55 1784.61 187.65"
          />
        </clipPath>
        <clipPath id="clip-path-15">
          <polygon fill="none" points="1644.03 455 1644.03 920.76 1779.11 999.75 1779.11 462.38 1644.03 455"
          />
        </clipPath>
        <clipPath id="clip-path-16">
          <polygon fill="none" points="1863.54 413.16 1863.54 950.53 1779.11 999.75 1779.11 462.38 1863.54 413.16"
          />
        </clipPath>
        <clipPath id="clip-path-17">
          <polygon fill="none" points="1427.37 497.65 1427.37 893.04 1511.8 942.26 1511.8 546.87 1427.37 497.65"
          />
        </clipPath>
        <clipPath id="clip-path-18">
          <polygon fill="none" points="1635.97 383.86 1635.97 474.36 1511.8 546.87 1511.8 942.26 1685.34 840.91 1685.34 488.23 1685.34 355.03 1635.97 383.86"
          />
        </clipPath>
        <clipPath id="clip-path-19">
          <polygon fill="none" points="1666.04 636.76 1666.04 1032.15 1750.47 982.93 1750.47 587.54 1666.04 636.76"
          />
        </clipPath>
        <clipPath id="clip-path-20">
          <polygon fill="none" points="1581.62 587.54 1581.62 982.93 1666.04 1032.15 1666.04 636.76 1581.62 587.54"
          />
        </clipPath>
        <clipPath id="clip-path-21">
          <polygon fill="none" points="1717.84 587.55 1717.84 530.5 1666.04 560.69 1666.04 617.75 1717.84 587.55"
          />
        </clipPath>
        <clipPath id="clip-path-22">
          <polygon fill="none" points="1614.24 587.55 1614.24 530.5 1666.04 560.69 1666.04 617.75 1614.24 587.55"
          />
        </clipPath>
        <linearGradient id="linear-gradient-s" x1="386.28" x2="441.92" y1="621.19"
          y2="590.45" gradientTransform="matrix(1 0 0 -1 -134.5 1080)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f5f3f7" />
          <stop offset="1" stopColor="#6d5384" />
        </linearGradient>
        <clipPath id="clip-path-23">
          <polygon fill="none" points="123.15 646.24 123.15 1041.63 298.67 942.66 298.67 547.28 123.15 646.24"
          />
        </clipPath>
        <clipPath id="clip-path-24">
          <polygon fill="none" points="38.72 597.02 38.72 992.41 123.15 1041.63 123.15 646.24 38.72 597.02"
          />
        </clipPath>
        <clipPath id="clip-path-25">
          <polygon fill="none" points="212.82 575.85 212.82 518.79 123.15 570.17 123.15 627.23 212.82 575.85"
          />
        </clipPath>
        <clipPath id="clip-path-26">
          <polygon fill="none" points="71.35 597.03 71.35 539.97 123.15 570.17 123.15 627.23 71.35 597.03"
          />
        </clipPath>
        <linearGradient id="linear-gradient-s-2" x1="674.95" x2="730.59" y1="785.08"
          y2="754.34" xlinkHref="#linear-gradient-s" />
        <linearGradient id="linear-gradient-s-3" x1="958.72" x2="1125.12" y1="289.76"
          y2="150.92" gradientTransform="matrix(1 0 0 -1 0 1080)" xlinkHref="#linear-gradient-s"
        />
        <linearGradient id="linear-gradient-s-4" x1="1462.06" x2="1572.6" y1="399.36"
          y2="366.83" gradientTransform="matrix(1 0 0 -1 0 1080)" xlinkHref="#linear-gradient-s"
        />
        <linearGradient id="linear-gradient-s-5" x1="398.23" x2="453.87" y1="404.66"
          y2="373.91" gradientTransform="rotate(180 936.2 540)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f5f3f7" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient id="linear-gradient-s-6" x1="865.77" x2="921.42" y1="973.48"
          y2="942.74" gradientTransform="rotate(180 936.2 540)" xlinkHref="#linear-gradient-s"
        />
        <clipPath id="clip-path-27">
          <polygon fill="none" points="1635.97 474.36 1635.97 383.86 1551.54 334.69 1551.57 425.16 1635.97 474.36"
          />
        </clipPath>
        <linearGradient id="linear-gradient-s-7" x1="580.7" x2="691.25" y1="256.57"
          y2="224.04" gradientTransform="matrix(1 0 0 -1 0 1080)" xlinkHref="#linear-gradient-s"
        />
        <linearGradient id="linear-gradient-s-8" x1="1279.58" x2="1335.23" y1="261.85"
          y2="231.1" xlinkHref="#linear-gradient-s-5" />
        <clipPath id="clip-path-28">
          <path fill="none" d="M516.6 935c.1 10.8-7 21.7-21.2 30-28.5 16.6-74.9 16.6-103.6 0-14.3-8.3-21.5-19.1-21.6-30V505h146.4z"
          />
        </clipPath>
        <clipPath id="clip-path-29">
          <path fill="none" d="M418.7 974.9c25.9 5.4 56 2.1 76.7-10 14.2-8.2 21.3-19 21.3-30V505h-98z"
          />
        </clipPath>
        <clipPath id="clip-path-30">
          <path fill="none" d="M433 532.4c17.8 2 36.8-1 50.5-9 11-6.4 16.5-14.8 16.5-23.1v-67.4h-67z"
          />
        </clipPath>
        <clipPath id="clip-path-31">
          <path fill="none" d="M500 500.3c0 8.3-5.4 16.7-16.4 23.1a88 88 0 0 1-80 0c-11-6.4-16.6-14.8-16.7-23.1v-67.4H500z"
          />
        </clipPath>
        <clipPath id="clip-path-32">
          <polygon fill="none" points="237.18 582.06 237.18 977.45 321.61 1026.67 321.61 631.28 237.18 582.06"
          />
        </clipPath>
        <clipPath id="clip-path-33">
          <polygon fill="none" points="321.61 631.28 321.61 1026.67 406.03 977.45 406.03 582.06 321.61 631.28"
          />
        </clipPath>
        <clipPath id="clip-path-34">
          <polygon fill="none" points="365.42 594.25 365.42 528.83 321.61 554.37 321.61 619.79 365.42 594.25"
          />
        </clipPath>
        <clipPath id="clip-path-35">
          <polygon fill="none" points="277.8 594.25 277.8 528.83 321.61 554.37 321.61 619.79 277.8 594.25"
          />
        </clipPath>
        <linearGradient id="linear-gradient-s-9" x1="1601.04" x2="1711.58" y1="320.19"
          y2="287.66" gradientTransform="matrix(1 0 0 -1 0 1080)" xlinkHref="#linear-gradient-s"
        />
        <linearGradient id="linear-gradient-s-10" x1="259.25" x2="314.89" y1="325.47"
          y2="294.73" xlinkHref="#linear-gradient-s-5" />
        <linearGradient id="linear-gradient-s-11" x1="256.74" x2="367.28" y1="248.6"
          y2="216.07" gradientTransform="matrix(1 0 0 -1 0 1080)" xlinkHref="#linear-gradient-s"
        />
        <linearGradient id="linear-gradient-s-12" x1="1603.55" x2="1659.19" y1="253.89"
          y2="223.15" xlinkHref="#linear-gradient-s-5" />
      </defs>
      <g id="Layer_3" data-name="Layer 3">
        <polygon fill="#576daf" points="276.73 360.94 276.73 777.91 141.65 856.9 141.65 319.53 276.73 360.94"
        />
        <g fill="#788abf" clipPath="url(#clip-path)">
          <rect width="2" height="601.66" x="140.65" y="279.45" />
          <rect width="2" height="601.66" x="150.29" y="274.71" />
          <rect width="2" height="601.66" x="159.94" y="269.96" />
          <rect width="2" height="601.66" x="169.59" y="265.21" />
          <rect width="2" height="601.66" x="179.24" y="260.46" />
          <rect width="2" height="601.66" x="188.89" y="255.72" />
          <rect width="2" height="601.66" x="198.54" y="250.97" />
          <rect width="2" height="601.66" x="208.19" y="246.23" />
          <rect width="2" height="601.66" x="217.84" y="241.48" />
          <rect width="2" height="601.66" x="227.48" y="250.97" />
          <rect width="2" height="601.66" x="237.13" y="260.46" />
          <rect width="2" height="601.66" x="246.78" y="269.96" />
          <rect width="2" height="601.66" x="256.43" y="279.45" />
          <rect width="2" height="601.66" x="266.08" y="288.95" />
          <rect width="2" height="601.66" x="275.73" y="298.44" />
        </g>
        <polygon fill="#33bdc7" points="192.3 311.67 276.73 360.94 141.65 319.53 57.22 270.26 192.3 311.67"
        />
        <polygon fill="#00adb9" points="57.22 270.31 57.22 807.68 141.65 856.9 141.65 319.53 57.22 270.31"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-2)">
          <rect width="2" height="601.66" x="140.65" y="295.56" />
          <rect width="2" height="601.66" x="131.27" y="290.82" />
          <rect width="2" height="601.66" x="121.88" y="286.07" />
          <rect width="2" height="601.66" x="112.5" y="281.32" />
          <rect width="2" height="601.66" x="103.12" y="276.58" />
          <rect width="2" height="601.66" x="93.74" y="271.83" />
          <rect width="2" height="601.66" x="84.36" y="267.08" />
          <rect width="2" height="601.66" x="74.98" y="262.34" />
          <rect width="2" height="601.66" x="65.6" y="257.59" />
          <rect width="2" height="601.66" x="56.22" y="252.84" />
        </g>
        <polygon fill="#f8f4f9" points="1365.73 391.52 719.02 0 819.42 0 1392.66 347.03 1365.73 391.52"
        />
        <polygon fill="#00adb9" points="203.96 628.39 203.96 522.7 343.51 604.06 343.51 709.75 203.96 628.39"
        />
        <polygon fill="#33bdc7" points="203.96 522.7 343.51 441.42 483.07 522.7 343.51 604.06 203.96 522.7"
        />
        <polygon fill="#576daf" points="483.07 628.39 483.07 522.7 343.51 604.06 343.51 709.75 483.07 628.39"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-3)">
          <rect width="2" height="176.98" x="272.73" y="474.76" transform="matrix(.5 -.86 .86 .5 -350.8 517.3)"
          />
          <rect width="2" height="176.98" x="272.74" y="485.34" transform="matrix(.5 -.86 .86 .5 -360 522.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="495.92" transform="matrix(.5 -.86 .86 .5 -369.1 527.8)"
          />
          <rect width="2" height="176.98" x="272.73" y="506.52" transform="matrix(.5 -.86 .86 .5 -378.3 533)"
          />
          <rect width="2" height="176.98" x="272.73" y="517.09" transform="rotate(-59.8 275.6 609)"
          />
          <rect width="2" height="176.98" x="272.73" y="527.67" transform="matrix(.5 -.86 .86 .5 -396.6 543.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="538.25" transform="matrix(.5 -.86 .86 .5 -405.7 548.9)"
          />
          <rect width="2" height="176.98" x="272.73" y="548.84" transform="rotate(-59.8 275.6 641)"
          />
          <rect width="2" height="176.98" x="272.73" y="559.4" transform="matrix(.5 -.86 .86 .5 -424 559.4)"
          />
          <rect width="2" height="176.98" x="272.73" y="569.99" transform="matrix(.5 -.86 .86 .5 -433.2 564.7)"
          />
          <rect width="2" height="176.98" x="272.74" y="580.57" transform="matrix(.5 -.86 .86 .5 -442.3 570)"
          />
          <rect width="2" height="176.98" x="272.74" y="591.14" transform="matrix(.5 -.86 .86 .5 -451.5 575.2)"
          />
          <rect width="2" height="176.98" x="272.74" y="601.72" transform="matrix(.5 -.86 .86 .5 -460.6 580.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="612.31" transform="matrix(.5 -.86 .86 .5 -469.8 585.8)"
          />
          <rect width="2" height="176.98" x="272.74" y="622.89" transform="matrix(.5 -.86 .86 .5 -479 591)"
          />
          <rect width="2" height="176.98" x="272.73" y="633.45" transform="matrix(.5 -.86 .86 .5 -488 596.3)"
          />
          <rect width="2" height="176.98" x="272.73" y="644.04" transform="matrix(.5 -.86 .86 .5 -497.2 601.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="654.61" transform="matrix(.5 -.86 .86 .5 -506.4 606.8)"
          />
          <rect width="2" height="176.98" x="272.73" y="665.19" transform="rotate(-59.8 275.6 758)"
          />
          <rect width="2" height="176.98" x="272.73" y="675.77" transform="matrix(.5 -.86 .86 .5 -524.7 617.4)"
          />
          <rect width="2" height="176.98" x="272.73" y="686.36" transform="matrix(.5 -.86 .86 .5 -533.8 622.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="696.94" transform="matrix(.5 -.86 .86 .5 -543 628)"
          />
          <rect width="2" height="176.98" x="272.73" y="707.52" transform="matrix(.5 -.86 .86 .5 -552.1 633.2)"
          />
          <rect width="2" height="176.98" x="272.73" y="718.09" transform="matrix(.5 -.86 .86 .5 -561.3 638.5)"
          />
          <rect width="2" height="176.98" x="272.73" y="728.66" transform="matrix(.5 -.86 .86 .5 -570.4 643.7)"
          />
          <rect width="2" height="176.98" x="272.73" y="739.24" transform="matrix(.5 -.86 .86 .5 -579.6 649)"
          />
          <rect width="2" height="176.98" x="272.74" y="749.83" transform="matrix(.5 -.86 .86 .5 -588.7 654.3)"
          />
          <rect width="2" height="176.98" x="272.74" y="760.41" transform="matrix(.5 -.86 .86 .5 -597.9 659.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="770.99" transform="matrix(.5 -.86 .86 .5 -607 664.8)"
          />
          <rect width="2" height="176.98" x="272.74" y="781.57" transform="matrix(.5 -.86 .86 .5 -616.2 670)"
          />
          <rect width="2" height="176.98" x="272.73" y="792.13" transform="matrix(.5 -.86 .86 .5 -625.3 675.3)"
          />
          <rect width="2" height="176.98" x="272.73" y="802.72" transform="matrix(.5 -.86 .86 .5 -634.5 680.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="813.29" transform="rotate(-59.8 275.7 907)"
          />
          <rect width="2" height="176.98" x="272.73" y="823.88" transform="matrix(.5 -.86 .86 .5 -652.8 691.1)"
          />
          <rect width="2" height="176.98" x="272.73" y="834.46" transform="matrix(.5 -.86 .86 .5 -662 696.4)"
          />
          <rect width="2" height="176.98" x="272.73" y="845.04" transform="matrix(.5 -.86 .86 .5 -671 701.7)"
          />
          <rect width="2" height="176.98" x="272.73" y="855.62" transform="matrix(.5 -.86 .86 .5 -680.2 707)"
          />
        </g>
        <g fill="#788abf" clipPath="url(#clip-path-4)">
          <rect width="176.98" height="2" x="324.8" y="562.25" transform="rotate(-30.1 413.3 563.2)"
          />
          <rect width="176.98" height="2" x="324.81" y="572.83" transform="rotate(-30.1 413.3 573.8)"
          />
          <rect width="176.98" height="2" x="324.81" y="583.42" transform="rotate(-30.1 413.3 584.4)"
          />
          <rect width="176.98" height="2" x="324.8" y="594" transform="rotate(-30.1 413.3 595)"
          />
          <rect width="176.98" height="2" x="324.8" y="604.58" transform="rotate(-30.1 413.3 605.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="615.16" transform="rotate(-30.1 413.3 616.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="625.73" transform="rotate(-30.1 413.3 626.7)"
          />
          <rect width="176.98" height="2" x="324.8" y="636.3" transform="rotate(-30.1 413.3 637.3)"
          />
          <rect width="176.98" height="2" x="324.81" y="646.89" transform="rotate(-30.1 413.3 647.9)"
          />
          <rect width="176.98" height="2" x="324.8" y="657.47" transform="rotate(-30.1 413.3 658.5)"
          />
          <rect width="176.98" height="2" x="324.8" y="668.05" transform="rotate(-30.1 413.3 669)"
          />
          <rect width="176.98" height="2" x="324.8" y="678.63" transform="rotate(-30.1 413.3 679.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="689.2" transform="rotate(-30.1 413.3 690.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="699.78" transform="rotate(-30.1 413.3 700.8)"
          />
          <rect width="176.98" height="2" x="324.81" y="710.36" transform="rotate(-30.1 413.3 711.4)"
          />
          <rect width="176.98" height="2" x="324.8" y="720.94" transform="rotate(-30.1 413.3 722)"
          />
          <rect width="176.98" height="2" x="324.8" y="731.52" transform="rotate(-30.1 413.3 732.5)"
          />
          <rect width="176.98" height="2" x="324.8" y="742.1" transform="rotate(-30.1 413.3 743)"
          />
          <rect width="176.98" height="2" x="324.8" y="752.67" transform="rotate(-30.1 413.3 753.7)"
          />
          <rect width="176.98" height="2" x="324.8" y="763.25" transform="rotate(-30.1 413.3 764.3)"
          />
          <rect width="176.98" height="2" x="324.81" y="773.83" transform="rotate(-30.1 413.3 774.8)"
          />
          <rect width="176.98" height="2" x="324.81" y="784.42" transform="rotate(-30.1 413.3 785.4)"
          />
          <rect width="176.98" height="2" x="324.8" y="794.99" transform="rotate(-30.1 413.3 796)"
          />
          <rect width="176.98" height="2" x="324.8" y="805.57" transform="rotate(-30.1 413.3 806.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="816.14" transform="rotate(-30.1 413.3 817.1)"
          />
          <rect width="176.98" height="2" x="324.8" y="826.72" transform="rotate(-30.1 413.3 827.7)"
          />
          <rect width="176.98" height="2" x="324.8" y="837.3" transform="rotate(-30.1 413.3 838.3)"
          />
          <rect width="176.98" height="2" x="324.81" y="847.89" transform="rotate(-30.1 413.3 848.9)"
          />
          <rect width="176.98" height="2" x="324.81" y="858.47" transform="rotate(-30.1 413.3 859.5)"
          />
          <rect width="176.98" height="2" x="324.8" y="869.04" transform="rotate(-30.1 413.3 870)"
          />
          <rect width="176.98" height="2" x="324.8" y="879.61" transform="rotate(-30.1 413.3 880.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="890.19" transform="rotate(-30.1 413.3 891.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="900.77" transform="rotate(-30.1 413.3 901.8)"
          />
          <rect width="176.98" height="2" x="324.81" y="911.36" transform="rotate(-30.1 413.3 912.4)"
          />
          <rect width="176.98" height="2" x="324.81" y="921.94" transform="rotate(-30.1 413.3 923)"
          />
          <rect width="176.98" height="2" x="324.81" y="932.52" transform="rotate(-30.1 413.3 933.5)"
          />
          <rect width="176.98" height="2" x="324.81" y="943.09" transform="rotate(-30.1 413.3 944)"
          />
        </g>
        <polygon fill="#00adb9" points="235.95 520.84 235.95 491.38 451.08 520.84 343.51 583.55 235.95 520.84"
        />
        <polygon fill="#576daf" points="343.51 583.55 343.51 554.09 451.08 491.45 451.08 520.84 343.51 583.55"
        />
        <polygon fill="#00adb9" points="203.96 474.93 203.96 369.23 343.51 450.59 343.51 556.29 203.96 474.93"
        />
        <polygon fill="#33bdc7" points="203.96 369.23 343.51 287.95 483.07 369.23 343.51 450.59 203.96 369.23"
        />
        <polygon fill="#576daf" points="483.07 474.93 483.07 369.23 343.51 450.59 343.51 556.29 483.07 474.93"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-5)">
          <rect width="2" height="176.98" x="272.74" y="321.31" transform="matrix(.5 -.86 .86 .5 -218.1 440.9)"
          />
          <rect width="2" height="176.98" x="272.74" y="331.88" transform="matrix(.5 -.86 .86 .5 -227.2 446.1)"
          />
          <rect width="2" height="176.98" x="272.74" y="342.46" transform="matrix(.5 -.86 .86 .5 -236.4 451.4)"
          />
          <rect width="2" height="176.98" x="272.74" y="353.04" transform="rotate(-59.8 275.5 444)"
          />
          <rect width="2" height="176.98" x="272.73" y="363.62" transform="matrix(.5 -.86 .86 .5 -254.7 462)"
          />
          <rect width="2" height="176.98" x="272.73" y="374.2" transform="matrix(.5 -.86 .86 .5 -263.9 467.2)"
          />
          <rect width="2" height="176.98" x="272.73" y="384.78" transform="matrix(.5 -.86 .86 .5 -273 472.4)"
          />
          <rect width="2" height="176.98" x="272.73" y="395.36" transform="matrix(.5 -.86 .86 .5 -282.1 477.7)"
          />
          <rect width="2" height="176.98" x="272.74" y="405.93" transform="matrix(.5 -.86 .86 .5 -291.3 483)"
          />
          <rect width="2" height="176.98" x="272.74" y="416.51" transform="matrix(.5 -.86 .86 .5 -300.4 488.3)"
          />
          <rect width="2" height="176.98" x="272.75" y="427.09" transform="matrix(.5 -.86 .86 .5 -309.6 493.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="437.67" transform="matrix(.5 -.86 .86 .5 -318.7 498.8)"
          />
          <rect width="2" height="176.98" x="272.74" y="448.25" transform="matrix(.5 -.86 .86 .5 -327.9 504)"
          />
          <rect width="2" height="176.98" x="272.74" y="458.83" transform="matrix(.5 -.86 .86 .5 -337 509.3)"
          />
          <rect width="2" height="176.98" x="272.74" y="469.41" transform="rotate(-59.8 275.6 561)"
          />
          <rect width="2" height="176.98" x="272.74" y="479.98" transform="matrix(.5 -.86 .86 .5 -355.3 519.9)"
          />
          <rect width="2" height="176.98" x="272.74" y="490.56" transform="matrix(.5 -.86 .86 .5 -364.5 525.1)"
          />
          <rect width="2" height="176.98" x="272.74" y="501.15" transform="rotate(-59.8 275.6 593)"
          />
          <rect width="2" height="176.98" x="272.73" y="511.73" transform="matrix(.5 -.86 .86 .5 -382.8 535.7)"
          />
          <rect width="2" height="176.98" x="272.73" y="522.31" transform="matrix(.5 -.86 .86 .5 -392 541)"
          />
          <rect width="2" height="176.98" x="272.73" y="532.89" transform="rotate(-59.8 275.6 625)"
          />
          <rect width="2" height="176.98" x="272.73" y="543.47" transform="matrix(.5 -.86 .86 .5 -410.3 551.5)"
          />
          <rect width="2" height="176.98" x="272.73" y="554.04" transform="matrix(.5 -.86 .86 .5 -419.4 556.8)"
          />
          <rect width="2" height="176.98" x="272.73" y="564.62" transform="matrix(.5 -.86 .86 .5 -428.5 562)"
          />
          <rect width="2" height="176.98" x="272.74" y="575.2" transform="matrix(.5 -.86 .86 .5 -437.7 567.3)"
          />
          <rect width="2" height="176.98" x="272.74" y="585.78" transform="matrix(.5 -.86 .86 .5 -446.8 572.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="596.36" transform="matrix(.5 -.86 .86 .5 -456 577.8)"
          />
          <rect width="2" height="176.98" x="272.73" y="606.94" transform="matrix(.5 -.86 .86 .5 -465.1 583.1)"
          />
          <rect width="2" height="176.98" x="272.73" y="617.51" transform="rotate(-59.8 275.6 710)"
          />
          <rect width="2" height="176.98" x="272.73" y="628.1" transform="matrix(.5 -.86 .86 .5 -483.4 593.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="638.67" transform="matrix(.5 -.86 .86 .5 -492.6 598.9)"
          />
          <rect width="2" height="176.98" x="272.74" y="649.25" transform="rotate(-59.8 275.6 742)"
          />
          <rect width="2" height="176.98" x="272.74" y="659.83" transform="matrix(.5 -.86 .86 .5 -510.9 609.4)"
          />
          <rect width="2" height="176.98" x="272.73" y="670.41" transform="matrix(.5 -.86 .86 .5 -520 614.7)"
          />
          <rect width="2" height="176.98" x="272.73" y="680.99" transform="matrix(.5 -.86 .86 .5 -529.2 620)"
          />
          <rect width="2" height="176.98" x="272.73" y="691.56" transform="matrix(.5 -.86 .86 .5 -538.3 625.2)"
          />
          <rect width="2" height="176.98" x="272.73" y="702.15" transform="matrix(.5 -.86 .86 .5 -547.5 630.5)"
          />
        </g>
        <g fill="#788abf" clipPath="url(#clip-path-6)">
          <rect width="176.98" height="2" x="324.79" y="408.83" transform="rotate(-30.1 413.3 409.8)"
          />
          <rect width="176.98" height="2" x="324.8" y="419.42" transform="rotate(-30.1 413.3 420.4)"
          />
          <rect width="176.98" height="2" x="324.8" y="430" transform="rotate(-30.1 413.3 431)"
          />
          <rect width="176.98" height="2" x="324.79" y="440.57" transform="rotate(-30.1 413.3 441.6)"
          />
          <rect width="176.98" height="2" x="324.78" y="451.15" transform="rotate(-30.1 413.3 452.1)"
          />
          <rect width="176.98" height="2" x="324.78" y="461.73" transform="rotate(-30.1 413.3 462.7)"
          />
          <rect width="176.98" height="2" x="324.78" y="472.31" transform="rotate(-30.1 413.3 473.3)"
          />
          <rect width="176.98" height="2" x="324.78" y="482.89" transform="rotate(-30.1 413.3 483.9)"
          />
          <rect width="176.98" height="2" x="324.79" y="493.47" transform="rotate(-30.1 413.3 494.5)"
          />
          <rect width="176.98" height="2" x="324.81" y="504.01" transform="rotate(-30.1 413.3 505)"
          />
          <rect width="176.98" height="2" x="324.8" y="514.58" transform="rotate(-30.1 413.3 515.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="525.16" transform="rotate(-30.1 413.3 526.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="535.73" transform="rotate(-30.1 413.3 536.7)"
          />
          <rect width="176.98" height="2" x="324.8" y="546.31" transform="rotate(-30.1 413.3 547.3)"
          />
          <rect width="176.98" height="2" x="324.81" y="556.9" transform="rotate(-30.1 413.3 557.9)"
          />
          <rect width="176.98" height="2" x="324.81" y="567.48" transform="rotate(-30.1 413.3 568.5)"
          />
          <rect width="176.98" height="2" x="324.81" y="578.06" transform="rotate(-30.1 413.3 579)"
          />
          <rect width="176.98" height="2" x="324.8" y="588.63" transform="rotate(-30.1 413.3 589.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="599.2" transform="rotate(-30.1 413.3 600.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="609.78" transform="rotate(-30.1 413.3 610.8)"
          />
          <rect width="176.98" height="2" x="324.8" y="620.37" transform="rotate(-30.1 413.3 621.4)"
          />
          <rect width="176.98" height="2" x="324.81" y="630.95" transform="rotate(-30.1 413.3 632)"
          />
          <rect width="176.98" height="2" x="324.81" y="641.53" transform="rotate(-30.1 413.3 642.5)"
          />
          <rect width="176.98" height="2" x="324.8" y="652.11" transform="rotate(-30.1 413.3 653.1)"
          />
          <rect width="176.98" height="2" x="324.8" y="662.68" transform="rotate(-30.1 413.3 663.7)"
          />
          <rect width="176.98" height="2" x="324.8" y="673.25" transform="rotate(-30.1 413.3 674.3)"
          />
          <rect width="176.98" height="2" x="324.8" y="683.84" transform="rotate(-30.1 413.3 684.8)"
          />
          <rect width="176.98" height="2" x="324.81" y="694.42" transform="rotate(-30.1 413.3 695.4)"
          />
          <rect width="176.98" height="2" x="324.81" y="705" transform="rotate(-30.1 413.3 706)"
          />
          <rect width="176.98" height="2" x="324.8" y="715.58" transform="rotate(-30.1 413.3 716.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="726.15" transform="rotate(-30.1 413.3 727.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="736.73" transform="rotate(-30.1 413.3 737.7)"
          />
          <rect width="176.98" height="2" x="324.8" y="747.31" transform="rotate(-30.1 413.3 748.3)"
          />
          <rect width="176.98" height="2" x="324.81" y="757.89" transform="rotate(-30.1 413.3 758.9)"
          />
          <rect width="176.98" height="2" x="324.81" y="768.47" transform="rotate(-30.1 413.3 769.5)"
          />
          <rect width="176.98" height="2" x="324.81" y="779.05" transform="rotate(-30.1 413.3 780)"
          />
          <rect width="176.98" height="2" x="324.8" y="789.62" transform="rotate(-30.1 413.3 790.6)"
          />
        </g>
        <polygon fill="#00adb9" points="235.95 367.38 235.95 337.91 451.08 367.38 343.51 430.09 235.95 367.38"
        />
        <polygon fill="#00adb9" points="203.96 319.26 203.96 213.57 343.51 294.93 343.51 400.62 203.96 319.26"
        />
        <polygon fill="#33bdc7" points="203.96 213.57 343.51 132.29 483.07 213.57 343.51 294.93 203.96 213.57"
        />
        <polygon fill="#576daf" points="483.07 319.26 483.07 213.57 343.51 294.93 343.51 400.62 483.07 319.26"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-7)">
          <rect width="2" height="176.98" x="272.73" y="165.64" transform="matrix(.5 -.86 .86 .5 -83.5 363.3)"
          />
          <rect width="2" height="176.98" x="272.73" y="176.22" transform="matrix(.5 -.86 .86 .5 -92.6 368.6)"
          />
          <rect width="2" height="176.98" x="272.74" y="186.8" transform="matrix(.5 -.86 .86 .5 -101.8 373.9)"
          />
          <rect width="2" height="176.98" x="272.74" y="197.37" transform="matrix(.5 -.86 .86 .5 -110.9 379.1)"
          />
          <rect width="2" height="176.98" x="272.74" y="207.95" transform="matrix(.5 -.86 .86 .5 -120 384.4)"
          />
          <rect width="2" height="176.98" x="272.74" y="218.53" transform="matrix(.5 -.86 .86 .5 -129.2 389.7)"
          />
          <rect width="2" height="176.98" x="272.74" y="229.11" transform="matrix(.5 -.86 .86 .5 -138.4 395)"
          />
          <rect width="2" height="176.98" x="272.74" y="239.69" transform="rotate(-59.8 275.5 330)"
          />
          <rect width="2" height="176.98" x="272.74" y="250.27" transform="matrix(.5 -.86 .86 .5 -156.7 405.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="260.85" transform="matrix(.5 -.86 .86 .5 -165.8 410.7)"
          />
          <rect width="2" height="176.98" x="272.74" y="271.42" transform="matrix(.5 -.86 .86 .5 -175 416)"
          />
          <rect width="2" height="176.98" x="272.74" y="282" transform="matrix(.5 -.86 .86 .5 -184.1 421.3)"
          />
          <rect width="2" height="176.98" x="272.74" y="292.58" transform="matrix(.5 -.86 .86 .5 -193.3 426.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="303.16" transform="matrix(.5 -.86 .86 .5 -202.4 431.8)"
          />
          <rect width="2" height="176.98" x="272.73" y="313.74" transform="matrix(.5 -.86 .86 .5 -211.6 437)"
          />
          <rect width="2" height="176.98" x="272.73" y="324.32" transform="matrix(.5 -.86 .86 .5 -220.7 442.3)"
          />
          <rect width="2" height="176.98" x="272.73" y="334.9" transform="matrix(.5 -.86 .86 .5 -229.9 447.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="345.47" transform="matrix(.5 -.86 .86 .5 -239 452.9)"
          />
          <rect width="2" height="176.98" x="272.74" y="356.05" transform="rotate(-59.8 275.5 447)"
          />
          <rect width="2" height="176.98" x="272.74" y="366.63" transform="matrix(.5 -.86 .86 .5 -257.3 463.4)"
          />
          <rect width="2" height="176.98" x="272.74" y="377.21" transform="matrix(.5 -.86 .86 .5 -266.4 468.7)"
          />
          <rect width="2" height="176.98" x="272.75" y="387.8" transform="matrix(.5 -.86 .86 .5 -275.6 474)"
          />
          <rect width="2" height="176.98" x="272.74" y="398.37" transform="matrix(.5 -.86 .86 .5 -284.8 479.2)"
          />
          <rect width="2" height="176.98" x="272.74" y="408.94" transform="matrix(.5 -.86 .86 .5 -293.9 484.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="419.52" transform="matrix(.5 -.86 .86 .5 -303 489.8)"
          />
          <rect width="2" height="176.98" x="272.74" y="430.1" transform="matrix(.5 -.86 .86 .5 -312.2 495)"
          />
          <rect width="2" height="176.98" x="272.74" y="440.68" transform="matrix(.5 -.86 .86 .5 -321.3 500.3)"
          />
          <rect width="2" height="176.98" x="272.74" y="451.27" transform="matrix(.5 -.86 .86 .5 -330.5 505.6)"
          />
          <rect width="2" height="176.98" x="272.74" y="461.85" transform="matrix(.5 -.86 .86 .5 -339.6 510.8)"
          />
          <rect width="2" height="176.98" x="272.73" y="472.42" transform="matrix(.5 -.86 .86 .5 -348.8 516.1)"
          />
          <rect width="2" height="176.98" x="272.73" y="483" transform="matrix(.5 -.86 .86 .5 -358 521.4)"
          />
          <rect width="2" height="176.98" x="272.73" y="493.57" transform="matrix(.5 -.86 .86 .5 -367 526.6)"
          />
          <rect width="2" height="176.98" x="272.73" y="504.16" transform="matrix(.5 -.86 .86 .5 -376.3 532)"
          />
          <rect width="2" height="176.98" x="272.73" y="514.74" transform="matrix(.5 -.86 .86 .5 -385.4 537.2)"
          />
          <rect width="2" height="176.98" x="272.74" y="525.32" transform="matrix(.5 -.86 .86 .5 -394.6 542.5)"
          />
          <rect width="2" height="176.98" x="272.74" y="535.91" transform="rotate(-59.8 275.6 628)"
          />
          <rect width="2" height="176.98" x="272.73" y="546.48" transform="matrix(.5 -.86 .86 .5 -412.9 553)"
          />
        </g>
        <g fill="#788abf" clipPath="url(#clip-path-8)">
          <rect width="176.98" height="2" x="324.79" y="253.16" transform="rotate(-30.1 413.3 254.2)"
          />
          <rect width="176.98" height="2" x="324.79" y="263.74" transform="rotate(-30.1 413.3 264.7)"
          />
          <rect width="176.98" height="2" x="324.8" y="274.32" transform="rotate(-30.1 413.3 275.3)"
          />
          <rect width="176.98" height="2" x="324.8" y="284.9" transform="rotate(-30.1 413.3 285.9)"
          />
          <rect width="176.98" height="2" x="324.8" y="295.48" transform="rotate(-30.1 413.3 296.5)"
          />
          <rect width="176.98" height="2" x="324.8" y="306.06" transform="rotate(-30.1 413.3 307)"
          />
          <rect width="176.98" height="2" x="324.79" y="316.63" transform="rotate(-30.1 413.3 317.6)"
          />
          <rect width="176.98" height="2" x="324.79" y="327.21" transform="rotate(-30.1 413.3 328.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="337.79" transform="rotate(-30.1 413.3 338.8)"
          />
          <rect width="176.98" height="2" x="324.8" y="348.37" transform="rotate(-30.1 413.3 349.4)"
          />
          <rect width="176.98" height="2" x="324.8" y="358.95" transform="rotate(-30.1 413.3 360)"
          />
          <rect width="176.98" height="2" x="324.8" y="369.53" transform="rotate(-30.1 413.3 370.5)"
          />
          <rect width="176.98" height="2" x="324.8" y="380.12" transform="rotate(-30.1 413.3 381.1)"
          />
          <rect width="176.98" height="2" x="324.8" y="390.7" transform="rotate(-30.1 413.3 391.7)"
          />
          <rect width="176.98" height="2" x="324.79" y="401.27" transform="rotate(-30.1 413.3 402.3)"
          />
          <rect width="176.98" height="2" x="324.79" y="411.85" transform="rotate(-30.1 413.3 412.9)"
          />
          <rect width="176.98" height="2" x="324.79" y="422.43" transform="rotate(-30.1 413.3 423.4)"
          />
          <rect width="176.98" height="2" x="324.79" y="433.01" transform="rotate(-30.1 413.3 434)"
          />
          <rect width="176.98" height="2" x="324.79" y="443.59" transform="rotate(-30.1 413.3 444.6)"
          />
          <rect width="176.98" height="2" x="324.79" y="454.17" transform="rotate(-30.1 413.3 455.2)"
          />
          <rect width="176.98" height="2" x="324.79" y="464.75" transform="rotate(-30.1 413.3 465.7)"
          />
          <rect width="176.98" height="2" x="324.79" y="475.32" transform="rotate(-30.1 413.3 476.3)"
          />
          <rect width="176.98" height="2" x="324.79" y="485.9" transform="rotate(-30.1 413.3 487)"
          />
          <rect width="176.98" height="2" x="324.82" y="496.4" transform="rotate(-30.1 413.3 497.4)"
          />
          <rect width="176.98" height="2" x="324.81" y="507.02" transform="rotate(-30.1 413.3 508)"
          />
          <rect width="176.98" height="2" x="324.81" y="517.59" transform="rotate(-30.1 413.3 518.6)"
          />
          <rect width="176.98" height="2" x="324.81" y="528.17" transform="rotate(-30.1 413.3 529.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="538.76" transform="rotate(-30.1 413.3 539.8)"
          />
          <rect width="176.98" height="2" x="324.8" y="549.33" transform="rotate(-30.1 413.3 550.3)"
          />
          <rect width="176.98" height="2" x="324.8" y="559.91" transform="rotate(-30.1 413.3 561)"
          />
          <rect width="176.98" height="2" x="324.8" y="570.49" transform="rotate(-30.1 413.3 571.5)"
          />
          <rect width="176.98" height="2" x="324.81" y="581.06" transform="rotate(-30.1 413.3 582)"
          />
          <rect width="176.98" height="2" x="324.81" y="591.64" transform="rotate(-30.1 413.3 592.6)"
          />
          <rect width="176.98" height="2" x="324.8" y="602.23" transform="rotate(-30.1 413.3 603.2)"
          />
          <rect width="176.98" height="2" x="324.8" y="612.81" transform="rotate(-30.1 413.3 613.8)"
          />
          <rect width="176.98" height="2" x="324.8" y="623.39" transform="rotate(-30.1 413.3 624.4)"
          />
          <rect width="176.98" height="2" x="324.8" y="633.96" transform="rotate(-30.1 413.3 635)"
          />
        </g>
        <polygon fill="#00adb9" points="247.53 211.56 247.53 138.87 343.51 194.83 343.51 267.52 247.53 211.56"
        />
        <polygon fill="#33bdc7" points="247.53 138.87 343.51 82.97 439.5 138.87 343.51 194.83 247.53 138.87"
        />
        <polygon fill="#576daf" points="439.5 211.56 439.5 138.87 343.51 194.83 343.51 267.52 439.5 211.56"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-9)">
          <rect width="2" height="176.98" x="279.29" y="-35.36" transform="rotate(-59.8 282 53.3)"
          />
          <rect width="2" height="176.98" x="279.29" y="-24.78" transform="rotate(-59.8 282 64)"
          />
          <rect width="2" height="176.98" x="279.29" y="-14.2" transform="rotate(-59.8 282 74.6)"
          />
          <rect width="2" height="176.98" x="279.29" y="-3.62" transform="rotate(-59.8 282 85.3)"
          />
          <rect width="2" height="176.98" x="279.3" y="6.96" transform="matrix(.5 -.86 .86 .5 57 290)"
          />
          <rect width="2" height="176.98" x="279.3" y="17.54" transform="matrix(.5 -.86 .86 .5 47.9 295.2)"
          />
          <rect width="2" height="176.98" x="279.3" y="28.12" transform="matrix(.5 -.86 .86 .5 38.7 300.5)"
          />
          <rect width="2" height="176.98" x="279.29" y="38.69" transform="matrix(.5 -.86 .86 .5 29.6 305.8)"
          />
          <rect width="2" height="176.98" x="279.29" y="49.27" transform="matrix(.5 -.86 .86 .5 20.4 311)"
          />
          <rect width="2" height="176.98" x="279.29" y="59.85" transform="matrix(.5 -.86 .86 .5 11.3 316.3)"
          />
          <rect width="2" height="176.98" x="279.29" y="70.43" transform="matrix(.5 -.86 .86 .5 2.1 321.6)"
          />
          <rect width="2" height="176.98" x="279.29" y="81.01" transform="matrix(.5 -.86 .86 .5 -7 326.8)"
          />
          <rect width="2" height="176.98" x="279.29" y="91.59" transform="rotate(-59.8 282 181)"
          />
          <rect width="2" height="176.98" x="279.3" y="102.17" transform="rotate(-59.8 282 191.7)"
          />
          <rect width="2" height="176.98" x="279.29" y="112.75" transform="rotate(-59.8 282 202.3)"
          />
          <rect width="2" height="176.98" x="279.29" y="123.32" transform="rotate(-59.8 282 213)"
          />
          <rect width="2" height="176.98" x="279.29" y="133.9" transform="rotate(-59.8 282 223.6)"
          />
          <rect width="2" height="176.98" x="279.29" y="144.48" transform="rotate(-59.8 282 234.2)"
          />
          <rect width="2" height="176.98" x="279.29" y="155.06" transform="matrix(.5 -.86 .86 .5 -71 363.7)"
          />
          <rect width="2" height="176.98" x="279.29" y="165.64" transform="matrix(.5 -.86 .86 .5 -80.2 369)"
          />
          <rect width="2" height="176.98" x="279.3" y="176.23" transform="rotate(-59.8 282 266.2)"
          />
          <rect width="2" height="176.98" x="279.3" y="186.8" transform="rotate(-59.8 282 276.8)"
          />
          <rect width="2" height="176.98" x="279.29" y="197.37" transform="rotate(-59.8 282 287.4)"
          />
          <rect width="2" height="176.98" x="279.29" y="207.95" transform="rotate(-59.8 282 298)"
          />
          <rect width="2" height="176.98" x="279.29" y="218.53" transform="matrix(.5 -.86 .86 .5 -126 395.3)"
          />
          <rect width="2" height="176.98" x="279.29" y="229.11" transform="rotate(-59.8 282 319.4)"
          />
          <rect width="2" height="176.98" x="279.29" y="239.69" transform="rotate(-59.8 282 330)"
          />
          <rect width="2" height="176.98" x="279.3" y="250.28" transform="rotate(-59.8 282 340.7)"
          />
          <rect width="2" height="176.98" x="279.3" y="260.86" transform="rotate(-59.8 282 351.3)"
          />
          <rect width="2" height="176.98" x="279.29" y="271.42" transform="rotate(-59.8 282 362)"
          />
          <rect width="2" height="176.98" x="279.29" y="282" transform="matrix(.5 -.86 .86 .5 -180.8 427)"
          />
          <rect width="2" height="176.98" x="279.29" y="292.58" transform="matrix(.5 -.86 .86 .5 -190 432.2)"
          />
          <rect width="2" height="176.98" x="279.29" y="303.16" transform="matrix(.5 -.86 .86 .5 -199.1 437.5)"
          />
          <rect width="2" height="176.98" x="279.29" y="313.75" transform="matrix(.5 -.86 .86 .5 -208.3 442.8)"
          />
          <rect width="2" height="176.98" x="279.29" y="324.33" transform="matrix(.5 -.86 .86 .5 -217.4 448)"
          />
          <rect width="2" height="176.98" x="279.29" y="334.9" transform="matrix(.5 -.86 .86 .5 -226.6 453.3)"
          />
          <rect width="2" height="176.98" x="279.29" y="345.47" transform="matrix(.5 -.86 .86 .5 -235.7 458.6)"
          />
        </g>
        <g fill="#788abf" clipPath="url(#clip-path-10)">
          <rect width="176.98" height="2" x="318.06" y="157.68" transform="rotate(-30.1 406.5 158.7)"
          />
          <rect width="176.98" height="2" x="318.06" y="168.26" transform="rotate(-30.1 406.5 169.3)"
          />
          <rect width="176.98" height="2" x="318.05" y="178.84" transform="rotate(-30.1 406.5 179.8)"
          />
          <rect width="176.98" height="2" x="318.05" y="189.42" transform="rotate(-30.1 406.5 190.4)"
          />
          <rect width="176.98" height="2" x="318.05" y="199.99" transform="rotate(-30.1 406.5 201)"
          />
          <rect width="176.98" height="2" x="318.05" y="210.57" transform="rotate(-30.1 406.5 211.6)"
          />
          <rect width="176.98" height="2" x="318.05" y="221.15" transform="rotate(-30.1 406.5 222.1)"
          />
          <rect width="176.98" height="2" x="318.05" y="231.73" transform="rotate(-30.1 406.5 232.7)"
          />
          <rect width="176.98" height="2" x="318.05" y="242.31" transform="rotate(-30.1 406.5 243.3)"
          />
          <rect width="176.98" height="2" x="318.05" y="252.89" transform="rotate(-30.1 406.5 253.9)"
          />
          <rect width="176.98" height="2" x="318.05" y="263.47" transform="rotate(-30.1 406.5 264.5)"
          />
          <rect width="176.98" height="2" x="318.05" y="274.05" transform="rotate(-30.1 406.5 275)"
          />
          <rect width="176.98" height="2" x="318.05" y="284.63" transform="rotate(-30.1 406.5 285.6)"
          />
          <rect width="176.98" height="2" x="318.05" y="295.21" transform="rotate(-30.1 406.5 296.2)"
          />
          <rect width="176.98" height="2" x="318.05" y="305.78" transform="rotate(-30.1 406.5 306.8)"
          />
          <rect width="176.98" height="2" x="318.05" y="316.36" transform="rotate(-30.1 406.5 317.4)"
          />
          <rect width="176.98" height="2" x="318.05" y="326.94" transform="rotate(-30.1 406.5 328)"
          />
          <rect width="176.98" height="2" x="318.04" y="337.52" transform="rotate(-30.1 406.5 338.5)"
          />
          <rect width="176.98" height="2" x="318.04" y="348.1" transform="rotate(-30.1 406.5 349.1)"
          />
          <rect width="176.98" height="2" x="318.04" y="358.67" transform="rotate(-30.1 406.5 359.7)"
          />
          <rect width="176.98" height="2" x="318.04" y="369.25" transform="rotate(-30.1 406.5 370.3)"
          />
          <rect width="176.98" height="2" x="318.04" y="379.83" transform="rotate(-30.1 406.5 380.8)"
          />
          <rect width="176.98" height="2" x="318.04" y="390.41" transform="rotate(-30.1 406.5 391.4)"
          />
          <rect width="176.98" height="2" x="318.04" y="400.99" transform="rotate(-30.1 406.5 402)"
          />
          <rect width="176.98" height="2" x="318.04" y="411.57" transform="rotate(-30.1 406.5 412.6)"
          />
          <rect width="176.98" height="2" x="318.04" y="422.15" transform="rotate(-30.1 406.5 423.2)"
          />
          <rect width="176.98" height="2" x="318.04" y="432.73" transform="rotate(-30.1 406.5 433.7)"
          />
          <rect width="176.98" height="2" x="318.04" y="443.31" transform="rotate(-30.1 406.5 444.3)"
          />
          <rect width="176.98" height="2" x="318.04" y="453.89" transform="rotate(-30.1 406.5 454.9)"
          />
          <rect width="176.98" height="2" x="318.04" y="464.47" transform="rotate(-30.1 406.5 465.5)"
          />
          <rect width="176.98" height="2" x="318.04" y="475.05" transform="rotate(-30.1 406.5 476)"
          />
          <rect width="176.98" height="2" x="318.03" y="485.63" transform="rotate(-30.1 406.5 486.6)"
          />
          <rect width="176.98" height="2" x="318.06" y="496.13" transform="rotate(-30.1 406.5 497.1)"
          />
          <rect width="176.98" height="2" x="318.05" y="506.74" transform="rotate(-30.1 406.6 507.7)"
          />
          <rect width="176.98" height="2" x="318.05" y="517.32" transform="rotate(-30.1 406.5 518.3)"
          />
          <rect width="176.98" height="2" x="318.05" y="527.9" transform="rotate(-30.1 406.5 529)"
          />
          <rect width="176.98" height="2" x="318.06" y="538.47" transform="rotate(-30.1 406.5 539.5)"
          />
        </g>
        <polygon fill="#576daf" points="343.51 430.09 343.51 400.62 451.08 337.99 451.08 369.73 343.51 430.09"
        />
        <polygon fill="#00adb9" points="1666.04 187.42 1666.04 582.81 1750.47 632.03 1750.47 236.64 1666.04 187.42"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-11)">
          <rect width="2" height="126.11" x="1705.86" y="147.94" transform="rotate(-59.9 1706.9 211)"
          />
          <rect width="2" height="126.11" x="1705.85" y="158.51" transform="rotate(-59.9 1706.8 221.6)"
          />
          <rect width="2" height="126.11" x="1705.85" y="169.1" transform="rotate(-59.9 1706.8 232.2)"
          />
          <rect width="2" height="126.11" x="1705.86" y="179.68" transform="rotate(-59.9 1706.9 242.7)"
          />
          <rect width="2" height="126.11" x="1705.86" y="190.26" transform="rotate(-59.9 1706.9 253.3)"
          />
          <rect width="2" height="126.11" x="1705.86" y="200.83" transform="rotate(-59.9 1706.9 263.9)"
          />
          <rect width="2" height="126.11" x="1705.86" y="211.41" transform="rotate(-59.9 1706.9 274.5)"
          />
          <rect width="2" height="126.11" x="1705.86" y="222" transform="rotate(-59.9 1706.9 285)"
          />
          <rect width="2" height="126.11" x="1705.85" y="232.57" transform="rotate(-59.9 1706.8 295.6)"
          />
          <rect width="2" height="126.11" x="1705.85" y="243.15" transform="rotate(-59.9 1706.8 306.2)"
          />
          <rect width="2" height="126.11" x="1705.85" y="253.73" transform="rotate(-59.9 1706.8 316.8)"
          />
          <rect width="2" height="126.11" x="1705.86" y="264.31" transform="rotate(-59.9 1706.9 327.4)"
          />
          <rect width="2" height="126.11" x="1705.85" y="274.88" transform="rotate(-59.9 1706.8 338)"
          />
          <rect width="2" height="126.11" x="1705.84" y="285.47" transform="rotate(-59.9 1706.8 348.5)"
          />
          <rect width="2" height="126.11" x="1705.85" y="296.05" transform="rotate(-59.9 1706.9 359.1)"
          />
          <rect width="2" height="126.11" x="1705.85" y="306.63" transform="rotate(-59.9 1706.9 369.7)"
          />
          <rect width="2" height="126.11" x="1705.84" y="317.21" transform="rotate(-59.9 1706.8 380.3)"
          />
          <rect width="2" height="126.11" x="1705.84" y="327.79" transform="rotate(-59.9 1706.8 390.8)"
          />
          <rect width="2" height="126.11" x="1705.84" y="338.36" transform="rotate(-59.9 1706.8 401.4)"
          />
          <rect width="2" height="126.11" x="1705.85" y="348.95" transform="rotate(-59.9 1706.9 412)"
          />
          <rect width="2" height="126.11" x="1705.85" y="359.53" transform="rotate(-59.9 1706.9 422.6)"
          />
          <rect width="2" height="126.11" x="1705.85" y="370.11" transform="rotate(-59.9 1706.9 433.2)"
          />
          <rect width="2" height="126.11" x="1705.85" y="380.68" transform="rotate(-59.9 1706.9 443.7)"
          />
          <rect width="2" height="126.11" x="1705.84" y="391.26" transform="rotate(-59.9 1706.8 454.3)"
          />
          <rect width="2" height="126.11" x="1705.84" y="401.84" transform="rotate(-59.9 1706.8 464.9)"
          />
          <rect width="2" height="126.11" x="1705.84" y="412.41" transform="rotate(-59.9 1706.8 475.5)"
          />
          <rect width="2" height="126.11" x="1705.84" y="423" transform="rotate(-59.9 1706.8 486)"
          />
          <rect width="2" height="126.11" x="1705.84" y="433.58" transform="rotate(-59.9 1706.8 496.6)"
          />
          <rect width="2" height="126.11" x="1705.84" y="444.15" transform="rotate(-59.9 1706.8 507.2)"
          />
          <rect width="2" height="126.11" x="1705.84" y="454.73" transform="rotate(-59.9 1706.8 517.8)"
          />
          <rect width="2" height="126.11" x="1705.84" y="465.31" transform="rotate(-59.9 1706.8 528.4)"
          />
          <rect width="2" height="126.11" x="1705.84" y="475.89" transform="rotate(-59.9 1706.8 539)"
          />
          <rect width="2" height="126.11" x="1705.83" y="486.47" transform="rotate(-59.9 1706.8 549.5)"
          />
          <rect width="2" height="126.11" x="1705.84" y="497.05" transform="rotate(-59.9 1706.8 560.1)"
          />
          <rect width="2" height="126.11" x="1705.83" y="507.63" transform="rotate(-59.9 1706.8 570.7)"
          />
          <rect width="2" height="126.11" x="1705.85" y="518.22" transform="rotate(-59.9 1706.9 581.3)"
          />
          <rect width="2" height="126.11" x="1705.84" y="528.8" transform="rotate(-59.9 1706.8 591.8)"
          />
        </g>
        <polygon fill="#576daf" points="1750.47 236.64 1750.47 632.03 1834.89 582.81 1834.89 187.42 1750.47 236.64"
        />
        <g fill="#788abf" clipPath="url(#clip-path-12)">
          <rect width="126.11" height="2" x="1731.16" y="210.03" transform="rotate(-30.1 1794.2 211)"
          />
          <rect width="126.11" height="2" x="1731.16" y="220.6" transform="rotate(-30.1 1794.2 221.6)"
          />
          <rect width="126.11" height="2" x="1731.16" y="231.18" transform="rotate(-30.1 1794.2 232.2)"
          />
          <rect width="126.11" height="2" x="1731.16" y="241.76" transform="rotate(-30.1 1794.2 242.8)"
          />
          <rect width="126.11" height="2" x="1731.16" y="252.34" transform="rotate(-30.1 1794.2 253.3)"
          />
          <rect width="126.11" height="2" x="1731.16" y="262.92" transform="rotate(-30.1 1794.2 264)"
          />
          <rect width="126.11" height="2" x="1731.16" y="273.5" transform="rotate(-30.1 1794.2 274.5)"
          />
          <rect width="126.11" height="2" x="1731.16" y="284.08" transform="rotate(-30.1 1794.2 285)"
          />
          <rect width="126.11" height="2" x="1731.16" y="294.66" transform="rotate(-30.1 1794.2 295.7)"
          />
          <rect width="126.11" height="2" x="1731.16" y="305.24" transform="rotate(-30.1 1794.2 306.2)"
          />
          <rect width="126.11" height="2" x="1731.16" y="315.82" transform="rotate(-30.1 1794.2 316.8)"
          />
          <rect width="126.11" height="2" x="1731.16" y="326.4" transform="rotate(-30.1 1794.2 327.4)"
          />
          <rect width="126.11" height="2" x="1731.17" y="336.98" transform="rotate(-30.1 1794.2 338)"
          />
          <rect width="126.11" height="2" x="1731.15" y="347.55" transform="rotate(-30.1 1794.2 348.5)"
          />
          <rect width="126.11" height="2" x="1731.15" y="358.13" transform="rotate(-30.1 1794.2 359.1)"
          />
          <rect width="126.11" height="2" x="1731.15" y="368.71" transform="rotate(-30.1 1794.2 369.7)"
          />
          <rect width="126.11" height="2" x="1731.15" y="379.29" transform="rotate(-30.1 1794.2 380.3)"
          />
          <rect width="126.11" height="2" x="1731.15" y="389.87" transform="rotate(-30.1 1794.2 390.9)"
          />
          <rect width="126.11" height="2" x="1731.15" y="400.45" transform="rotate(-30.1 1794.2 401.5)"
          />
          <rect width="126.11" height="2" x="1731.16" y="411.03" transform="rotate(-30.1 1794.2 412)"
          />
          <rect width="126.11" height="2" x="1731.16" y="421.61" transform="rotate(-30.1 1794.2 422.6)"
          />
          <rect width="126.11" height="2" x="1731.15" y="432.19" transform="rotate(-30.1 1794.2 433.2)"
          />
          <rect width="126.11" height="2" x="1731.15" y="442.77" transform="rotate(-30.1 1794.2 443.8)"
          />
          <rect width="126.11" height="2" x="1731.15" y="453.35" transform="rotate(-30.1 1794.2 454.4)"
          />
          <rect width="126.11" height="2" x="1731.15" y="463.93" transform="rotate(-30.1 1794.2 465)"
          />
          <rect width="126.11" height="2" x="1731.16" y="474.51" transform="rotate(-30.1 1794.2 475.5)"
          />
          <rect width="126.11" height="2" x="1731.16" y="485.09" transform="rotate(-30.1 1794.2 486)"
          />
          <rect width="126.11" height="2" x="1731.16" y="495.67" transform="rotate(-30.1 1794.2 496.7)"
          />
          <rect width="126.11" height="2" x="1731.14" y="506.23" transform="rotate(-30.1 1794.2 507.2)"
          />
          <rect width="126.11" height="2" x="1731.11" y="516.69" transform="rotate(-30.1 1794.2 517.7)"
          />
          <rect width="126.11" height="2" x="1731.11" y="527.27" transform="rotate(-30.1 1794.2 528.3)"
          />
          <rect width="126.11" height="2" x="1731.12" y="537.85" transform="rotate(-30.1 1794.2 538.9)"
          />
          <rect width="126.11" height="2" x="1731.12" y="548.43" transform="rotate(-30.1 1794.2 549.4)"
          />
          <rect width="126.11" height="2" x="1731.12" y="559" transform="rotate(-30.1 1794.2 560)"
          />
          <rect width="126.11" height="2" x="1731.12" y="569.59" transform="rotate(-30.1 1794.2 570.6)"
          />
          <rect width="126.11" height="2" x="1731.11" y="580.16" transform="rotate(-30.1 1794.2 581.2)"
          />
          <rect width="126.11" height="2" x="1731.11" y="590.74" transform="rotate(-30.1 1794.2 591.7)"
          />
        </g>
        <polygon fill="#33bdc7" points="1666.04 187.42 1750.47 138.25 1834.89 187.42 1750.47 236.64 1666.04 187.42"
        />
        <polygon fill="#00adb9" points="1716.33 187.65 1716.33 103.23 1750.47 123.13 1750.47 207.55 1716.33 187.65"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-13)">
          <rect width="1.99" height="65.96" x="1727.68" y="88" transform="rotate(-59.8 1728.6 121)"
          />
          <rect width="1.99" height="65.96" x="1727.64" y="98.54" transform="rotate(-59.8 1728.5 131.6)"
          />
          <rect width="1.99" height="65.96" x="1727.6" y="109.08" transform="rotate(-59.8 1728.5 142.1)"
          />
          <rect width="1.99" height="65.96" x="1727.56" y="119.62" transform="rotate(-59.8 1728.4 152.6)"
          />
          <rect width="1.99" height="65.96" x="1727.51" y="130.16" transform="rotate(-59.8 1728.4 163.2)"
          />
          <rect width="1.99" height="65.96" x="1727.48" y="140.71" transform="rotate(-59.8 1728.4 173.7)"
          />
          <rect width="1.99" height="65.96" x="1727.43" y="151.24" transform="rotate(-59.8 1728.3 184.3)"
          />
          <rect width="1.99" height="65.96" x="1727.39" y="161.78" transform="rotate(-59.8 1728.3 194.8)"
          />
          <rect width="1.99" height="65.96" x="1727.35" y="172.32" transform="rotate(-59.8 1728.2 205.3)"
          />
        </g>
        <polygon fill="#33bdc7" points="1716.33 103.23 1750.47 83.35 1784.61 103.23 1750.47 123.13 1716.33 103.23"
        />
        <polygon fill="#576daf" points="1784.61 187.65 1784.61 103.23 1750.47 123.13 1750.47 207.55 1784.61 187.65"
        />
        <g fill="#788abf" clipPath="url(#clip-path-14)">
          <rect width="66.31" height="2" x="1734.35" y="112.13" transform="rotate(-30.3 1767.5 113.1)"
          />
          <rect width="66.31" height="2" x="1734.35" y="122.72" transform="rotate(-30.3 1767.5 123.7)"
          />
          <rect width="66.31" height="2" x="1734.36" y="133.3" transform="rotate(-30.3 1767.5 134.3)"
          />
          <rect width="66.31" height="2" x="1734.36" y="143.88" transform="rotate(-30.3 1767.5 144.9)"
          />
          <rect width="66.31" height="2" x="1734.36" y="154.46" transform="rotate(-30.3 1767.5 155.5)"
          />
          <rect width="66.31" height="2" x="1734.36" y="165.04" transform="rotate(-30.3 1767.5 166)"
          />
          <rect width="66.31" height="2" x="1734.36" y="175.61" transform="rotate(-30.3 1767.5 176.6)"
          />
          <rect width="66.31" height="2" x="1734.36" y="186.18" transform="rotate(-30.3 1767.5 187.2)"
          />
          <rect width="66.31" height="2" x="1734.36" y="196.76" transform="rotate(-30.3 1767.5 197.8)"
          />
        </g>
        <polygon fill="#576daf" points="1750.47 107.94 1750.47 0 1764.09 100 1750.47 107.94"
        />
        <polygon fill="#00adb9" points="1750.47 107.94 1750.47 0 1736.85 100 1750.47 107.94"
        />
        <polygon fill="#00adb9" points="1644.03 455 1644.03 920.76 1779.11 999.75 1779.11 462.38 1644.03 455"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-15)">
          <rect width="2" height="601.66" x="1778.11" y="422.3" />
          <rect width="2" height="601.66" x="1768.73" y="417.56" />
          <rect width="2" height="601.66" x="1759.35" y="412.81" />
          <rect width="2" height="601.66" x="1749.97" y="408.06" />
          <rect width="2" height="601.66" x="1740.59" y="403.32" />
          <rect width="2" height="601.66" x="1731.21" y="398.57" />
          <rect width="2" height="601.66" x="1721.83" y="393.82" />
          <rect width="2" height="601.66" x="1712.44" y="389.08" />
          <rect width="2" height="601.66" x="1703.06" y="384.33" />
          <rect width="2" height="601.66" x="1693.68" y="379.58" />
        </g>
        <polygon fill="#33bdc7" points="1728.45 405.74 1644.03 455 1779.11 462.38 1863.54 413.12 1728.45 405.74"
        />
        <polygon fill="#576daf" points="1863.54 413.16 1863.54 950.53 1779.11 999.75 1779.11 462.38 1863.54 413.16"
        />
        <g fill="#788abf" clipPath="url(#clip-path-16)">
          <rect width="2" height="601.66" x="1778.11" y="438.42" />
          <rect width="2" height="601.66" x="1787.49" y="433.67" />
          <rect width="2" height="601.66" x="1796.87" y="428.92" />
          <rect width="2" height="601.66" x="1806.25" y="424.18" />
          <rect width="2" height="601.66" x="1815.63" y="419.43" />
          <rect width="2" height="601.66" x="1825.01" y="414.68" />
          <rect width="2" height="601.66" x="1834.39" y="409.94" />
          <rect width="2" height="601.66" x="1843.77" y="405.19" />
          <rect width="2" height="601.66" x="1853.15" y="400.44" />
          <rect width="2" height="601.66" x="1862.53" y="395.7" />
        </g>
        <polygon fill="#00adb9" points="1427.37 497.65 1427.37 893.04 1511.8 942.26 1511.8 546.87 1427.37 497.65"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-17)">
          <rect width="2" height="126.11" x="1463.04" y="456.27" transform="rotate(-59.9 1464 519.3)"
          />
          <rect width="2" height="126.11" x="1463.04" y="466.85" transform="rotate(-59.9 1464 529.9)"
          />
          <rect width="2" height="126.11" x="1463.05" y="477.43" transform="rotate(-59.9 1464 540.5)"
          />
          <rect width="2" height="126.11" x="1463.04" y="488.01" transform="rotate(-59.9 1464 551)"
          />
          <rect width="2" height="126.11" x="1463.05" y="498.59" transform="rotate(-59.9 1464 561.7)"
          />
          <rect width="2" height="126.11" x="1463.05" y="509.18" transform="rotate(-59.9 1464 572.2)"
          />
          <rect width="1.99" height="125.45" x="1457.16" y="525.88" transform="rotate(-59.8 1458 588.6)"
          />
          <rect width="2" height="126.11" x="1463.04" y="530.33" transform="rotate(-59.9 1464 593.4)"
          />
          <rect width="1.99" height="125.45" x="1457.06" y="547" transform="rotate(-59.8 1458 609.7)"
          />
          <rect width="2" height="126.11" x="1463.05" y="551.49" transform="rotate(-59.9 1464 614.5)"
          />
          <rect width="1.99" height="125.45" x="1456.96" y="568.11" transform="rotate(-59.8 1457.8 630.8)"
          />
          <rect width="2" height="126.11" x="1463.05" y="572.65" transform="rotate(-59.9 1464 635.7)"
          />
          <rect width="2" height="126.11" x="1463.05" y="583.23" transform="rotate(-59.9 1464 646.3)"
          />
          <rect width="2" height="126.11" x="1463.04" y="593.8" transform="rotate(-59.9 1464 656.9)"
          />
          <rect width="2" height="126.11" x="1463.04" y="604.38" transform="rotate(-59.9 1464 667.4)"
          />
          <rect width="1.99" height="125.45" x="1456.7" y="620.89" transform="rotate(-59.8 1457.6 683.6)"
          />
          <rect width="2" height="126.11" x="1463.04" y="625.54" transform="rotate(-59.9 1464 688.6)"
          />
          <rect width="1.99" height="125.45" x="1456.6" y="642.01" transform="rotate(-59.8 1457.5 704.7)"
          />
          <rect width="2" height="126.11" x="1463.04" y="646.7" transform="rotate(-59.9 1464 709.8)"
          />
          <rect width="1.99" height="125.45" x="1456.5" y="663.12" transform="rotate(-59.8 1457.4 725.9)"
          />
          <rect width="2" height="126.11" x="1463.04" y="667.86" transform="rotate(-59.9 1464 731)"
          />
          <rect width="1.99" height="125.45" x="1456.39" y="684.24" transform="rotate(-59.8 1457.3 747)"
          />
          <rect width="2" height="126.11" x="1463.03" y="689.01" transform="rotate(-59.9 1464 752)"
          />
          <rect width="1.99" height="125.45" x="1456.29" y="705.35" transform="rotate(-59.8 1457.2 768)"
          />
          <rect width="2" height="126.11" x="1463.03" y="710.18" transform="rotate(-59.9 1464 773.2)"
          />
          <rect width="2" height="126.11" x="1463.03" y="720.76" transform="rotate(-59.9 1464 783.8)"
          />
          <rect width="2" height="126.11" x="1463.04" y="731.33" transform="rotate(-59.9 1464 794.4)"
          />
          <rect width="2" height="126.11" x="1463.04" y="741.91" transform="rotate(-59.9 1464 805)"
          />
          <rect width="2" height="126.11" x="1463.03" y="752.49" transform="rotate(-59.9 1464 815.5)"
          />
          <rect width="2" height="126.11" x="1463.03" y="763.07" transform="rotate(-59.9 1464 826.1)"
          />
          <rect width="1.99" height="125.45" x="1455.94" y="779.25" transform="rotate(-59.8 1456.8 842)"
          />
          <rect width="2" height="126.11" x="1463.03" y="784.23" transform="rotate(-59.9 1464 847.3)"
          />
          <rect width="1.99" height="125.45" x="1455.83" y="800.36" transform="rotate(-59.8 1456.7 863)"
          />
          <rect width="2" height="126.11" x="1463.03" y="805.39" transform="rotate(-59.9 1464 868.4)"
          />
          <rect width="1.99" height="125.45" x="1455.73" y="821.48" transform="rotate(-59.8 1456.6 884.2)"
          />
          <rect width="2" height="126.11" x="1463.04" y="826.55" transform="rotate(-59.9 1464 889.6)"
          />
          <rect width="1.99" height="125.45" x="1455.62" y="842.59" transform="rotate(-59.8 1456.5 905.3)"
          />
        </g>
        <polygon fill="#33bdc7" points="1427.37 497.65 1600.92 396.36 1685.34 445.53 1511.8 546.87 1427.37 497.65"
        />
        <polygon fill="#00adb9" points="1635.97 474.36 1635.97 383.86 1551.54 334.69 1551.57 425.16 1635.97 474.36"
        />
        <polygon fill="#33bdc7" points="1635.97 383.86 1685.34 355.03 1600.92 305.86 1551.57 334.66 1635.97 383.86"
        />
        <polygon fill="#576daf" points="1635.97 383.86 1635.97 474.36 1511.8 546.87 1511.8 942.26 1685.34 840.91 1685.34 488.23 1685.34 355.03 1635.97 383.86"
        />
        <g fill="#788abf" clipPath="url(#clip-path-18)">
          <rect width="2" height="601.66" x="1511.01" y="433.74" />
          <rect width="2" height="601.66" x="1520.39" y="428.99" />
          <rect width="2" height="601.66" x="1529.77" y="424.25" />
          <rect width="2" height="601.66" x="1539.15" y="419.5" />
          <rect width="2" height="601.66" x="1548.53" y="414.75" />
          <rect width="2" height="601.66" x="1557.91" y="410.01" />
          <rect width="2" height="601.66" x="1567.29" y="405.26" />
          <rect width="2" height="601.66" x="1576.67" y="400.51" />
          <rect width="2" height="601.66" x="1586.05" y="395.77" />
          <rect width="2" height="601.66" x="1595.43" y="386.31" />
          <rect width="2" height="601.66" x="1604.82" y="376.85" />
          <rect width="2" height="601.66" x="1614.2" y="367.39" />
          <rect width="2" height="601.66" x="1623.58" y="357.93" />
          <rect width="2" height="601.66" x="1632.96" y="348.47" />
          <rect width="2" height="601.66" x="1642.34" y="339.01" />
          <rect width="2" height="601.66" x="1651.72" y="329.55" />
          <rect width="2" height="601.66" x="1661.1" y="320.09" />
          <rect width="2" height="601.66" x="1670.48" y="310.63" />
          <rect width="2" height="601.66" x="1679.86" y="301.17" />
        </g>
        <polygon fill="#00adb9" points="1581.62 587.54 1581.62 982.93 1666.04 1032.15 1666.04 636.76 1581.62 587.54"
        />
        <polygon fill="#576daf" points="1666.04 636.76 1666.04 1032.15 1750.47 982.93 1750.47 587.54 1666.04 636.76"
        />
        <polygon fill="#33bdc7" points="1581.62 587.54 1666.04 538.37 1750.47 587.54 1666.04 636.76 1581.62 587.54"
        />
        <polygon fill="#00adb9" points="1614.24 587.55 1614.24 530.5 1666.04 560.69 1666.04 617.75 1614.24 587.55"
        />
        <polygon fill="#33bdc7" points="1614.24 530.5 1666.04 500.33 1717.84 530.5 1666.04 560.69 1614.24 530.5"
        />
        <polygon fill="#576daf" points="1717.84 587.55 1717.84 530.5 1666.04 560.69 1666.04 617.75 1717.84 587.55"
        />
        <g fill="#788abf" clipPath="url(#clip-path-19)">
          <rect width="126.11" height="2" x="1648.51" y="608.34" transform="rotate(-30.1 1711.6 609.3)"
          />
          <rect width="126.11" height="2" x="1648.51" y="618.92" transform="rotate(-30.1 1711.6 620)"
          />
          <rect width="126.11" height="2" x="1648.51" y="629.5" transform="rotate(-30.1 1711.6 630.5)"
          />
          <rect width="126.11" height="2" x="1648.51" y="640.07" transform="rotate(-30.1 1711.6 641)"
          />
          <rect width="126.11" height="2" x="1648.5" y="650.65" transform="rotate(-30.1 1711.6 651.7)"
          />
          <rect width="126.11" height="2" x="1648.51" y="661.24" transform="rotate(-30.1 1711.6 662.2)"
          />
          <rect width="126.11" height="2" x="1648.51" y="671.81" transform="rotate(-30.1 1711.6 672.8)"
          />
          <rect width="126.11" height="2" x="1648.51" y="682.39" transform="rotate(-30.1 1711.6 683.4)"
          />
          <rect width="126.11" height="2" x="1648.51" y="692.97" transform="rotate(-30.1 1711.6 694)"
          />
          <rect width="126.11" height="2" x="1648.51" y="703.54" transform="rotate(-30.1 1711.6 704.5)"
          />
          <rect width="126.11" height="2" x="1648.5" y="714.12" transform="rotate(-30.1 1711.6 715.1)"
          />
          <rect width="126.11" height="2" x="1648.51" y="724.71" transform="rotate(-30.1 1711.6 725.7)"
          />
          <rect width="126.11" height="2" x="1648.51" y="735.29" transform="rotate(-30.1 1711.6 736.3)"
          />
          <rect width="126.11" height="2" x="1648.51" y="745.86" transform="rotate(-30.1 1711.6 746.9)"
          />
          <rect width="126.11" height="2" x="1648.51" y="756.44" transform="rotate(-30.1 1711.6 757.4)"
          />
          <rect width="126.11" height="2" x="1648.51" y="767.01" transform="rotate(-30.1 1711.6 768)"
          />
          <rect width="126.11" height="2" x="1648.5" y="777.59" transform="rotate(-30.1 1711.6 778.6)"
          />
          <rect width="126.11" height="2" x="1648.51" y="788.18" transform="rotate(-30.1 1711.6 789.2)"
          />
          <rect width="126.11" height="2" x="1648.51" y="798.76" transform="rotate(-30.1 1711.6 799.8)"
          />
          <rect width="126.11" height="2" x="1648.51" y="809.34" transform="rotate(-30.1 1711.6 810.3)"
          />
          <rect width="126.11" height="2" x="1648.51" y="819.92" transform="rotate(-30.1 1711.6 821)"
          />
          <rect width="126.11" height="2" x="1648.51" y="830.48" transform="rotate(-30.1 1711.6 831.5)"
          />
          <rect width="126.11" height="2" x="1648.5" y="841.06" transform="rotate(-30.1 1711.6 842)"
          />
          <rect width="126.11" height="2" x="1648.5" y="851.65" transform="rotate(-30.1 1711.6 852.7)"
          />
          <rect width="126.11" height="2" x="1648.51" y="862.23" transform="rotate(-30.1 1711.6 863.2)"
          />
          <rect width="126.11" height="2" x="1648.51" y="872.81" transform="rotate(-30.1 1711.6 873.8)"
          />
          <rect width="126.11" height="2" x="1648.51" y="883.39" transform="rotate(-30.1 1711.6 884.4)"
          />
          <rect width="126.11" height="2" x="1648.51" y="893.96" transform="rotate(-30.1 1711.6 895)"
          />
          <rect width="126.11" height="2" x="1648.5" y="904.53" transform="rotate(-30.1 1711.6 905.5)"
          />
          <rect width="126.11" height="2" x="1648.5" y="915.12" transform="rotate(-30.1 1711.6 916.1)"
          />
          <rect width="126.11" height="2" x="1648.51" y="925.7" transform="rotate(-30.1 1711.6 926.7)"
          />
          <rect width="126.11" height="2" x="1648.51" y="936.28" transform="rotate(-30.1 1711.6 937.3)"
          />
          <rect width="126.11" height="2" x="1648.51" y="946.86" transform="rotate(-30.1 1711.6 947.9)"
          />
          <rect width="126.11" height="2" x="1648.51" y="957.43" transform="rotate(-30.1 1711.6 958.4)"
          />
          <rect width="126.11" height="2" x="1648.51" y="968.01" transform="rotate(-30.1 1711.6 969)"
          />
          <rect width="126.11" height="2" x="1648.51" y="978.59" transform="rotate(-30.1 1711.6 979.6)"
          />
          <rect width="126.11" height="2" x="1648.51" y="989.17" transform="rotate(-30.1 1711.6 990.2)"
          />
        </g>
        <g fill="#33bdc7" clipPath="url(#clip-path-20)">
          <rect width="2" height="126.11" x="1617.37" y="546.31" transform="rotate(-59.9 1618.4 609.4)"
          />
          <rect width="2" height="126.11" x="1617.36" y="556.87" transform="rotate(-59.9 1618.4 620)"
          />
          <rect width="2" height="126.11" x="1617.37" y="567.47" transform="rotate(-59.9 1618.4 630.5)"
          />
          <rect width="2" height="126.11" x="1617.35" y="578.03" transform="rotate(-59.9 1618.4 641)"
          />
          <rect width="2" height="126.11" x="1617.35" y="588.61" transform="rotate(-59.9 1618.3 651.7)"
          />
          <rect width="2" height="126.11" x="1617.36" y="599.19" transform="rotate(-59.9 1618.4 662.2)"
          />
          <rect width="2" height="126.11" x="1617.36" y="609.77" transform="rotate(-59.9 1618.4 672.8)"
          />
          <rect width="2" height="126.11" x="1617.36" y="620.36" transform="rotate(-59.9 1618.4 683.4)"
          />
          <rect width="2" height="126.11" x="1617.35" y="630.93" transform="rotate(-59.9 1618.4 694)"
          />
          <rect width="2" height="126.11" x="1617.36" y="641.52" transform="rotate(-59.9 1618.4 704.6)"
          />
          <rect width="2" height="126.11" x="1617.35" y="652.09" transform="rotate(-59.9 1618.4 715.1)"
          />
          <rect width="2" height="126.11" x="1617.35" y="662.68" transform="rotate(-59.9 1618.4 725.7)"
          />
          <rect width="2" height="126.11" x="1617.34" y="673.25" transform="rotate(-59.9 1618.3 736.3)"
          />
          <rect width="2" height="126.11" x="1617.35" y="683.83" transform="rotate(-59.9 1618.4 746.9)"
          />
          <rect width="2" height="126.11" x="1617.35" y="694.4" transform="rotate(-59.9 1618.4 757.5)"
          />
          <rect width="2" height="126.11" x="1617.36" y="705" transform="rotate(-59.9 1618.4 768)"
          />
          <rect width="2" height="126.11" x="1617.35" y="715.57" transform="rotate(-59.9 1618.4 778.6)"
          />
          <rect width="2" height="126.11" x="1617.35" y="726.15" transform="rotate(-59.9 1618.4 789.2)"
          />
          <rect width="2" height="126.11" x="1617.34" y="736.72" transform="rotate(-59.9 1618.3 799.8)"
          />
          <rect width="2" height="126.11" x="1617.34" y="747.3" transform="rotate(-59.9 1618.3 810.4)"
          />
          <rect width="2" height="126.11" x="1617.35" y="757.89" transform="rotate(-59.9 1618.4 821)"
          />
          <rect width="2" height="126.11" x="1617.35" y="768.47" transform="rotate(-59.9 1618.3 831.5)"
          />
          <rect width="2" height="126.11" x="1617.35" y="779.05" transform="rotate(-59.9 1618.3 842.1)"
          />
          <rect width="2" height="126.11" x="1617.35" y="789.62" transform="rotate(-59.9 1618.4 852.7)"
          />
          <rect width="2" height="126.11" x="1617.36" y="800.21" transform="rotate(-59.9 1618.4 863.3)"
          />
          <rect width="2" height="126.11" x="1617.35" y="810.78" transform="rotate(-59.9 1618.3 873.8)"
          />
          <rect width="2" height="126.11" x="1617.35" y="821.36" transform="rotate(-59.9 1618.4 884.4)"
          />
          <rect width="2" height="126.11" x="1617.34" y="831.93" transform="rotate(-59.9 1618.3 895)"
          />
          <rect width="2" height="126.11" x="1617.35" y="842.53" transform="rotate(-59.9 1618.4 905.6)"
          />
          <rect width="2" height="126.11" x="1617.35" y="853.1" transform="rotate(-59.9 1618.3 916.2)"
          />
          <rect width="2" height="126.11" x="1617.35" y="863.67" transform="rotate(-59.9 1618.3 926.7)"
          />
          <rect width="2" height="126.11" x="1617.35" y="874.25" transform="rotate(-59.9 1618.3 937.3)"
          />
          <rect width="2" height="126.11" x="1617.35" y="884.84" transform="rotate(-59.9 1618.3 947.9)"
          />
          <rect width="2" height="126.11" x="1617.36" y="895.43" transform="rotate(-59.9 1618.4 958.5)"
          />
          <rect width="2" height="126.11" x="1617.34" y="905.99" transform="rotate(-59.9 1618.3 969)"
          />
          <rect width="2" height="126.11" x="1617.35" y="916.58" transform="rotate(-59.9 1618.4 979.6)"
          />
          <rect width="2" height="126.11" x="1617.34" y="927.15" transform="rotate(-59.9 1618.3 990.2)"
          />
        </g>
        <g fill="#788abf" clipPath="url(#clip-path-21)">
          <rect width="126.11" height="2" x="1617.37" y="419.71" transform="rotate(-30.1 1680.4 420.7)"
          />
          <rect width="126.11" height="2" x="1617.37" y="430.29" transform="rotate(-30.1 1680.4 431.3)"
          />
          <rect width="126.11" height="2" x="1617.37" y="440.87" transform="rotate(-30.1 1680.4 441.9)"
          />
          <rect width="126.11" height="2" x="1617.37" y="451.45" transform="rotate(-30.1 1680.4 452.5)"
          />
          <rect width="126.11" height="2" x="1617.37" y="462.03" transform="rotate(-30.1 1680.4 463)"
          />
          <rect width="126.11" height="2" x="1617.37" y="472.61" transform="rotate(-30.1 1680.4 473.6)"
          />
          <rect width="126.11" height="2" x="1617.37" y="483.19" transform="rotate(-30.1 1680.4 484.2)"
          />
          <rect width="126.11" height="2" x="1617.37" y="493.77" transform="rotate(-30.1 1680.4 494.8)"
          />
          <rect width="126.11" height="2" x="1617.37" y="504.35" transform="rotate(-30.1 1680.4 505.3)"
          />
          <rect width="126.11" height="2" x="1617.34" y="514.81" transform="rotate(-30.1 1680.4 515.8)"
          />
          <rect width="126.11" height="2" x="1617.34" y="525.38" transform="rotate(-30.1 1680.4 526.4)"
          />
          <rect width="126.11" height="2" x="1617.34" y="535.95" transform="rotate(-30.1 1680.4 537)"
          />
          <rect width="126.11" height="2" x="1617.33" y="546.53" transform="rotate(-30.1 1680.4 547.5)"
          />
          <rect width="126.11" height="2" x="1617.33" y="557.12" transform="rotate(-30.1 1680.4 558.1)"
          />
          <rect width="126.11" height="2" x="1617.34" y="567.7" transform="rotate(-30.1 1680.4 568.7)"
          />
          <rect width="126.11" height="2" x="1617.34" y="578.28" transform="rotate(-30.1 1680.4 579.3)"
          />
          <rect width="126.11" height="2" x="1617.34" y="588.86" transform="rotate(-30.1 1680.4 589.9)"
          />
          <rect width="126.11" height="2" x="1617.34" y="599.42" transform="rotate(-30.1 1680.4 600.4)"
          />
          <rect width="126.11" height="2" x="1617.33" y="620.59" transform="rotate(-30.1 1680.4 621.6)"
          />
          <rect width="126.11" height="2" x="1617.33" y="631.17" transform="rotate(-30.1 1680.4 632.2)"
          />
          <rect width="126.11" height="2" x="1617.34" y="641.75" transform="rotate(-30.1 1680.4 642.8)"
          />
          <rect width="126.11" height="2" x="1617.34" y="652.33" transform="rotate(-30.1 1680.4 653.3)"
          />
          <rect width="126.11" height="2" x="1617.34" y="662.9" transform="rotate(-30.1 1680.4 663.9)"
          />
          <rect width="126.11" height="2" x="1617.33" y="673.47" transform="rotate(-30.1 1680.4 674.5)"
          />
          <rect width="126.11" height="2" x="1617.33" y="684.06" transform="rotate(-30.1 1680.4 685)"
          />
          <rect width="126.11" height="2" x="1617.33" y="694.64" transform="rotate(-30.1 1680.4 695.6)"
          />
          <rect width="126.11" height="2" x="1617.34" y="705.22" transform="rotate(-30.1 1680.4 706.2)"
          />
          <rect width="126.11" height="2" x="1617.34" y="715.8" transform="rotate(-30.1 1680.4 716.8)"
          />
          <rect width="126.11" height="2" x="1617.34" y="726.37" transform="rotate(-30.1 1680.4 727.4)"
          />
          <rect width="126.11" height="2" x="1617.34" y="736.95" transform="rotate(-30.1 1680.4 738)"
          />
          <rect width="126.11" height="2" x="1617.34" y="747.53" transform="rotate(-30.1 1680.4 748.5)"
          />
          <rect width="126.11" height="2" x="1617.33" y="758.11" transform="rotate(-30.1 1680.4 759.1)"
          />
          <rect width="126.11" height="2" x="1617.34" y="768.69" transform="rotate(-30.1 1680.4 769.7)"
          />
          <rect width="126.11" height="2" x="1617.34" y="779.27" transform="rotate(-30.1 1680.4 780.3)"
          />
          <rect width="126.11" height="2" x="1617.34" y="789.84" transform="rotate(-30.1 1680.4 790.8)"
          />
          <rect width="126.11" height="2" x="1617.34" y="800.42" transform="rotate(-30.1 1680.4 801.4)"
          />
        </g>
        <g fill="#33bdc7" clipPath="url(#clip-path-22)">
          <rect width="2" height="126.11" x="1650.77" y="357.62" transform="rotate(-59.9 1651.8 420.7)"
          />
          <rect width="2" height="126.11" x="1650.77" y="368.22" transform="rotate(-59.9 1651.8 431.3)"
          />
          <rect width="2" height="126.11" x="1650.78" y="378.79" transform="rotate(-59.9 1651.8 441.8)"
          />
          <rect width="2" height="126.11" x="1650.78" y="389.37" transform="rotate(-59.9 1651.8 452.4)"
          />
          <rect width="2" height="126.11" x="1650.78" y="399.95" transform="rotate(-59.9 1651.8 463)"
          />
          <rect width="2" height="126.11" x="1650.77" y="410.53" transform="rotate(-59.9 1651.8 473.6)"
          />
          <rect width="2" height="126.11" x="1650.77" y="421.1" transform="rotate(-59.9 1651.8 484.2)"
          />
          <rect width="2" height="126.11" x="1650.77" y="431.69" transform="rotate(-59.9 1651.8 494.7)"
          />
          <rect width="2" height="126.11" x="1650.77" y="442.27" transform="rotate(-59.9 1651.8 505.3)"
          />
          <rect width="2" height="126.11" x="1650.77" y="452.84" transform="rotate(-59.9 1651.8 515.9)"
          />
          <rect width="2" height="126.11" x="1650.76" y="463.42" transform="rotate(-59.9 1651.8 526.5)"
          />
          <rect width="2" height="126.11" x="1650.76" y="473.99" transform="rotate(-59.9 1651.8 537)"
          />
          <rect width="2" height="126.11" x="1650.76" y="484.58" transform="rotate(-59.9 1651.8 547.6)"
          />
          <rect width="2" height="126.11" x="1650.75" y="495.15" transform="rotate(-59.9 1651.7 558.2)"
          />
          <rect width="2" height="126.11" x="1650.76" y="505.74" transform="rotate(-59.9 1651.8 568.8)"
          />
          <rect width="2" height="126.11" x="1650.76" y="516.32" transform="rotate(-59.9 1651.8 579.4)"
          />
          <rect width="1.99" height="125.45" x="1644.45" y="533.91" transform="rotate(-59.8 1645.3 596.7)"
          />
          <rect width="2" height="126.11" x="1650.76" y="537.47" transform="rotate(-59.9 1651.8 600.5)"
          />
          <rect width="2" height="126.11" x="1650.75" y="558.63" transform="rotate(-59.9 1651.8 621.7)"
          />
          <rect width="2" height="126.11" x="1650.75" y="569.22" transform="rotate(-59.9 1651.8 632.3)"
          />
          <rect width="1.99" height="125.45" x="1644.19" y="586.7" transform="rotate(-59.8 1645 649.4)"
          />
          <rect width="2" height="126.11" x="1650.76" y="590.37" transform="rotate(-59.9 1651.8 653.4)"
          />
          <rect width="1.99" height="125.45" x="1644.09" y="607.82" transform="rotate(-59.8 1645 670.6)"
          />
          <rect width="2" height="126.11" x="1650.76" y="611.54" transform="rotate(-59.9 1651.8 674.6)"
          />
          <rect width="1.99" height="125.45" x="1643.99" y="628.93" transform="rotate(-59.8 1644.9 691.7)"
          />
          <rect width="2" height="126.11" x="1650.76" y="632.69" transform="rotate(-59.9 1651.8 695.7)"
          />
          <rect width="1.99" height="125.45" x="1643.88" y="650.04" transform="rotate(-59.8 1644.8 712.8)"
          />
          <rect width="2" height="126.11" x="1650.75" y="653.85" transform="rotate(-59.9 1651.7 717)"
          />
          <rect width="1.99" height="125.45" x="1643.78" y="671.15" transform="rotate(-59.8 1644.7 733.9)"
          />
          <rect width="2" height="126.11" x="1650.76" y="675" transform="rotate(-59.9 1651.8 738)"
          />
          <rect width="2" height="126.11" x="1650.76" y="685.59" transform="rotate(-59.9 1651.8 748.6)"
          />
          <rect width="2" height="126.11" x="1650.76" y="696.17" transform="rotate(-59.9 1651.8 759.2)"
          />
          <rect width="2" height="126.11" x="1650.76" y="706.74" transform="rotate(-59.9 1651.8 769.8)"
          />
          <rect width="1.99" height="125.45" x="1643.54" y="723.94" transform="rotate(-59.8 1644.4 786.7)"
          />
          <rect width="2" height="126.11" x="1650.75" y="727.9" transform="rotate(-59.9 1651.7 791)"
          />
          <rect width="1.99" height="125.45" x="1643.42" y="745.06" transform="rotate(-59.8 1644.3 807.8)"
          />
        </g>
        <path fill="#f8f4f9" d="M1685.4 852.5A87 87 0 0 1 1642 841l-471.1-271.3 253.3-143L965.9 151a44.2 44.2 0 0 0-44.1-.8L0 661.7v-59.5l896.6-497.4a96.3 96.3 0 0 1 96 1.7L1453 383.2a50.7 50.7 0 0 1-1.2 87.7l-175.8 99.3L1668 795.9a35 35 0 0 0 34.8 0h.1L1920 670.1V730l-191.4 111a87 87 0 0 1-43.2 11.5z"
        />
        <g id="car2" ref={car2}>
          <polygon fill="#00adb9" points="599.43 313.29 588.52 306.59 599.06 305.28 599.43 313.29"
          />
          <polygon fill="#00adb9" points="552.97 340.15 542.06 333.46 552.6 332.15 552.97 340.15"
          />
          <path fill="#576daf" d="M585.3 327.5l-4.1-2.4c-1.4-.8-2.3-2.4-2.3-4.9a16.4 16.4 0 0 1 7.4-12.8c2.1-1.2 4-1.3 5.4-.5l4.4 2.5z"
          />
          <path fill="#42145f" d="M590.7 309.9a16.4 16.4 0 0 0-7.5 12.8c0 4.8 3.4 6.7 7.5 4.3a16.4 16.4 0 0 0 7.4-12.9c0-4.7-3.3-6.6-7.4-4.3z"
          />
          <path fill="#f5f3f7" d="M587.4 325.5a4.3 4.3 0 0 0 2-.7 13.8 13.8 0 0 0 6.2-10.7c0-2.4-1-2.7-1.6-2.7a4.3 4.3 0 0 0-2 .7 13.8 13.8 0 0 0-6.2 10.6c0 2.4 1 2.8 1.6 2.8z"
          />
          <path fill="#33bdc7" d="M488.9 335.7v-8.4s1-7.5 12.9-20.6l18-20.8a40.3 40.3 0 0 1 9.7-8.1l20-10.4a15.2 15.2 0 0 1 14.6.4l29 16.9-74.2 71.1z"
          />
          <path fill="#00adb9" d="M489.8 324.4a14.6 14.6 0 0 0-1 3v8.3l30 20.1 7-6.8z"
          />
          <path fill="#fff" d="M512.8 340.2l4.6 3.1c3.3-.5 9.1-2.5 10.8-5.5l3.2-5.6s-13.7.6-18.6 8zM554.5 303.3l-32-20.2-2.6 2.8a1431 1431 0 0 1-18.1 20.8l36.7 23.6s11.2-27.5 16-27z"
          />
          <path fill="#576daf" d="M538.8 354l-4.1-2.5c-1.4-.7-2.3-2.4-2.3-4.8a16.4 16.4 0 0 1 7.4-12.9c2.1-1.2 4-1.3 5.4-.5l4.4 2.5z"
          />
          <path fill="#42145f" d="M544.2 336.3a16.4 16.4 0 0 0-7.5 12.9c0 4.7 3.4 6.6 7.5 4.3a16.4 16.4 0 0 0 7.5-13c0-4.7-3.4-6.6-7.5-4.2z"
          />
          <path fill="#f5f3f7" d="M540.9 352a4.3 4.3 0 0 0 2-.8 13.8 13.8 0 0 0 6.2-10.6c0-2.4-1-2.8-1.6-2.8a4.3 4.3 0 0 0-2 .7 13.8 13.8 0 0 0-6.2 10.7c0 2.4 1 2.7 1.6 2.7z"
          />
          <path fill="#576daf" d="M556.2 299c-10.5 6.3-28 33.7-35.2 47.7a19.1 19.1 0 0 0-2.1 9.2 11 11 0 0 0 8.7-1l7.9-4.6v-1a17.6 17.6 0 0 1 8-14 8 8 0 0 1 4-1.3c3.1 0 5.3 2.5 5.4 6.3l29-16.8a3 3 0 0 0 0-.7 17.7 17.7 0 0 1 8.1-14 8 8 0 0 1 4-1.2c3 0 5.1 2.3 5.4 5.8l2.7-1.5V294l-5.8-6.6a12.5 12.5 0 0 0-15.4-2.8c-5.4 3-13.3 7.5-24.7 14.4z"
          />
          <path fill="url(#linear-gradient-s-2)" d="M581.8 286.3c-6.7 3.7-15 8.5-24.6 14.3a79.7 79.7 0 0 0-18.3 20.4l-5 7.4 63.6-36.7-2.7-3a10.6 10.6 0 0 0-13-2.4z"
          />
          <path fill="#fff" d="M492.5 326.2s4.5-5 5.7-15.5a50.4 50.4 0 0 0-8.4 13.7z"
          />
          <rect width="1" height="19.37" x="562.4" y="296.73" fill="#576daf" />
          <rect width="1" height="19.51" x="586.2" y="283.11" fill="#576daf" />
        </g>
        <g id="car6" ref={car6} >
          <polygon fill="#00adb9" points="310.76 477.18 299.85 470.48 310.39 469.17 310.76 477.18"
          />
          <polygon fill="#00adb9" points="264.3 504.04 253.39 497.35 263.93 496.04 264.3 504.04"
          />
          <path fill="#576daf" d="M296.6 491.4l-4.1-2.4c-1.4-.8-2.3-2.5-2.3-4.9a16.4 16.4 0 0 1 7.5-12.9c2-1.2 4-1.3 5.3-.5l4.4 2.6z"
          />
          <path fill="#42145f" d="M302 473.7a16.4 16.4 0 0 0-7.4 13c0 4.7 3.3 6.6 7.4 4.2a16.4 16.4 0 0 0 7.5-12.9c0-4.7-3.4-6.6-7.5-4.3z"
          />
          <path fill="#f5f3f7" d="M298.7 489.4a4.3 4.3 0 0 0 2-.7A13.8 13.8 0 0 0 307 478c0-2.4-1-2.8-1.5-2.8a4.3 4.3 0 0 0-2.1.7 13.8 13.8 0 0 0-6.2 10.7c0 2.4 1 2.8 1.6 2.8z"
          />
          <path fill="#33bdc7" d="M200.2 499.6v-8.4s1.1-7.5 13-20.6l18-20.8a40.3 40.3 0 0 1 9.6-8.2l20-10.3a15.1 15.1 0 0 1 14.6.3l29 17-74.2 71.1z"
          />
          <path fill="#00adb9" d="M201.1 488.3a15.4 15.4 0 0 0-.9 3v8.3l30 20.1 6.9-6.8z"
          />
          <path fill="#fff" d="M224.1 504l4.7 3.2c3.2-.5 9-2.5 10.7-5.5l3.2-5.7s-13.7.7-18.6 8zM265.9 467.1l-32-20.1-2.7 2.8a1431 1431 0 0 1-18 20.8l36.6 23.6s11.3-27.5 16-27z"
          />
          <path fill="#576daf" d="M250.2 517.8l-4.2-2.4c-1.4-.8-2.3-2.4-2.3-4.8a16.4 16.4 0 0 1 7.5-13c2-1.1 4-1.2 5.3-.4l4.4 2.5z"
          />
          <path fill="#42145f" d="M255.5 500.2a16.4 16.4 0 0 0-7.4 12.9c0 4.7 3.3 6.6 7.5 4.2a16.4 16.4 0 0 0 7.4-12.8c0-4.8-3.4-6.7-7.5-4.3z"
          />
          <path fill="#f5f3f7" d="M252.2 515.8a4.2 4.2 0 0 0 2-.7 13.8 13.8 0 0 0 6.3-10.6c0-2.4-1-2.8-1.6-2.8a4.3 4.3 0 0 0-2.1.7 13.8 13.8 0 0 0-6.2 10.7c0 2.4 1 2.7 1.6 2.7z"
          />
          <path fill="#576daf" d="M267.5 462.8c-10.4 6.3-28 33.7-35.2 47.8a19.1 19.1 0 0 0-2.1 9.1 11 11 0 0 0 8.8-1l7.8-4.5a9.4 9.4 0 0 1 0-1.1 17.6 17.6 0 0 1 8-14 8 8 0 0 1 4-1.2c3.2 0 5.3 2.5 5.5 6.2l29-16.8v-.6a17.6 17.6 0 0 1 8-14 8 8 0 0 1 4-1.2c3 0 5.2 2.3 5.5 5.8l2.6-1.6V458l-5.7-6.6a12.5 12.5 0 0 0-15.5-2.8c-5.3 3-13.3 7.5-24.7 14.3z"
          />
          <path fill="url(#linear-gradient-s)" d="M293.1 450.2c-6.7 3.7-15 8.5-24.6 14.3a79.7 79.7 0 0 0-18.2 20.4c-1.7 2.3-3.3 4.8-5 7.4l63.5-36.7-2.6-3a10.6 10.6 0 0 0-13.1-2.4z"
          />
          <path fill="#fff" d="M203.8 490.1s4.6-5 5.7-15.5a50.7 50.7 0 0 0-8.4 13.7z"
          />
          <rect width="1" height="19.37" x="273.73" y="460.62" fill="#576daf" />
          <rect width="1" height="19.51" x="297.53" y="447" fill="#576daf" />
        </g>
        <polygon fill="#00adb9" points="38.72 597.02 38.72 992.41 123.15 1041.63 123.15 646.24 38.72 597.02"
        />
        <polygon fill="#576daf" points="123.15 646.24 123.15 1041.63 298.67 942.66 298.67 547.28 123.15 646.24"
        />
        <polygon fill="#33bdc7" points="38.72 597.02 214.25 498.11 298.67 547.28 123.15 646.24 38.72 597.02"
        />
        <g fill="#788abf" clipPath="url(#clip-path-23)">
          <rect width="229.89" height="2" x="99.26" y="592.99" transform="rotate(-29.4 214.2 594)"
          />
          <rect width="229.89" height="2" x="99.26" y="603.56" transform="rotate(-29.4 214.2 604.6)"
          />
          <rect width="229.89" height="2" x="99.26" y="614.15" transform="rotate(-29.4 214.2 615.1)"
          />
          <rect width="229.89" height="2" x="99.25" y="624.71" transform="rotate(-29.4 214.2 625.7)"
          />
          <rect width="229.89" height="2" x="99.25" y="635.29" transform="rotate(-29.4 214.2 636.3)"
          />
          <rect width="229.89" height="2" x="99.25" y="645.88" transform="rotate(-29.4 214.2 646.9)"
          />
          <rect width="229.89" height="2" x="99.25" y="656.45" transform="rotate(-29.4 214.2 657.5)"
          />
          <rect width="229.89" height="2" x="99.25" y="667.04" transform="rotate(-29.4 214.2 668)"
          />
          <rect width="229.89" height="2" x="99.25" y="677.62" transform="rotate(-29.4 214.2 678.6)"
          />
          <rect width="229.89" height="2" x="99.25" y="688.19" transform="rotate(-29.4 214.2 689.2)"
          />
          <rect width="229.89" height="2" x="99.25" y="698.77" transform="rotate(-29.4 214.2 699.8)"
          />
          <rect width="229.89" height="2" x="99.25" y="709.34" transform="rotate(-29.4 214.2 710.3)"
          />
          <rect width="229.89" height="2" x="99.25" y="719.93" transform="rotate(-29.4 214.2 721)"
          />
          <rect width="229.89" height="2" x="99.25" y="730.51" transform="rotate(-29.4 214.2 731.5)"
          />
          <rect width="229.89" height="2" x="99.25" y="741.08" transform="rotate(-29.4 214.2 742)"
          />
          <rect width="229.89" height="2" x="99.25" y="751.67" transform="rotate(-29.4 214.2 752.7)"
          />
          <rect width="229.89" height="2" x="99.25" y="762.25" transform="rotate(-29.4 214.2 763.3)"
          />
          <rect width="229.89" height="2" x="99.25" y="772.83" transform="rotate(-29.4 214.2 773.8)"
          />
          <rect width="229.89" height="2" x="99.24" y="783.4" transform="rotate(-29.4 214.2 784.4)"
          />
          <rect width="229.89" height="2" x="99.24" y="793.97" transform="rotate(-29.4 214.2 795)"
          />
          <rect width="229.89" height="2" x="99.24" y="804.56" transform="rotate(-29.4 214.2 805.6)"
          />
          <rect width="229.89" height="2" x="99.25" y="815.14" transform="rotate(-29.4 214.2 816.1)"
          />
          <rect width="229.89" height="2" x="99.25" y="825.72" transform="rotate(-29.4 214.2 826.7)"
          />
          <rect width="229.89" height="2" x="99.25" y="836.3" transform="rotate(-29.4 214.2 837.3)"
          />
          <rect width="229.89" height="2" x="99.25" y="846.88" transform="rotate(-29.4 214.2 847.9)"
          />
          <rect width="229.89" height="2" x="99.24" y="857.45" transform="rotate(-29.4 214.2 858.5)"
          />
          <rect width="229.89" height="2" x="99.24" y="868.03" transform="rotate(-29.4 214.2 869)"
          />
          <rect width="229.89" height="2" x="99.24" y="878.62" transform="rotate(-29.4 214.2 879.6)"
          />
          <rect width="229.89" height="2" x="99.24" y="889.19" transform="rotate(-29.4 214.2 890.2)"
          />
          <rect width="229.89" height="2" x="99.24" y="899.77" transform="rotate(-29.4 214.2 900.8)"
          />
          <rect width="229.89" height="2" x="99.24" y="910.35" transform="rotate(-29.4 214.2 911.3)"
          />
          <rect width="229.89" height="2" x="99.24" y="920.93" transform="rotate(-29.4 214.2 922)"
          />
          <rect width="229.89" height="2" x="99.24" y="931.52" transform="rotate(-29.4 214.2 932.5)"
          />
          <rect width="229.89" height="2" x="99.24" y="942.08" transform="rotate(-29.4 214.2 943)"
          />
          <rect width="229.89" height="2" x="99.24" y="952.66" transform="rotate(-29.4 214.2 953.7)"
          />
          <rect width="229.89" height="2" x="99.24" y="963.25" transform="rotate(-29.4 214.2 964.2)"
          />
          <rect width="229.89" height="2" x="99.24" y="973.82" transform="rotate(-29.4 214.2 974.8)"
          />
        </g>
        <g fill="#33bdc7" clipPath="url(#clip-path-24)">
          <rect width="2" height="126.11" x="74.38" y="555.71" transform="rotate(-59.9 75.4 618.8)"
          />
          <rect width="2" height="126.11" x="74.38" y="566.3" transform="rotate(-59.9 75.4 629.3)"
          />
          <rect width="2" height="126.11" x="74.37" y="576.87" transform="rotate(-59.9 75.4 640)"
          />
          <rect width="2" height="126.11" x="74.37" y="587.46" transform="rotate(-59.9 75.4 650.5)"
          />
          <rect width="2" height="126.11" x="74.37" y="598.04" transform="rotate(-59.9 75.4 661.1)"
          />
          <rect width="2" height="126.11" x="74.37" y="608.61" transform="rotate(-59.9 75.4 671.7)"
          />
          <rect width="2" height="126.11" x="74.37" y="619.19" transform="rotate(-59.9 75.4 682.2)"
          />
          <rect width="2" height="126.11" x="74.38" y="629.78" transform="rotate(-59.9 75.4 692.8)"
          />
          <rect width="2" height="126.11" x="74.38" y="640.36" transform="rotate(-59.9 75.4 703.4)"
          />
          <rect width="2" height="126.11" x="74.37" y="650.92" transform="rotate(-59.9 75.4 714)"
          />
          <rect width="2" height="126.11" x="74.37" y="661.51" transform="rotate(-59.9 75.4 724.6)"
          />
          <rect width="2" height="126.11" x="74.37" y="672.09" transform="rotate(-59.9 75.4 735.1)"
          />
          <rect width="2" height="126.11" x="74.36" y="682.67" transform="rotate(-59.9 75.4 745.7)"
          />
          <rect width="2" height="126.11" x="74.36" y="693.24" transform="rotate(-59.9 75.4 756.3)"
          />
          <rect width="2" height="126.11" x="74.36" y="703.83" transform="rotate(-59.9 75.4 766.9)"
          />
          <rect width="2" height="126.11" x="74.37" y="714.41" transform="rotate(-59.9 75.4 777.5)"
          />
          <rect width="2" height="126.11" x="74.37" y="724.99" transform="rotate(-59.9 75.4 788)"
          />
          <rect width="2" height="126.11" x="74.36" y="735.57" transform="rotate(-59.9 75.4 798.6)"
          />
          <rect width="2" height="126.11" x="74.36" y="746.14" transform="rotate(-59.9 75.4 809.2)"
          />
          <rect width="2" height="126.11" x="74.36" y="756.72" transform="rotate(-59.9 75.4 819.8)"
          />
          <rect width="2" height="126.11" x="74.36" y="767.31" transform="rotate(-59.9 75.4 830.4)"
          />
          <rect width="2" height="126.11" x="74.36" y="777.89" transform="rotate(-59.9 75.4 841)"
          />
          <rect width="2" height="126.11" x="74.36" y="788.46" transform="rotate(-59.9 75.4 851.5)"
          />
          <rect width="2" height="126.11" x="74.36" y="799.04" transform="rotate(-59.9 75.4 862.1)"
          />
          <rect width="2" height="126.11" x="74.36" y="809.62" transform="rotate(-59.9 75.4 872.7)"
          />
          <rect width="2" height="126.11" x="74.36" y="820.2" transform="rotate(-59.9 75.4 883.3)"
          />
          <rect width="2" height="126.11" x="74.36" y="830.78" transform="rotate(-59.9 75.4 893.8)"
          />
          <rect width="2" height="126.11" x="74.36" y="841.36" transform="rotate(-59.9 75.4 904.4)"
          />
          <rect width="2" height="126.11" x="74.36" y="851.94" transform="rotate(-59.9 75.4 915)"
          />
          <rect width="2" height="126.11" x="74.36" y="862.51" transform="rotate(-59.9 75.4 925.6)"
          />
          <rect width="2" height="126.11" x="74.36" y="873.1" transform="rotate(-59.9 75.4 936.2)"
          />
          <rect width="2" height="126.11" x="74.36" y="883.67" transform="rotate(-59.9 75.4 946.7)"
          />
          <rect width="2" height="126.11" x="74.35" y="894.25" transform="rotate(-59.9 75.3 957.3)"
          />
          <rect width="2" height="126.11" x="74.36" y="904.83" transform="rotate(-59.9 75.4 967.9)"
          />
          <rect width="2" height="126.11" x="74.36" y="915.42" transform="rotate(-59.9 75.4 978.5)"
          />
          <rect width="2" height="126.11" x="74.36" y="925.99" transform="rotate(-59.9 75.4 989)"
          />
          <rect width="2" height="126.11" x="74.36" y="936.57" transform="rotate(-59.9 75.4 999.6)"
          />
        </g>
        <polygon fill="#00adb9" points="71.35 597.03 71.35 539.97 123.15 570.17 123.15 627.23 71.35 597.03"
        />
        <polygon fill="#33bdc7" points="71.35 539.97 161.02 488.62 212.82 518.79 123.15 570.17 71.35 539.97"
        />
        <polygon fill="#576daf" points="212.82 575.85 212.82 518.79 123.15 570.17 123.15 627.23 212.82 575.85"
        />
        <g fill="#788abf" clipPath="url(#clip-path-25)">
          <rect width="126.11" height="2" x="74.43" y="429.1" transform="matrix(.86 -.5 .5 .86 -197.3 127.1)"
          />
          <rect width="126.11" height="2" x="74.43" y="439.68" transform="matrix(.86 -.5 .5 .86 -202.6 128.6)"
          />
          <rect width="126.11" height="2" x="74.43" y="450.26" transform="rotate(-30.1 137.5 451.3)"
          />
          <rect width="126.11" height="2" x="74.43" y="460.84" transform="rotate(-30.1 137.5 461.8)"
          />
          <rect width="126.11" height="2" x="74.43" y="471.42" transform="matrix(.86 -.5 .5 .86 -218.6 132.8)"
          />
          <rect width="126.11" height="2" x="74.43" y="482" transform="matrix(.86 -.5 .5 .86 -223.9 134.3)"
          />
          <rect width="126.11" height="2" x="112.3" y="471.4" transform="matrix(.86 -.5 .5 .86 -213.4 151.8)"
          />
          <rect width="169.5" height="2" x="71.7" y="492.53" transform="rotate(-29.9 156.5 493.5)"
          />
          <rect width="169.5" height="2" x="71.66" y="503.14" transform="matrix(.87 -.5 .5 .87 -230.4 145)"
          />
          <rect width="169.5" height="2" x="71.66" y="513.73" transform="rotate(-29.9 155.9 513)"
          />
          <rect width="169.5" height="2" x="71.67" y="524.31" transform="matrix(.87 -.5 .5 .87 -241 147.8)"
          />
          <rect width="169.5" height="2" x="71.66" y="534.89" transform="rotate(-29.9 156 534.1)"
          />
          <rect width="169.5" height="2" x="71.66" y="545.46" transform="matrix(.87 -.5 .5 .87 -251.5 150.6)"
          />
          <rect width="169.5" height="2" x="71.66" y="556.05" transform="matrix(.87 -.5 .5 .87 -256.8 152)"
          />
          <rect width="169.5" height="2" x="71.66" y="566.62" transform="matrix(.87 -.5 .5 .87 -262 153.4)"
          />
          <rect width="169.5" height="2" x="71.65" y="577.2" transform="matrix(.87 -.5 .5 .87 -267.3 154.8)"
          />
          <rect width="169.5" height="2" x="71.66" y="587.78" transform="rotate(-29.9 156 586.8)"
          />
          <rect width="169.5" height="2" x="71.66" y="598.36" transform="rotate(-29.9 156 597.4)"
          />
          <rect width="169.5" height="2" x="71.65" y="619.52" transform="matrix(.87 -.5 .5 .87 -288.4 160.5)"
          />
          <rect width="169.5" height="2" x="71.66" y="630.1" transform="rotate(-29.9 156 629)"
          />
          <rect width="169.5" height="2" x="71.66" y="640.68" transform="matrix(.87 -.5 .5 .87 -299 163.3)"
          />
          <rect width="169.5" height="2" x="71.66" y="651.25" transform="rotate(-29.9 155.9 650)"
          />
          <rect width="126.11" height="2" x="74.45" y="672.38" transform="rotate(-30.1 137.5 673.4)"
          />
          <rect width="126.11" height="2" x="74.45" y="682.97" transform="rotate(-30.1 137.5 684)"
          />
          <rect width="126.11" height="2" x="74.46" y="693.55" transform="rotate(-30.1 137.5 694.6)"
          />
          <rect width="126.11" height="2" x="74.46" y="704.13" transform="rotate(-30.1 137.5 705.1)"
          />
          <rect width="126.11" height="2" x="74.46" y="714.7" transform="rotate(-30.1 137.5 715.7)"
          />
          <rect width="126.11" height="2" x="74.46" y="725.28" transform="rotate(-30.1 137.5 726.3)"
          />
          <rect width="126.11" height="2" x="74.45" y="735.85" transform="rotate(-30.1 137.5 736.9)"
          />
          <rect width="126.11" height="2" x="74.45" y="746.44" transform="rotate(-30.1 137.5 747.4)"
          />
          <rect width="126.11" height="2" x="74.46" y="757.02" transform="rotate(-30.1 137.5 758)"
          />
          <rect width="126.11" height="2" x="74.46" y="767.6" transform="rotate(-30.1 137.5 768.6)"
          />
          <rect width="126.11" height="2" x="74.46" y="778.17" transform="rotate(-30.1 137.5 779.2)"
          />
          <rect width="126.11" height="2" x="74.46" y="788.75" transform="rotate(-30.1 137.5 789.8)"
          />
          <rect width="126.11" height="2" x="74.45" y="799.33" transform="rotate(-30.1 137.5 800.3)"
          />
          <rect width="126.11" height="2" x="74.45" y="809.91" transform="rotate(-30.1 137.5 811)"
          />
        </g>
        <g fill="#33bdc7" clipPath="url(#clip-path-26)">
          <rect width="2" height="126.11" x="107.78" y="367.07" transform="rotate(-59.9 108.8 430.1)"
          />
          <rect width="2" height="126.11" x="107.78" y="377.65" transform="rotate(-59.9 108.8 440.7)"
          />
          <rect width="2" height="126.11" x="107.78" y="388.22" transform="rotate(-59.9 108.8 451.3)"
          />
          <rect width="2" height="126.11" x="107.77" y="398.8" transform="rotate(-59.9 108.8 461.9)"
          />
          <rect width="2" height="126.11" x="107.78" y="409.38" transform="rotate(-59.9 108.8 472.4)"
          />
          <rect width="2" height="126.11" x="107.78" y="419.96" transform="rotate(-59.9 108.8 483)"
          />
          <rect width="2" height="126.11" x="107.78" y="430.53" transform="rotate(-59.9 108.8 493.6)"
          />
          <rect width="2" height="126.11" x="107.78" y="441.12" transform="rotate(-59.9 108.8 504.2)"
          />
          <rect width="2" height="126.11" x="107.78" y="451.7" transform="rotate(-59.9 108.8 514.8)"
          />
          <rect width="2" height="126.11" x="107.78" y="462.28" transform="rotate(-59.9 108.8 525.3)"
          />
          <rect width="2" height="126.11" x="107.77" y="472.85" transform="rotate(-59.9 108.8 535.9)"
          />
          <rect width="2" height="126.11" x="107.78" y="483.43" transform="rotate(-59.9 108.8 546.5)"
          />
          <rect width="2" height="126.11" x="107.78" y="494.01" transform="rotate(-59.9 108.8 557)"
          />
          <rect width="2" height="126.11" x="107.78" y="504.6" transform="rotate(-59.9 108.8 567.7)"
          />
          <rect width="2" height="126.11" x="107.78" y="515.17" transform="rotate(-59.9 108.8 578.2)"
          />
          <rect width="2" height="126.11" x="107.78" y="525.75" transform="rotate(-59.9 108.8 588.8)"
          />
          <rect width="2" height="126.11" x="107.78" y="536.33" transform="rotate(-59.9 108.8 599.4)"
          />
          <rect width="2" height="126.11" x="107.77" y="546.91" transform="rotate(-59.9 108.8 610)"
          />
          <rect width="2" height="126.11" x="107.77" y="568.07" transform="rotate(-59.9 108.8 631.1)"
          />
          <rect width="2" height="126.11" x="107.77" y="578.65" transform="rotate(-59.9 108.8 641.7)"
          />
          <rect width="2" height="126.11" x="107.78" y="589.23" transform="rotate(-59.9 108.8 652.3)"
          />
          <rect width="2" height="126.11" x="107.78" y="599.81" transform="rotate(-59.9 108.8 662.9)"
          />
          <rect width="2" height="126.11" x="107.78" y="610.38" transform="rotate(-59.9 108.8 673.4)"
          />
          <rect width="2" height="126.11" x="107.78" y="620.97" transform="rotate(-59.9 108.8 684)"
          />
          <rect width="2" height="126.11" x="107.77" y="631.54" transform="rotate(-59.9 108.8 694.6)"
          />
          <rect width="2" height="126.11" x="107.77" y="642.13" transform="rotate(-59.9 108.8 705.2)"
          />
          <rect width="2" height="126.11" x="107.77" y="652.7" transform="rotate(-59.9 108.8 715.8)"
          />
          <rect width="2" height="126.11" x="107.78" y="663.28" transform="rotate(-59.9 108.8 726.3)"
          />
          <rect width="2" height="126.11" x="107.78" y="673.86" transform="rotate(-59.9 108.8 737)"
          />
          <rect width="2" height="126.11" x="107.78" y="684.44" transform="rotate(-59.9 108.8 747.5)"
          />
          <rect width="2" height="126.11" x="107.78" y="695.03" transform="rotate(-59.9 108.8 758)"
          />
          <rect width="2" height="126.11" x="107.77" y="705.6" transform="rotate(-59.9 108.8 768.7)"
          />
          <rect width="2" height="126.11" x="107.77" y="716.18" transform="rotate(-59.9 108.8 779.2)"
          />
          <rect width="2" height="126.11" x="107.77" y="726.75" transform="rotate(-59.9 108.8 789.8)"
          />
          <rect width="2" height="126.11" x="107.77" y="737.34" transform="rotate(-59.9 108.8 800.4)"
          />
          <rect width="2" height="126.11" x="107.78" y="747.92" transform="rotate(-59.9 108.8 811)"
          />
        </g>
        <path fill="#f8f4f9" d="M202.9 856.8a46.7 46.7 0 0 1 .6-81.3l494.5-275 25.3 45.4-494.5 275a5.3 5.3 0 0 0 2-7.2 5.3 5.3 0 0 0-2-2z"
        />
        <g id="car1" ref={car1}>
          <polygon fill="#00adb9" points="947.7 124.92 958.61 118.22 948.07 116.91 947.7 124.92"
          />
          <polygon fill="#00adb9" points="994.16 151.78 1005.07 145.09 994.53 143.77 994.16 151.78"
          />
          <path fill="#576daf" d="M961.8 139l4.2-2.3c1.4-.8 2.2-2.4 2.2-4.8a16.4 16.4 0 0 0-7.4-12.9c-2-1.2-4-1.3-5.3-.5L951 121z"
          />
          <path fill="#42145f" d="M956.5 121.5a16.4 16.4 0 0 1 7.4 12.9c0 4.7-3.4 6.6-7.5 4.2a16.4 16.4 0 0 1-7.4-12.8c0-4.8 3.3-6.7 7.5-4.3z"
          />
          <path fill="#f5f3f7" d="M959.8 137.1a4.3 4.3 0 0 1-2.1-.7 13.8 13.8 0 0 1-6.2-10.6c0-2.4 1-2.8 1.6-2.8a4.3 4.3 0 0 1 2 .7 13.8 13.8 0 0 1 6.3 10.7c0 2.3-1 2.7-1.6 2.7z"
          />
          <path fill="#33bdc7" d="M1058.3 147.3v-8.4s-1.1-7.4-13-20.6l-18-20.7a40.3 40.3 0 0 0-9.7-8.2l-20-10.4a15.1 15.1 0 0 0-14.6.4l-29 17 74.2 71z"
          />
          <path fill="#00adb9" d="M1057.3 136a15.4 15.4 0 0 1 1 3v8.3l-30 20.2-7-6.8z"
          />
          <path fill="#fff" d="M1034.3 151.8l-4.6 3.2c-3.3-.5-9.1-2.6-10.8-5.5l-3.1-5.7s13.6.6 18.5 8zM992.6 114.9l32-20.2 2.7 2.9 18 20.7-36.7 23.6s-11.2-27.5-16-27z"
          />
          <path fill="#576daf" d="M1008.3 165.5l4.1-2.3c1.4-.8 2.3-2.5 2.3-4.9a16.4 16.4 0 0 0-7.4-12.9c-2.1-1.2-4-1.3-5.4-.5l-4.3 2.6z"
          />
          <path fill="#42145f" d="M1003 148a16.4 16.4 0 0 1 7.4 12.8c0 4.7-3.3 6.7-7.4 4.3a16.4 16.4 0 0 1-7.5-12.9c0-4.7 3.3-6.6 7.5-4.3z"
          />
          <path fill="#f5f3f7" d="M1006.3 163.6a4.1 4.1 0 0 1-2.1-.7 13.8 13.8 0 0 1-6.2-10.7c0-2.4 1-2.7 1.6-2.7a4.3 4.3 0 0 1 2 .6 13.8 13.8 0 0 1 6.2 10.7c0 2.4-1 2.8-1.5 2.8z"
          />
          <path fill="#576daf" d="M991 110.6c10.4 6.3 28 33.7 35.2 47.7a19.1 19.1 0 0 1 2.1 9.1 11 11 0 0 1-8.8-1l-7.8-4.5a9.4 9.4 0 0 0 0-1 17.6 17.6 0 0 0-8-14 8 8 0 0 0-4-1.3c-3.2 0-5.3 2.5-5.5 6.2l-29-16.7v-.7a17.6 17.6 0 0 0-8-14 8 8 0 0 0-4-1.2c-3 0-5.2 2.3-5.5 5.8l-2.6-1.5v-17.9l5.7-6.6a12.5 12.5 0 0 1 15.5-2.8 809 809 0 0 1 24.7 14.4z"
          />
          <path fill="url(#linear-gradient-s-6)" d="M965.3 98c6.8 3.6 15 8.5 24.7 14.2a79.6 79.6 0 0 1 18.2 20.4l5 7.4-63.6-36.6 2.6-3.1a10.6 10.6 0 0 1 13.1-2.4z"
          />
          <path fill="#fff" d="M1054.6 137.8s-4.5-5-5.7-15.5a50.7 50.7 0 0 1 8.4 13.8z"
          />
          <rect width="1" height="19.37" x="983.73" y="108.36" fill="#576daf" />
          <rect width="1" height="19.51" x="959.93" y="94.74" fill="#576daf" />
        </g>

        <path fill="#576daf" d="M1112.3 838.4H818c32.1 0 123.4 10 124 102.3-.3 3.7 2 7.4 6.8 10.2a36 36 0 0 0 32.7 0c4.8-2.8 7.1-6.5 6.8-10.2.6-92.4 91.9-102.3 124-102.3z"
        />
        <path fill="#00adb9" d="M968.5 838.4H818c32.1 0 123.4 10 124 102.3-.3 3.7 2 7.4 6.8 10.2a33.6 33.6 0 0 0 16.4 4l3.3-.2z"
        />
        <polygon fill="#33bdc7" points="1315.65 243.07 614.63 243.07 580.26 261.53 1350.03 261.53 1315.65 243.07"
        />
        <rect width="769.77" height="363.65" x="580.26" y="261.53" fill="#00adb9"
        />
        <path fill="#576daf" d="M1143 813c0 26.4-17.1 52.8-51.7 72.9-69.2 40.2-181.8 40.2-251.5 0-34.8-20.1-52.3-46.5-52.5-72.8v-11.6H1143z"
        />
        <path fill="#00adb9" d="M1019.9 801.5H787.3V813c.2 26.3 17.7 52.7 52.5 72.8 48.9 28.2 118.8 36.6 180 25.3z"
        />
        <path fill="#33bdc7" d="M1090.5 728.7c69.6 40.2 70 105.4.8 145.6s-181.8 40.2-251.5 0-70-105.4-.8-145.6 181.8-40.3 251.5 0z"
        />
        <path fill="#00adb9" d="M965.7 893.5c-45.6 0-88.3-10.2-120.4-28.7-30.2-17.5-47-40-47-63.6 0-23.3 16.4-45.7 46.2-63 31.8-18.5 74.5-28.7 120-28.7s88.4 10.2 120.4 28.7c30.3 17.5 47 40 47 63.6 0 23.3-16.4 45.7-46.2 63-31.8 18.5-74.4 28.7-120 28.7z"
        />
        <path fill="#576daf" d="M844.5 749.2c31.9-18.5 74.5-28.7 120-28.7s88.4 10.2 120.4 28.7c28 16.1 44.3 36.6 46.7 58.1a49.4 49.4 0 0 0 .3-5.5c0-23.6-16.7-46.1-47-63.6-32-18.5-74.8-28.7-120.4-28.7s-88.2 10.2-120 28.7c-29.8 17.3-46.2 39.7-46.2 63a51.9 51.9 0 0 0 .3 5.4c2.4-21.3 18.5-41.5 46-57.4z"
        />
        <path fill="url(#linear-gradient-s-3)" d="M1038.3 796c.1 10.8-7 21.7-21.2 30-28.5 16.6-74.9 16.6-103.6 0-14.3-8.3-21.5-19.1-21.6-30v-14h146.4z"
        />
        <path fill="#f8f4f9" d="M987.7 782h-95.8v14c0 10.9 7.3 21.7 21.6 30 20.1 11.6 49 15 74.2 10.4z"
        />
        <path fill="#fff" d="M1016.7 752c28.7 16.6 28.9 43.4.4 60s-74.9 16.6-103.6 0-28.8-43.4-.3-60 74.9-16.5 103.5 0z"
        />
        <path fill="#33bdc7" d="M1112.3 625.2h-294c83.7 0 123.5 58.8 124 151.2-.2 3.6 2 7.4 6.9 10.1a33.2 33.2 0 0 0 16 4h.3a33.4 33.4 0 0 0 16-4c4.9-2.7 7.1-6.5 6.8-10.1.6-92.4 40.4-151.2 124-151.2z"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-27)">
          <rect width="2" height="126.11" x="1592.84" y="295.77" transform="rotate(-59.9 1593.8 358.8)"
          />
          <rect width="2" height="126.11" x="1592.83" y="306.34" transform="rotate(-59.9 1593.8 369.4)"
          />
          <rect width="2" height="126.11" x="1592.84" y="316.92" transform="rotate(-59.9 1593.8 380)"
          />
          <rect width="2" height="126.11" x="1592.84" y="327.5" transform="rotate(-59.9 1593.8 390.6)"
          />
          <rect width="2" height="126.11" x="1592.84" y="338.09" transform="rotate(-59.9 1593.8 401.1)"
          />
          <rect width="2" height="126.11" x="1592.84" y="348.66" transform="rotate(-59.9 1593.8 411.7)"
          />
          <rect width="2" height="126.11" x="1592.84" y="359.24" transform="rotate(-59.9 1593.8 422.3)"
          />
          <rect width="2" height="126.11" x="1592.84" y="369.81" transform="rotate(-59.9 1593.8 432.9)"
          />
          <rect width="2" height="126.11" x="1592.84" y="380.39" transform="rotate(-59.9 1593.8 443.5)"
          />
          <rect width="2" height="126.11" x="1592.83" y="390.97" transform="rotate(-59.9 1593.8 454)"
          />
          <rect width="2" height="126.11" x="1592.83" y="401.55" transform="rotate(-59.9 1593.8 464.6)"
          />
          <rect width="2" height="126.11" x="1592.84" y="412.14" transform="rotate(-59.9 1593.8 475.2)"
          />
          <rect width="2" height="126.11" x="1592.84" y="422.72" transform="rotate(-59.9 1593.8 485.8)"
          />
          <rect width="2" height="126.11" x="1592.84" y="433.29" transform="rotate(-59.9 1593.8 496.3)"
          />
          <rect width="2" height="126.11" x="1592.84" y="443.87" transform="rotate(-59.9 1593.8 507)"
          />
          <rect width="2" height="126.11" x="1592.84" y="454.46" transform="rotate(-59.9 1593.8 517.5)"
          />
          <rect width="2" height="126.11" x="1592.82" y="465.02" transform="rotate(-59.9 1593.8 528)"
          />
          <rect width="2" height="126.11" x="1592.83" y="475.61" transform="rotate(-59.9 1593.8 538.7)"
          />
          <rect width="2" height="126.11" x="1592.83" y="486.18" transform="rotate(-59.9 1593.8 549.2)"
          />
          <rect width="2" height="126.11" x="1592.83" y="496.77" transform="rotate(-59.9 1593.8 559.8)"
          />
          <rect width="2" height="126.11" x="1592.83" y="507.34" transform="rotate(-59.9 1593.8 570.4)"
          />
          <rect width="2" height="126.11" x="1592.84" y="517.94" transform="rotate(-59.9 1593.8 581)"
          />
          <rect width="2" height="126.11" x="1592.84" y="528.51" transform="rotate(-59.9 1593.8 591.6)"
          />
          <rect width="2" height="126.11" x="1592.84" y="539.09" transform="rotate(-59.9 1593.8 602.1)"
          />
          <rect width="2" height="126.11" x="1592.83" y="549.66" transform="rotate(-59.9 1593.8 612.7)"
          />
          <rect width="2" height="126.11" x="1592.83" y="560.24" transform="rotate(-59.9 1593.8 623.3)"
          />
          <rect width="2" height="126.11" x="1592.83" y="570.82" transform="rotate(-59.9 1593.8 633.9)"
          />
          <rect width="2" height="126.11" x="1592.83" y="581.4" transform="rotate(-59.9 1593.8 644.5)"
          />
          <rect width="2" height="126.11" x="1592.84" y="591.99" transform="rotate(-59.9 1593.8 655)"
          />
          <rect width="2" height="126.11" x="1592.83" y="602.56" transform="rotate(-59.9 1593.8 665.6)"
          />
          <rect width="2" height="126.11" x="1592.84" y="613.15" transform="rotate(-59.9 1593.8 676.2)"
          />
          <rect width="2" height="126.11" x="1592.83" y="623.72" transform="rotate(-59.9 1593.8 686.8)"
          />
          <rect width="2" height="126.11" x="1592.83" y="634.3" transform="rotate(-59.9 1593.8 697.4)"
          />
          <rect width="2" height="126.11" x="1592.83" y="644.87" transform="rotate(-59.9 1593.8 708)"
          />
          <rect width="2" height="126.11" x="1592.84" y="655.47" transform="rotate(-59.9 1593.8 718.5)"
          />
          <rect width="2" height="126.11" x="1592.83" y="666.04" transform="rotate(-59.9 1593.8 729.1)"
          />
          <rect width="2" height="126.11" x="1592.84" y="676.62" transform="rotate(-59.9 1593.8 739.7)"
          />
        </g>
        <polygon fill="#f8f4f9" points="933.89 1080 458.24 804.49 484.3 759.5 1038.36 1080.42 933.89 1080"
        />
        <path fill="#00adb9" d="M516.6 935c.1 10.8-7 21.7-21.2 30-28.5 16.6-74.9 16.6-103.6 0-14.3-8.3-21.5-19.1-21.6-30V505h146.4z"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-28)">
          <path d="M443.7 978.4a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 967.6a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 956.8a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.6 106.6 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 946a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.6 106.6 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 935.1a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106 106 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 924.3a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 31a106.4 106.4 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 913.5a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 902.7c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 891.9a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 881a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 870.3a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 859.4c-19 0-37.9-4.1-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.3 106.3 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 848.6a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 837.8a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 31a106.4 106.4 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 827a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 816.2c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 805.4a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 794.6a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 783.8a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 742.8c-19 0-37.9-4.1-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 732a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.1h2c0 11-8.3 22.3-22.8 30.8a106.2 106.2 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 721.2a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a107 107 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 710.4a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.8 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 699.6c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 688.8a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 678a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.4 74.4 16.4 102.6 0 13.9-8.1 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.8a107 107 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 667.1a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.2 106.2 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 656.3c-19 0-37.9-4.1-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8.1 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 645.5a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 634.7a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.6 106.6 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 623.9a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.8 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 613c-19 0-37.9-4-52.4-12.4-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 602.3c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 591.5a107 107 0 0 1-52.4-12.6c-14.7-8.4-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.6 106.6 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 580.6a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 569.8c-19 0-37.9-4.1-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 559c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.1 106.1 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 548.2a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a107 107 0 0 1-52.2 12.5z"
          />
        </g>
        <g id="car7" ref={car7}>
          <polygon fill="#576daf" points="533.88 836.52 544.79 829.83 534.25 828.52 533.88 836.52"
          />
          <polygon fill="#576daf" points="580.34 863.39 591.25 856.69 580.71 855.38 580.34 863.39"
          />
          <path fill="#00adb9" d="M548 850.7l4.1-2.4c1.4-.8 2.3-2.4 2.3-4.8a16.4 16.4 0 0 0-7.4-13c-2-1.1-4-1.2-5.3-.4l-4.4 2.5z"
          />
          <path fill="#42145f" d="M542.6 833a16.4 16.4 0 0 1 7.5 13c0 4.7-3.4 6.7-7.5 4.3a16.4 16.4 0 0 1-7.4-13c0-4.7 3.3-6.6 7.4-4.2z"
          />
          <path fill="#f5f3f7" d="M546 848.7a4.2 4.2 0 0 1-2.1-.7 13.8 13.8 0 0 1-6.2-10.6c0-2.4 1-2.8 1.6-2.8a4.2 4.2 0 0 1 2 .7 13.8 13.8 0 0 1 6.2 10.7c0 2.4-1 2.7-1.6 2.7z"
          />
          <path fill="#788abf" d="M644.4 858.9v-8.4s-1-7.4-12.9-20.6l-18-20.7a40.8 40.8 0 0 0-9.7-8.2l-20-10.4a15.1 15.1 0 0 0-14.6.4l-29 17 74.2 71z"
          />
          <path fill="#576daf" d="M643.5 847.7a15.4 15.4 0 0 1 1 2.9v8.3l-30 20.2-7-6.8z"
          />
          <path fill="#fff" d="M620.5 863.4l-4.6 3.2c-3.3-.5-9.1-2.6-10.8-5.5l-3.2-5.7s13.7.6 18.6 8z"
          />
          <path fill="url(#linear-gradient-s-7)" d="M578.8 826.5l32-20.1 2.7 2.8 18 20.7-36.6 23.6s-11.3-27.4-16.1-27z"
          />
          <path fill="#00adb9" d="M594.5 877.1l4.1-2.3c1.4-.8 2.3-2.5 2.3-4.9a16.4 16.4 0 0 0-7.4-12.9c-2.1-1.2-4-1.3-5.4-.5l-4.4 2.5z"
          />
          <path fill="#42145f" d="M589.1 859.5a16.4 16.4 0 0 1 7.5 13c0 4.7-3.4 6.6-7.5 4.2a16.4 16.4 0 0 1-7.5-12.9c0-4.7 3.4-6.6 7.5-4.3z"
          />
          <path fill="#f5f3f7" d="M592.4 875.2a4.2 4.2 0 0 1-2-.7 13.8 13.8 0 0 1-6.2-10.7c0-2.4 1-2.7 1.6-2.7a4.2 4.2 0 0 1 2 .7 13.8 13.8 0 0 1 6.2 10.6c0 2.4-1 2.8-1.6 2.8z"
          />
          <path fill="#00adb9" d="M577.1 822.2c10.5 6.3 28 33.7 35.2 47.7a19 19 0 0 1 2.1 9.1 11 11 0 0 1-8.7-1l-7.9-4.5a9.4 9.4 0 0 0 .1-1 17.6 17.6 0 0 0-8.1-14 8.2 8.2 0 0 0-4-1.3c-3.1 0-5.3 2.5-5.4 6.2l-29-16.7v-.7a17.6 17.6 0 0 0-8.1-14 8.2 8.2 0 0 0-4-1.2c-3 0-5.1 2.3-5.4 5.8l-2.7-1.6v-17.8l5.8-6.6a12.5 12.5 0 0 1 15.4-2.7c5.4 2.9 13.3 7.4 24.7 14.3z"
          />
          <path fill="url(#linear-gradient-s-8)" d="M551.5 809.5c6.7 3.7 15 8.6 24.6 14.3a79.6 79.6 0 0 1 18.3 20.4 439 439 0 0 1 5 7.4L535.7 815l2.7-3a10.6 10.6 0 0 1 13.1-2.4z"
          />
          <path fill="#fff" d="M640.8 849.5s-4.5-5-5.7-15.6a50.7 50.7 0 0 1 8.4 13.8z"
          />
          <rect width="1" height="19.37" x="569.91" y="819.97" fill="#00adb9" />
          <rect width="1" height="19.51" x="546.11" y="806.35" fill="#00adb9" />
        </g>
        <path fill="#576daf" d="M418.7 974.9c25.9 5.4 56 2.1 76.7-10 14.2-8.2 21.3-19 21.3-30V505h-98z"
        />
        <path fill="#33bdc7" d="M495 475c28.7 16.6 28.8 43.4.3 60s-74.8 16.6-103.5 0-28.8-43.4-.3-60 74.9-16.6 103.5 0z"
        />
        <path fill="#00adb9" d="M500 500.3c0 8.3-5.4 16.7-16.4 23.1a88 88 0 0 1-80 0c-11-6.4-16.6-14.8-16.7-23.1v-67.4H500z"
        />
        <path fill="#576daf" d="M433 532.4c17.8 2 36.8-1 50.5-9 11-6.4 16.5-14.8 16.5-23.1v-67.4h-67z"
        />
        <path fill="#33bdc7" d="M483.3 409.7c22.1 12.8 22.2 33.6.2 46.3s-57.8 12.8-79.9 0-22.3-33.5-.3-46.3 57.8-12.7 80 0z"
        />
        <g fill="#788abf" clipPath="url(#clip-path-29)">
          <path d="M443.7 978.4a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 967.6a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 956.8a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.6 106.6 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 946a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.6 106.6 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 935.1a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106 106 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 924.3a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 31a106.4 106.4 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 913.5a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 902.7c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 891.9a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 881a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 870.3a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 859.4c-19 0-37.9-4.1-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.3 106.3 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 848.6a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.3 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 837.8a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 31a106.4 106.4 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 827a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 816.2c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 805.4a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 794.6a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 783.8a107 107 0 0 1-52.4-12.6c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 742.8a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29 28.4 16.5 74.4 16.5 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11.1-8.3 22.4-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 732a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.3 106.3 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 721.2c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.7 106.7 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 710.4a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 699.6a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 688.8a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 678c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.8 106.8 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 667.1a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.2 106.2 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 656.3a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8.1 21.9-18.7 21.8-29.1h2c0 11.2-8.3 22.4-22.8 30.9a106.7 106.7 0 0 1-52.2 12.4z"
          />
          <path d="M443.7 645.5a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.4 74.4 16.4 102.6 0 13.9-8.1 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 634.7c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 623.9a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 613a107 107 0 0 1-52.4-12.4c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.6 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 602.3a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.8-23.2-30.9h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29h2c0 11-8.3 22.3-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 591.5c-19 0-37.9-4.2-52.4-12.6-14.7-8.4-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.9a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 580.6a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.8a106.4 106.4 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 569.8a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.8h2c0 10.4 8.2 21 22.2 29.1 28.4 16.4 74.4 16.4 102.6 0 13.9-8 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.4-22.8 30.8a106.5 106.5 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 559a107 107 0 0 1-52.4-12.5c-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.2h2c0 11.2-8.3 22.4-22.8 30.9a106.2 106.2 0 0 1-52.2 12.5z"
          />
          <path d="M443.7 548.2c-19 0-37.9-4.2-52.4-12.5-14.7-8.5-23.1-19.7-23.2-30.9h2c0 10.4 8.2 21 22.2 29.2 28.4 16.3 74.4 16.3 102.6 0 13.9-8.1 21.9-18.7 21.8-29.1h2c0 11.1-8.3 22.3-22.8 30.8a106.9 106.9 0 0 1-52.2 12.5z"
          />
        </g>
        <g fill="#788abf" clipPath="url(#clip-path-30)">
          <path d="M443.6 534a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.7 82.7 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 525.5a82.8 82.8 0 0 1-40.5-9.6c-11.5-6.7-18.2-15.5-18.2-24h2c0 7.8 6.3 16 17.2 22.2a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.2h2c0 8.5-6.6 17.3-18 24a82.3 82.3 0 0 1-40.5 9.6z"
          />
          <path d="M443.6 517.1a82.7 82.7 0 0 1-40.5-9.7c-11.5-6.6-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.3 82.3 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 508.7a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 500.3a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.8 6.3 16 17.2 22.3a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 491.9a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.8 6.3 16 17.2 22.3a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.5 17-22.3h2c0 8.6-6.6 17.3-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 483.4a82.8 82.8 0 0 1-40.5-9.6c-11.5-6.7-18.2-15.5-18.2-24h2c0 7.8 6.3 16 17.2 22.2a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.4 17-22.2h2c0 8.5-6.6 17.3-18 24a82.4 82.4 0 0 1-40.5 9.6z"
          />
          <path d="M443.6 475a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82 82 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 466.6a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
        </g>
        <g fill="#33bdc7" clipPath="url(#clip-path-31)">
          <path d="M443.6 534a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.7 82.7 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 525.5a82.8 82.8 0 0 1-40.5-9.6c-11.5-6.7-18.2-15.5-18.2-24h2c0 7.8 6.3 16 17.2 22.2a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.2h2c0 8.5-6.6 17.3-18 24a82.3 82.3 0 0 1-40.5 9.6z"
          />
          <path d="M443.6 517.1a82.7 82.7 0 0 1-40.5-9.7c-11.5-6.6-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.3 82.3 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 508.7a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 500.3a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.8 6.3 16 17.2 22.3a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 491.9a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.8 6.3 16 17.2 22.3a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.5 17-22.3h2c0 8.6-6.6 17.3-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 483.4a82.8 82.8 0 0 1-40.5-9.6c-11.5-6.7-18.2-15.5-18.2-24h2c0 7.8 6.3 16 17.2 22.2a87.1 87.1 0 0 0 79 0c10.8-6.3 17-14.4 17-22.2h2c0 8.5-6.6 17.3-18 24a82.4 82.4 0 0 1-40.5 9.6z"
          />
          <path d="M443.6 475a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82 82 0 0 1-40.5 9.7z"
          />
          <path d="M443.6 466.6a82.8 82.8 0 0 1-40.5-9.7c-11.5-6.7-18.2-15.4-18.2-24h2c0 7.9 6.3 16 17.2 22.3a87 87 0 0 0 79 0c10.8-6.3 17-14.4 17-22.3h2c0 8.6-6.6 17.4-18 24a82.4 82.4 0 0 1-40.5 9.7z"
          />
        </g>
        <polygon fill="#00adb9" points="237.18 582.06 237.18 977.45 321.61 1026.67 321.61 631.28 237.18 582.06"
        />
        <g fill="#33bdc7" clipPath="url(#clip-path-32)">
          <rect width="2" height="126.11" x="276.89" y="542.55" transform="rotate(-59.9 277.9 605.6)"
          />
          <rect width="1.99" height="125.45" x="273.36" y="553.49" transform="rotate(-59.8 274.3 616.2)"
          />
          <rect width="2" height="126.11" x="276.89" y="563.7" transform="rotate(-59.9 277.9 626.8)"
          />
          <rect width="2" height="126.11" x="276.89" y="574.28" transform="rotate(-59.9 277.9 637.3)"
          />
          <rect width="2" height="126.11" x="276.89" y="584.86" transform="rotate(-59.9 277.9 648)"
          />
          <rect width="2" height="126.11" x="276.89" y="595.45" transform="rotate(-59.9 277.9 658.5)"
          />
          <rect width="2" height="126.11" x="276.89" y="606.02" transform="rotate(-59.9 277.9 669)"
          />
          <rect width="2" height="126.11" x="276.89" y="616.6" transform="rotate(-59.9 277.9 679.7)"
          />
          <rect width="1.99" height="125.45" x="272.99" y="627.39" transform="rotate(-59.8 274 690)"
          />
          <rect width="2" height="126.11" x="276.89" y="637.76" transform="rotate(-59.9 277.9 700.8)"
          />
          <rect width="1.99" height="125.45" x="272.89" y="648.5" transform="rotate(-59.8 273.9 711.2)"
          />
          <rect width="2" height="126.11" x="276.89" y="658.92" transform="rotate(-59.9 277.9 722)"
          />
          <rect width="1.99" height="125.45" x="272.79" y="669.62" transform="rotate(-59.8 273.7 732.3)"
          />
          <rect width="2" height="126.11" x="276.89" y="680.08" transform="rotate(-59.9 277.9 743.1)"
          />
          <rect width="1.99" height="125.45" x="272.69" y="690.73" transform="rotate(-59.8 273.6 753.4)"
          />
          <rect width="2" height="126.11" x="276.89" y="701.24" transform="rotate(-59.9 277.9 764.3)"
          />
          <rect width="1.99" height="125.45" x="272.58" y="711.85" transform="rotate(-59.8 273.5 774.5)"
          />
          <rect width="2" height="126.11" x="276.89" y="722.4" transform="rotate(-59.9 277.9 785.4)"
          />
          <rect width="2" height="126.11" x="276.89" y="732.98" transform="rotate(-59.9 277.9 796)"
          />
          <rect width="2" height="126.11" x="276.89" y="743.55" transform="rotate(-59.9 277.9 806.6)"
          />
          <rect width="2" height="126.11" x="276.89" y="754.13" transform="rotate(-59.9 277.9 817.2)"
          />
          <rect width="1.99" height="125.45" x="272.33" y="764.63" transform="rotate(-59.8 273.3 827.3)"
          />
          <rect width="2" height="126.11" x="276.89" y="775.3" transform="rotate(-59.9 277.9 838.4)"
          />
          <rect width="1.99" height="125.45" x="272.23" y="785.75" transform="rotate(-59.8 273.2 848.4)"
          />
          <rect width="2" height="126.11" x="276.88" y="796.45" transform="rotate(-59.9 277.9 859.5)"
          />
          <rect width="1.99" height="125.45" x="272.12" y="806.85" transform="rotate(-59.8 273 869.5)"
          />
          <rect width="2" height="126.11" x="276.89" y="817.61" transform="rotate(-59.9 277.9 880.7)"
          />
          <rect width="1.99" height="125.45" x="272.02" y="827.97" transform="rotate(-59.8 273 890.7)"
          />
          <rect width="2" height="126.11" x="276.89" y="838.77" transform="rotate(-59.9 277.9 901.8)"
          />
          <rect width="1.99" height="125.45" x="271.92" y="849.08" transform="rotate(-59.8 272.9 911.8)"
          />
          <rect width="2" height="126.11" x="276.88" y="859.93" transform="rotate(-59.9 277.9 923)"
          />
          <rect width="2" height="126.11" x="276.88" y="870.5" transform="rotate(-59.9 277.9 933.6)"
          />
          <rect width="2" height="126.11" x="276.87" y="881.08" transform="rotate(-59.9 277.9 944.1)"
          />
          <rect width="2" height="126.11" x="276.87" y="891.66" transform="rotate(-59.9 277.9 954.7)"
          />
          <rect width="1.99" height="125.45" x="271.66" y="901.87" transform="rotate(-59.8 272.6 964.6)"
          />
          <rect width="2" height="126.11" x="276.88" y="912.82" transform="rotate(-59.9 277.9 975.9)"
          />
          <rect width="1.99" height="125.45" x="271.56" y="922.99" transform="rotate(-59.8 272.5 985.7)"
          />
        </g>
        <polygon fill="#576daf" points="321.61 631.28 321.61 1026.67 406.03 977.45 406.03 582.06 321.61 631.28"
        />
        <g fill="#788abf" clipPath="url(#clip-path-33)">
          <rect width="126.11" height="2" x="302.26" y="604.56" transform="rotate(-30.1 365.3 605.6)"
          />
          <rect width="126.11" height="2" x="302.26" y="615.14" transform="rotate(-30.1 365.3 616.1)"
          />
          <rect width="126.11" height="2" x="302.26" y="625.72" transform="rotate(-30.1 365.3 626.7)"
          />
          <rect width="126.11" height="2" x="302.26" y="636.3" transform="rotate(-30.1 365.3 637.3)"
          />
          <rect width="126.11" height="2" x="302.27" y="646.88" transform="rotate(-30.1 365.3 647.9)"
          />
          <rect width="126.11" height="2" x="302.27" y="657.45" transform="rotate(-30.1 365.3 658.4)"
          />
          <rect width="126.11" height="2" x="302.26" y="668.03" transform="rotate(-30.1 365.3 669)"
          />
          <rect width="126.11" height="2" x="302.26" y="678.61" transform="rotate(-30.1 365.3 679.6)"
          />
          <rect width="126.11" height="2" x="302.26" y="689.19" transform="rotate(-30.1 365.3 690.2)"
          />
          <rect width="126.11" height="2" x="302.26" y="699.77" transform="rotate(-30.1 365.3 700.8)"
          />
          <rect width="126.11" height="2" x="302.27" y="710.35" transform="rotate(-30.1 365.3 711.4)"
          />
          <rect width="126.11" height="2" x="302.27" y="720.92" transform="rotate(-30.1 365.3 722)"
          />
          <rect width="126.11" height="2" x="302.27" y="731.5" transform="rotate(-30.1 365.3 732.5)"
          />
          <rect width="126.11" height="2" x="302.27" y="742.09" transform="rotate(-30.1 365.3 743)"
          />
          <rect width="126.11" height="2" x="302.26" y="752.66" transform="rotate(-30.1 365.3 753.7)"
          />
          <rect width="126.11" height="2" x="302.26" y="763.24" transform="rotate(-30.1 365.3 764.2)"
          />
          <rect width="126.11" height="2" x="302.27" y="773.82" transform="rotate(-30.1 365.3 774.8)"
          />
          <rect width="126.11" height="2" x="302.27" y="784.39" transform="rotate(-30.1 365.3 785.4)"
          />
          <rect width="126.11" height="2" x="302.27" y="794.97" transform="rotate(-30.1 365.3 796)"
          />
          <rect width="126.11" height="2" x="302.27" y="805.56" transform="rotate(-30.1 365.3 806.6)"
          />
          <rect width="126.11" height="2" x="302.27" y="816.14" transform="rotate(-30.1 365.3 817.1)"
          />
          <rect width="126.11" height="2" x="302.26" y="826.72" transform="rotate(-30.1 365.3 827.7)"
          />
          <rect width="126.11" height="2" x="302.26" y="837.29" transform="rotate(-30.1 365.3 838.3)"
          />
          <rect width="126.11" height="2" x="302.27" y="847.86" transform="rotate(-30.1 365.3 848.9)"
          />
          <rect width="126.11" height="2" x="302.27" y="858.44" transform="rotate(-30.1 365.3 859.4)"
          />
          <rect width="126.11" height="2" x="302.27" y="869.03" transform="rotate(-30.1 365.3 870)"
          />
          <rect width="126.11" height="2" x="302.27" y="879.61" transform="rotate(-30.1 365.3 880.6)"
          />
          <rect width="126.11" height="2" x="302.26" y="890.19" transform="rotate(-30.1 365.3 891.2)"
          />
          <rect width="126.11" height="2" x="302.26" y="900.77" transform="rotate(-30.1 365.3 901.8)"
          />
          <rect width="126.11" height="2" x="302.27" y="911.33" transform="rotate(-30.1 365.3 912.3)"
          />
          <rect width="126.11" height="2" x="302.27" y="921.91" transform="rotate(-30.1 365.3 923)"
          />
          <rect width="126.11" height="2" x="302.27" y="932.5" transform="rotate(-30.1 365.3 933.5)"
          />
          <rect width="126.11" height="2" x="302.27" y="943.08" transform="rotate(-30.1 365.3 944)"
          />
          <rect width="126.11" height="2" x="302.26" y="953.66" transform="rotate(-30.1 365.3 954.7)"
          />
          <rect width="126.11" height="2" x="302.26" y="964.24" transform="rotate(-30.1 365.3 965.2)"
          />
          <rect width="126.11" height="2" x="302.27" y="974.81" transform="rotate(-30.1 365.3 975.8)"
          />
          <rect width="126.11" height="2" x="302.27" y="985.38" transform="rotate(-30.1 365.3 986.4)"
          />
        </g>
        <polygon fill="#33bdc7" points="237.18 582.06 321.61 532.89 406.03 582.06 321.61 631.28 237.18 582.06"
        />
        <polygon fill="#00adb9" points="277.8 594.25 277.8 529.67 321.61 555.21 321.61 619.79 277.8 594.25"
        />
        <polygon fill="#33bdc7" points="277.8 529.65 321.61 504.14 365.42 529.65 321.61 555.2 277.8 529.65"
        />
        <polygon fill="#576daf" points="365.42 594.25 365.42 529.67 321.61 555.21 321.61 619.79 365.42 594.25"
        />
        <g fill="#788abf" clipPath="url(#clip-path-34)">
          <rect width="126.11" height="2" x="270.86" y="368.43" transform="rotate(-30.1 334 369.4)"
          />
          <rect width="126.11" height="2" x="270.86" y="379.01" transform="rotate(-30.1 334 380)"
          />
          <rect width="126.11" height="2" x="270.86" y="389.59" transform="rotate(-30.1 334 390.6)"
          />
          <rect width="126.11" height="2" x="270.86" y="400.17" transform="rotate(-30.1 334 401.2)"
          />
          <rect width="126.11" height="2" x="270.86" y="410.75" transform="rotate(-30.1 333.9 411.8)"
          />
          <rect width="126.11" height="2" x="270.86" y="421.33" transform="rotate(-30.1 334 422.3)"
          />
          <rect width="126.11" height="2" x="270.86" y="431.91" transform="rotate(-30.1 334 433)"
          />
          <rect width="126.11" height="2" x="270.86" y="442.49" transform="rotate(-30.1 334 443.5)"
          />
          <rect width="126.11" height="2" x="270.86" y="453.07" transform="rotate(-30.1 334 454)"
          />
          <rect width="126.11" height="2" x="270.86" y="463.65" transform="rotate(-30.1 334 464.6)"
          />
          <rect width="126.11" height="2" x="270.86" y="474.23" transform="rotate(-30.1 334 475.2)"
          />
          <rect width="126.11" height="2" x="270.86" y="484.8" transform="rotate(-30.1 334 485.8)"
          />
          <rect width="126.11" height="2" x="270.86" y="495.38" transform="rotate(-30.1 334 496.4)"
          />
          <rect width="126.11" height="2" x="270.85" y="505.96" transform="rotate(-30.1 333.9 507)"
          />
          <rect width="126.11" height="2" x="270.87" y="516.5" transform="rotate(-30.1 334 517.5)"
          />
          <rect width="126.11" height="2" x="270.87" y="527.08" transform="rotate(-30.1 334 528)"
          />
          <rect width="126.11" height="2" x="270.88" y="537.66" transform="rotate(-30.1 334 538.7)"
          />
          <rect width="126.11" height="2" x="270.88" y="548.24" transform="rotate(-30.1 334 549.2)"
          />
          <rect width="126.11" height="2" x="270.87" y="558.8" transform="rotate(-30.1 334 559.8)"
          />
          <rect width="126.11" height="2" x="270.87" y="569.39" transform="rotate(-30.1 334 570.4)"
          />
          <rect width="126.11" height="2" x="270.87" y="579.97" transform="rotate(-30.1 334 581)"
          />
          <rect width="126.11" height="2" x="270.87" y="590.55" transform="rotate(-30.1 334 591.6)"
          />
          <rect width="126.11" height="2" x="270.88" y="601.13" transform="rotate(-30.1 334 602.1)"
          />
          <rect width="126.11" height="2" x="270.88" y="611.71" transform="rotate(-30.1 334 612.7)"
          />
          <rect width="126.11" height="2" x="270.88" y="622.28" transform="rotate(-30.1 334 623.3)"
          />
          <rect width="126.11" height="2" x="270.87" y="632.86" transform="rotate(-30.1 334 633.9)"
          />
          <rect width="126.11" height="2" x="270.87" y="643.44" transform="rotate(-30.1 334 644.4)"
          />
          <rect width="126.11" height="2" x="270.87" y="654.02" transform="rotate(-30.1 334 655)"
          />
          <rect width="126.11" height="2" x="270.87" y="664.6" transform="rotate(-30.1 334 665.6)"
          />
          <rect width="126.11" height="2" x="270.88" y="675.18" transform="rotate(-30.1 334 676.2)"
          />
          <rect width="126.11" height="2" x="270.88" y="685.75" transform="rotate(-30.1 334 686.7)"
          />
          <rect width="126.11" height="2" x="270.88" y="696.33" transform="rotate(-30.1 334 697.3)"
          />
          <rect width="126.11" height="2" x="270.88" y="706.92" transform="rotate(-30.1 334 708)"
          />
          <rect width="126.11" height="2" x="270.87" y="717.49" transform="rotate(-30.1 334 718.5)"
          />
          <rect width="126.11" height="2" x="270.87" y="728.07" transform="rotate(-30.1 334 729)"
          />
          <rect width="126.11" height="2" x="270.88" y="738.65" transform="rotate(-30.1 334 739.7)"
          />
          <rect width="126.11" height="2" x="270.88" y="749.22" transform="rotate(-30.1 334 750.2)"
          />
        </g>
        <g fill="#33bdc7" clipPath="url(#clip-path-35)">
          <rect width="2" height="126.11" x="308.29" y="306.37" transform="rotate(-59.9 309.3 369.4)"
          />
          <rect width="2" height="126.11" x="308.29" y="316.95" transform="rotate(-59.9 309.3 380)"
          />
          <rect width="2" height="126.11" x="308.29" y="327.53" transform="rotate(-59.9 309.3 390.6)"
          />
          <rect width="2" height="126.11" x="308.29" y="338.12" transform="rotate(-59.9 309.3 401.2)"
          />
          <rect width="2" height="126.11" x="308.29" y="348.69" transform="rotate(-59.9 309.3 411.7)"
          />
          <rect width="2" height="126.11" x="308.29" y="359.27" transform="rotate(-59.9 309.3 422.3)"
          />
          <rect width="2" height="126.11" x="308.29" y="369.85" transform="rotate(-59.9 309.3 432.9)"
          />
          <rect width="2" height="126.11" x="308.29" y="380.43" transform="rotate(-59.9 309.3 443.5)"
          />
          <rect width="2" height="126.11" x="308.29" y="391" transform="rotate(-59.9 309.3 454)"
          />
          <rect width="2" height="126.11" x="308.29" y="401.59" transform="rotate(-59.9 309.3 464.6)"
          />
          <rect width="2" height="126.11" x="308.29" y="412.17" transform="rotate(-59.9 309.3 475.2)"
          />
          <rect width="2" height="126.11" x="308.29" y="422.75" transform="rotate(-59.9 309.3 485.8)"
          />
          <rect width="2" height="126.11" x="308.29" y="433.32" transform="rotate(-59.9 309.3 496.4)"
          />
          <rect width="2" height="126.11" x="308.28" y="443.9" transform="rotate(-59.9 309.3 507)"
          />
          <rect width="2" height="126.11" x="308.29" y="454.48" transform="rotate(-59.9 309.3 517.5)"
          />
          <rect width="2" height="126.11" x="308.29" y="465.06" transform="rotate(-59.9 309.3 528.1)"
          />
          <rect width="2" height="126.11" x="308.29" y="475.64" transform="rotate(-59.9 309.3 538.7)"
          />
          <rect width="2" height="126.11" x="308.29" y="486.22" transform="rotate(-59.9 309.3 549.3)"
          />
          <rect width="2" height="126.11" x="308.29" y="496.8" transform="rotate(-59.9 309.3 559.9)"
          />
          <rect width="2" height="126.11" x="308.29" y="507.37" transform="rotate(-59.9 309.3 570.4)"
          />
          <rect width="2" height="126.11" x="308.29" y="517.97" transform="rotate(-59.9 309.3 581)"
          />
          <rect width="2" height="126.11" x="308.28" y="528.53" transform="rotate(-59.9 309.3 591.6)"
          />
          <rect width="2" height="126.11" x="308.28" y="539.12" transform="rotate(-59.9 309.3 602.2)"
          />
          <rect width="2" height="126.11" x="308.29" y="549.7" transform="rotate(-59.9 309.3 612.8)"
          />
          <rect width="2" height="126.11" x="308.29" y="560.28" transform="rotate(-59.9 309.3 623.3)"
          />
          <rect width="2" height="126.11" x="308.29" y="570.85" transform="rotate(-59.9 309.3 634)"
          />
          <rect width="2" height="126.11" x="308.29" y="581.44" transform="rotate(-59.9 309.3 644.5)"
          />
          <rect width="2" height="126.11" x="308.29" y="592.02" transform="rotate(-59.9 309.3 655)"
          />
          <rect width="2" height="126.11" x="308.28" y="602.6" transform="rotate(-59.9 309.3 665.6)"
          />
          <rect width="2" height="126.11" x="308.28" y="613.17" transform="rotate(-59.9 309.3 676.2)"
          />
          <rect width="2" height="126.11" x="308.28" y="623.75" transform="rotate(-59.9 309.3 686.8)"
          />
          <rect width="2" height="126.11" x="308.29" y="634.33" transform="rotate(-59.9 309.3 697.4)"
          />
          <rect width="2" height="126.11" x="308.28" y="644.91" transform="rotate(-59.9 309.3 708)"
          />
          <rect width="2" height="126.11" x="308.28" y="655.5" transform="rotate(-59.9 309.3 718.6)"
          />
          <rect width="2" height="126.11" x="308.28" y="666.07" transform="rotate(-59.9 309.3 729.1)"
          />
          <rect width="2" height="126.11" x="308.28" y="676.65" transform="rotate(-59.9 309.3 739.7)"
          />
          <rect width="2" height="126.11" x="308.27" y="687.22" transform="rotate(-59.9 309.3 750.3)"
          />
        </g>
        <path fill="#f8f4f9" d="M467.7 1079.6l-103.9-.2 113-65-273.9-157.6 26-45L512.5 975a45.4 45.4 0 0 1 0 78.7z"
        />
        <polygon fill="#f8f4f9" points="1310.33 1080 1197.51 1080 1845.91 713.7 1871.48 758.98 1310.33 1080"
        />
        <g id="car4" ref={car4}>
          <polygon fill="#576daf" points="1554.22 772.9 1565.13 766.21 1554.59 764.9 1554.22 772.9"
          />
          <polygon fill="#576daf" points="1600.68 799.77 1611.59 793.07 1601.05 791.76 1600.68 799.77"
          />
          <path fill="#00adb9" d="M1568.3 787l4.2-2.3c1.4-.8 2.3-2.4 2.3-4.8a16.4 16.4 0 0 0-7.5-13c-2-1.1-4-1.2-5.3-.4l-4.4 2.5z"
          />
          <path fill="#42145f" d="M1563 769.5a16.4 16.4 0 0 1 7.4 12.9c0 4.7-3.3 6.6-7.5 4.2a16.4 16.4 0 0 1-7.4-12.9c0-4.7 3.4-6.6 7.5-4.2z"
          />
          <path fill="#f5f3f7" d="M1566.3 785a4.1 4.1 0 0 1-2-.6 13.8 13.8 0 0 1-6.3-10.7c0-2.3 1-2.7 1.6-2.7a4.2 4.2 0 0 1 2.1.7 13.8 13.8 0 0 1 6.2 10.7c0 2.3-1 2.7-1.6 2.7z"
          />
          <path fill="#788abf" d="M1664.8 795.3v-8.4s-1.1-7.5-13-20.6l-18-20.7a41 41 0 0 0-9.6-8.2l-20-10.4a15.2 15.2 0 0 0-14.7.4l-29 17 74.3 71z"
          />
          <path fill="#576daf" d="M1663.8 784a14.7 14.7 0 0 1 1 3v8.3l-30 20.2-7-6.8z"
          />
          <path fill="#fff" d="M1640.8 799.8l-4.6 3.2c-3.3-.6-9-2.6-10.7-5.6l-3.2-5.6s13.6.6 18.5 8z"
          />
          <path fill="url(#linear-gradient-s-9)" d="M1599.1 762.9l32-20.2a1280.8 1280.8 0 0 0 20.8 23.6l-36.7 23.6s-11.3-27.5-16-27z"
          />
          <path fill="#00adb9" d="M1614.8 813.5l4.2-2.4c1.4-.7 2.2-2.4 2.3-4.8a16.4 16.4 0 0 0-7.5-12.9c-2-1.2-4-1.3-5.3-.5l-4.4 2.5z"
          />
          <path fill="#42145f" d="M1609.5 796a16.4 16.4 0 0 1 7.4 12.8c0 4.7-3.4 6.6-7.5 4.3a16.4 16.4 0 0 1-7.4-13c0-4.6 3.3-6.6 7.5-4.2z"
          />
          <path fill="#f5f3f7" d="M1612.8 811.5a4.2 4.2 0 0 1-2.1-.6 13.8 13.8 0 0 1-6.2-10.7c0-2.4 1-2.7 1.6-2.7a4.2 4.2 0 0 1 2.1.6 13.8 13.8 0 0 1 6.2 10.7c0 2.4-1 2.7-1.6 2.7z"
          />
          <path fill="#00adb9" d="M1597.5 758.6c10.4 6.3 28 33.6 35.2 47.7a19.1 19.1 0 0 1 2 9.1 11.1 11.1 0 0 1-8.7-1l-7.8-4.5a9.4 9.4 0 0 0 0-1 17.6 17.6 0 0 0-8-14 8.2 8.2 0 0 0-4-1.3c-3.2 0-5.3 2.5-5.5 6.2l-29-16.7v-.7a17.6 17.6 0 0 0-8.1-14 8 8 0 0 0-4-1.2c-3 0-5.1 2.3-5.4 5.8l-2.7-1.5v-17.9l5.8-6.6a12.5 12.5 0 0 1 15.5-2.8c5.3 3 13.3 7.5 24.7 14.4z"
          />
          <path fill="url(#linear-gradient-s-10)" d="M1571.8 746c6.8 3.6 15 8.4 24.7 14.2a79.2 79.2 0 0 1 18.2 20.4l5 7.4-63.6-36.7 2.7-3a10.6 10.6 0 0 1 13-2.4z"
          />
          <path fill="#fff" d="M1661.1 785.8s-4.5-5-5.6-15.5a50.7 50.7 0 0 1 8.4 13.8z"
          />
          <rect width="1" height="19.37" x="1590.25" y="756.35" fill="#00adb9" />
          <rect width="1" height="19.51" x="1566.45" y="742.73" fill="#00adb9" />
        </g>
        <g id="car5" ref={car5}>
          <polygon fill="#576daf" points="209.92 844.48 220.83 837.78 210.29 836.47 209.92 844.48"
          />
          <polygon fill="#576daf" points="256.38 871.34 267.29 864.64 256.75 863.33 256.38 871.34"
          />
          <path fill="#00adb9" d="M224 858.6l4.1-2.3c1.4-.8 2.3-2.5 2.3-4.9a16.4 16.4 0 0 0-7.4-12.9c-2-1.2-4-1.3-5.3-.5l-4.4 2.6z"
          />
          <path fill="#42145f" d="M218.7 841a16.4 16.4 0 0 1 7.4 12.9c0 4.7-3.3 6.6-7.5 4.3a16.4 16.4 0 0 1-7.4-13c0-4.6 3.4-6.5 7.5-4.2z"
          />
          <path fill="#f5f3f7" d="M222 856.7a4.1 4.1 0 0 1-2-.7 13.8 13.8 0 0 1-6.2-10.7c0-2.4 1-2.7 1.6-2.7a4.2 4.2 0 0 1 2 .7 13.8 13.8 0 0 1 6.2 10.6c0 2.4-1 2.8-1.6 2.8z"
          />
          <path fill="#788abf" d="M320.5 866.9v-8.4s-1.1-7.5-13-20.6l-18-20.8a40.5 40.5 0 0 0-9.6-8.2l-20-10.3a15.2 15.2 0 0 0-14.7.4l-29 16.9 74.3 71.1z"
          />
          <path fill="#576daf" d="M319.5 855.6a14.7 14.7 0 0 1 1 3v8.3l-30 20.1-7-6.8z"
          />
          <path fill="#fff" d="M296.5 871.4l-4.6 3.1c-3.3-.5-9-2.5-10.7-5.5l-3.2-5.7s13.6.7 18.5 8z"
          />
          <path fill="url(#linear-gradient-s-11)" d="M254.8 834.5l32-20.2a1327 1327 0 0 0 20.8 23.6l-36.7 23.6s-11.3-27.5-16-27z"
          />
          <path fill="#00adb9" d="M270.5 885.1l4.2-2.4c1.4-.8 2.2-2.4 2.2-4.8a16.4 16.4 0 0 0-7.4-12.9c-2-1.2-4-1.3-5.3-.5l-4.4 2.5z"
          />
          <path fill="#42145f" d="M265.2 867.5a16.4 16.4 0 0 1 7.4 12.9c0 4.7-3.4 6.6-7.5 4.2a16.4 16.4 0 0 1-7.4-12.8c0-4.8 3.4-6.7 7.5-4.3z"
          />
          <path fill="#f5f3f7" d="M268.5 883.1a4.1 4.1 0 0 1-2.1-.7 13.8 13.8 0 0 1-6.2-10.6c0-2.4 1-2.8 1.6-2.8a4.1 4.1 0 0 1 2 .7 13.8 13.8 0 0 1 6.3 10.7c0 2.4-1 2.7-1.6 2.7z"
          />
          <path fill="#00adb9" d="M253.2 830.1c10.4 6.3 28 33.7 35.2 47.8a19 19 0 0 1 2 9.1 11 11 0 0 1-8.7-1l-7.8-4.5a9.4 9.4 0 0 0 0-1.1 17.6 17.6 0 0 0-8-14 8 8 0 0 0-4-1.2c-3.2 0-5.3 2.5-5.5 6.2l-29-16.8v-.6a17.6 17.6 0 0 0-8.1-14 8 8 0 0 0-4-1.2c-3 0-5.1 2.3-5.4 5.8l-2.6-1.6v-17.8l5.7-6.6a12.5 12.5 0 0 1 15.5-2.8c5.3 3 13.3 7.5 24.7 14.3z"
          />
          <path fill="url(#linear-gradient-s-12)" d="M227.6 817.5c6.7 3.7 15 8.5 24.6 14.3a79.2 79.2 0 0 1 18.2 20.4l5 7.3-63.6-36.6 2.7-3a10.6 10.6 0 0 1 13.1-2.4z"
          />
          <path fill="#fff" d="M316.8 857.4s-4.5-5-5.7-15.5a50.5 50.5 0 0 1 8.4 13.7z"
          />
          <rect width="1" height="19.37" x="245.94" y="827.92" fill="#00adb9" />
          <rect width="1" height="19.51" x="222.15" y="814.3" fill="#00adb9" />
        </g>
        <g id="plane" ref={plane}>
          <polygon fill="#f5f3f7" points="1582.86 249.47 1595.63 231.94 1599.63 229.47 1590.29 243.5 1582.86 249.47"
          />
          <polygon fill="#f5f3f7" points="1546.59 160.32 1538.48 126.11 1542.43 123.13 1567.25 152.33 1546.59 160.32"
          />
          <path fill="#f8dea3" d="M1446.4 220a5.4 5.4 0 0 1-2.7-.9 12.3 12.3 0 0 1-5.5-9.6 3.7 3.7 0 0 1 6-3.5 12.2 12.2 0 0 1 5.6 9.7 4.2 4.2 0 0 1-1.8 3.8 3.1 3.1 0 0 1-1.6.4zm-4.8-13.8a2.2 2.2 0 0 0-1.1.3 3.2 3.2 0 0 0-1.3 3 11.1 11.1 0 0 0 5 8.8 3.3 3.3 0 0 0 3.3.4 3.3 3.3 0 0 0 1.3-3 11.2 11.2 0 0 0-5-8.8 4.5 4.5 0 0 0-2.2-.7z"
          />
          <polygon fill="#f5f3f7" points="1425.59 215.19 1440.11 206.16 1447.94 218.96 1433.55 227.91 1425.59 215.19"
          />
          <path fill="#576daf" d="M1429.6 215.4a11.7 11.7 0 0 1 5.3 9.2c0 3.4-2.4 4.8-5.3 3a11.8 11.8 0 0 1-5.3-9.2c0-3.3 2.4-4.7 5.3-3z"
          />
          <path fill="#f5f3f7" d="M1492 237.8a11.7 11.7 0 0 1 5.3 9.2c0 3.4-2.4 4.8-5.3 3a11.7 11.7 0 0 1-5.3-9.2c0-3.3 2.4-4.7 5.3-3z"
          />
          <polygon fill="#f5f3f7" points="1474.31 246.06 1488.13 237.54 1495.96 250.34 1481.57 259.29 1474.31 246.06"
          />
          <path fill="#fff" d="M1379.5 270.9a3.2 3.2 0 0 0 1.4 3.1c3 2 12 4.4 35.7-8 31.8-16.7 96.3-55.7 110.8-64.2s24.3-21 31.7-29.3 13.2-15.6 13.2-15.6v-6.3s-26.5 9-40.3 16.6-89.3 51.5-116.5 67c-24.2 13.8-35 30.3-36 36.7z"
          />
          <path fill="#f5f3f7" d="M1419.8 244c-2.8-1.6-9-4.6-11.1-5.5-19.4 12.8-28.3 26.6-29.2 32.4a3.2 3.2 0 0 0 1.4 3.2c3 2 12 4.3 35.7-8.1l7.6-4.1c0-14.2-1.1-16-4.4-17.9z"
          />
          <path fill="#d7d0dd" d="M1527.4 191c-14.4 8.6-79 47.4-110.8 64-20.6 10.9-26.8 16.4-34.1 9a21.1 21.1 0 0 0-3 6.9 3.2 3.2 0 0 0 1.4 3.1c3 2 12 4.4 35.7-8 31.7-16.7 96.3-55.7 110.8-64.2s24.3-21 31.7-29.3 13.1-15.6 13.1-15.6v-2s-11.5 15.8-44.8 36z"
          />
          <path fill="#576daf" d="M1417.9 255.4a.1.1 0 0 1 .1.1v2.3a.4.4 0 0 1-.1.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1421.9 253a.1.1 0 0 1 .1 0V255.5a.4.4 0 0 1-.1.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1426 250.7l.1.1v2.3a.4.4 0 0 1-.2.3l-1 .5h-.2v-2.3a.4.4 0 0 1 .2-.3zM1430 248.3l.2.1v2.3a.3.3 0 0 1-.2.3l-1 .5h-.2v-2.3a.4.4 0 0 1 .2-.3zM1434 246l.2.1v2.3a.3.3 0 0 1-.2.2l-1 .6h-.2v-2.3a.4.4 0 0 1 .2-.3zM1438 243.6l.2.1v2.3a.3.3 0 0 1-.2.3l-1 .6a.1.1 0 0 1-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1442 241.2a.1.1 0 0 1 .2.1v2.3a.3.3 0 0 1-.2.3l-1 .5a.1.1 0 0 1-.2 0V242a.4.4 0 0 1 .2-.3zM1446 238.9a.1.1 0 0 1 .2 0v2.3a.3.3 0 0 1-.1.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1450.1 236.5a.1.1 0 0 1 .2 0v2.3a.4.4 0 0 1-.2.3l-1 .6-.2-.1v-2.2a.4.4 0 0 1 .2-.3zM1454.1 234.1l.2.1v2.3a.4.4 0 0 1-.2.3l-1 .5h-.1V235a.4.4 0 0 1 .1-.3zM1458.2 231.8c0-.1.1 0 .1 0v2.3a.4.4 0 0 1-.1.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1462.2 229.4h.2v2.3a.4.4 0 0 1-.2.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.2zM1466.2 227l.2.1v2.3a.4.4 0 0 1-.2.2l-1 .6a.1.1 0 0 1-.2 0v-2.3a.3.3 0 0 1 .2-.3zM1470.3 224.6l.1.1v2.3a.4.4 0 0 1-.2.3l-1 .6a.1.1 0 0 1-.1-.1v-2.3a.3.3 0 0 1 .1-.3zM1474.3 222.3a.1.1 0 0 1 .2 0v2.3a.4.4 0 0 1-.2.3l-1 .6a.1.1 0 0 1-.2-.1V223a.3.3 0 0 1 .2-.3zM1478.3 219.9a.1.1 0 0 1 .2.1v2.3a.4.4 0 0 1-.2.2l-1 .6a.1.1 0 0 1-.2 0v-2.3a.4.4 0 0 1 .2-.3zM1482.3 217.5a.1.1 0 0 1 .2.1v2.3a.4.4 0 0 1-.2.3l-1 .5a.1.1 0 0 1-.1 0v-2.3a.4.4 0 0 1 .2-.3zM1486.4 215.2h.1v2.3a.4.4 0 0 1-.1.3l-1 .6a.1.1 0 0 1-.2 0V216a.4.4 0 0 1 .2-.3zM1490.4 212.8h.2v2.3a.4.4 0 0 1-.2.3l-1 .6a.1.1 0 0 1-.2 0v-2.3a.4.4 0 0 1 .2-.3zM1494.4 210.4l.2.1v2.3a.4.4 0 0 1-.2.3l-1 .5a.1.1 0 0 1-.1 0v-2.3a.4.4 0 0 1 .1-.3zM1498.5 208a.1.1 0 0 1 .1.2v2.2a.4.4 0 0 1-.1.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1503 203.7c.3-.1.5 0 .5.2v5.5l-2.6 1.5c-.2.1-.4 0-.4-.2v-5a.9.9 0 0 1 .4-.7zM1506.5 203.3l.2.1v2.3a.4.4 0 0 1-.2.3l-1 .5h-.2v-2.3a.4.4 0 0 1 .2-.3zM1510.5 201c.1-.1.2 0 .2 0v2.3a.4.4 0 0 1-.2.3l-1 .6-.1-.1v-2.3a.4.4 0 0 1 .1-.3zM1514.6 198.6a.1.1 0 0 1 .1 0v2.3a.4.4 0 0 1-.1.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1518.6 196.2a.1.1 0 0 1 .2.1v2.3a.4.4 0 0 1-.2.3l-1 .5h-.2V197a.4.4 0 0 1 .2-.3zM1522.6 193.8a.1.1 0 0 1 .2 0v2.4a.4.4 0 0 1-.2.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3zM1526.7 191.5h.1v2.3a.4.4 0 0 1-.1.3l-1 .6-.2-.1v-2.3a.4.4 0 0 1 .2-.3z"
          />
          <path fill="#fff" d="M1526.8 175.5s14.1-12 22.1-27.4 19.9-38.9 19.9-38.9l7.8-4-9.6 48.2z"
          />
          <path fill="#fff" d="M1526.8 175.5s14.1-12 22.1-27.4 19.9-38.9 19.9-38.9l7.8-4-9.6 48.2z"
          />
          <polygon fill="#f5f3f7" points="1572.25 156.93 1613.54 164.1 1609.73 167.15 1562.64 168.47 1572.25 156.93"
          />
          <polygon fill="#fff" points="1456.78 243.5 1582.86 249.47 1590.29 243.5 1493.99 221.67 1456.78 243.5"
          />
          <polygon fill="#fff" points="1439.87 220.19 1411.36 150.58 1420.31 146.57 1468.82 203.49 1439.87 220.19"
          />
          <polygon fill="#f5f3f7" points="1419.55 125.8 1423.17 124.09 1420.31 146.57 1411.36 150.58 1419.55 125.8"
          />
          <path fill="#576daf" d="M1477.6 246.8a11.7 11.7 0 0 1 5.3 9.2c0 3.4-2.4 4.7-5.3 3a11.8 11.8 0 0 1-5.3-9.2c0-3.3 2.4-4.7 5.3-3zM1402.3 262.5a18.7 18.7 0 0 1-8.7 1.8 7.3 7.3 0 0 1-7.3-5.9l2.5-3s0 4.9 5.5 4.9 8-1.9 8-1.9z"
          />
        </g>
      </g>
    </svg>
  );
}

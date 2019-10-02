import React, { useEffect, useState, useRef } from 'react';
import { TimelineMax, Linear } from 'gsap';

export default function ClockSVG() {

  const minuteHand = useRef(null);
  const hourHand = useRef(null);

  useEffect(() => {
    // on mount
    const watchMinuteTL = new TimelineMax({ repeat: -1 });
    watchMinuteTL
      .to(hourHand.current, 4, { ease: Linear.easeNone, rotation: 360, transformOrigin: '87% 107%' }, 0);

    const watchHourTL = new TimelineMax({ repeat: -1 });
    watchHourTL
      .to(minuteHand.current, 30, { ease: Linear.easeNone, rotation: 360, transformOrigin: '0% 0%' }, 0);
  },[])




  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
viewBox="0 0 273.55 406.61">
    <defs>
        <linearGradient id="linear-gradient" x1="125.83" x2="274.19" y1="262.51"
        y2="-19.09" gradientTransform="matrix(1 0 0 -1 0 408)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f5f3f7" />
            <stop offset="1" stopColor="#714f87" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="104.85" x2="664.47" y1="200.27"
        y2="80.28" gradientTransform="matrix(.5 .86 .86 -.5 -75.2 166.9)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
            <stop offset="1" stopColor="#42145f" stopOpacity="0.75" />
        </linearGradient>
    </defs>
    <g id="Layer_4" data-name="Layer 4">
        <polygon fill="#fff" points="216.58 0 272.84 32.71 56.27 157.75 0 125.04 216.58 0"
        />
        <polygon fill="url(#linear-gradient)" points="272.84 32.71 273.55 281.57 56.97 406.61 56.27 157.75 272.84 32.71"
        />
        <path fill="#516cb4" d="M139.8 322.2c-28.7 0-47.3-23-47.4-58.5 0-23.4 7.7-49.8 22-74.4s33.2-44.6 53.5-56.4a72.5 72.5 0 0 1 36-10.9c28.7 0 47.3 23 47.4 58.5 0 23.4-7.7 49.8-22 74.5s-33.2 44.6-53.5 56.3a72.4 72.4 0 0 1-36 10.9z"
        />
        <ellipse cx="171.88" cy="222.1" fill="#fff" rx="101.56" ry="58.83" transform="rotate(-59.8 171.9 222.1)"
        />
        <ellipse cx="171.88" cy="222.1" fill="url(#linear-gradient-2)" rx="101.56"
        ry="58.83" transform="rotate(-59.8 171.9 222.1)" />
        <path fill="#06b3bb" d="M215.6 131.1c15.7 6.2 25.6 23.2 25.7 48.5.1 45.7-32 101.4-71.8 124.4-16.5 9.5-31.8 12-44 8.2 12.6 5 28.8 3 46.6-7.3 39.8-23 72-78.7 71.8-124.4 0-26.7-11.1-44.1-28.3-49.4z"
        />
        <polygon fill="#06b3bb" points="173.03 284.19 173.06 297.12 171.13 298.24 171.09 285.31 173.03 284.19"
        />
        <g fill="#06b3bb">
            <polygon points="200.12 259.58 205.78 267.54 204.11 269.61 198.45 261.66 200.12 259.58"
            />
            <polygon points="203.74 137.61 205.42 137.76 199.82 152.21 198.14 152.06 203.74 137.61"
            />
            <polygon points="172.64 145.99 172.67 158.92 170.73 160.04 170.7 147.1 172.64 145.99"
            />
            <polygon points="237.64 183.02 237.65 185.26 226.39 191.76 226.38 189.53 237.64 183.02"
            />
            <polygon points="143.94 292.02 145.62 292.16 140.02 306.61 138.34 306.47 143.94 292.02"
            />
            <polygon points="124.28 280 125.25 281.37 115.52 293.46 114.54 292.09 124.28 280"
            />
            <polygon points="117.37 252.47 117.38 254.7 106.12 261.2 106.11 258.96 117.37 252.47"
            />
            <polygon points="115.3 215.96 125.07 216.8 124.1 219.3 114.33 218.46 115.3 215.96"
            />
            <polygon points="139.65 174.61 145.31 182.56 143.63 184.65 137.97 176.7 139.65 174.61"
            />
        </g>
        <polygon fill="#06b3bb" points="228.24 150.76 229.21 152.13 219.49 164.23 218.51 162.86 228.24 150.76"
        />
        <polygon fill="#06b3bb" points="219.66 224.93 229.42 225.77 228.46 228.26 218.69 227.42 219.66 224.93"
        />
        <line id="minuteHand" ref={minuteHand} x1="171.68" x2="201.78" y1="222.11" y2="242.58" fill="none"
        stroke="#42145f" strokeMiterlimit="10" strokeWidth="2" />
        <line id="hourHand" ref={hourHand} x1="171.78" x2="171.78" y1="216.52" y2="168.44"
        fill="none" stroke="#42145f" strokeMiterlimit="10" strokeWidth="2" />
        <path fill="#06b3bb" d="M167 225.7a2.7 2.7 0 0 1-1.2-2.5 8.5 8.5 0 0 1 3.8-6.7 2.8 2.8 0 0 1 2.8-.3l2.2 1.2-5.3 9.6z"
        />
        <ellipse cx="171.88" cy="222.1" fill="#516cb4" rx="5.5" ry="3.18" transform="rotate(-59.8 171.9 222.1)"
        />
        <polygon fill="#f5f3f7" points="56.97 406.61 0.71 373.9 0 125.04 56.27 157.75 56.97 406.61"
        />
        <path fill="#06b3bb" d="M86.4 120.4L81 109.8 64.5 111 48 109.8l-5.4 10.6c-2.3 4.5-.4 9.6 5.8 13.2 9 5.2 23.5 5.2 32.4 0 6-3.6 8-8.7 5.6-13.2z"
        />
        <path fill="#516cb4" d="M86.4 120.4L81 109.8 64.5 111v26.5a33 33 0 0 0 16.2-3.9c6.2-3.5 8-8.6 5.7-13.2z"
        />
        <path fill="#2bbec5" d="M76.6 105.5c6.8 4 6.8 10.2.1 14.1s-17.6 4-24.3 0-6.8-10.1-.1-14 17.6-4 24.3 0z"
        />
        <path fill="#06b3bb" d="M230 38l-5.4-10.5-16.5 1.2-16.5-1.2-5.4 10.6c-2.3 4.5-.4 9.6 5.8 13.2 9 5.1 23.4 5.1 32.4 0 6.1-3.6 8-8.7 5.6-13.2z"
        />
        <path fill="#516cb4" d="M230 38l-5.4-10.5-16.5 1.1v26.5a32.8 32.8 0 0 0 16.3-3.8c6.1-3.6 8-8.7 5.6-13.2z"
        />
        <path fill="#2bbec5" d="M220.2 23.2c6.8 4 6.8 10.2.1 14.1s-17.6 3.9-24.3 0-6.8-10.2 0-14 17.5-4 24.2 0z"
        />
    </g>
</svg>
  )
}
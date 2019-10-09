import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax, Linear } from 'gsap';


export default function PocketWatchSVG() {
  const minuteHand = useRef(null);
  const hourHand = useRef(null);

  useEffect(() => {
    const watchMinuteTL = new TimelineMax({ repeat: -1 });
    watchMinuteTL
      .to(hourHand.current, 4, { ease: Linear.easeNone, rotation: 360, transformOrigin: '87% 107%' }, 0);

    const watchHourTL = new TimelineMax({ repeat: -1 });
    watchHourTL
      .to(minuteHand.current, 30, { ease: Linear.easeNone, rotation: 360 }, 0);
  }, []);


  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 242.2 366.6" width="242.2" height="366.6"
    data-name="Layer 1">
        <defs>
            <linearGradient id="linear-gradient" x1="44.6" x2="799.5" y1="155.8" y2="-6.1"
            gradientTransform="matrix(.5 .86 .86 -.5 -50.7 183.4)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
                <stop offset="1" stopColor="#42145f" stopOpacity="0.8" />
            </linearGradient>
        </defs>
        <g id="Layer_4" data-name="Layer 4">
            <path fill="#06b3bb" d="M214.4 108l-34.1-20.6a60.4 60.4 0 0 0-29.8-7.4c-15.4 0-31.8 5-48.6 14.7-27.5 15.8-53.2 42.8-72.3 76S-.1 239.7 0 271.2c0 32.5 11.7 57.3 31.3 69.8l30.2 18 80.8-132.6-29.8 109c27.5-15.8 53.1-42.9 72.3-76s29.7-68.9 29.6-100.4c0-14.9-2.5-28.1-7-39.3z"
            />
            <path fill="#38c2c9" d="M180.3 87.4a60.4 60.4 0 0 0-29.8-7.4c-15.4 0-31.8 5-48.6 14.7a192 192 0 0 0-55.8 51l28 16.5 133.9-41-.6-1.6 7-11.5z"
            />
            <path fill="#516cb4" d="M91.8 366.6c-38.7 0-63.8-31-64-78.8 0-31.6 10.5-67.3 29.6-100.5s44.9-60.2 72.3-76a98 98 0 0 1 48.7-14.6c38.6 0 63.7 31 63.8 78.8.1 31.6-10.4 67.3-29.5 100.5s-44.9 60.2-72.3 76a98 98 0 0 1-48.6 14.6z"
            />
            <ellipse cx="135.1" cy="231.6" fill="#fff" rx="137" ry="79.3" transform="rotate(-59.8 135 231.6)"
            />
            <ellipse cx="135.1" cy="231.6" fill="url(#linear-gradient)" rx="137" ry="79.3"
            transform="rotate(-59.8 135 231.6)" />
            <path fill="#06b3bb" d="M194 108.9c21.1 8.3 34.5 31.2 34.6 65.4.2 61.6-43.2 136.8-96.8 167.8-22.3 12.8-42.9 16-59.3 11 17 6.7 38.9 4 62.8-9.8 53.7-31 97-106.1 96.9-167.8 0-36-15-59.5-38.2-66.6z"
            />
            <polygon fill="#06b3bb" points="136.6 315.4 136.7 332.8 134 334.3 134 316.9 136.6 315.4"
            />
            <g fill="#06b3bb">
                <polygon points="173.2 282.2 180.8 292.9 178.5 295.7 170.9 285 173.2 282.2"
                />
                <polygon points="178 117.7 180.3 117.8 172.7 137.3 170.5 137.1 178 117.7"
                />
                <polygon points="136.1 128.9 136.1 146.4 133.5 147.9 133.5 130.4 136.1 128.9"
                />
                <polygon points="223.8 178.9 223.8 181.9 208.6 190.7 208.6 187.7 223.8 178.9"
                />
                <polygon points="97.4 325.9 99.6 326.1 92.1 345.6 89.8 345.4 97.4 325.9"
                />
                <polygon points="70.8 309.7 72.2 311.6 59 327.9 57.7 326 70.8 309.7" />
                <polygon points="61.5 272.6 61.5 275.6 46.4 284.4 46.4 281.3 61.5 272.6"
                />
                <polygon points="58.7 223.3 71.9 224.5 70.6 227.8 57.4 226.7 58.7 223.3"
                />
                <polygon points="91.6 167.6 99.2 178.3 97 181.1 89.3 170.4 91.6 167.6"
                />
            </g>
            <polygon fill="#06b3bb" points="211.1 135.4 212.4 137.2 199.3 153.6 197.9 151.7 211.1 135.4"
            />
            <polygon fill="#06b3bb" points="199.5 235.4 212.7 236.6 211.4 239.9 198.2 238.8 199.5 235.4"
            />
            <line id="minuteHand" ref={minuteHand} x1="134.8" x2="175.4" y1="231.6" y2="259.2" fill="none"
            stroke="#42145f" strokeMiterlimit="10" strokeWidth="2" />
            <line id="hourHand" ref={hourHand} x1="134.9" x2="134.9" y1="224.1" y2="159.2" fill="none"
            stroke="#42145f" strokeMiterlimit="10" strokeWidth="2" />
            <path fill="#06b3bb" d="M128.4 236.5a3.7 3.7 0 0 1-1.6-3.4 11.5 11.5 0 0 1 5.3-9 3.7 3.7 0 0 1 3.7-.4l3 1.5-7.2 13z"
            />
            <ellipse cx="135.1" cy="231.6" fill="#516cb4" rx="7.4" ry="4.3" transform="rotate(-59.8 135 231.6)"
            />
            <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"
            d="M166.2 27.7c0 23-16.1 51-36.2 62.5" />
            <path fill="#516cb4" d="M144.3 94c0 2.4-1.5 4.7-4.6 6.5a24.8 24.8 0 0 1-22.5 0c-3.1-1.8-4.7-4.1-4.7-6.5V78h31.8z"
            />
            <path fill="#06b3bb" d="M130 78.1h-17.5V94c0 2.4 1.6 4.7 4.7 6.5a23.7 23.7 0 0 0 12.7 2.7z"
            />
            <path fill="#38c2c9" d="M139.6 71.6c6.3 3.6 6.3 9.5.1 13s-16.3 3.6-22.5 0-6.3-9.4 0-13 16.2-3.6 22.4 0z"
            />
            <path fill="#516cb4" d="M140.2 75.7c0 1.7-1.1 3.5-3.4 4.8-4.6 2.7-12 2.7-16.7 0-2.3-1.3-3.5-3-3.5-4.8V63.9h23.6z"
            />
            <path fill="#06b3bb" d="M129.5 63.9h-12.9v11.8c0 1.7 1.2 3.5 3.5 4.8a17.6 17.6 0 0 0 9.4 2z"
            />
            <path fill="#38c2c9" d="M136.7 59c4.7 2.7 4.7 7 .1 9.7s-12 2.7-16.7 0-4.7-7 0-9.7 12-2.6 16.6 0z"
            />
            <circle cx="128.4" cy="50.8" r="15" fill="#06b3bb" />
            <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"
            d="M119.8 94.5c-15 3.6-26-6-26.1-25 0-23 16-51 36.1-62.5s36.3-2.3 36.4 20.7"
            />
        </g>
    </svg>
  );
}

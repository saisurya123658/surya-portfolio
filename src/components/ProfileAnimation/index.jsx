import React from 'react';
import { Div } from './profileanimationstyle';
const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(301)">
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(301)">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(301)">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="paint3_linear" x1="294.685" y1="193.474" x2="268.932" y2="219.258"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear" x1="476.171" y1="362.952" x2="450.417" y2="337.168"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint5_linear" x1="381.81" y1="154.669" x2="356.057" y2="128.885"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint6_linear" x1="333.667" y1="382.335" x2="359.42" y2="356.551"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint7_linear" x1="165.182" y1="94.3159" x2="139.429" y2="120.1"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>

      {/* Animated elements */}
      {[0, 1].map((i) => (
        <React.Fragment key={`a1_${i}`}>
          <ellipse cx="295.027" cy="193.118" rx="1.07306" ry="1.07433" fill="#945DD6">
            <animateMotion dur="10s" begin={`${i}s`} repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_2" />
            </animateMotion>
          </ellipse>
          <path
            d="M294.685 193.474L268.932 219.258"
            stroke="url(#paint3_linear)"
          >
            <animateMotion dur="10s" begin={`${i}s`} repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_2" />
            </animateMotion>
          </path>
        </React.Fragment>
      ))}

      <ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" fill="#13ADC7">
        <animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>

      {/* Add more animated ellipses and paths as needed */}
    </svg>
  </Div>
);

export default HeroBgAnimation;


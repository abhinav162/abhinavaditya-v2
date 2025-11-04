import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Hexagon outline */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
          fill="none"
        />
        {/* Minimal AA monogram */}
        <g
          transform="translate(39, 45)"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none">
          {/* First A */}
          <path d="M -18 15 L -10 -10 L -2 15" />
          <line x1="-16" y1="5" x2="-4" y2="5" />

          {/* Second A */}
          <path d="M 2 15 L 10 -10 L 18 15" />
          <line x1="4" y1="5" x2="16" y2="5" />
        </g>
      </g>
    </g>
  </svg>
);

export default IconLogo;

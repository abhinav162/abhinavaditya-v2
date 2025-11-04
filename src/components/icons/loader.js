import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Minimal AA monogram */}
      <g
        transform="translate(50, 50)"
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
      {/* Hexagon outline */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;

import React from 'react'

const TwitterIcon = ({color}) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M6.36364 0H0L7.50987 9.91305L0.409045 17.9999H2.81816L8.62573 11.3859L13.6364 18H20L12.1743 7.67007L18.9092 0H16.5001L11.0585 6.1972L6.36364 0ZM14.5455 16.2L3.63636 1.8H5.45455L16.3636 16.2H14.5455Z"
        fill={color}
      />
    </svg>
  );
}

export default TwitterIcon
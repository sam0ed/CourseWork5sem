/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Githublogo2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`githublogo-2 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_31_242)">
        <path
          className="path"
          d="M26.5775 9.39628C26.865 8.37174 26.9442 7.29998 26.8104 6.24431C26.6767 5.18865 26.3327 4.1705 25.7987 3.25003C25.6671 3.02205 25.4778 2.83272 25.2498 2.70107C25.0219 2.56942 24.7633 2.50008 24.5 2.50003C23.2995 2.49665 22.1137 2.76474 21.0314 3.28425C19.9491 3.80375 18.9983 4.56123 18.25 5.50003H15.75C15.0017 4.56123 14.0509 3.80375 12.9686 3.28425C11.8863 2.76474 10.7005 2.49665 9.5 2.50003C9.23674 2.50008 8.97814 2.56942 8.75016 2.70107C8.52219 2.83272 8.33288 3.02205 8.20125 3.25003C7.66734 4.1705 7.32334 5.18865 7.18959 6.24431C7.05583 7.29998 7.13503 8.37174 7.4225 9.39628C6.82461 10.5039 6.50784 11.7414 6.5 13V14C6.50235 15.6788 7.06696 17.3085 8.10373 18.6289C9.1405 19.9494 10.5897 20.8845 12.22 21.285C11.7472 22.1117 11.499 23.0477 11.5 24V24.5H9.5C8.83696 24.5 8.20107 24.2366 7.73223 23.7678C7.26339 23.299 7 22.6631 7 22C6.99835 20.5418 6.41835 19.1439 5.38726 18.1128C4.35617 17.0817 2.95818 16.5017 1.5 16.5C1.10218 16.5 0.720644 16.6581 0.43934 16.9394C0.158035 17.2207 0 17.6022 0 18C0 18.3979 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5C2.16304 19.5 2.79893 19.7634 3.26777 20.2323C3.73661 20.7011 4 21.337 4 22C4.00165 23.4582 4.58165 24.8562 5.61274 25.8873C6.64383 26.9184 8.04182 27.4984 9.5 27.5H11.5V29C11.5 29.3979 11.658 29.7794 11.9393 30.0607C12.2206 30.342 12.6022 30.5 13 30.5C13.3978 30.5 13.7794 30.342 14.0607 30.0607C14.342 29.7794 14.5 29.3979 14.5 29V24C14.5 23.337 14.7634 22.7011 15.2322 22.2323C15.7011 21.7634 16.337 21.5 17 21.5C17.663 21.5 18.2989 21.7634 18.7678 22.2323C19.2366 22.7011 19.5 23.337 19.5 24V29C19.5 29.3979 19.658 29.7794 19.9393 30.0607C20.2206 30.342 20.6022 30.5 21 30.5C21.3978 30.5 21.7794 30.342 22.0607 30.0607C22.342 29.7794 22.5 29.3979 22.5 29V24C22.501 23.0477 22.2528 22.1117 21.78 21.285C23.4103 20.8845 24.8595 19.9494 25.8963 18.6289C26.933 17.3085 27.4976 15.6788 27.5 14V13C27.4922 11.7414 27.1754 10.5039 26.5775 9.39628ZM24.5 14C24.5 15.1935 24.0259 16.3381 23.182 17.182C22.3381 18.0259 21.1935 18.5 20 18.5H14C12.8065 18.5 11.6619 18.0259 10.818 17.182C9.97411 16.3381 9.5 15.1935 9.5 14V13C9.51282 12.1062 9.77848 11.2342 10.2662 10.485C10.4217 10.2837 10.5218 10.0452 10.5564 9.79323C10.5911 9.54125 10.5591 9.28458 10.4637 9.04878C10.0335 7.93688 10.0157 6.70763 10.4137 5.58378C11.0874 5.70788 11.7282 5.96951 12.2962 6.35234C12.8642 6.73516 13.3472 7.23096 13.715 7.80878C13.8506 8.02061 14.0373 8.19494 14.2579 8.31573C14.4785 8.43652 14.726 8.4999 14.9775 8.50003H19.0212C19.273 8.50011 19.5207 8.43683 19.7415 8.31603C19.9624 8.19523 20.1493 8.02079 20.285 7.80878C20.6527 7.23081 21.1356 6.7349 21.7036 6.35205C22.2716 5.96921 22.9125 5.70767 23.5863 5.58378C23.9843 6.70763 23.9665 7.93688 23.5362 9.04878C23.4447 9.28635 23.4152 9.5433 23.4504 9.79545C23.4856 10.0476 23.5844 10.2866 23.7375 10.49C24.2232 11.2381 24.4875 12.1082 24.5 13V14Z"
          fill="black"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_31_242">
          <rect className="rect" fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

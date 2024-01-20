/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Hourglass2 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`hourglass-2 ${className}`}
      fill="none"
      height="38"
      viewBox="0 0 38 38"
      width="38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M30.2812 11.2278V5.9375C30.2813 5.15014 29.9685 4.39503 29.4117 3.83828C28.855 3.28153 28.0999 2.96875 27.3125 2.96875H10.6875C9.90014 2.96875 9.14503 3.28153 8.58828 3.83828C8.03153 4.39503 7.71875 5.15014 7.71875 5.9375V11.2812C7.7199 11.7419 7.8277 12.1961 8.03373 12.6081C8.23975 13.0202 8.53839 13.3789 8.90625 13.6562L16.0312 19L8.90625 24.3438C8.53839 24.6211 8.23975 24.9798 8.03373 25.3919C7.8277 25.8039 7.7199 26.2581 7.71875 26.7188V32.0625C7.71875 32.8499 8.03153 33.605 8.58828 34.1617C9.14503 34.7185 9.90014 35.0312 10.6875 35.0312H27.3125C28.0999 35.0312 28.855 34.7185 29.4117 34.1617C29.9685 33.605 30.2812 32.8499 30.2812 32.0625V26.7722C30.2808 26.3123 30.1742 25.8587 29.9698 25.4468C29.7654 25.0349 29.4686 24.6757 29.1027 24.3972L21.9539 19L29.1027 13.5969C29.4678 13.319 29.7641 12.9608 29.9685 12.5499C30.1729 12.1391 30.2799 11.6867 30.2812 11.2278ZM26.7188 31.4688H11.2812V27.0156L19 21.2266L26.7188 27.0646V31.4688ZM26.7188 10.9324L19 16.7734L11.2812 10.9844V6.53125H26.7188V10.9324Z"
        fill={color}
      />
    </svg>
  );
};

Hourglass2.propTypes = {
  color: PropTypes.string,
};

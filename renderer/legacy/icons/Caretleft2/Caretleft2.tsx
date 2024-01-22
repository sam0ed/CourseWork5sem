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

export const Caretleft2 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`caretleft-2 ${className}`}
      fill="none"
      height="38"
      viewBox="0 0 38 38"
      width="38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M25.0102 29.6148C25.3449 29.9494 25.5329 30.4033 25.5329 30.8765C25.5329 31.3497 25.3449 31.8036 25.0102 32.1382C24.6756 32.4729 24.2218 32.6608 23.7485 32.6608C23.2753 32.6608 22.8214 32.4729 22.4868 32.1382L10.6118 20.2632C10.4457 20.0977 10.314 19.9011 10.2241 19.6846C10.1342 19.4681 10.0879 19.2359 10.0879 19.0015C10.0879 18.7671 10.1342 18.5349 10.2241 18.3184C10.314 18.1019 10.4457 17.9053 10.6118 17.7398L22.4868 5.86478C22.8214 5.53016 23.2753 5.34216 23.7485 5.34216C24.2218 5.34216 24.6756 5.53016 25.0102 5.86478C25.3449 6.19941 25.5329 6.65327 25.5329 7.1265C25.5329 7.59974 25.3449 8.05359 25.0102 8.38822L14.3984 19L25.0102 29.6148Z"
        fill={color}
      />
    </svg>
  );
};

Caretleft2.propTypes = {
  color: PropTypes.string,
};

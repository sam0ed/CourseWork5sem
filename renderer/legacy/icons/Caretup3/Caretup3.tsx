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

export const Caretup3 = ({ color = "#AECBFA", className }: Props): JSX.Element => {
  return (
    <svg
      className={`caretup-3 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M27.0613 21.0613C26.9219 21.2011 26.7563 21.3121 26.574 21.3878C26.3917 21.4635 26.1962 21.5025 25.9988 21.5025C25.8013 21.5025 25.6059 21.4635 25.4235 21.3878C25.2412 21.3121 25.0756 21.2011 24.9363 21.0613L16 12.125L7.06126 21.0613C6.77946 21.3431 6.39727 21.5014 5.99876 21.5014C5.60024 21.5014 5.21805 21.3431 4.93626 21.0613C4.65446 20.7795 4.49615 20.3973 4.49615 19.9988C4.49615 19.6003 4.65446 19.2181 4.93626 18.9363L14.9363 8.9363C15.0756 8.79646 15.2412 8.6855 15.4235 8.6098C15.6059 8.53409 15.8013 8.49512 15.9988 8.49512C16.1962 8.49512 16.3917 8.53409 16.574 8.6098C16.7563 8.6855 16.9219 8.79646 17.0613 8.9363L27.0613 18.9363C27.2011 19.0757 27.3121 19.2412 27.3878 19.4236C27.4635 19.6059 27.5024 19.8014 27.5024 19.9988C27.5024 20.1962 27.4635 20.3917 27.3878 20.574C27.3121 20.7564 27.2011 20.9219 27.0613 21.0613Z"
        fill={color}
      />
    </svg>
  );
};

Caretup3.propTypes = {
  color: PropTypes.string,
};

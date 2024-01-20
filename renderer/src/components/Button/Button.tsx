/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Caretup3 } from "../../icons/Caretup3";
import "./style.css";

interface Props {
  text: string | undefined;
  showButtonText: boolean | undefined;
  type: "hover" | "default";
  className: any;
  icon: JSX.Element;
}

export const Button = ({
  text = "Button",
  showButtonText = true,
  type,
  className,
  icon = <Caretup3 className="caret-up" color="#AECBFA" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "default",
  });

  return (
    <button
      className={`button ${state.type} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {true && <div className="text-wrapper">{text}</div>}

      {<>{icon}</>}
    </button>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        type: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        type: "default",
      };
  }

  return state;
}

Button.propTypes = {
  text: PropTypes.string,
  showButtonText: PropTypes.bool,
  showCaretup: PropTypes.bool,
  type: PropTypes.oneOf(["hover", "default"]),
};

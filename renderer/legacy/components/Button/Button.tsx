"use client"
import PropTypes from "prop-types";
import React, { MouseEventHandler } from "react";
import { useReducer } from "react";
import { Caretup3 } from "../../icons/Caretup3";
import "./style.css";

interface Props {
  text: string | undefined;
  showButtonText: boolean | undefined;
  type: "hover" | "default";
  className: any;
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  hoverable?: boolean | undefined;
}

export const Button = ({
  text = "Button",
  showButtonText = true,
  type,
  className,
  icon = <Caretup3 className="caret-up" color="#AECBFA" />,
  onClick,
  hoverable = true,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "default",
  });

  return (
    <button
      className={`button ${hoverable ? state.type : ''} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={onClick}
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

import PropTypes from "prop-types";
import React, { MouseEventHandler } from "react";
// import Link from "";
import { useReducer } from "react";
import { Caretup3 } from "../../icons/Caretup3";
// import "./style.css";
import { link } from "fs";
// import { Url } from "next/dist/shared/lib/router/router";

interface Props {
  text: string | undefined;
  showButtonText: boolean | undefined;
  type: "hover" | "default";
  className: any;
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  // link?: Url;
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
  // link = "/",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "default",
  });

  return (
    <button
      // href={link}
      className={`button ${hoverable ? state.type : ''} ${className}`}
      style={{ cursor: "pointer" }}
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

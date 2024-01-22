import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Caretleft2 } from "../icons/Caretleft2";
import { Caretup3 } from "../icons/Caretup3";
import { Githublogo1 } from "../icons/Githublogo1";
import { Hourglass2 } from "../icons/Hourglass2";
import { Sealquestion1 } from "../icons/Sealquestion1";
import { Sparkle2 } from "../icons/Sparkle2";
import { Button } from "./Button";
// import { usePathname, useRouter } from 'next/navigation'

// import "./style.css";

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesomeIcon>['name'];
//   color: string;
// }) {
//   return <FontAwesomeIcon icon={"function"} size= "xs" style={{ marginBottom: -3 }} {...props} />;
// }

interface Props {
  buttonIcon?: JSX.Element;
  override?: JSX.Element;
  buttonIcon1?: JSX.Element;
  buttonIcon2?: JSX.Element;
  buttonIcon3?: JSX.Element;
  buttonIcon4?: JSX.Element;
}

export const Sidebar = ({
  buttonIcon = <Caretleft2 className="icon-instance-node" color="#AECBFA" />,
  override = <Sparkle2 className="icon-instance-node" color="#AECBFA" />,
  buttonIcon1 = <Sealquestion1 className="icon-instance-node" />,
  buttonIcon2 = <Githublogo1 className="icon-instance-node" />,
  buttonIcon3 = <Hourglass2 className="icon-instance-node" color="#AECBFA" />,
  buttonIcon4 = <Caretup3 className="icon-instance-node" color="#AECBFA" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: "collapsed",
  });

  // const router = useRouter();
  // const pathname = usePathname();

  return (
    <div
      className={`sidebar ${state.type}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <Button
        className={`${state.type === "collapsed" ? "closed" : "open"}`}
        icon={buttonIcon}
        showButtonText={state.type === "collapsed" ? false : undefined}
        text="Header"
        type="default"
        hoverable={false}
      />
      <Button
        className={`${state.type === "collapsed" ? "closed" : "open"}`}
        icon={override}
        showButtonText={state.type === "collapsed" ? false : undefined}
        text="Generate"
        type="default"
        link={"/"}
      />
      <Button
        className={`${state.type === "collapsed" ? "closed" : "open"}`}
        icon={buttonIcon1}
        showButtonText={state.type === "collapsed" ? false : undefined}
        text="Guide"
        type="default"
        link={"/guide"}
      />
      <Button
        className={`${state.type === "collapsed" ? "closed" : "open"}`}
        icon={buttonIcon2}
        showButtonText={state.type === "collapsed" ? false : undefined}
        text="Creator"
        type="default"
        link={"/creator"}
      />
      <Button
        className={`${state.type === "collapsed" ? "closed" : "open"}`}
        icon={buttonIcon3}
        showButtonText={state.type === "collapsed" ? false : undefined}
        text="Coming soon"
        type="default"
        link={"/coming-soon"}
      />
      <Button
        className={`bottom ${state.type === "collapsed" ? "closed" : "open"}`}
        icon={buttonIcon4}
        showButtonText={state.type === "collapsed" ? false : undefined}
        text="License"
        type="default"
        link={"/license"}
      />
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        type: "collapsed",
      };

    case "mouse_enter":
      return {
        ...state,
        type: "default",
      };
  }

  return state;
}

Sidebar.propTypes = {
  type: PropTypes.oneOf(["collapsed", "default"]),
};

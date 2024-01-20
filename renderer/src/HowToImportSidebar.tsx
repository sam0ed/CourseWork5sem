import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Caretleft2 } from "./icons/Caretleft2";
import { Caretup3 } from "./icons/Caretup3";
import { Githublogo1 } from "./icons/Githublogo1";
import { Hourglass2 } from "./icons/Hourglass2";
import { Sealquestion1 } from "./icons/Sealquestion1";
import { Sparkle2 } from "./icons/Sparkle2";
import "./style.css";

export const TypeDefault = (): JSX.Element => {
  return (
    <Sidebar
      buttonIcon={<Caretleft2 className="icon-instance-node-2" color="#AECBFA" />}
      buttonIcon1={<Sealquestion1 className="icon-instance-node-2" />}
      buttonIcon2={<Githublogo1 className="icon-instance-node-2" />}
      buttonIcon3={<Hourglass2 className="icon-instance-node-2" color="#AECBFA" />}
      buttonIcon4={<Caretup3 className="icon-instance-node-2" color="#AECBFA" />}
      override={<Sparkle2 className="icon-instance-node-2" color="#AECBFA" />}
      type="default"
    />
  );
};

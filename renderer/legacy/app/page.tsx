import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Caretleft2 } from "../icons/Caretleft2";
import { Caretup3 } from "../icons/Caretup3";
import { Githublogo1 } from "../icons/Githublogo1";
import { Hourglass2 } from "../icons/Hourglass2";
import { Sealquestion1 } from "../icons/Sealquestion1";
import { Sparkle2 } from "../icons/Sparkle2";
// import "./style.css";
import Crossword from "../components/Crossword/Crossword";

export default function MainPage() {
  console.log(process.versions.node)
  return (
    <Crossword />
  );
};

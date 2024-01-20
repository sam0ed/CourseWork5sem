import React from "react";
import ReactDOMClient from "react-dom/client";
import { TypeDefault } from "./screens/TypeDefault";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TypeDefault />);
